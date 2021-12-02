
const paintingWall = function (locationWall, paintColor) {
    console.log("The " + locationWall + " wall has been painted " + paintColor)
};

paintingWall("north", "red");
paintingWall("south-east", "green");
/* paintingWall(); you'll get an undefined */


// Does it matter when calling the function --> Yes
// It changes the order you'll have to follow when calling the function
// Nothing, because both changed