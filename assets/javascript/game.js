

/*

PSUEDOCODING

1. Wins start as 0 (Done)
2. Loses start as 0 (Done)
3. Guesses Left start as 9 (Done)

4. User presses letter key to start the game. --> make all key input lowercase (Done)
   The key pressed is displayed in Your Guesses So Far: (Done)
5. Computer choice randomly from A~Z when the game is started (done)
6. if user input === computer guess, win increase by one --> reset computer choice (done)
7. else, guesses left decreases by 1 until it reaches -1. (done)
8. When guesses left reaches -1, it resets to 9 and Loses increase by 1. --> reset computer choice (done)
9. when the the win counter goes up or lose counter goes up, reset userinput paragraph (done)


*/

// Variables 
// =======================================================================

var winCounter = 0;
var lossCounter = 0;
var guessCounter = 9;

// Array of the alphabets that computer can guess from
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var guessArr = [];  // this array will be used to store the user inputs in userInput paragraph.

// Randomly chooses from letters variable
// Not sure why this variable alone is generating random letters without a function to run it?
var computerChoice = letters[Math.floor(Math.random() * letters.length)];
console.log(computerChoice);

// Functions
// =======================================================================

  document.onkeyup = function(event) {
    var userInput = event.key;
    var lowerCase = userInput.toLocaleLowerCase(); 
    guessArr.push(lowerCase);

    if (lowerCase === computerChoice) {

      winCounter++;
      resetGame();  // Resets computerChoice, guessCounter, and your guesses so far

    } else {

      guessCounter--;

    };

    if (guessCounter < 0) {

      lossCounter++;
      resetGame();

    };


    document.getElementById("wins").innerHTML = "Wins: " + winCounter;
    document.getElementById("loses").innerHTML = "Loses: " + lossCounter;
    document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + guessCounter;
    document.getElementById("userInput").innerHTML = "Your Guesses So Far: " + guessArr;
   
  };


  function resetGame() {
    guessCounter = 9;
    guessArr = [];

    computerChoice = letters[Math.floor(Math.random() * letters.length)];
    console.log(computerChoice);
  };

