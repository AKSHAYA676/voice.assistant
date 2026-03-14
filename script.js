function startListening(){

const recognition = new webkitSpeechRecognition();

recognition.lang = "en-US";

recognition.onresult = function(event){

let command = event.results[0][0].transcript;

document.getElementById("output").innerHTML =
"You said: " + command;

};

recognition.start();

}      