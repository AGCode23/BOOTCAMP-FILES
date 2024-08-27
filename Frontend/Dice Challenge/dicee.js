var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var diceImage1 = "./images/dice" + randomNumber1 + ".png";
var diceImage2 = "./images/dice" + randomNumber2 + ".png";

// Logic for dice number 1
document.querySelector(".img1").setAttribute("src", diceImage1);

// Logic for dice number 2
document.querySelector(".img2").setAttribute("src", diceImage2);

// Decide the winner
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").textContent = "Player 2 Wins!";
} else {
  document.querySelector("h1").textContent = "Draw!";
}
