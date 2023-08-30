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

// CREATE 
  
var addDatForm = document.getElementById('addDatForm');
var perceptualAbility   = document.getElementById('perceptualAbility');
var quantitativeReasoing    = document.getElementById('quantitativeReasoing'); 
var readingComprehension    = document.getElementById('readingComprehension'); 
var biology    = document.getElementById('biology'); 
var generalChemitry    = document.getElementById('generalChemitry'); 
var organicChemistry    = document.getElementById('organicChemistry'); 
var totalScience    = document.getElementById('totalScience'); 
var academicAverage    = document.getElementById('academicAverage'); 
var hiddenId   = document.getElementById('hiddenId');

addDatForm.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!perceptualAbility.value || !quantitativeReasoing.value || !readingComprehension.value || !biology.value || !generalChemitry.value || !organicChemistry.value || !totalScience.value || !academicAverage.value) return null

  var id = hiddenId.value || Date.now()

  userUID = firebase.auth().currentUser.uid
  console.log(userUID, 'userID ................')

  db.ref('datData/' + id).set({
    id: id,
    perceptualAbility: perceptualAbility.value,
    quantitativeReasoing: quantitativeReasoing.value,
    readingComprehension: readingComprehension.value,
    biology: biology.value,
    generalChemitry: generalChemitry.value,
    organicChemistry: organicChemistry.value,
    totalScience: totalScience.value,
    academicAverage: academicAverage.value,
    uid: userUID,
  });
  document.getElementById('addDatpara').innerHTML = `Form has been submitted <i class="bi bi-check-circle" style="color:green"></i>`
  // window.location.href = 'dat.html'
  perceptualAbility= "";
  quantitativeReasoing= "";
  readingComprehension= "";
  biology= "";
  generalChemitry= "";
  organicChemistry= "";
  totalScience= "";
  academicAverage= "";
  hiddenId.value = '';
});

userUID = firebase.auth().currentUser
console.log(userUID, 'userID ................')

$('#addDatForm').submit(function (e) {
    e.preventDefault();
    $('#exampleModalCenter').modal('show');
});


