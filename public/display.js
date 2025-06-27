let me = io.connect();


//finding the div in the html



let clientResponse = document.querySelector(".clientResponse");
// let item4 = document.querySelector(".item4");
// clientResponse.innerHTML = localStorage.getItem("savedMessage");

//get "messageYell" in from server, give it the function clientResponse, then console.log the words got new message, console.log the actual client response then change the innerhtml to client response

// me.on("messageYell", function (promptResponse) {
//   console.log("gotNewMessage");
//   console.log(promptResponse);
//   localStorage.setItem('savedMessage',promptResponse)
//   item4.classList.add("message-class");
//   clientResponse.innerHTML = promptResponse;
// });

// });




me.on("initialConnectStatusUpdate", function (arrayOfData) {
  console.log(arrayOfData)

  clientResponse.innerText  = ''
  for (let i = arrayOfData.length-1; i >= 0; i--) {
    clientResponse.innerHTML += '<div class= arrayInfo>' + arrayOfData[i] + '</div>'
    // clientResponse.innerHTML += `${arrayOfData[i]} </div>`
  
 
  }
 

});

  
me.on("messageYell", function (arrayOfData) {
  
  clientResponse.innerText  = ''
  for (let i = arrayOfData.length-1; i >= 0; i--) {
    clientResponse.innerHTML += '<div class= arrayInfo>' + arrayOfData[i] + '</div>'
    // clientResponse.innerHTML += `${arrayOfData[i]} </div>`
  
 
  }


});

//listen for array data and loop through the information in the server
