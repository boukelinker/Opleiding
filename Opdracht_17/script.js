/* // Deel 1 check if a number is bigger then 100
const biggerThenHundred = function (number) {
    if (number > 100) {
        return true;
    }
    else if (number <= 100) {
        return false;
    }
};

const result = biggerThenHundred(101);
console.log(result); //this function does someting

---
 */
// Deel 2 Brenda the 'AI" bouncer

function responseBrenda(maxPeople, currentPeople, age) {
    if (currentPeople < maxPeople) {
        //check age
        if (age <= 18) {
            return "this is a club for adults";
        };
        return "Come in!"
    };
    return "it's too busy now, comeback later"
};

const response = responseBrenda(200, 200, 20);
console.log(response); // this function does something

// Deel 3 Gemiddelde berekenen

const calculateAverage = function (number1, number2, number3, number4, number5) {
    const average = Math.round((number1 + number2 + number3 + number4 + number5) / 5);
    return average;
}
const answer = calculateAverage(10, 10, 20, 200, 3561);
console.log(answer); // this function produces something