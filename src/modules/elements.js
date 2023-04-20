// Select Required Elements
const scoreBoard = document.querySelector('.results');
const name = document.querySelector('#name');
const score = document.querySelector('#score');
const subBtn = document.querySelector('#submit');
const refBtn = document.querySelector('.refresh');
const scoreButton = document.getElementById('scores_button')
const addButton = document.getElementById('add_button')
const showAddScoreForm = document.getElementById('add_scores')
const showScoresSection = document.querySelector('.show_results')

export { // eslint disable-line
  scoreBoard,
  name,
  score,
  subBtn,
  refBtn,
  showAddScoreForm,
  showScoresSection,
  scoreButton,
  addButton
};
