import { MULTIPLE_QUESTION_TYPE, TEXT_QUESTION_TYPE } from "../types.js";
import {
  displayMultipleChoiceQuestion,
  displayTextAnswerQuestion,
} from "./questions.js";

const questionFactory = {
  [MULTIPLE_QUESTION_TYPE]: displayMultipleChoiceQuestion,
  [TEXT_QUESTION_TYPE]: displayTextAnswerQuestion,
};

export default questionFactory;
