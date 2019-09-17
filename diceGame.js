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
	return console.log ("Good luck!");
}


function runGame(game){
	
	let attempts = 10;
	let score = 0;
	let diceScore = 0;

	function rollDice(maxSides){
		return Math.floor(Math.random() * maxSides) + 1;
	}

	function pickDice(dice){
		let fourSide = rollDice(4) * 1;
		let sixSide = rollDice(6) * 2;
		let eightSide = rollDice(8) * 4;
		let tenSide = rollDice(10) * 8;
		let twelveSide = rollDice(12) * 16;
		let twentySide = rollDice(20) * 32;
		alert("Type a number of sides you want from the following options:");
		diceScore = prompt("4-Sided x 1 multiplier  |  6-Sided x 2 multiplier  |  8-Sided x 4 multiplier  |  10-Sided x 8 multiplier  | 12-Sided x 16 multiplier  |  20-Sided x 32 multiplier");
		diceScore = parseInt(diceScore, 10)
			if(diceScore === 4){
				diceScore = fourSide;
				return diceScore;
			}
			else if (diceScore === 6){
				diceScore = sixSide;
				return diceScore;
			}
			else if (diceScore === 8){
				diceScore = eightSide;
				return diceScore;
			}
			else if (diceScore === 10){
				diceScore = tenSide;
				return diceScore;
			}
			else if (diceScore === 12){
				diceScore = twelveSide;
				return diceScore;
			}
			else if (diceScore === 20){
				diceScore = twentySide;
				return diceScore;
			}
			else{
				alert("Incorrect input.  Try again.")
				return pickDice()
			}
	}

	function playRockPaperScissors(rockPaperScissors){
		rockPaperScissors = prompt("Rock, paper, or scissors?");
		rockPaperScissors = rockPaperScissors.toLowerCase();
		let computerTurn = rollDice(3);  // 1 = rock, 2 = paper, 3 = scissors
			if (rockPaperScissors === "rock"){
				if (computerTurn === 1){
					alert("They chose rock.  You chose rock.  Try again.");
					alert("Your score is " + score +".  Attempts: " + attempts);
					return playRockPaperScissors();
				}
				else if(computerTurn === 2){
					alert("They chose paper.  You chose rock.  You lost this round.");
					attempts--
					alert("Your score is " + score +".  Attempts: " + attempts);
				}
				else if(computerTurn === 3){
					alert("They chose scissors.  You won this round!");
					attempts--
					score = score + diceScore
					alert("Your score is " + score +".  Attempts: " + attempts);
				}
			}
			else if (rockPaperScissors === "paper"){
				if (computerTurn === 1){
					alert("They chose rock.  You chose paper.  You won this round!");
					attempts--
					score = score + diceScore
					alert("Your score is " + score +".  Attempts: " + attempts);
				}
				else if(computerTurn === 2){
					alert("They chose paper.  You chose paper.  Try again.");
					alert("Your score is " + score +".  Attempts: " + attempts);
					return playRockPaperScissors();
				}
				else if(computerTurn === 3){
					alert("They chose scissors.  You chose paper.  You lost this round.");
					attempts--
					alert("Your score is " + score +".  Attempts: " + attempts);
				}
			}
			else if (rockPaperScissors === "scissors"){
				if (computerTurn === 1){
					alert("They chose rock.  You chose scissors.  You lost this round.");
					attempts--
					alert("Your score is " + score +".  Attempts: " + attempts);
				}
				else if(computerTurn === 2){
					alert("They chose paper.  You chose scissors.  You won this round!");
					attempts--
					score = score + diceScore
					alert("Your score is " + score +".  Attempts: " + attempts);
				}
				else if(computerTurn === 3){
					alert("They chose scissors.  You chose scissors.  Iry again.");
					return playRockPaperScissors();
					alert("Your score is " + score +".  Attempts: " + attempts);
				}
			}
			else{
				alert("You didn't enter something correctly.  Try again");
				return playRockPaperScissors()
			}
	}

	while(attempts !== 0 && score < 1000){
		pickDice();
		playRockPaperScissors();
	}
}

runGame();