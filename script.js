const game = () => {

    //Play Match
    const playMatch = () => {
        const options = document.querySelectorAll("#buttons button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        //Computer Options
        const computerOptions = ["rock", "paper", "scissors"];

        options.forEach(option => {
            option.addEventListener("click", function() {
                //Computer Choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                console.log(computerChoice);
            });
        });

       
       

    };

    //Is call all the inner function
    playMatch();

};

//start the game function
game();