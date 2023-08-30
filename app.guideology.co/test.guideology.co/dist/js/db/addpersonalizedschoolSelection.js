
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


const addPersonalizedschoolSelection = () => {
    // var APSSform = document.getElementById('APSSform');
    var schoolPlanning = document.getElementById('schoolPlanning').value;
    var gpaandScience = document.getElementById('gpaandScience').value;
    var datScores = document.getElementById('datScores').value;
    var stateofResidence = document.getElementById('stateofResidence').value;
    var shadowingHours = document.getElementById('shadowingHours').value;
    var volunteeringHours = document.getElementById('volunteeringHours').value;
    var getAdmittedDentalSchool = document.getElementById('getAdmittedDentalSchool').value;
    var maxSchoolNum = document.getElementById('maxSchoolNum').value;
    var preferStates = document.getElementById('preferStates').value;
    var listanyDentalSchools = document.getElementById('listanyDentalSchools').value;
    var notes = document.getElementById('notes').value;
    var hiddenId = document.getElementById('hiddenId').value;
userUID = firebase.auth().currentUser.uid
// console.log(userUID, 'userID ................')
 const addPersonalizedschoolSelection = {
    schoolPlanning : schoolPlanning,
    gpaandScience: gpaandScience,
    datScores: datScores,
    stateofResidence: stateofResidence,
    shadowingHours: shadowingHours,
    volunteeringHours: volunteeringHours,
    getAdmittedDentalSchool: getAdmittedDentalSchool,
    maxSchoolNum: maxSchoolNum,
    preferStates: preferStates,
    listanyDentalSchools: listanyDentalSchools,
    notes: notes,
 }
 if (!schoolPlanning || !gpaandScience || !datScores || !stateofResidence || !shadowingHours || !volunteeringHours || !getAdmittedDentalSchool || !maxSchoolNum ||!preferStates || !listanyDentalSchools || !notes ) return null
   

    var id = hiddenId|| Date.now()

  db.ref('addPersonalizedschoolSelection/' + id).set(addPersonalizedschoolSelection);
  document.getElementById('proceedtoCheckoutBtn').style.display = 'block';
  document.getElementById('APSSpara').innerHTML = `"Your form has been submitted <i class="bi bi-check-circle" style="color:green"></i>"`
  schoolPlanning= "";
  gpaandScience= "";
  datScores= "";
  stateofResidence= "";
  shadowingHours= "";
  volunteeringHours= "";
  getAdmittedDentalSchool= "";
  maxSchoolNum= "";
  preferStates= "";
  listanyDentalSchools= "";
  notes= "";
  hiddenId= '';
};

$('#APSSform').submit(function (e) {
    e.preventDefault();
    $('#exampleModalCenter').modal('show');
});



