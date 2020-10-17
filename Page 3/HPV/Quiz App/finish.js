// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyCvHXFp8UacIuaKJxY-o1fTsrnojfydSRY",
    authDomain: "tutorial-503bc.firebaseapp.com",
    databaseURL: "https://tutorial-503bc.firebaseio.com",
    projectId: "tutorial-503bc",
    storageBucket: "tutorial-503bc.appspot.com",
    messagingSenderId: "893460198749",
    appId: "1:893460198749:web:ee25ebd56130174f9224b4",
    measurementId: "G-XMKCMG5RXB"
};
firebase.initializeApp(firebaseConfig);

const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentStore");

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];


var category;
if (mostRecentScore < 40) {
    category = "Low";
    finalScore.innerText = category;
    finalScore.style.color = "green";
} else if (mostRecentScore >= 40 && mostRecentScore < 50) {
    category = "Medium";
    finalScore.innerText = category;
    finalScore.style.color = "orange";
} else {
    category = "High";
    finalScore.innerText = category;
    finalScore.style.color = "red";
}


var database;
var datas = getData();

//GET IP ADDRESS
// var ip;
// var x = fetch('http://api.ipify.org/?format=json')
//     .then(results => results.json())
//     .then(function (data) { ip = data.ip })
//     .catch(function (error) {ip = ''});


username.addEventListener("keyup", () => {
    saveScoreBtn.disabled = !((username.value >= 1000) && (username.value < 10000) && (username.value % 1 === 0));
});

function create_UUID() {
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
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


function getData() {
    firebase.database().ref('/').once('value', function (snapshot) {
        snapshot.forEach(function (childSnapshot) {
            //var childKey = childSnapshot.key;
            var childData = childSnapshot.val();
            database = childData['records'];
            console.log(database);
        })
    });
}

saveHighScore = e => {
    //console.log("click the button");
    e.preventDefault();

    const score = {
        id: create_UUID(),
        postcode: username.value,
        score: mostRecentScore,
        date: Date().replace(' (Australian Eastern Standard Time)', ''),
        // IP: ip
    };

    database.push(score);
    var text = `ID: ${score['id']}\nPostcode: ${score['postcode']}\nScore: ${score['score']}\nDate: ${score['date']}`;
    download(text);

    //save to cloud
    if (database == undefined) { 
        database = [];
    };

    //console.log(database);
    firebase.database().ref("User").set({
        name: "Jeremy Howard",
        admin: "Jeremy Howard",
        records: database
    });

    //save to local storage
    localStorage.setItem('highScores', JSON.stringify(highScores));
    //window.location.assign("index.html");
}