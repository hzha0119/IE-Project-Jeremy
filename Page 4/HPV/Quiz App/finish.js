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
category = getCategory(mostRecentScore);
finalScore.innerText = category;
switch (category) {
    case "Low":
        finalScore.style.color = "green";
        document.getElementById("analysis").innerHTML =
            `Congradulation! Your body is in fit condition which means your healthy habit is well in your life.`;
        document.getElementById("recommendation").innerHTML = 
            `Just a friendly reminder that keep preventing HPV like <b>vaccine</b> should be in mind. There is an 
            <a href = "../../HPV prevtion.html" target="_top _blank"> useful information</a> to prevent potential risk.`;
        break;
    case "Medium":
        finalScore.style.color = "orange";
        document.getElementById("analysis").innerHTML =
            `You may have potential risk with HPV infection. BUT 
            <br>don't too much worry, most of HPV viruses can be treated by your body.`;
        document.getElementById("recommendation").innerHTML = 
            `Although most HPV viruses are not serious, you need to be awared of some types of HPV that are strong effective.
            <a href = "../../topics.html" target="_top _blank">Click here</a> for more information.`;
        break;
    case "High":
        finalScore.style.color = "red";
        document.getElementById("analysis").innerHTML =
            `WARNING! You body has bad condition with HPV virus infection. There's no joking, it's serious!`;
        document.getElementById("recommendation").innerHTML = 
            `We strongly recommend you to make an appiontment with a doctor ASAP. To find a GP for HPV infection, 
            <a href = "../../autocomplete.html" target="_top _blank">click here</a> to Google Map page.`;
        break;
    default:
        break;
}


var database;
var datas = getData();

username.addEventListener("keyup", () => {
    saveScoreBtn.disabled = !((username.value >= 1000) && (username.value < 10000) && (username.value % 1 === 0));
});

function getCategory(num) {
    if (num < 40) {
        return "Low";
    } else if (num >= 40 && num < 50) {
        return "Medium";
    } else {
        return "High";
    }
}

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
        risk: getCategory(mostRecentScore),
    };

    console.log(score);
    database.push(score);
    var text = `Your result:\nID: ${score['id']}\nPostcode: ${score['postcode']}\nRisk: ${score['risk']}\nDate: ${score['date']}`;
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