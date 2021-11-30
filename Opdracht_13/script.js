
/* const age = 20;
const firstName = "Bram"
const totalAmount = 25 */

/* const age = 30;
const firstName = "Sarah";
const totalAmount = 55; */

const age = 15;
const firstName = "Joost";
const totalAmount = 100;

if (age >= 18) {
    console.log("Welcome in the pub!")
} else {
    console.log("You're not old enough, please come back when you're old enough!")
}

if (age >= 18 && age <= 25) {
    console.log("You get 50% off!")
} else {
    console.log("No discount for you, my friend")
}

if (firstName == "Sarah" || firstName == "Bram") {
    console.log("You'll get a free beer!! Congrats!")
} else {
    console.log("You're name is beautifull too!")
}

if (totalAmount >= 100) {
    console.log("You get a free bottle of champagne!")
} else if (totalAmount > 50) {
    console.log("You get a free portion of nachos!")
} else if (totalAmount > 25) {
    console.log("You get free bitterballen!")
}