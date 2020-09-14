const highScoresList = document.getElementById('highScoresList');
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

highScoresList.innerHTML = highScores.reverse()
  .map( score => {
    var paragraph = `<p><li class='high-score' style='font-size: 18px'> <b>ID</b>: ${score.id}` + 
        `</li><li class='high-score' style='font-size: 18px'> <b>Postcode</b>: ${score.postcode}` +
        `</li><li class='high-score' style='font-size: 18px'><b>Result</b>: ${score.score} </li></p>` +
        `</li><li class='high-score' style='font-size: 18px'><b>Date</b>: ${score.date} </li></p><br>`;
    return paragraph;
}).join("");



