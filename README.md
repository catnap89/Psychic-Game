# Psychic-Game

### Overview

**Psychic-Game** is a word guessing game that the app randomly picks a letter and the user has to guess which letter the app chose.

### How To Play

* When the app (website) is opened or refreshed, the app randomly picks a letter from A - Z.
* User presses letter key to guess what the app chosen letter is.
* The user starts the game with the following counters:
  * Wins: 0
  * Losses: 0
  * Guesses Left: 9
  * Your Guesses So Far: (This is empty until user make guesses.)
* When the player wins (The user successfully guesses the random letter the app picked), *increase* the **Wins** counter by 1.
* When the player loses (The user guess does not match the letter the app picked), *decrease* the**Guesses Left** counter by 1.
* When the **Guesses Left** counter decreases below 0, *increase* the **Losses** counter by 1.
* Either when the player wins or losses by spending all 9 guesses, the following happens:
  * The app picks a new random letter from A - Z.
  * Guesses Left counter is reset to have 9 guesses.
* The player countinue to guess the random letter.




