

/*

PSUEDOCODING

1. Wins start as 0
2. Loses start as 0
3. Guesses Left start as 9

4. User presses letter key to start the game. --> make all key input lowercase
   The key pressed is displayed in Your Guesses So Far:
5. Computer choice randomly from A~Z when the game is started
6. if user input === computer guess, win increase by one --> reset computer choice
7. else, guesses left decreases by 1 until it reaches -1. 
8. When guesses left reaches -1, it resets to 9 and Loses increase by 1. --> reset computer choice


*/

// Variables 
// =======================================================================

var winCounter = 0;
var lossCounter = 0;
var guessCounter = 9;

// Array of the alphabets that computer can guess from
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


// Randomly chooses from 
var computerChoice = letters[Math.floor(Math.random() * letters.length)];
console.log(computerChoice);



// Functions
// =======================================================================

document.onkeyup = function(event) {
  var userInput = event.key;
  var lowerCase = userInput.toLocaleLowerCase(); 

  // Display userinput in Your Guesses So Far.

  if(lowerCase === computerChoice) {
    winCounter++;
    // Reset computerChoice
    // Reset guessCounter
  } else {
    guessCounter--;
  }

  if (guessCounter < 0) {
    lossCounter++;
    // Reset computerChoice
    // Reset guessCounter
  }


  document.getElementById("wins").innerHTML = "Wins: " + winCounter;
  document.getElementById("loses").innerHTML = "Loses: " + lossCounter;
  document.getElementById("guesses").innerHTML = "Guesses Left: " + guessCounter;
  
}

  

