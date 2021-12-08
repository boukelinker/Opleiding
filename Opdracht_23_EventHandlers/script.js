const alertMe = document.querySelector('button');

const windowAlert = () => {
    console.log("button clicked");
    window.alert("button clicked");
};

alertMe.addEventListener("click", windowAlert,);


const changeBackground = document.querySelector("body");
const changeBackgroundButton = document.querySelector("#chngbackgroundbutton")

const toggleColor = () => {
    changeBackground.classList.toggle("red-background");
};

changeBackgroundButton.addEventListener("click", toggleColor);