var randomNum1 = Math.floor(Math.random() * 6) + 1;

var randomNum2 = Math.floor(Math.random() * 6) + 1;


if (randomNum1 === 1) {
    document.querySelector(".img1").setAttribute("src", "./images/dice1.png");
} else if (randomNum1 === 2) {
    document.querySelector(".img1").setAttribute("src", "./images/dice2.png");
} else if (randomNum1 === 3) {
    document.querySelector(".img1").setAttribute("src", "./images/dice3.png");
} else if (randomNum1 === 4) {
    document.querySelector(".img1").setAttribute("src", "./images/dice4.png");
} else if (randomNum1 === 5) {
    document.querySelector(".img1").setAttribute("src", "./images/dice5.png");
} else {
    document.querySelector(".img1").setAttribute("src", "./images/dice6.png");
}

if (randomNum2 === 1) {
    document.querySelector(".img2").setAttribute("src", "./images/dice1.png");
} else if (randomNum2 === 2) {
    document.querySelector(".img2").setAttribute("src", "./images/dice2.png");
} else if (randomNum2 === 3) {
    document.querySelector(".img2").setAttribute("src", "./images/dice3.png");
} else if (randomNum2 === 4) {
    document.querySelector(".img2").setAttribute("src", "./images/dice4.png");
} else if (randomNum2 === 5) {
    document.querySelector(".img2").setAttribute("src", "./images/dice5.png");
} else {
    document.querySelector(".img2").setAttribute("src", "./images/dice6.png");
}

if (randomNum1 === randomNum2) {
    document.querySelector("h1").textContent = "Draw!";
} else if (randomNum1 > randomNum2) {
    document.querySelector("h1").textContent = "🚩Player 1 Wins!";
} else {
    document.querySelector("h1").textContent = "Player 2 Wins!🚩";
}