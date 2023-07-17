"use strict";
document.addEventListener("DOMContentLoaded", function () {
    const player1Input = document.getElementById("player1");
    const player2Input = document.getElementById("player2");
    const randomDisplay = document.getElementById("random");
    const resultDisplay = document.getElementById("result");
    const generateButton = document.getElementById("generateButton");
    function generateRandomNumber() {
        const random = Math.floor(Math.random() * 100) + 1;
        randomDisplay.textContent = random.toString();
        const player1 = parseInt(player1Input.value);
        const player2 = parseInt(player2Input.value);
        if (player1 === random) {
            resultDisplay.textContent = "Player 1 ha vinto!";
        }
        else if (player2 === random) {
            resultDisplay.textContent = "Player 2 ha vinto!";
        }
        else {
            if (Math.abs(player1 - random) < Math.abs(player2 - random)) {
                resultDisplay.textContent = "Player 1 è più vicino al numero casuale.";
            }
            else if (Math.abs(player2 - random) < Math.abs(player1 - random)) {
                resultDisplay.textContent = "Player 2 è più vicino al numero casuale.";
            }
            else {
                resultDisplay.textContent = "Entrambi i giocatori sono alla stessa distanza dal numero casuale.";
            }
        }
    }
    generateButton === null || generateButton === void 0 ? void 0 : generateButton.addEventListener("click", generateRandomNumber);
});
