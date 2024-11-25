// app2.js

document.getElementById("submit-quiz").addEventListener("click", function() {
    let score = 0;
    const totalQuestions = 3;

    // Check answers
    if (document.querySelector('input[name="q1"]:checked')?.value === "correct") {
        score++;
    }
    if (document.querySelector('input[name="q2"]:checked')?.value === "correct") {
        score++;
    }
    if (document.querySelector('input[name="q3"]:checked')?.value === "correct") {
        score++;
    }

    // Display result
    const resultDiv = document.getElementById("quiz-result");
    if (score === totalQuestions) {
        resultDiv.innerHTML = "Congratulations! You got all answers right. You know your waste sorting!";
    } else {
        resultDiv.innerHTML = `You got ${score} out of ${totalQuestions} questions right. Keep learning about proper waste sorting!`;
    }
});