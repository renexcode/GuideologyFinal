
//  var config = {
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

var db = firebase.database();
const topDataFun = () => {
    // alert('Test')
    var term = document.getElementById('Term').value;
    var year = document.getElementById('Year').value;
    var academicStatus = document.getElementById('academicStatus').value;
    var completionStatus = document.getElementById('completionStatus').value;
    var hiddenId = document.getElementById('hiddenId').value;
    userUID = firebase.auth().currentUser.uid
    // console.log(userUID, 'userID ................')
     const academicsHeader = {
        term : term,
        year: year,
        academicStatus: academicStatus,
        completionStatus: completionStatus,
        uid: userUID,
     }
    if (!term || !year || !academicStatus || !completionStatus) return null
       
    
        var id = hiddenId|| Date.now()
    
      db.ref('academicsHeader/' + id).set(academicsHeader);
      document.getElementById('formSave').setAttribute("disabled", "disabled", 'class', 'disableBtn');
      document.getElementById('topForm').innerHTML = `"Saved <i class="bi bi-check-circle" style="color:green"></i> Add Course <i  class="bi bi-plus-circle-fill" style="color:green"></i>"`
    //   window.location.href = 'myacademics.html'
      term= "";
      year= "";
      academicStatus= "";
      completionStatus= "";
      hiddenId= '';
    };