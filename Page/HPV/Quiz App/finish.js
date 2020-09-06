const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore =  document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentStore");

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const MAX_HIGH_SCORES = 100;

var category;
if (mostRecentScore < 9) {
    category = "Low";
} else if (mostRecentScore >= 9 && mostRecentScore < 13) {
    category = "Medium";
} else {
    category = "High";
}

finalScore.innerText = category;

username.addEventListener("keyup", () => {
    saveScoreBtn.disabled = !((username.value >= 1000) && (username.value<10000) && (username.value%1 === 0));
});

saveHighScore = e => {
    console.log("click the button");
    e.preventDefault();

    const score = {
        id: create_UUID(),
        postcode: username.value,
        score: mostRecentScore
    };
    highScores.push(score);   
    // highScores.sort((a, b) => b.score - a.score);
    // highScores.splice(5);
    var text = `ID: ${score['id']}\nPostcode: ${username.value}\nScore: ${mostRecentScore}`;
    download(text);
    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign("/");
    
    console.log(highScores);    
}

function create_UUID(){
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid;
}

function download(text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', 'result.txt');
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
  }