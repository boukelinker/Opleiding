var colors = ['yellow', 'blue', 'red', 'orange'];

//While loop
var w = 0;
while (w <= 3) {
    console.log(colors[w]);
    w++;
};

//For loop
for (i = 0; i < colors.length; i++) {
    console.log(colors[i]);
};

//Array method

colors.forEach(element => console.log(element));


/*  1.  for loop takes 3 lines
        while loop takes 5 lines
    2.  forEach takes 1 line
    3.  array method is easier to read, because it has one line and is very clear
    4.
     */

const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    age: 25,
    dob: '08/02/1989',
    active: true
};

Object.values(user).forEach(moi => console.log(moi));