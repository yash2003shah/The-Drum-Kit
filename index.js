// Detecting Button Press

let a = document.querySelectorAll(".drum").length;
for (let i = 0; i < a; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        handleEvents(this.innerHTML);
        buttonAnimation(this.innerHTML);

    });
}

// Detecting KeyBoard Press

document.addEventListener("keydown", function(event) {
    handleEvents(event.key);
    buttonAnimation(event.key);
})

function handleEvents(key) {
    switch (key) {
        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "r":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "u":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "m":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "i":
            var kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            break;
        case "t":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        default:
            console.log(this.innerHTML);
    }
}

function buttonAnimation(currentKey) {
    var currentButton = document.querySelector("." + currentKey);
    currentButton.classList.add("pressed");
    setTimeout(function() {
        currentButton.classList.remove("pressed", 250);
    })
}