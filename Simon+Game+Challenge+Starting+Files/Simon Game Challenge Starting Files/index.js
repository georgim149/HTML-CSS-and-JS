var gamePattern = [];
var buttonColours = ["green", "red","yellow", "blue"];
var level = 0;
var firstKeypress = true;
var pressedIndexColour = 1;

document.addEventListener("keydown",function(){
  if(firstKeypress)
  {
    nextSimonColour();
    console.log(gamePattern);
    firstKeypress = false;
    $("#level-title").text("Level "+level);
  }

});
$(".btn").click(function(){
  var userSelectedColour = this.id;
  $(this).addClass("pressed");
  triggerBtnAction(userSelectedColour);
  setTimeout(function(){
    $("#"+ userSelectedColour).removeClass("pressed");
  },100);
  console.log(pressedIndexColour+" "+userSelectedColour);
  if(checkCorrectness(pressedIndexColour,userSelectedColour))
  {


    if(pressedIndexColour === gamePattern.length)
    {
      level++;
      $("#level-title").text("Level "+level);
      setTimeout(function(){
        nextSimonColour();
      },500);
      pressedIndexColour = 1;
    }
    else
    {
      pressedIndexColour++;
    }

  }
  else
  {
    fail();
  }


});
function nextSimonColour(){
  var randomNumber = Math.floor(Math.random()*4);
  var randomChosenColour = buttonColours[randomNumber];
  console.log(gamePattern);
  gamePattern.push(randomChosenColour);
  triggerBtnAction(randomChosenColour);
}
function triggerBtnAction(colour)
{
  $("#"+colour).fadeOut(50).fadeIn(50);
  var btnAudio = new Audio("sounds/"+colour+".mp3");
  btnAudio.play();
}
function checkCorrectness(index,colour)
{
  return gamePattern[index-1] === colour;
}
function fail()
{
  var audioFail = new Audio("sounds/wrong.mp3");
  audioFail.play();
  pressedIndexColour = 1;
  gamePattern = [];
  level = 0;
  $("#level-title").text("Press any key to try again");
  firstKeypress = true;
  $("body").addClass("game-over");
  setTimeout(function () {
    $("body").removeClass("game-over");
  }, 100);
}
