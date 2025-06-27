const express = require("express"); // Add express and make it available to our server
const app = express(); // Call the function express, which starts express
const server = require("http").Server(app); // Attach our express app to the server on the HTTP protocol
const commsserver = require("socket.io")(server); // Connect Socket.io and our server together for real-time communication
const JSONdb = require("simple-json-db");
const db = new JSONdb("database.json");

app.use(express.static("public"));

const startResp = require("./backup-start");
console.log("Initial StartResp:", startResp);

// 🛠️ Ensure messageSave is always an array
let savedMessages = db.get("messageSave");

if (!Array.isArray(savedMessages)) {
    console.warn("⚠️ messageSave was not an array. Resetting it.");
    db.set("messageSave", []);
    savedMessages = [];
}

// 🔗 Handle socket connections
commsserver.on("connection", function (aperson) {
    console.log("🔗 New connection. Database dump:", db.get("messageSave"));

    // Ensure messageSave is always an array before sending
    let currentMessages = db.get("messageSave");
    if (!Array.isArray(currentMessages)) {
        console.warn("⚠️ messageSave was not an array. Resetting it.");
        currentMessages = [];
    }

    // Send the stored messages to the new client
    commsserver.emit("initialConnectStatusUpdate", currentMessages);

    // 🔄 Handle incoming messages
    aperson.on("newMessage", function (promptResponse) {
        let tempArray = db.get("messageSave");

        // Ensure messageSave is always an array
        if (!Array.isArray(tempArray)) {
            console.warn("⚠️ messageSave was corrupted. Resetting it.");
            tempArray = [];
        }

        // Store the new message
        tempArray.push(promptResponse.toString());
        db.set("messageSave", tempArray);

        console.log("💬 New message received:", promptResponse);

        // Emit updated messages to all clients
        commsserver.emit("messageYell", db.get("messageSave"));
    });
});

let port = process.env.PORT || 3000;

// Start the server and listen for incoming connections
server.listen(port, function () {
    console.log("🚀 Server is running on port: " + port);
});
