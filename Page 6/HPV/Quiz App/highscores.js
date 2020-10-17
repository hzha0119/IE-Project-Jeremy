const highScoresList = document.getElementById('highScoresList');
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

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


var database;
var datas = getData();

function getData() {
  firebase.database().ref('/').once('value', function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      var childKey = childSnapshot.key;
      var childData = childSnapshot.val();
      database = childData['records'];
      console.log(database);
      writeData()
    })
  });
}

function writeData() {
  if (database == undefined) { database = [] };
  highScoresList.innerHTML = database.reverse()
    .map( score => {
      var datetime = score.date.slice(0, score.date.indexOf("(") - 1);
      var paragraph = `</li><li class='high-score'><b>Date</b>: ${datetime} </li></p>` +
        `</li><li class='high-score'> <b>Postcode</b>: ${score.postcode}` +
        `</li><li class='high-score'><b>Result</b>: ${score.risk} </li></p><hr>`;
          
      return paragraph;
  }).join("");
}

