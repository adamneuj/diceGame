"use strict";

function displayRules(rules){
	console.log ("Welcome to the Dice Game!  These are the rules as follows:");
	console.log ("Your goal is to try to get 1000 points in ten attempts.");
	console.log ("If you get to 1000 points, you win.");
	console.log ("If you go over 1000 points, or if you run out of attempts, you will lose.");
	console.log ("The only way to earn points is if you win a game of rock, paper, scissors.");
	console.log ("Before you can play rock, paper, scissors you will need to pick a dice.");
	console.log ("Each dice has a different multiplier, which will be laid out below.");
	console.log ("If you win rock, paper, scissors then you will be able to receive points from the dice you've selected.");
	console.log ("Remember, don't go over 1000.");
	console.log ("Good luck!");
	return
}

function rollDice(maxSides){
	return Math.floor(Math.random() * maxSides) + 1;
}

// function pickDice(dice){
// 	let fourSide = 1
// 	let sixSide = 2
// 	let eightSide = 4
// 	let tenSide = 8
// 	let twelveSide = 16
// 	let twentySide = 20
// }


function playRockPaperScissors(rockPaperScissors){
	rockPaperScissors = prompt("Rock, paper, or scissors?");
	rockPaperScissors = rockPaperScissors.toLowerCase();
	let computerTurn = rollDice(3);  //1 = rock, 2 = paper, 3 = scissors
		if (rockPaperScissors === "rock"){
			if (computerTurn === 1){
				alert("The computer picked rock.  Try again.");
				return playRockPaperScissors();
			}
			else if(computerTurn === 2){
				alert("The computer picked paper.  You lost.  Try again.");
			}
			else if(computerTurn === 3){
				alert("The computer picked scissors.  You won!");
			}
		}
		else if (rockPaperScissors === "paper"){
			if (computerTurn === 1){
				alert("The computer picked rock.  You won!");
			}
			else if(computerTurn === 2){
				alert("The computer picked paper.  Try again.");
				return playRockPaperScissors();
			}
			else if(computerTurn === 3){
				alert("The computer picked scissors.  You lost.  Try again.");
			}
		}
		else if (rockPaperScissors === "scissors"){
			if (computerTurn === 1){
				alert("The computer picked rock.  You lost.  Try again.");
			}
			else if(computerTurn === 2){
				alert("The computer picked paper.  You won!");
			}
			else if(computerTurn === 3){
				alert("The computer picked scissors.  Iry again.");
				return playRockPaperScissors();
			}
		}
		else{
			alert("You didn't enter something correctly.  Try again");
			return playRockPaperScissors()
		}
}


function runGame(game){
	let attempts = 10
	let score = 0
	while(attempts !== 0){
		attempts--
	}
	console.log("End")
}

runGame();



