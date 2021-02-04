function playerDraw(choice) {
    //changing the player's img source
    const playerHand = document.querySelector("#player-hand");
    playerHand.src = `./img/hand_${choice}.png`;
    const hands = document.querySelectorAll('#gamefield img');

    hands.forEach(hand => {
        hand.addEventListener("animationed", function () {
            choice.style.animation = "";
        });

    })

    //creating an array with all computer's options
    const computerOptions = ["rock", "paper", "scissors"];
    const computerNumber = Math.floor(Math.random() * 3);
    const computerChoice = computerOptions[computerNumber];

    setTimeout(() => { //same for computer
        const computerHand = document.querySelector("#computer-hand");
        computerHand.src = `./img/hand_${computerChoice}.png`;

        compareHands(choice, computerChoice);
    }, 2000)


    //Animation
    playerHand.style.animation = "shake 2s ease";
    computerHand.style.animation = "shake 2s ease";
}

function compareHands(playerChoice, computerChoice) {
    //Update Text
    const result = document.querySelector('#result');
    //Checking for a tie
    console.log(playerChoice, computerChoice)
    if (playerChoice === computerChoice) {
        result.textContent = "It is a tie";
        return;

    }
    //Check for Rock
    else if (playerChoice === 'rock') {
        if (computerChoice === 'scissors') {
            result.textContent = 'Player Wins';
            return;
        } else {
            result.textContent = 'Computer Wins';
            return;
        }

    }
    //Check for Paper
    else if (playerChoice === 'scissors') {
        if (computerChoice === 'paper') {
            result.textContent = 'Player Wins';
            return;
        } else {
            result.textContent = 'Computer Wins';
            return;
        }
    }
    //Check for Scissors 
    else if (playerChoice === 'scissors') {
        if (computerChoice === 'rock') {
            result.textContent = 'Computer wins';
            return;
        } else {
            result.textContent = 'Player Wins';
            return;
        }
    }

}
//Is call all the inner function