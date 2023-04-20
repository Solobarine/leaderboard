// Import Functions
import './style.css';

import submitScores, { refreshScores, showAddScore, showScores } from './modules/functions.js';

// Import Elements
import { refBtn, subBtn, addButton, scoreButton, showAddScoreForm, showScoresSection} from './modules/elements.js';

console.log(showAddScoreForm)

// Create Eventb Listener For Submit Button
subBtn.addEventListener('click', submitScores);

// Event Listener for Refresh Button
refBtn.addEventListener('click', refreshScores);

addButton.addEventListener('click', () => showAddScore(showAddScoreForm, showScoresSection))
scoreButton.addEventListener('click', () => showScores(showAddScoreForm, showScoresSection))
