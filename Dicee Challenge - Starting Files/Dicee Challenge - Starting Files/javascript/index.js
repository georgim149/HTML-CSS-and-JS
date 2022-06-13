var randNum1 = Math.floor(Math.random()*6)+1;
var randNum2 = Math.floor(Math.random()*6)+1;
var firstImg = document.querySelector(".img1");
var secondImg = document.querySelector(".img2");
firstImg.setAttribute("src", "images/dice" + randNum1 + ".png");
secondImg.setAttribute("src", "images/dice"+ randNum2 +".png");
if(randNum1>randNum2)
{
  document.querySelector(".displayText").textContent = "Player 1 won!";
}
else if (randNum1<randNum2)
{
  document.querySelector(".displayText").textContent = "Player 2 won!";
}
else
{
  document.querySelector(".displayText").textContent = "It's a tie.";
}
