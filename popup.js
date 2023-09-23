
const express = require("express");
const rl = require("readline-sync");
var { TextServiceClient } = require("@google-ai/generativelanguage").v1beta2;
var { GoogleAuth } = require("google-auth-library");

const MODEL_NAME = "models/text-bison-001";
var app = express();
app.use(express.urlencoded());
app.get('/',function(request, response, next){

  response.send(`
<div>
  <form method="POST" action="/"> 
  <label> First Name </label>
  <input type="text" name="first_name" id="first_ name"/>

  <input type="text" name="last_name" id="last_ name"/>
<br>
<input type="submit" id="submit_name" value="Submit"/>
  </form>
  </div>
  `);

})



const client = new TextServiceClient({
  authClient: new GoogleAuth().fromAPIKey("AIzaSyDHt49ArGg0gQZWevD3zNzOBQzKtcOTHmM"),
});

var inputtext = rl.question()
console.log(`Input: ${inputtext}`);


    const AIprompt = "If the sentence has non inclusive replace it with inclusive terminology. Only replace the non inclusive word. The sentence is: " + inputtext;


    client
      .generateText({
        model: MODEL_NAME,
        prompt: {
          text: AIprompt,
        },
      })
      .then((result) => {
        const generatedOutput = result[0]?.candidates[0]?.output;
        // outputText.textContent = generatedOutput;
                                console.log(`output: ${generatedOutput}`);
                                
                                app.get('/', function (req, res) {
                                res.send(generatedOutput);
                                });
                                app.listen(5000);
      })
      .catch((error) => {
        console.error("Error:", error);
        outputText.textContent = "An error occurred.";
      });


    








  

  //!Test
    


  
//     chromeExtension.sendMessage(extensionId, message);
    

//     processButton.addEventListener("click", async () => {

      



//     });

// // ! PALM API GITHUB VERSION
//     async function processWithPaLm() {
//       let bot = new PaLM(process.env.API_KEY,{fetch:fetch,});
//       bot.ask("In this sentence, If there is a non inclusive word replace it with inclusive terminology. Only replace the non inclusive word: " + , {
//         context: "You are an inclusive language helper",
//         temperature: 0.5,
//         format: PaLM.FORMATS.JSON
        
//         });
//         console.log(bot.response);
//         processedText = bot.response;
//         return processedText
//       }
  
//! POST DATA NODE.js TUTORIAL
    // const readline = require("readline-sync");

 

    

  
      //   app.post('/', function(request,response, next){
    
    //     response.send(request.body);

    //     });
        
    //     app.listen(2000);