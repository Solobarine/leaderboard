// Import Necessary Elements
import { name, score } from './elements.js';
import getApi from './getApi.js';
import sendScores from './sendScore.js';

// Function For Submit Event Button
function submitScores(e) {
  e.preventDefault();
  const boardName = name.value;
  const boardScore = score.value;
  sendScores(boardName, boardScore);
}

export default submitScores;

// Function to Refresh Scores
export function refreshScores(e) {
  e.preventDefault();
  getApi();
}

export const showAddScore = (showAddScoreForm,  showScoresSection) => {
  showAddScoreForm.classList.remove('hide')
  showAddScoreForm.classList.add('show')
  showScoresSection.classList.remove('show')
  showScoresSection.classList.add('hide')
}

export const showScores = (showAddScoreForm,  showScoresSection) => {
  showAddScoreForm.classList.remove('show')
  showAddScoreForm.classList.add('hide')
  showScoresSection.classList.remove('hide')
  showScoresSection.classList.add('show')
}
