export function startQuiz(questionInstance, questions) {
  questionInstance.score = 0;
  questionInstance._quiz._scoreText.textContent = `Your score: 0${questionInstance.score}`;

  questionInstance._answer._answerForm.style.display = "flex";
  questionInstance._quiz._startButton.style.display = "none";

  // Understand DC vs SC
  questionInstance.remainingQuestions = JSON.parse(JSON.stringify(questions));

  questionInstance.setupNextQuestion();
}
