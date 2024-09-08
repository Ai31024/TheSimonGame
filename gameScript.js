$(document).ready(function () {
  var buttonColours = ["red", "blue", "green", "yellow"];
  var gamePattern = [];
  var userPattern = [];
  var gameReady = false;
  var level = 0;

  // Get the stored high score from localStorage, or set it to 0 if none exists.
  var highScore = localStorage.getItem("highScore") || 0;
  $("#high-score").text("High Score: " + highScore);

  // Function to generate the next sequence in the game.
  function nextSequence() {
    userPattern = [];
    level++;
    $("#level-title").text("Level: " + level);
    var randomNumber = Math.floor(Math.random() * 4);
    var randomColours = buttonColours[randomNumber];
    gamePattern.push(randomColours);
    audioPlayBack(randomColours);
    $("#" + randomColours)
      .fadeOut(100)
      .fadeIn(100);
  }

  // Function to play the sound for a given color.
  function audioPlayBack(chosenColour) {
    var audio = new Audio("./sounds/" + chosenColour + ".mp3");
    audio.play();
  }

  // Function to add an animation effect to the pressed button.
  function interactiveAnimation(currentColour) {
    var pickedColour = $("#" + currentColour);
    pickedColour.addClass("pressed");
    setTimeout(function () {
      pickedColour.removeClass("pressed");
    }, 100);
  }

  // jQuery event listener for a key press or title click to start the game.
  $(document).on("keydown", function () {
    if (!gameReady) {
      gameReady = true;
      nextSequence();
    }
  });

  $("#level-title").on("click", function () {
    if (!gameReady) {
      gameReady = true;
      nextSequence();
    }
  });

  // jQuery event listener for button clicks by the user.
  $("div.btn").on("click", function () {
    var colourClicked = $(this).attr("id");
    userPattern.push(colourClicked);
    audioPlayBack(colourClicked);
    interactiveAnimation(colourClicked);
    checkAnswer(userPattern.length - 1);
  });

  // Function to check the user's answer against the game pattern.
  function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userPattern[currentLevel]) {
      if (gamePattern.length === userPattern.length) {
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {
      audioPlayBack("wrong");
      $("body").addClass("game-over");
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      $("#level-title").text(
        "Game Over, Press Any Key or Touch Here to Restart"
      );

      // Check if the current level is higher than the stored high score.
      if (level > highScore) {
        highScore = level - 1; // Subtract 1 because the level increments before game-over.
        localStorage.setItem("highScore", highScore); // Update localStorage.
        $("#high-score").text("High Score: " + highScore); // Update on the page.
      }

      // Restart the game
      restartGame();
    }
  }

  // Function to reset the game variables to their initial state after a game-over.
  function restartGame() {
    level = 0;
    gamePattern = [];
    gameReady = false;
  }
});
