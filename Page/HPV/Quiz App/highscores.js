const highScoresList = document.getElementById('highScoresList');
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

highScoresList.innerHTML = highScores
  .map( score => {
    return `<p><li class='high-score'> ID: ${score.id} </li><li class='high-score'> Postcode: ${score.postcode}</li><li class='high-score'>Score: ${score.score} </li></p><br>`;
}).join("");


