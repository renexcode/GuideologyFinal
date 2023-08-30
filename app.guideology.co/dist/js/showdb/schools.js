// var config = {
//     apiKey: "AIzaSyD5DMyubSCOcqQzqFWboc7NziRYclrdOxg",
//     authDomain: "guideology-cc2b5.firebaseapp.com",
//     databaseURL: "https://guideology-cc2b5-default-rtdb.firebaseio.com",
//     projectId: "guideology-cc2b5",
//     storageBucket: "guideology-cc2b5.appspot.com",
//     messagingSenderId: "130250364586",
//     appId: "1:130250364586:web:2e9d6427edb6a9e67ce2d3",
//     measurementId: "G-RSC5CNSPEG"
//   };
  
//   firebase.initializeApp(config);
//   var db = firebase.database();

  

// READ REVEIWS

var selectedSchoolName = document.getElementById('selectedSchoolName');
var selectedSchoolNameRef = db.ref('/schools');

selectedSchoolNameRef.on('child_added', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var childData = childSnapshot.val();
      console.log(`AAAAAAAAAAAAAAAAAAAAAAAAA ${childData}`)
      selectedSchoolName.innerHTML = childData
    });
}

// selectedSchoolNameRef.on('child_added', (data) => {
//     console.log(`datDataRef ===>>> ${data}`)
//   selectedSchoolName.innerHTML = data.val()
// }
);
