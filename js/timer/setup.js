export function setUpTimer({
  _timerObj,
  _quiz,
  _answer,
  score,
  endQuiz,
  updateTimerDisplay,
}) {
  _timerObj.timer = setInterval(() => {
    _timerObj.timeRemaining--;
    updateTimerDisplay({ _quiz, _timerObj });

    if (_timerObj.timeRemaining === 0) {
      clearInterval(_timerObj.timer);
      endQuiz({
        _timerObj,
        _quiz,
        _answer,
        score,
      });
    }
  }, 1000);
}
