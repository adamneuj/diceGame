"use strict";

function displayRules(rules){
	console.log ("Welcome to the Dice Game!  These are the rules as follows:")
	console.log ("Your goal is to try to get 1000 points in ten attempts.")
	console.log ("If you get to 1000 points, you win.")
	console.log ("If you go over 1000 points, or if you run out of attempts, you will lose.")
	console.log ("The only way to earn points is if you win a game of rock, paper, scissors.")
	console.log ("Before you can play rock, paper, scissors you will need to pick a dice.")
	console.log ("Each dice has a different multiplier, which will be laid out below.")
	console.log ("If you win rock, paper, scissors then you will be able to receive points from the dice you've selected.")
	console.log ("Remember, don't go over 1000.")
	console.log ("Good luck!")
	return
}



function runGame(game){
	displayRules()
}

runGame()


