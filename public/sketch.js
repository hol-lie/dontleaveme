let me = io.connect();


let myWords = [
  "Tell me a secret.",
  "Tell me more...",
  "Let's talk about you, tell me a secret.",
  "How much will you share with me?",
  "Tell me about your happiest day.",
  "Tell me about the last time you fell in love.",
  "What do you need to get off your chest",
  "Tell me more...",
  "Tell me a secret.",
  "Tell me about the last time you cried.",
  "Is there anything you should have said?",
  "Tell me about the last person who made you smile.",  
  "What are you struggling with right now.",
  "Tell me more...",
  "What else do you feel?",
  "What do you want to know?",
  "What don't you want to know?",
  "Tell me what you want to say?"
];

let clickforprompt = document.querySelector(".clickforprompt");
console.log(clickforprompt);

clickforprompt.addEventListener("click", function () {
  // anything that happens when you click on the prompt goes here
  let words = Math.floor(Math.random() * myWords.length);
  console.log(myWords[words]);
  //when you click on the button, change the contents of the html class "clickforprompt" to the random word generator myWords[words]
 clickforprompt.innerHTML = myWords[words];
});



document.getElementById("myBtn").addEventListener("click", function () {
  let msg = document.querySelector("#msg");
  console.log(msg.value);
  document.getElementById("myBtn").classList.add("btnanim");
  // var clean = DOMPurify.sanitize(msg.value);
  me.emit("newMessage", msg.value, "to all clients" );
  msg.value = "";
})

// require(['dompurify'], function(DOMPurify) {
//     var clean = DOMPurify.sanitize("#msg");
// });



document.getElementById("myBtn").addEventListener("animationend", function() {
       document.getElementById("myBtn").classList.remove("btnanim");
                                             
                                                  })





