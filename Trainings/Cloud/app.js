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
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

// var db = [{ postcode: 3000, city: "Melbourne" }, { postcode: 6000, city: "Perth" }, { postcode: 2000, city: "Sydney" }];
var database;
var datas = getData();

function getData() {
    firebase.database().ref('/').once('value', function (snapshot) {
        snapshot.forEach(function (childSnapshot) {
            var childKey = childSnapshot.key;
            var childData = childSnapshot.val();
            document.getElementById("data").innerHTML = childData['name'] + ', ' + childData['age'];
            database = childData['data'];
            console.log(database);
        })
    });

    if (database != undefined) {
        console.log(1);
        return database;
    } else {
        console.log(1);
        return [];
    }
}

function writeData() {
    if (database == undefined) {database = []};
    console.log(database);

    var value1 = document.getElementById("nameField").value;
    var value2 = document.getElementById("ageField").value;
    database.push({ postcode: 3000, city: "Melbourne" })

    firebase.database().ref("User").set({
        name: value1,
        age: value2,
        data: database
    });
    datas = getData()
}