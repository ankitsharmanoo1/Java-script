const messageInput = document.getElementById("message-input");


function getMessage(){
// console.log(messageInput.value);
document.getElementById("message-output").innerHTML = messageInput.value;
messageInput.value = "" ;
}

messageInput.addEventListener("keydown",function (event) {

if(event.key == "Enter")
     getMessage();

})
