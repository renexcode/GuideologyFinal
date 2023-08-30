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

const experienceFun = () =>{
var selectExperience   = document.getElementById('selectExperience').value;
var organization    = document.getElementById('organization').value; 
var from    = document.getElementById('from').value; 
var to    = document.getElementById('to').value; 
var hours    = document.getElementById('hours').value; 
var hiddenId   = document.getElementById('hiddenId').value;
var key = firebase.database().ref().push().key;
    if (!selectExperience) {
        alertMessage("selectExperience can't be blank..", "warning");
        return false;
    } else if (!organization) {
        alertMessage("organization can't be blank..", "warning");
        return false;
    } else if (!from) {
        alertMessage("from can't be blank..", "warning");
        return false;
    } else if (!to) {
        alertMessage("to can't be blank..", "warning");
        return false;
    } else if (!hours) {
        alertMessage("hours can't be blank..", "warning");
        return false;
    }else {
        var id = hiddenId.value || Date.now()
       userUID = firebase.auth().currentUser.uid
      db.ref('experiences/' + id).set({
        id: id,
        selectExperience: selectExperience,
        organization: organization,
        from: from,
        to: to,
        hours: hours,
        uid: userUID
      });
      
    }
    $('#experienceForm').submit(function (e) {
        e.preventDefault();
        $('#exampleModalCenter').modal('show');
    });
}


