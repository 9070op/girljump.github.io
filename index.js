let song = new Audio("op.mp3.mp3");
song.play();


let container = document.querySelector(".container");
container.classList.add("block");

let btn = document.getElementById("btn");
btn.addEventListener("click", function() {
    btn.parentElement.remove();
    container.classList.add("hidden");
})

let fire = document.querySelector("#op2");
fire.classList.add("dancer");

let tr = document.querySelector(".track img");
tr.classList.add("tr");



document.onkeydown = function(e) {
    e.preventDefault();
    console.log(e.keyCode);
    let animation = document.querySelector("#op1");
    if (e.keyCode == 38) {
        animation.classList.add("succes");
        setTimeout(() => {
            animation.classList.remove("succes");
        }, 1000);
    }
}

container.addEventListener("click", function() {
    let animation = document.querySelector("#op1");
    animation.classList.add("succes");
    setTimeout(() => {
        animation.classList.remove("succes");
    }, 1000);
})

let score = 0;
let rete = setInterval(() => {

    let animations = document.querySelector("#op1");
    let dx = parseInt(window.getComputedStyle(animations, null).getPropertyValue("left"));
    let dy = parseInt(window.getComputedStyle(animations, null).getPropertyValue("top"));


    let fires = document.querySelector("#op2");
    let fx = parseInt(window.getComputedStyle(fires, null).getPropertyValue("left"));
    let fy = parseInt(window.getComputedStyle(fires, null).getPropertyValue("top"));

    let side = Math.abs(dx - fx);
    let high = Math.abs(dy - fy);
    if (side < 112 && high < 129) {
        console.log("you are worng");
        fire.classList.remove("dancer");
        tr.classList.remove("tr");
        animations.remove();
        song.pause();
        let score = document.querySelector(".score").innerHTML = `game over 😄`;
        clearInterval(rete);

    } else {
        console.log("you are pass");
        setTimeout(() => {
            score++;
        }, 1000);
        greet(score);

    }

    function greet(score) {
        let scoredb = document.querySelector(".scoredb").innerHTML = `your score =${score}`;
    }
}, 100);