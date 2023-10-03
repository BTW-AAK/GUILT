
var generateButton = document.querySelector('#generateButton');
var popupContainer = document.querySelector('#popup-container');
var outputContainer = document.querySelector('#output-container');
var ccButton = document.querySelector('#ccButton');
if (generateButton){

  
//   const { TextServiceClient } =
//   require("@google-ai/generativelanguage").v1beta2;
// const { GoogleAuth } = require("google-auth-library");
// const MODEL_NAME = "models/text-bison-001";

//   const client = new TextServiceClient({
//     authClient: new GoogleAuth().fromAPIKey("AIzaSyDHt49ArGg0gQZWevD3zNzOBQzKtcOTHmM"),
//   });


console.log(generateButton)

// chrome.tabs.query({active: true, currentWindow: true}  
generateButton.addEventListener('click', function(event) {
  var input = document.getElementById("inputTextBox").value;
  var tone = document.getElementById("toneselect").value;
  console.log(toneselect)
popupContainer.remove();
outputContainer.removeAttribute("hidden");

// const prompt = "Only if the sentences has non inclusive language replace it with inclusive terminology with the tone"+ tone +"Only replace the non inclusive word. Such as physically handicaped members. => differently abled members. The sentence is: " + input;

// client.generateText({
//     model: MODEL_NAME,
//     prompt: {
//       text: prompt,
//     },
//   })
//   .then(result => {
//   console.log(JSON.stringify(result, null, 2));
  document.getElementById("outputText").innerHTML = "loading..."
  // document.getElementById("outputText").innerHTML = JSON.stringify(result, null, 2);


  
// });


});
}


if (ccButton){
  ccButton.addEventListener('click', function(event) {
    let text = document.getElementById('outputText').innerHTML;
    navigator.clipboard.writeText(text);
    console.log('Content copied to clipboard');
  })}
