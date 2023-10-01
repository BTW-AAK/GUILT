const { TextServiceClient } = require("@google-ai/generativelanguage").v1beta2;
const { read } = require("fs");
const { GoogleAuth } = require("google-auth-library");
// const readline = require('readline');
const MODEL_NAME = "models/text-bison-001";

const client = new TextServiceClient({
  authClient: new GoogleAuth().fromAPIKey("AIzaSyDHt49ArGg0gQZWevD3zNzOBQzKtcOTHmM"),
});
// var input = prompt("Please enter your phrase");
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
console.log("Please enter your phrase...")
var tone = "Formal";
readline.question('', input => {

const prompt = "Only if the sentences has non inclusive language replace it with inclusive terminology with the tone"+ tone +"Only replace the non inclusive word. Such as physically handicaped members. => differently abled members. The sentence is: " + input;

client
  .generateText({
    model: MODEL_NAME,
    prompt: {
      text: prompt,
    },
  })
  .then((result) => {
    console.log(result[0]?.candidates[0]?.output);
    finaltext = result[0]?.candidates[0]?.output;
  });
  readline.close();
});