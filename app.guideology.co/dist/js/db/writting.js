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
var writtingForm = document.getElementById('writtingForm');

writtingForm.addEventListener('submit', (e) => {

  var personalStatement = document.getElementById('personalStatement').value;
  var goodSchool = document.getElementById('goodSchool').value;
  var manualDexterity = document.getElementById('manualDexterity').value;
  var descriptionForVolunteering = document.getElementById('descriptionForVolunteering').value;
  var descriptionForAchievements = document.getElementById('descriptionForAchievements').value;
  var title = document.getElementById('title').value;
  var keyResponsibilities = document.getElementById('keyResponsibilities').value;
  var hiddenId = document.getElementById('hiddenId').value;
  userUID = firebase.auth().currentUser.uid
   const writtingData = {
      personalStatement : personalStatement,
      goodSchool: goodSchool,
      manualDexterity: manualDexterity,
      descriptionForVolunteering: descriptionForVolunteering,
      descriptionForAchievements: descriptionForAchievements,
      title: title,
      keyResponsibilities: keyResponsibilities,
      uid: userUID
   }

   console.log(`Testing =====>>> ${writtingData.personalStatement} ${writtingData.goodSchool} ${writtingData.descriptionForAchievements} ${writtingData.descriptionForVolunteering} ${writtingData.title} ${writtingData.keyResponsibilities}`)
  
  if (!personalStatement || !goodSchool || !descriptionForVolunteering|| !descriptionForAchievements||  !title|| !keyResponsibilities|| !manualDexterity) return null
    // var id = hiddenId|| Date.now()
    userUID = firebase.auth().currentUser.uid
  
    db.ref('writting/' + userUID).set(writtingData);
    document.getElementById('writtingPara').innerHTML = `"Your form has been submitted <i class="bi bi-check-circle" style="color:green"></i>"`
  //   window.location.href = 'myacademics.html'
  personalStatement = '';
  goodSchool= '';
  manualDexterity= '';
  descriptionForVolunteering= '';
  descriptionForAchievements= '';
  title= '';
  keyResponsibilities= '';
  hiddenId= '';
    
});




$('#writtingForm').submit(function (e) {
    e.preventDefault();
    $('#exampleModalCenter').modal('show');
});