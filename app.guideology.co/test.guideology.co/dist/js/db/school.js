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
  
var schoolForm = document.getElementById('schoolForm');
var school   = document.getElementById('schoolName');
var hiddenId   = document.getElementById('hiddenId');

schoolForm.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!school.value) return null

  var id = hiddenId.value || Date.now()

  db.ref('schools/' + id).set({
    school: school.value,
  });
  document.getElementById('schools_para').innerHTML = `Form has been submitted <i class="bi bi-check-circle" style="color:green"></i>`
  school= "";
  hiddenId.value = '';
});

