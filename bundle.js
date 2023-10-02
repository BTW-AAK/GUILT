(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){


var generateButton = document.querySelector('#generateButton');
var popupContainer = document.querySelector('#popup-container');
var outputContainer = document.querySelector('#output-container');
var ccButton = document.querySelector('#ccButton');
if (generateButton){

  
  const { TextServiceClient } = ("@google-ai/generativelanguage").v1beta2;
  const { read } = ("fs");
  const { GoogleAuth } = ("google-auth-library");
  const MODEL_NAME = "models/text-bison-001";
  
  const client = new TextServiceClient({
    authClient: new GoogleAuth().fromAPIKey("AIzaSyDHt49ArGg0gQZWevD3zNzOBQzKtcOTHmM"),
  });


console.log(generateButton)

// chrome.tabs.query({active: true, currentWindow: true}  
generateButton.addEventListener('click', function(event) {
  var input = document.getElementById("inputTextBox").value;
  console.log(popupContainer)  
popupContainer.remove();
outputContainer.removeAttribute("hidden");

const prompt = "Only if the sentences has non inclusive language replace it with inclusive terminology with the tone"+ tone +"Only replace the non inclusive word. Such as physically handicaped members. => differently abled members. The sentence is: " + input;

client.generateText({
    model: MODEL_NAME,
    prompt: {
      text: prompt,
    },
  })
  .then(result => {
  console.log(JSON.stringify(result, null, 2));
  document.getElementById("outputText").innerHTML = "loading..."
  document.getElementById("outputText").innerHTML = JSON.stringify(result, null, 2);


  
});


});
}


if (ccButton){
  ccButton.addEventListener('click', function(event) {
    let text = document.getElementById('outputText').innerHTML;
    navigator.clipboard.writeText(text);
    console.log('Content copied to clipboard');
  })}

},{}]},{},[1]);
