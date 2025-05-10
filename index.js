var randomNumber1= Math.floor(Math.random()*6)+1;

var randomDiceImage = "side" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


//Second-Dice
var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomDiceImage2 = "side" + randomNumber2 + ".png";

var randomImageSource2 = "images/" + randomDiceImage2;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

//Outcomes
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 wins! 🏆🎉"

} else if(randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 wins! 🏆🎉"

} else{
  document.querySelector("h1").innerHTML = "👍Draw👍"
}