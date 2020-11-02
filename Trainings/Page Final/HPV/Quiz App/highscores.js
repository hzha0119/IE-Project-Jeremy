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

function getData(postcode) {
  firebase.database().ref('/').once('value', function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      var childKey = childSnapshot.key;
      var childData = childSnapshot.val();
      database = childData['records'];
      console.log(postcode);
      var filterData = database.filter(x => x.postcode == postcode);
      if ((postcode == undefined) || (postcode.length == 0)) {
        writeData(database);
      } else {
        if (filterData.length == 0) {
          highScoresList.innerHTML = `<span style="font-size:40px">Sorry</span><br><br><hr><br><br>`
          + `<span style="font-size:20px">We don't have records at that place :(</span><br><br>`
          + `<span style="font-size:20px">Thank you for searching there.</span><br><br>`;
        }
        else {
          writeData(filterData);
        }       
      }
    })
  });
}

function writeData(dataset) {
  if (dataset == undefined) { dataset = [] };
  highScoresList.innerHTML = dataset.reverse()
    .map( score => {
      var paragraph = `</li><li class='high-score'><b>Datetime</b>: ${score.date} </li></p>` +
        `</li><li class='high-score'> <b>Postcode</b>: ${score.postcode}` +
        `</li><li class='high-score'><b>Result</b>: ${score.risk} </li></p><hr>`;
          
      return paragraph;
  }).join("");
}


function postcodeFunction() {
  var val = document.getElementById("postcodeValue").value;
  if ((val.length == 0)||((val % 1 == 0) && (val >= 1000) && (val < 10000))){
    getData(val);
  }
  else {
    highScoresList.innerHTML = `<span style="font-size:40px">Opps!!!</span><br><br><hr><br><br>` 
    + `<span style="font-size:20px">Invalid input ...</span><br><br>`
    + `<span style="font-size:20px">Please enter 4-digit number.</span><br><br>`
    + `<span style="font-size:20px">Appreciated :)</span><br><br>`;
  }
  
}