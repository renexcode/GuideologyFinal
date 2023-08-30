// Storage Start here
var files = [];
document.getElementById("file_upload").addEventListener("change", function(e) {
  files = e.target.files;
  for (let i = 0; i < files.length; i++) {
    console.log(files[i]);
  }
});

document.getElementById("uploadSupplementalWriting").addEventListener("click", function() {
  //checks if files are selected
  if (files.length != 0) {
    //Loops through all the selected files
    for (let i = 0; i < files.length; i++) {
      //create a storage reference
      var storage = firebase.storage().ref().child(`SupplementalWriting/ ${files[i].name}`);

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
            document.getElementById('supplementWriting').disabled = false;
            document.getElementById('uploadSupplementalWriting').disabled = true;
            storage
            .getDownloadURL()
            .then(function(url) {
                firebase.auth().onAuthStateChanged((user) => {
                   
                      // User is signed in, see docs for a list of available properties
                      // https://firebase.google.com/docs/reference/js/firebase.User
                
                      const datDataRef = firebase.database().ref('registerUsers/');
                      const userData = datDataRef.orderByChild('uid').equalTo(user.uid);
                      userData.on('value', snap =>{
                          snap.forEach((data) => {
                           console.log(data.val().email)
                           var id = document.getElementById('hiddenId').value || Date.now()
                           const personalStatementEditingdocs = {
                            name: data.val().full_name,
                            email: data.val().email,
                            phone: data.val().phone_number,
                            doc: url,
                            uid: user.uid,
                            id: id,
                            timestamp: new Date().toLocaleString('en-US'),
                         }
                         
                         firebase.database().ref('supplementalWriting/' + id).set(personalStatementEditingdocs);   
                          })
                      })
                
                  });
              console.log(url);
            })
            .catch(function(error) {
              console.log("error encountered");
            });
          
          document.getElementById(
            "uploading"
          ).innerHTML += ` Uploaded sucessfully <i class="bi bi-check-circle" style="color:green"></i><br />`;
          document.getElementById('uploadSupplementalWriting').innerHTML = ` Submitted <i class="bi bi-check-circle" style="color:white"></i>`;
          //get file url

        }
      );
    }
  } else {
    alert("No file chosen");
  }
});

// function getFileUrl(filename) {
//   //create a storage reference
//   var storage = firebase.storage().ref(filename);

  
// }
