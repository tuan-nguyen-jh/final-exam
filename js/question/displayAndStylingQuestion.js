import { MULTIPLE_QUESTION_TYPE, TEXT_QUESTION_TYPE } from "../types.js";
import questionFactory from "./questionFactory.js";

const displayAndStylingQuestion = (
  question,
  { textContainer, choicesContainer, checkAnswer, answerForm, ansInput }
) => {
  const displayQuestionFnc = questionFactory[question.type];

  if (!displayQuestionFnc) {
    throw new Error({
      status: 400,
      data: {
        message: `Unknow ${question.type}`,
      },
    });
  }

  displayQuestionFnc(question, {
    choicesContainer,
    answerForm,
    checkAnswer,
    ansInput,
  });

  if (question.type === TEXT_QUESTION_TYPE) {
    textContainer.style.display = "flex";
    choicesContainer.style.display = "none";
  } else if (question.type === MULTIPLE_QUESTION_TYPE) {
    textContainer.style.display = "none";
    choicesContainer.style.display = "flex";
  }
};

export default displayAndStylingQuestion;
