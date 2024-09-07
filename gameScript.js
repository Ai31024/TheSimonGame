$(document).ready(function () {
  // Array of possible button colors.
  var buttonColours = [`red`, `blue`, `green`, `yellow`];

  // Arrays to hold the generated game pattern and the user's clicked pattern.
  var gamePattern = [];
  var userPattern = [];

  // Variables to track the game's readiness and the current level.
  var gameReady = false;
  var level = 0;

  // Function to generate the next sequence in the game.
  function nextSequence() {
    // Reset the userPattern for the new level.
    userPattern = [];

    // Increment the level and update the level title on the page.
    level++;
    $(`#level-title`).text(`Level: ${level}`);

    // Generate a random number between 0 and 3 to select a color.
    var randomNumber = Math.floor(Math.random() * 4);
    var randomColours = buttonColours[randomNumber];

    // Add the randomly chosen color to the game pattern.
    gamePattern.push(randomColours);

    // Play the corresponding sound and animate the button.
    audioPlayBack(randomColours);
    $(`#${randomColours}`).fadeOut(100).fadeIn(100);
  }

  // Function to play the sound for a given color.
  function audioPlayBack(chosenColour) {
    var audio = new Audio(`./sounds/${chosenColour}.mp3`);
    audio.play();
  }

  // Function to add an animation effect to the pressed button.
  function interactiveAnimation(currentColour) {
    var pickedColour = $(`#${currentColour}`);
    pickedColour.addClass("pressed");
    
    // Remove the animation effect after 100 milliseconds.
    setTimeout(function () {
      pickedColour.removeClass("pressed");
    }, 100);
  }

  // jQuery event listener for a key press to start the game.
  $(document).on("keydown", function () {
    // Start the game only if it's not already started.
    if (!gameReady) {
      gameReady = true;
      nextSequence();
    }
  });

  $("#level-title").on("click", function(){
    // Start the game only if it's not already started.
    if (!gameReady) {
      gameReady = true;
      nextSequence();
    }
  });

  // jQuery event listener for button clicks by the user.
  $("div.btn").on("click", function () {
    // Get the ID of the clicked button (color).
    var colourClicked = $(this).attr("id");

    // Add the clicked color to the user pattern array.
    userPattern.push(colourClicked);

    // Play the corresponding sound and animate the button.
    audioPlayBack(colourClicked);
    interactiveAnimation(colourClicked);

    // Check the user's answer after each click.
    checkAnswer(userPattern.length - 1);
  });

  // Function to check the user's answer against the game pattern.
  function checkAnswer(currentLevel) {
    // Check if the current color in the user's pattern matches the game's pattern.
    if (gamePattern[currentLevel] === userPattern[currentLevel]) {
      console.log("Pass1: Same values in Arrays");

      // If the user has completed the entire sequence correctly, move to the next sequence.
      if (gamePattern.length === userPattern.length) {
        console.log("Pass2: Same length in Arrays");
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {
      // If the user makes a mistake, play the 'wrong' sound and show the game-over animation.
      console.log("Fail1: Different Values in Arrays");
      audioPlayBack("wrong");

      // Add the 'game-over' class to the body for the animation effect.
      $(`body`).addClass("game-over");
      setTimeout(function () {
        $(`body`).removeClass("game-over");
      }, 200);

      // Update the level title to show 'Game Over' and prompt the user to restart.
      $(`#level-title`).text("Game Over, Press Any Key to Restart");

      // Restart the game.
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

