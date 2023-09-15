export const questionsData = [
  {
    type: 0,
    question: "What's the capital of France?",
    answer: "Paris"
  },
  {
    type: 0,
    question: "What's the capital of Vietnam?",
    answer: "Hanoi"
  },
  {
    type: 0,
    question: "Which planet is known as the Red Planet?",
    answer: "Mars"
  },
  {
    type: 0,
    question: "What is 2 + 2?",
    answer: "4"
  },
  {
    type: 0,
    question: "Which element is represented by the chemical symbol 'Fe'?",
    answer: "Iron"
  },
  {
    type: 1,
    question: "What's the largest mammal on Earth?",
    choices: ["Elephant", "Lion", "Blue Whale", "Giraffe"],
    answer: 2 // The correct answer is "Blue Whale" (index 2)
  },
  {
    type: 1,
    question: "Which gas do plants absorb from the atmosphere?",
    choices: ["Oxygen (O2)", "Carbon Dioxide (CO2)", "Nitrogen (N2)", "Methane (CH4)"],
    answer: 1 // The correct answer is "Carbon Dioxide (CO2)" (index 1)
  },
  {
    type: 0,
    question: "Which country is known as the Land of the Rising Sun?",
    answer: "Japan"
  },
  {
    type: 0,
    question: "What is the chemical symbol for gold?",
    answer: "Au"
  },
  {
    type: 1,
    question: "Which of these is a fruit?",
    choices: ["Tomato", "Potato", "Carrot", "Broccoli"],
    answer: 0 // The correct answer is "Tomato" (index 0)
  },
  {
    type: 1,
    question: "Who wrote 'Romeo and Juliet'?",
    choices: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"],
    answer: 0 // The correct answer is "William Shakespeare" (index 0)
  },
  {
    type: 0,
    question: "Which gas do humans breathe out?",
    answer: "Carbon Dioxide (CO2)"
  },
  {
    type: 1,
    question: "What is the largest planet in our solar system?",
    choices: ["Mercury", "Venus", "Earth", "Jupiter"],
    answer: 3 // The correct answer is "Jupiter" (index 3)
  },
  {
    type: 0,
    question: "What is the largest mammal on land?",
    answer: "African Elephant"
  },
  {
    type: 1,
    question: "Which gas makes up the majority of Earth's atmosphere?",
    choices: ["Oxygen (O2)", "Carbon Dioxide (CO2)", "Nitrogen (N2)", "Argon (Ar)"],
    answer: 2 // The correct answer is "Nitrogen (N2)" (index 2)
  },
  {
    type: 0,
    question: "What is the national flower of Japan?",
    answer: "Cherry Blossom"
  },
  {
    type: 0,
    question: "In which year did the Titanic sink?",
    answer: "1912"
  },
  {
    type: 1,
    question: "What is the chemical symbol for water?",
    choices: ["H2O", "CO2", "O2", "N2"],
    answer: 0 // The correct answer is "H2O" (index 0)
  },
  {
    type: 1,
    question: "Which planet is often referred to as the 'Red Planet'?",
    choices: ["Earth", "Mars", "Venus", "Jupiter"],
    answer: 1 // The correct answer is "Mars" (index 1)
  },
  {
    type: 0,
    question: "What is the tallest mountain in the world?",
    answer: "Mount Everest"
  }
]

export function getRandomQuestion() {
  if (questionsData.length === 0) {
    return null; // No more questions left
  }

  const randomIndex = Math.floor(Math.random() * questionsData.length);
  const randomQuestion = questionsData[randomIndex];
  questionsData.splice(randomIndex, 1); // Remove the question from the array
  return randomQuestion;
}