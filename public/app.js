const game = () => {
  let pScore = 0;
  let cScore = 0;

  //Play Match
  const playMatch = () => {
    const options = document.querySelectorAll(".options a");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

   

    hands.forEach(hand => {
      hand.addEventListener("animationend", function() {
        this.style.animation = "";
      });
    });
    //Computer Options
    const computerOptions = ["batu", "kertas", "gunting"];

    options.forEach(option => {
      option.addEventListener("click", function() {
        //Change background for activated option
        option.classList.add("activeOption");

        //Computer Choice
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];

        setTimeout(() => {
          //Here is where we call compare hands
          compareHands(this.id, computerChoice);
          console.log(this.id);
          //Update Images
          playerHand.src = `./resources/${this.id}.png`;
          computerHand.src = `./resources/${computerChoice}.png`;

          //Change background for activated option
          option.classList.remove("activeOption");
        }, 2000);
        //Animation
        
        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
      });
    });
  };

  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  const compareHands = (playerChoice, computerChoice) => {
    //Update Text
    const winner = document.querySelector(".winner");
    //Checking for a tie
    if (playerChoice === computerChoice) {
      winner.textContent = "DRAW";
      return;
    }
    //Check for batu
    if (playerChoice === "batu") {
      if (computerChoice === "gunting") {
        winner.textContent = "PLAYER 1 WIN";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "COM WIN";
        cScore++;
        updateScore();
        return;
      }
    }
    //Check for kertas
    if (playerChoice === "kertas") {
      if (computerChoice === "gunting") {
        winner.textContent = "COM WIN";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "PLAYER 1 WIN";
        pScore++;
        updateScore();
        return;
      }
    }
    //Check for gunting
    if (playerChoice === "gunting") {
      if (computerChoice === "batu") {
        winner.textContent = "COM WIN";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "PLAYER 1 WIN";
        pScore++;
        updateScore();
        return;
      }
    }
  };

  playMatch();
};

//start the game function
game();
