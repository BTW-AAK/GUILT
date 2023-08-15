


const { TextServiceClient } = require("@google-ai/generativelanguage").v1beta2;
const { GoogleAuth } = require("google-auth-library");
const readline = require('readline');
const MODEL_NAME = "models/text-bison-001";

const client = new TextServiceClient({
  authClient: new GoogleAuth().fromAPIKey("AIzaSyDHt49ArGg0gQZWevD3zNzOBQzKtcOTHmM"),
});
var input;
const promptsync = require('prompt-sync')({sigint: true});

var input = prompt('What is your name?');

const prompt = "If the sentence has non inclusive replace it with inclusive terminology. Only replace the non inclusive word. If not sentence given dont answer. The sentence is: " + input;

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
