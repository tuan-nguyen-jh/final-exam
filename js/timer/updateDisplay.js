export function updateTimerDisplay({ _quiz, _timerObj }) {
  _quiz._counterText.textContent = _timerObj.timeRemaining;
}
