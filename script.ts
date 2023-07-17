document.addEventListener("DOMContentLoaded", function () {
    const player1Input = document.getElementById("player1") as HTMLInputElement;
    const player2Input = document.getElementById("player2") as HTMLInputElement;
    const randomDisplay = document.getElementById("random") as HTMLParagraphElement;
    const resultDisplay = document.getElementById("result") as HTMLHeadingElement;
    const generateButton = document.getElementById("generateButton");
  
    function generateRandomNumber() {
      const random = Math.floor(Math.random() * 100) + 1;
      randomDisplay.textContent = random.toString();
  
      const player1 = parseInt(player1Input.value);
      const player2 = parseInt(player2Input.value);
  
      if (player1 === random) {
        resultDisplay.textContent = "Player 1 ha vinto!";
      } else if (player2 === random) {
        resultDisplay.textContent = "Player 2 ha vinto!";
      } else {
        if (Math.abs(player1 - random) < Math.abs(player2 - random)) {
          resultDisplay.textContent = "Player 1 è più vicino al numero casuale.";
        } else if (Math.abs(player2 - random) < Math.abs(player1 - random)) {
          resultDisplay.textContent = "Player 2 è più vicino al numero casuale.";
        } else {
          resultDisplay.textContent = "Entrambi i giocatori sono alla stessa distanza dal numero casuale.";
        }
      }
    }
  
    generateButton?.addEventListener("click", generateRandomNumber);
  });
  