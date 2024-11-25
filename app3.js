// app3.js

let ecoScore = 0;
let correctAnswers = {
    "Plastic Bottle": "recyclable",
    "Banana Peel": "organic",
    "Pizza Box": "landfill",
    "Aluminum Can": "recyclable"
};

const items = document.querySelectorAll('.item');
const bins = document.querySelectorAll('.bin');
const ecoScoreElement = document.getElementById('eco-score');
const feedbackElement = document.getElementById('feedback');
const checkResultsButton = document.getElementById('check-results');

items.forEach(item => {
    item.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text', item.id);
    });
});

bins.forEach(bin => {
    bin.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    bin.addEventListener('drop', (e) => {
        e.preventDefault();
        let itemId = e.dataTransfer.getData('text');
        let item = document.getElementById(itemId);
        let binId = bin.id;

        let itemName = item.textContent.trim();

        if (correctAnswers[itemName] === binId.replace('-bin', '')) {
            ecoScore += 10;
            item.style.backgroundColor = "#218838"; // Green if correct
        } else {
            ecoScore -= 5;
            item.style.backgroundColor = "#dc3545"; // Red if incorrect
        }

        ecoScoreElement.textContent = ecoScore;
    });
});

checkResultsButton.addEventListener('click', () => {
    if (ecoScore >= 30) {
        feedbackElement.textContent = "Excellent! You're doing great at sorting your waste.";
    } else if (ecoScore >= 15) {
        feedbackElement.textContent = "Good job! You can still improve your sorting.";
    } else {
        feedbackElement.textContent = "Oops! You need to learn more about waste sorting.";
    }
});