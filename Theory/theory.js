const questions = [
    {
        question: "Input all your theory answers here!",
        id: 1
    },
];

let currentQuestion = 0;
let answers = [];

document.getElementById("question").innerText = questions[currentQuestion].question;

document.getElementById("submit").addEventListener("click", () => {
    const answer = document.getElementById("answer").value;
    answers.push({ question: questions[currentQuestion].question, answer });
    document.getElementById("feedback").innerText = "Answer submitted!";
    document.getElementById("answer").value = "";
    currentQuestion++;
    if (currentQuestion < questions.length) {
        document.getElementById("question").innerText = questions[currentQuestion].question;
    } else {
        document.getElementById("question").innerText = "You've completed all questions!";
        document.getElementById("submit").disabled = true;
    }
});

document.getElementById("download-pdf").addEventListener("click", () => {
    try {
        const answer = document.getElementById("answer").value.trim();
        if (answer === "") {
            alert("Please enter an answer before downloading as PDF.");
            return;
        }
        const doc = new jsPDF();
        const lines = doc.splitTextToSize(answer, 170); // adjust the width as needed
        doc.text(lines, 10, 20);
        doc.save("answer.pdf");
    } catch (error) {
        console.error("Error generating PDF:", error);
        alert("Error generating PDF. Please try again.");
    }
});
