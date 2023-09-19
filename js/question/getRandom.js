export function getRandomQuestion({ remainingQuestions }) {
  const randomIndex = Math.floor(Math.random() * remainingQuestions.length);
  const question = this.remainingQuestions[randomIndex];
  return [randomIndex, question];
}
