// Open the toggle menu
const toggleMenu = document.getElementById("toggleicon");
const dropdownMenu = document.getElementById("dropdownmenu")
const openCloseMenu = () => {
    console.log("the toggle icon has been clicked");
    dropdownMenu.classList.toggle("show");
}
toggleMenu.addEventListener("click", openCloseMenu);

//Const to add and remove class
const backgroundcolor = document.querySelector("body");
//Const to be calling an addEventListener
const blue = document.getElementById("blue-background");
const red = document.getElementById("red-background");
const green = document.getElementById("green-background");
const yellow = document.getElementById("yellow-background");
const standaard = document.getElementById("default-background");

//Change color functions and close toggle menu
const changeColorBlue = () => {
    console.log("blue is clicked");
    backgroundcolor.classList.add("blue-background");
    backgroundcolor.classList.remove("red-background", "green-background", "yellow-background");
    document.getElementById("blue-background-input").checked = true;
    document.getElementById("display-color-name").innerHTML = "Blauw";
    dropdownMenu.classList.remove("show");


};
const changeColorRed = () => {
    console.log("red is clicked");
    backgroundcolor.classList.add("red-background");
    backgroundcolor.classList.remove("blue-background", "green-background", "yellow-background");
    document.getElementById("red-background-input").checked = true;
    document.getElementById("display-color-name").innerHTML = "Rood";
    dropdownMenu.classList.remove("show");
};
const changeColorGreen = () => {
    console.log("green is clicked");
    backgroundcolor.classList.add("green-background");
    backgroundcolor.classList.remove("red-background", "blue-background", "yellow-background");
    document.getElementById("green-background-input").checked = true;
    document.getElementById("display-color-name").innerHTML = "Groen";
    dropdownMenu.classList.remove("show");
};
const changeColorYellow = () => {
    console.log("yellow is clicked");
    backgroundcolor.classList.add("yellow-background");
    backgroundcolor.classList.remove("red-background", "green-background", "blue-background");
    document.getElementById("yellow-background-input").checked = true;
    document.getElementById("display-color-name").innerHTML = "Geel";
    dropdownMenu.classList.remove("show");
};
const changeColorDefault = () => {
    console.log("default is clicked");
    backgroundcolor.classList.add("default-background");
    backgroundcolor.classList.remove("yellow-background", "red-background", "green-background", "blue-background");
    document.getElementById("default-background-input").checked = true;
    document.getElementById("display-color-name").innerHTML = "Grijs";
    dropdownMenu.classList.remove("show");
};
//Calling function via addEventListener
blue.addEventListener("click", changeColorBlue)
red.addEventListener("click", changeColorRed)
green.addEventListener("click", changeColorGreen)
yellow.addEventListener("click", changeColorYellow)
standaard.addEventListener("click", changeColorDefault)
