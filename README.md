# Simon Game

A browser-based implementation of the classic Simon memory game. The objective is to mimic the sequence of lights and sounds generated by the game, with the sequence growing longer after each successful round. This project is built using **HTML**, **CSS**, **jQuery**, and **JavaScript**.

## Table of Contents

- [Demo](#demo)
- [How to Play](#how-to-play)
- [Installation](#installation)
- [Usage](#usage)
- [Game Features](#game-features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Acknowledgments](#acknowledgments)

## Demo

You can try out the game by downloading the project and opening the `index.html` file in a browser.

## How to Play

1. When the game starts, you will see the title: "Press Any Key to Start".
2. Press any key to begin.
3. The game will play a sequence of colors (flashing lights and corresponding sounds). Your goal is to repeat the sequence in the same order by clicking the buttons.
4. After each successful round, the sequence will get longer by one additional step. The game will continue until you make a mistake.
5. If you click the wrong button, the game will display a "Game Over" message and restart.

## Installation

To run the game locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Ai31024/TheSimonGame.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd TheSimonGame
   ```

3. **Open the game**:
   Simply open the `index.html` file in your preferred browser.

## Usage

Once the game has started:
- Follow the on-screen instructions.
- Click the colored buttons in the correct order as indicated by the game's sequence.
- The game gets progressively harder as the sequence becomes longer with each round.

## Game Features

- **Memory Challenge**: Mimic the sequence of lights and sounds.
- **User Interaction**: Click on the buttons to match the pattern.
- **Sound Effects**: Each button plays a unique sound for better recall.
- **Responsive Design**: The game is responsive and can be played on different screen sizes.

### Game Files Overview

- **HTML**: Provides the basic structure and layout of the game.
- **CSS**: Handles the visual styling of the game, including button colors, animations, and text formatting.
- **JavaScript**: Manages the game logic, including generating the random sequences, capturing user inputs, and checking if the user follows the correct sequence.
- **jQuery**: Simplifies DOM manipulation and event handling.

## Technologies Used

- **HTML5**: For structuring the game.
- **CSS3**: For styling the game elements.
- **JavaScript (jQuery)**: For game logic and interaction handling.
- **Google Fonts**: Used the 'Press Start 2P' font for a retro-style title.

## Project Structure

```plaintext
TheSimonGame/
│
├── sounds/
│   ├── wrong.mp3
|   ├── blue.mp3
│   ├── green.mp3
│   ├── red.mp3
│   └── yellow.mp3
│
├── index.html
├── styles.css
├── game.js
├── jquery-3.7.1.min.js
└── README.md
```

- `index.html`: The main HTML file that structures the game layout.
- `styles.css`: The file containing all the styling rules for the game, including colors and animations.
- `game.js`: The core JavaScript file that controls the game logic, user input, and sequences.
- `jquery-3.7.1.min.js`: The jQuery library used for easier DOM manipulation.
- `sounds/`: A folder that contains the audio files for each color button (blue, green, red, yellow).

## Acknowledgments

This Project is based on the "The Simon Game".
- [Angela Yu](https://github.com/angelabauer) (Idea and Inspiration)
- [Ai31024](https://github.com/Ai31023) (Effort and Customization)
- [ChatGPT-4o](https://chatgpt.com) (Commenting and README Documentaion)
