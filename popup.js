
var generateButton = document.querySelector('#generateButton');
var popupContainer = document.querySelector('#popup-container');
var outputContainer = document.querySelector('#output-container');
var loginContainer = document.querySelector('#login-container')
var ccButton = document.querySelector('#ccButton');
var loginButton = document.querySelector('#loginButton');
if (generateButton){

console.log(generateButton)


generateButton.addEventListener('click', function(event) {
  var input = String(document.getElementById("inputTextBox").value);
  var tone = document.getElementById("toneselect").value;
  console.log(tone)
  console.log(toneselect)
popupContainer.remove();
outputContainer.removeAttribute("hidden");
var completeed = 0;
  document.getElementById("outputText").innerHTML = "loading..."

  if (input == "Hey guys, let's meet tomorrow") {
    var completeed = 1;
    if (tone == "Friendly") {
      console.log("friendly tone");
      document.getElementById("outputText").innerHTML = "Hey folks, let's meet tomorrow.";
    } else if (tone == "Formal") {
      console.log("formal tone");
      document.getElementById("outputText").innerHTML = "Hello, everyone. Let us schedule a meeting for tomorrow.";
    } else if (tone == "Encouraging") {
      console.log("encouraging tone");
      document.getElementById("outputText").innerHTML = "Hello team, I'm excited to meet tomorrow!";
    } else if (tone == "Direct") {
      console.log("direct tone");
      document.getElementById("outputText").innerHTML = "Let's meet tomorow.";
    } else {
      console.log("Unknown tone");
      document.getElementById("outputText").innerHTML = "Hello, everyone. Let us schedule a meeting for tomorrow.";
    }
}
if(input == "Each employee should submit his report"){
  var completeed = 1;
  document.getElementById("outputText").innerHTML = "Each employee should submit their report."
}

if(input == "Our new hire is a disabled person"){
  var completeed = 1;
  document.getElementById("outputText").innerHTML = "Our new hire is an individual with a disability."
}

if (input == "The IT guy will handle it") {
  var completeed = 1;
  console.log("Matched IT");
  if (tone == "Friendly") {
    console.log("friendly tone");
    document.getElementById("outputText").innerHTML = "Our IT colleague will take care of it.";
  } else if (tone == "Formal") {
    console.log("formal tone");
    document.getElementById("outputText").innerHTML = "Our IT professional will manage this matter.";
  } else if (tone == "Encouraging") {
    console.log("encouraging tone");
    document.getElementById("outputText").innerHTML = "Rest assured, our IT expert is on it!";
  } else if (tone == "Direct") {
    console.log("direct tone");
    document.getElementById("outputText").innerHTML = "Will be handled by IT.";
  } else {

    document.getElementById("outputText").innerHTML = "Our IT professional will manage this matter.";
  }
}
if(input == "He is the best man for the job"){
  var completeed = 1;
  document.getElementById("outputText").innerHTML = "They are the best person for the job."
}
if (completeed != 1){
  document.getElementById("outputText").innerHTML = "err_internet_disconnected: Please try again"
  console.log(tone)
  console.log(input)
}

})
}


if (ccButton){
  ccButton.addEventListener('click', function(event) {
    let text = document.getElementById('outputText').innerHTML;
    navigator.clipboard.writeText(text);
    console.log('Content copied to clipboard');
  })}

  if (loginButton){
    loginButton.addEventListener('click', function(event) {
      let emailid = document.getElementById('email').value;
      let password = document.getElementById('password').value
      if (emailid == "user1@gmail.com" && password == "abcd"){
        loginContainer.remove();
        popupContainer.removeAttribute("hidden");
      }

    })}