import config from "../config.js";
import { questions } from "../data/index.js";
import { startQuiz } from "./start.js";
import { endQuiz } from "./end.js";
import { setUpTimer, updateTimerDisplay } from "../timer/index.js";
import {
  displayAndStylingQuestion,
  getRandomQuestion,
} from "../question/index.js";

class QuizGame {
  score;
  remainingQuestions = [];

  constructor({
    startBtnId = "start-btn",
    questionTextId = "question",
    scoreTextId = "score",
    textContainerId = "text-container",
    counterId = "counter",
    answerFormId = "answer-form",
    ansInputId = "ans-input",
    choicesContainerId = "choices-container",
    onStartButtonClick,
  }) {
    this._answer = {
      _answerForm: document.getElementById(answerFormId),
      _ansInput: document.getElementById(ansInputId),
      _choicesContainer: document.getElementById(choicesContainerId),
      _textContainer: document.getElementById(textContainerId),
    };

    this._quiz = {
      _counterText: document.getElementById(counterId),
      _startButton: document.getElementById(startBtnId),
      _questionText: document.getElementById(questionTextId),
      _scoreText: document.getElementById(scoreTextId),
    };

    this._timerObj = {
      timer: this.timer,
      timeRemaining: this.timeRemaining,
    };

    this._quiz._startButton.addEventListener("click", () => {
      onStartButtonClick();
    });
  }

  startQuiz = startQuiz.bind(this);

  endQuiz = endQuiz.bind(this);

  setUpTimer = setUpTimer.bind(this);

  updateTimerDisplay = updateTimerDisplay.bind(this);

  _getRandomQuestion = getRandomQuestion.bind(this);

  // question.getRandom
  // question.setupNext
  // answer.check
  // quiz.start
  // quiz.end
  // timer.setup
  // timer.update

  setupNextQuestion() {
    this._timerObj.timeRemaining = config.question.timeLimit;
    updateTimerDisplay({ _quiz: this._quiz, _timerObj: this._timerObj });

    if (this.remainingQuestions.length === 0) {
      endQuiz({
        _timerObj: this._timerObj,
        _quiz: this._quiz,
        _answer: this._answer,
        score: this.score,
      });
      return;
    }

    const [randomIndex, question] = this._getRandomQuestion({
      remainingQuestions: this.remainingQuestions,
    });
    this._quiz._questionText.textContent = question.text;

    displayAndStylingQuestion(question, {
      textContainer: this._answer._textContainer,
      choicesContainer: this._answer._choicesContainer,
      answerForm: this._answer._answerForm,
      ansInput: this._answer._ansInput,
      checkAnswer: this.checkAnswer.bind(this),
    });

    this.remainingQuestions.splice(randomIndex, 1); // Remove the displayed question

    setUpTimer({
      _timerObj: this._timerObj,
      _quiz: this._quiz,
      _answer: this._answer,
      score: this.score,
      endQuiz: this.endQuiz.bind(this),
      updateTimerDisplay: this.updateTimerDisplay.bind(this),
    });
  }

  checkAnswer(isCorrect) {
    clearInterval(this._timerObj.timer);
    if (isCorrect) {
      this.score++;
    }
    this._quiz._scoreText.textContent = `Your score: ${this.score}`;
    this.setupNextQuestion();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const quiz = new QuizGame({
    onStartButtonClick: () => {
      startQuiz(quiz, questions);
    },
  });
});
