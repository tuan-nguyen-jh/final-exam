export function displayMultipleChoiceQuestion(
  currentQuestion,
  { checkAnswer, choicesContainer }
) {
  choicesContainer.innerHTML = [];

  currentQuestion.choices.forEach((choice) => {
    const choiceElement = document.createElement("button");
    choiceElement.textContent = choice;
    choiceElement.classList.add("choice");
    choicesContainer.appendChild(choiceElement);

    choiceElement.addEventListener("click", () => {
      checkAnswer(choice === currentQuestion.correctAnswer);
    });
  });
}

export function displayTextAnswerQuestion(
  currentQuestion,
  { choicesContainer, answerForm, checkAnswer, ansInput }
) {
  choicesContainer.innerHTML = "";
  ansInput.value = "";
  answerForm.style.display = "flex";

  const submitHandler = (e) => {
    e.preventDefault();
    checkAnswer(
      ansInput.value.trim().toLowerCase() ===
        currentQuestion.correctAnswer.toLowerCase()
    );

    // Remove the event listener after submission
    answerForm.removeEventListener("submit", submitHandler);
  };

  answerForm.addEventListener("submit", submitHandler);
}
