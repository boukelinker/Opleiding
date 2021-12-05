//function declaration
sum1 = function (num1, num2) {
    let first = num1 * num1;
    let second = num2 * num2;
    let third = first + second;
    const result = third * third;
    return result;
}

const resultsum1 = sum1(2, 2);
console.log(resultsum1);

//function expression
const sum2 = function (num1, num2) {
    const result = ((num1 * num1) + (num2 * num2)) *
        ((num1 * num1) + (num2 * num2));
    return result;
};

const resultsum2 = sum2(2, 2);
console.log(resultsum2);

//arrow function
const sum3 = (num1, num2) => {
    const result = ((num1 * num1) + (num2 * num2)) *
        ((num1 * num1) + (num2 * num2));
    return result;
};

const resultsum3 = sum3(2, 2);
console.log(resultsum3);