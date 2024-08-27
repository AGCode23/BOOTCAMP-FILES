var buttonColours = ["red", "blue", "green", "yellow"];
var randomChosenColour;
var gamePattern = [];
var userClickedPattern = [];
var count = 0;
var level = 0;

function nextSequence() {
  userClickedPattern = [];
  var randomNumber = Math.floor(Math.random() * 4);
  randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour)
    .fadeOut(150)
    .fadeIn(150);
  playSound(randomChosenColour);
  level++;
  $("h1").text("Level " + level);
}

$(".btn").click(function (e) {
  var userChosenColour = e.target.id;
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  var lastMove = userClickedPattern.length - 1;
  checkAnswer(lastMove);
});

function playSound(name) {
  switch (name) {
    case "red":
      var red = new Audio("./sounds/red.mp3");
      red.play();
      break;

    case "blue":
      var blue = new Audio("./sounds/blue.mp3");
      blue.play();
      break;

    case "green":
      var green = new Audio("./sounds/green.mp3");
      green.play();
      break;

    case "yellow":
      var yellow = new Audio("./sounds/yellow.mp3");
      yellow.play();
      break;

    default:
      break;
  }
}

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(() => {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}
$(document).keypress(function () {
  if (count === 0) {
    nextSequence();
    count++;
  }
});

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log(gamePattern);
    console.log(userClickedPattern);
    if (gamePattern.length === userClickedPattern.length) {
      setTimeout(() => {
        nextSequence();
      }, 1000);
    }
  } else {
    var gameOver = new Audio("./sounds/wrong.mp3");
    gameOver.play();
    $("body").addClass("game-over");
    setTimeout(() => {
      $("body").removeClass("game-over");
    }, 100);
    $("h1").text("Game Over, Press Any Key to Restart");
    startOver();
  }
}

function startOver() {
  level = 0;
  gamePattern = [];
  count = 0;
}
