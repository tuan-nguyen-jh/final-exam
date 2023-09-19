export function endQuiz({ _timerObj, _quiz, _answer, score }) {
  clearInterval(_timerObj.timer);
  _quiz._questionText.textContent = "Quiz completed!";
  _answer._choicesContainer.innerHTML = "";
  _answer._answerForm.style.display = "none";
  _quiz._scoreText.textContent = `Final score: ${score}`;

  _quiz._startButton.style.display = "block";
}
