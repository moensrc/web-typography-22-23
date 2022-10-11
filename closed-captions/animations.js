var body = document.querySelector("body");
var bodySound4 = document.querySelector("body.sound4");
var bodySound6 = document.querySelector("body.sound6");
var bodySound8 = document.querySelector("body.sound8");

bodySound4.addEventListener("animationend", resetAnimation(), false)
bodySound6.addEventListener("animationend", resetAnimation(), false)

function resetAnimation() {
    body.style.animation = "none"
}

