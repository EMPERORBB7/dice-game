//Dice 1

var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage1 = "dice" + randomNumber1 + ".png";

var randomImageName1 = "images/" + randomDiceImage1;

var image1 = document.querySelector(".img1");

image1.setAttribute("src", randomImageName1);

//Dice 2

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImageName2 = "images/" + randomDiceImage2;

var image2 = document.querySelector(".img2");

image2.setAttribute("src", randomImageName2);

//Win, Lose and Draw

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerText = "Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerText = "Player 2 Wins!";
} else {
  document.querySelector("h1").innerText = "Draw";
}
