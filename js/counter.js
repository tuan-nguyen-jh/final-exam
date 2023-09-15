import { getRandomQuestion } from './data.js';

const startBtn = document.getElementById("start-btn");
const submitBtn = document.getElementById("submit-btn");
const counter = document.getElementById("counter");
const question = document.getElementById("question");
const answer = document.getElementById("answer");
const answerInput = document.getElementById("ans-input");

let isCounting = false;
let countInterval = null;



export function start() {
  for (let i = 0; i < 20; i++) {
    const randomQuestion = getRandomQuestion();
    question.textContent = randomQuestion.question;

    if (randomQuestion.type === 0) {
      // normal question
      // display the input form
    } else {
      // multiple choices question
      // display the selections
    }
  }
}


// export function startCounter() {
//   let count = 30;

//   if (!isCounting) {
//     isCounting = true;
//     startBtn.disabled = true;

//     const currentQuestion = getRandomQuestion();

//     answerInput.removeAttribute("disabled");
//     submitBtn.removeAttribute("disabled");

//     countInterval = setInterval(function () {
//       counter.textContent = count;

//       if (count === 0) {
//         clearInterval(countInterval);
//         counter.textContent = "Done";
//         isCounting = false;
//         startBtn.disabled = false;

//         answerInput.disabled = true;
//         submitBtn.disabled = true;
//       } else {
//         count--;
//       }
//     }, 1000);
//   }
// }

// export function handleUserInput(e) {
//   e.preventDefault();
//   const userInput = answerInput.value;
//   answer.textContent = userInput;
//   answerInput.value = "";

//   clearInterval(countInterval);
//   counter.textContent = "Done";
//   isCounting = false;
//   startBtn.disabled = false;
//   answerInput.disabled = true;
//   submitBtn.disabled = true;
// }
