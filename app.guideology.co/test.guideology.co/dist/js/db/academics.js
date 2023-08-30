
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

const academicsDataFun = () => {
var hiddenId = document.getElementById('hiddenId').value;
var courseCode = document.getElementById(`courseCode`).value;
var courseTitle = document.getElementById(`courseTitle`).value;
var subject = document.getElementById(`subject`).value;
var credits = document.getElementById(`credits`).value;
var grade = document.getElementById(`grade`).value;
var key = firebase.database().ref('academics').push().key;
userUID = firebase.auth().currentUser.uid
// console.log(userUID, 'userID ................')
 const academicsData = {
    courseCode: courseCode,
    courseTitle: courseTitle,
    subject: subject,
    credits: credits,
    grade: grade,
    uid: userUID,
    key: key
 }
if (!courseCode|| !courseTitle|| !subject|| !credits|| !grade ) return null
   

    var id = hiddenId|| Date.now()

  db.ref('academics/' + key).set(academicsData);
  
  document.getElementById('academicsPara2').innerHTML = `"Your form has been submitted <i class="bi bi-check-circle" style="color:green"></i>"`
//   window.location.href = 'myacademics.html'
  courseCode= "";
  courseTitle= "";
  subject= "";
  credits= "";
  grade= "";
  hiddenId= '';
};

$('#courseForm').submit(function (e) {
    e.preventDefault();
    $('#exampleModalCenter').modal('show');
});