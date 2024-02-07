//This is the JavaScript user input code - I ask your name, you type your name, it should respond with welcome + "your name"
//let userInput = prompt("Please enter your name: ");
//let welcomeTitle = document.querySelector(".welcome")
//welcomeTitle.textContent = `Welcome, ${userInput}!`

//function showWelcome() {
    //var name = prompt("Enter your name:");
    //if (name) {
     // var welcomeMessage = "Welcome, " + name + "!";
      //alert(welcomeMessage);
      //document.getElementById("personalizedWelcome").textContent = welcomeMessage;
    //}
  //}


// Variable storing user's answer  
//let userInput = prompt("Please enter your name: ");

// Query selector to find my welcome page
//let welcomeTitle = document.querySelector(".personalizedWelcome")

// Assign that the following: `Welcome, ${userInput}!`
//welcomeTitle.textContent = `Welcome, ${userInput}!`

let userInput = prompt("Please enter your name: ");
if (userInput) {
    let welcomeMessage = `Welcome, ${userInput}!`;
    alert(welcomeMessage);
} else {
    alert("No name entered. Welcome anyway!");
}

