import { TEXT_QUESTION_TYPE, MULTIPLE_QUESTION_TYPE } from "./types.js";

const config = {
  question: {
    supportedTypes: [MULTIPLE_QUESTION_TYPE, TEXT_QUESTION_TYPE],
    timeLimit: 15, //seconds
  },
};

export default config;
