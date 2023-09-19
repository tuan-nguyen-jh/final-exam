import { questions } from "./js/data.js";

let score = 0;
let remainingQuestions = [...questions];
let timeRemaining = 15;
let timer;

const startButton = document.getElementById("start-btn");
const questionElement = document.getElementById("question");
const scoreElement = document.getElementById("score");
const answerForm = document.getElementById("answer-form");
const choicesContainer = document.getElementById("choices-container");
const textContainer = document.getElementById("text-container");
const ansInput = document.getElementById("ans-input");

startButton.addEventListener("click", startQuiz);

function startQuiz() {
  startButton.style.display = "none";
  score = 0;
  scoreElement.textContent = `Your score: 0${score}`;
  answerForm.style.display = "flex";
  remainingQuestions = [...questions]
  displayNextQuestion();
}

function displayNextQuestion() {
  timeRemaining = 15; // Reset the timer for each new question
  updateTimerDisplay(); // Update the timer display

  if (remainingQuestions.length > 0) {
    const randomIndex = Math.floor(Math.random() * remainingQuestions.length);
    const question = remainingQuestions[randomIndex];
    questionElement.textContent = question.text;

    if (question.type === "multiple-choice") {
      displayMultipleChoiceQuestion(question);
      textContainer.style.display = "none";
      choicesContainer.style.display = "flex";
    } else if (question.type === "text-answer") {
      displayTextAnswerQuestion(question);
      choicesContainer.style.display = "none";
      textContainer.style.display = "flex";
    }

    remainingQuestions.splice(randomIndex, 1); // Remove the displayed question

    // Start the timer countdown
    timer = setInterval(() => {
      timeRemaining--;
      updateTimerDisplay();

      if (timeRemaining === 0) {
        clearInterval(timer);
        endQuiz()
      }
    }, 1000);
  } else {
    endQuiz();
  }
}

function displayMultipleChoiceQuestion(currentQuestion) {
  // Display multiple-choice options
  choicesContainer.innerHTML = [];
  selectedChoice = null;

  const clickHandler = (choiceElement, choice) => {
    const handler = () => {
      // Remove the event listener for this specific choiceElement
      choiceElement.removeEventListener("click", handler);

      selectedChoice = choice;
      checkAnswer(choice === currentQuestion.correctAnswer);
    };
    return handler;
  };

  currentQuestion.choices.forEach((choice) => {
    const choiceElement = document.createElement("button");
    choiceElement.textContent = choice;
    choiceElement.classList.add("choice");
    choicesContainer.appendChild(choiceElement);

    const handler = clickHandler(choiceElement, choice);

    choiceElement.addEventListener("click", handler);
  });
}

function displayTextAnswerQuestion(currentQuestion) {
  // Display text input for text answer question
  choicesContainer.innerHTML = "";
  ansInput.value = "";
  answerForm.style.display = "flex";

  const submitHandler = (e) => {
    e.preventDefault();
    checkAnswer(ansInput.value.trim() === currentQuestion.correctAnswer);

    // Remove the event listener after submission
    answerForm.removeEventListener("submit", submitHandler);
  };

  answerForm.addEventListener("submit", submitHandler);
}

function checkAnswer(isCorrect) {
  clearInterval(timer);
  if (isCorrect) {
    score++;
  }
  scoreElement.textContent = `Your score: ${score}`;
  displayNextQuestion();
}

function updateTimerDisplay() {
  counter.textContent = timeRemaining;
}

function endQuiz() {
  clearInterval(timer);
  questionElement.textContent = "Quiz completed!";
  choicesContainer.innerHTML = "";
  answerForm.style.display = "none";
  scoreElement.textContent = `Final score: ${score}`;

  startButton.style.display = "block";
}
