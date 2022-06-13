document.querySelector(".w").addEventListener("click", function () {
  var audioTom1 = new Audio("sounds/tom-1.mp3");
  audioTom1.play();
});
document.querySelector(".a").addEventListener("click", function () {
  var audioTom2 = new Audio("sounds/tom-2.mp3");
  audioTom2.play();
});
document.querySelector(".s").addEventListener("click", function () {
  var audioTom3 = new Audio("sounds/tom-3.mp3");
  audioTom3.play();
});
document.querySelector(".d").addEventListener("click", function () {
  var audioTom4 = new Audio("sounds/tom-4.mp3");
  audioTom4.play();
});
document.querySelector(".j").addEventListener("click", function () {
  var audioCrash = new Audio("sounds/crash.mp3");
  audioCrash.play();
});
document.querySelector(".k").addEventListener("click", function () {
  var audioKick = new Audio("sounds/kick-bass.mp3");
  audioKick.play();
});
document.querySelector(".l").addEventListener("click", function () {
  var audioSnare = new Audio("sounds/snare.mp3");
  audioSnare.play();
});


document.addEventListener("keydown", function (pressedKey) {
  switch (pressedKey.code) {
    case "KeyW":
    {
      var audioTom1 = new Audio("sounds/tom-1.mp3");
      audioTom1.play();

      break;
    }

    case "KeyA":
    {
      var audioTom2 = new Audio("sounds/tom-2.mp3");
      audioTom2.play();
      break;
    }

    case "KeyS":
    {
      var audioTom3 = new Audio("sounds/tom-3.mp3");
      audioTom3.play();
      break;
    }

    case "KeyD":
    {
      var audioTom4 = new Audio("sounds/tom-4.mp3");
      audioTom4.play();
      break;
    }

    case "KeyJ":
    {
      var audioCrash = new Audio("sounds/crash.mp3");
      audioCrash.play();
      break;
    }

    case "KeyK":
    {
      var audioKick = new Audio("sounds/kick-bass.mp3");
      audioKick.play();
      break;
    }

    case "KeyL":
    {
      var audioSnare = new Audio("sounds/snare.mp3");
      audioSnare.play();
      break;
    }
    default:

  }

});
