// Generate random spots for the treasure and bomb
var treasureNum = Math.floor(Math.random() * 16)
var bombNum = Math.floor(Math.random() * 16)
var gameOver = false
var pilesLeft = 16

// Change bombNum if it's the same location as the treasure
if (treasureNum === bombNum) {
  bombNum = Math.floor(Math.random() * 16)
}

// Treasure returns the location
const treasure = (location) => {

  // Check if the game is over
  if (gameOver) {
    alert("Click Restart Game to Play Again")
    return location
  }

  // Decrement every time a pile of dirt is clicked on
  pilesLeft = pilesLeft - 1
  document.getElementById("game-clicks").innerHTML = "Piles of dirt left: " + pilesLeft

  // Check if pile contains treasure, bomb, or nothing
  if (location === treasureNum) { // pile is the treasure
    document.getElementById(location).innerHTML = '<img src="img/treasurepng.png">'
    gameOver = true
    document.getElementById("game-status").innerHTML = "You Win!"
  } else if (location === bombNum) {  // pile is the bomb
    document.getElementById(location).innerHTML = '<img src="img/bombpng.png">'
    gameOver = true
    document.getElementById("game-status").innerHTML = "You Lose!"
  } else {  // pile is a hole
    document.getElementById(location).innerHTML = '<img src="https://www.clipartmax.com/png/middle/287-2873185_dig-hole-clipart-cartoon-man-digging-hole.png">'
  }

}
