start();

function start(); {
    console.log("start");
    getUserSelection();
}

function getUserSelection(); {
    makeRandomComputerChoice();
}

function makeRandomComputerChoice(); {
        showAnimations();
    }

    function showAnimations(); {
        determineWinner();
    }
    let winner = "";

    function determineWinner() {
        // FAKED so player always wins!
        winner = "player"

        // if player won!
        showWin();

    }

    function showWin() {
        console.log("Show win!");
        //show winner!
    }

    function showLose() {

    }

    function showDraw() {

    }