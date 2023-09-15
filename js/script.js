import { questionsData, getRandomQuestion } from "./data.js";

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const scoreElement = document.getElementById("score");
const answerForm = document.getElementById("answer-form");
const ansInput = document.getElementById("ans-input");
const choicesContainer = document.querySelector(".choices-container");
const startButton = document.getElementById("start-btn");
const submitBtn = document.getElementById("submit-btn");

function displayQuestion() {
  const currentQuestion = getRandomQuestion();
  console.log(currentQuestion)

  if (currentQuestion) {
    questionElement.textContent = currentQuestion.question;
    ansInput.value = "";
    ansInput.disabled = false;

    // Check if it's a multiple-choice question
    if (currentQuestion.type === 1) {
      ansInput.style.display = "none";
      submitBtn.style.display = "none";
      choicesContainer.innerHTML = "";
      currentQuestion.choices.forEach((choice, index) => {
        const choiceElement = document.createElement("div");
        choiceElement.textContent = choice;
        choiceElement.classList.add("choice");
        choiceElement.addEventListener("click", () => {
          checkMultipleChoiceAnswer(index, currentQuestion);
        });
        choicesContainer.appendChild(choiceElement);
      });
    } else {
      ansInput.style.display = "block";
      submitBtn.style.display = "block";
      choicesContainer.innerHTML = "";
    }
  } else {
    // Quiz completed
    questionElement.textContent = "Quiz Completed!";
    ansInput.style.display = "none";
    choicesContainer.innerHTML = "";
  }
}

function checkAnswer(userAnswer, currentQuestion) {
  if (userAnswer.toLowerCase() === currentQuestion.answer.toLowerCase()) {
    score++;
    scoreElement.textContent = `Your score: ${score < 10 ? '0' : ''}${score}`;
    console.log("Correct!");
  } else {
    console.log("Incorrect. The correct answer is: " + currentQuestion.answer);
  }
}

function checkMultipleChoiceAnswer(choiceIndex, currentQuestion) {
  if (choiceIndex === currentQuestion.answer) {
    score++;
    scoreElement.textContent = `Your score: ${score < 10 ? '0' : ''}${score}`;
    console.log("correct");
  } else {
    console.log("Incorrect. The correct answer is: " + currentQuestion.choices[currentQuestion.answer]);
  }
  currentQuestionIndex++; // Increment after checking the answer
  displayQuestion();
}

answerForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const currentQuestion = questionsData[currentQuestionIndex];
  console.log(currentQuestion)
  if (currentQuestion.type === 0) {
    checkAnswer(ansInput.value.trim(), currentQuestion);
  }
  currentQuestionIndex++; // Increment after checking the answer
  displayQuestion();
});

startButton.addEventListener("click", function () {
  startButton.style.display = "none";
  displayQuestion();
});
