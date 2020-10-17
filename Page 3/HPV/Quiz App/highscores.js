const highScoresList = document.getElementById('highScoresList');
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

// highScoresList.innerHTML = highScores.reverse()
//   .map( score => {
//     var paragraph = `<p><li class='high-score' style='font-size: 18px'> <b>ID</b>: ${score.id}` + 
//         `</li><li class='high-score' style='font-size: 18px'> <b>Postcode</b>: ${score.postcode}` +
//         `</li><li class='high-score' style='font-size: 18px'><b>Result</b>: ${score.score} </li></p>` +
//         `</li><li class='high-score' style='font-size: 18px'><b>Date</b>: ${score.date} </li></p><br>`;
//     return paragraph;
// }).join("");

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
      var paragraph = `<p><li class='high-score' style='font-size: 18px'> <b>ID</b>: ${score.id}` + 
          `</li><li class='high-score' style='font-size: 18px'> <b>Postcode</b>: ${score.postcode}` +
          `</li><li class='high-score' style='font-size: 18px'><b>Result</b>: ${score.score} </li></p>` +
          `</li><li class='high-score' style='font-size: 18px'><b>Date</b>: ${score.date} </li></p><br>`;
      return paragraph;
  }).join("");
}

