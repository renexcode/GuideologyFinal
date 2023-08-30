// Storage Start here
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

//   Storage Start
var files = [];
document.getElementById("file_upload").addEventListener("change", function(e) {
  files = e.target.files;
  if(this.files[0].size > 5000000){
    // alert("File is too big!");
    document.getElementById('evolutionPara').innerHTML = "File is too big it should be 5mb"
    this.value = "";
 };
  for (let i = 0; i < files.length; i++) {
    console.log('Files==============>',files[i]);
  }
});

document.getElementById("referafriendbtn").addEventListener("click", function() {
  //checks if files are selected
  if (files.length != 0) {
    //Loops through all the selected files
    for (let i = 0; i < files.length; i++) {
      //create a storage reference
      var storage = firebase.storage().ref().child(`addanEvalution/ ${files[i].name}`);


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
        //   alert("error uploading file");
        document.getElementById('evolutionPara').innerHTML = "Error uploading file"
        },

        function complete() {
          //get file url
storage
.getDownloadURL()
.then((url) => {
        userUID = firebase.auth().currentUser.uid
        var title = document.getElementById('title').value;
        var hiddenId   = document.getElementById('hiddenId').value;
        var id = hiddenId.value || Date.now()
        // console.log(userUID, 'userID ................')
         const addanEvalution = {
            id: id,
            title: title,
            imageUrl: url,
            uid: userUID,
         }
         var key = firebase.database().ref('academics').push().key;
          firebase.database().ref('addanEvalution/' + id).set(addanEvalution);
        //   $('#addEcvolutionForm').submit(function (e) {
        //             e.preventDefault();
        //             $('#exampleModalCenter').modal('show');
        //         });
          window.location.href = "evaluations.html"
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
    // alert("No file chosen");
    document.getElementById('evolutionPara').innerHTML = "No file chosen or input is empty."
  }
});

// setTimeout(() => {
//     $('#addEcvolutionForm').submit(function (e) {
//         e.preventDefault();
//         $('#exampleModalCenter').modal('show');
//     });
//   }, 5000)

