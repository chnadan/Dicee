var randomNumber = Math.floor(Math.random()*6)+1;

var randomDiceImage = "dice" + randomNumber +".png";
var randomImageSource = "images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomImageSource1 ="images/dice" +randomNumber1 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource1);

if(randomNumber1 > randomNumber){
  document.querySelector("h1").innerHTML = "player 1 wins!";
}else if(randomNumber > randomNumber1){
  document.querySelector("h1").innerHTML = "player 2 wins!"
}else{
  document.querySelector("h1").innerHTML = "DRAW!";
}
