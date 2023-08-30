
 var config = {
    apiKey: "AIzaSyD5DMyubSCOcqQzqFWboc7NziRYclrdOxg",
    authDomain: "guideology-cc2b5.firebaseapp.com",
    databaseURL: "https://guideology-cc2b5-default-rtdb.firebaseio.com",
    projectId: "guideology-cc2b5",
    storageBucket: "guideology-cc2b5.appspot.com",
    messagingSenderId: "130250364586",
    appId: "1:130250364586:web:2e9d6427edb6a9e67ce2d3",
    measurementId: "G-RSC5CNSPEG"
  };
  
  firebase.initializeApp(config);

var db = firebase.database();

const timelineDataFun = () => {
var name = document.getElementById(`name`).value;
var start_date = document.getElementById(`start_date`).value;
var des = document.getElementById(`des`).value;
var key = firebase.database().ref('academics').push().key;
userUID = firebase.auth().currentUser.uid
// console.log(userUID, 'userID ................')
 const timeLineData = {
    name: name,
    start_date: start_date,
    des: des,
    uid: userUID,
    key: key
 }
if (!name|| !start_date|| !des ) return null
   

  db.ref('timelineData/' + key).set(timeLineData);
//   document.getElementById('academicsPara2').innerHTML = `"Your form has been submitted <i class="bi bi-check-circle" style="color:green"></i>"`
//   window.location.href = 'myacademics.html'
  name= "";
  start_date= "";
  des= "";
};

$('#courseForm').submit(function (e) {
    e.preventDefault();
    $('#exampleModalCenter').modal('show');
});