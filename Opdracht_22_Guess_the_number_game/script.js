
// Returns a random integer from 1 to 25:
const randomNumber = Math.floor(Math.random() * 25) + 1;

var nameUser = prompt("Welcome! What is your name?",);
window.alert("Hey " + nameUser);

var userNumber = prompt("Enter a number between 0 and 25 to start guessing...",);

while (userNumber != randomNumber) {
    var userNumber = prompt("Enter a number between 0 and 25 to start guessing...",);
}
window.alert("Congratulations, you have won the game!")
window.alert("Bye " + nameUser + ", see you!")
window.alert("Try again?")
location.reload();

/* //BONUS
// Returns a random integer from 1 to 3:
const randomNumber = Math.floor(Math.random() * 3) + 1;

var nameUser = prompt("Welcome! What is your name?",);
window.alert("Hey " + nameUser + " randomnummber is: " + randomNumber);


var userNumber = prompt("Enter a number between 0 and 25 to start guessing...",);
var remainingGuesses = 4;

while (userNumber != randomNumber) {
    for (remainingGuesses = 4; remainingGuesses > 0; remainingGuesses--) {
        if (userNumber == randomNumber) {
            remainingGuesses = 0;
        } else {
            var userNumber = prompt("You have " + remainingGuesses + " remainingguesses left. Enter a number between 0 and 25 to start guessing...",);
        }
    }
}
if (userNumber != randomNumber) {
    window.alert("your have no more guesses")
    window.alert("Try again?")
    location.reload();
} else {
    window.alert("Congratulations, you have won the game!")
    window.alert("Bye " + nameUser + ", see you!")
    window.alert("Try again?")
    location.reload();
}
 */