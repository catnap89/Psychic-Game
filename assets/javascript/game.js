

/*

PSUEDOCODING

1. Wins start as 0
2. Loses start as 0
3. Guesses Left start as 9

4. User presses letter key to start the game. --> make all key input lowercase
   The key pressed is displayed in Your Guesses So Far:
5. Computer guesses randomly from A~Z when the game is started
6. if user input === computer guess, win increase by one
7. else, guesses left decreases by 1 until it reaches -1.
8. When guesses left reaches -1, it resets to 9 and Loses increase by 1.


*/

// Variables 
var winCounter = 0;
var lossCounter = 0;
var guessCounter = 9;
var computerGuess = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//


