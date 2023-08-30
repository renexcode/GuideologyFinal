// Storage Start here
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

//   Storage Start
var files = [];
document.getElementById("file").addEventListener("change", function(e) {
  files = e.target.files;
  if(this.files[0].size > 5000000){
    alert("File is too big!");
    this.value = "";
 };
  for (let i = 0; i < files.length; i++) {
    console.log('Files==============>',files[i]);
  }
});

document.getElementById("save").addEventListener("click", function() {
  //checks if files are selected
  if (files.length != 0) {
    //Loops through all the selected files
    for (let i = 0; i < files.length; i++) {
      //create a storage reference
      var storage = firebase.storage().ref().child(`users/ ${files[i].name}`);


      //upload file
      var upload = storage.put(files[i]);

      //update progress bar
      upload.on(
        "state_changed",
        function progress(snapshot) {
          var percentage =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          document.getElementById("progress").value = percentage;
        },

        function error() {
          alert("error uploading file");
        },

        function complete() {
          //get file url
storage
.getDownloadURL()
.then((url) => {
        userUID = firebase.auth().currentUser.uid
        console.log(userUID)
        // console.log(userUID, 'userID ................')
         const profileImage = {
            imageUrl: url,
            uid: userUID,
         }
        var id = document.getElementById('hiddenId').value || Date.now()
          db.ref('profileImage/' + id).set(profileImage);
    // document.getElementById('test').src = url;

  console.log(`fileUrl ======>>> ${url}`);
})
.catch((error) => {
  console.log("error encountered", error.message);
});
          document.getElementById(
            "uploading"
          ).innerHTML += ` uploaded sucessfully <i class="bi bi-check-circle" style="color:green"></i><br />`;
        }
      );
    }
  } else {
    alert("No file chosen");
  }
});
// for (let i = 0; i < files.length; i++) {
//       console.log('Files==============>',files[i].name);
//        }
// var storage = firebase.storage().ref().child(`users/icon.png`);
// console.log( 'Storage',storage)

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
 console.log('userID', user.uid)
    }
 else {
  }
});
 

// window.onload = getFileUrl;

// function getFileUrl(filename) {
//   for (let i = 0; i < files.length; i++) {
//     console.log('Files==============>',files[i].name);
//      }
//   //create a storage reference
 
// }

// getFileUrl()

// Update Data Start
function updateData() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;
      var fullName = document.getElementById('fullName').value;
      // var email = document.getElementById('email').value;
      var number = document.getElementById('number').value;
  
      var myAccountUpdate = {
        full_name : fullName,
        // email: email,
        number: number
      }
  
      firebase.database().ref('registerUsers/' + uid).update(myAccountUpdate)
      window.location.reload()
     
    } else {
    }
  });
   
}
