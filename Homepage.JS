//This is the JavaScript user input code - I ask your name, you type your name, it should respond with welcome + "your name"
let userInput = prompt("Please enter your name: ");
let welcomeTitle = document.querySelector(".welcome")
welcomeTitle.textContent = `Welcome, ${userInput}!`

//function showWelcome() {
    //var name = prompt("Enter your name:");
    //if (name) {
      //var welcomeMessage = "Welcome, " + name + "!";
      //alert(welcomeMessage);
      //document.getElementById("personalizedWelcome").textContent = welcomeMessage;
    //}
  //}
  