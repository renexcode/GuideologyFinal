




function becomeaMember()
            {
               
   
              firebase.auth().onAuthStateChanged((user) => {

                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
            
                const becomeaMemberRef = firebase.database().ref('registerUsers/');
                const becomeaMemberData = becomeaMemberRef.orderByChild('uid').equalTo(user.uid);
                becomeaMemberData.on('value', snap => {
                    snap.forEach((data) => {
                      var takentheDAT=document.querySelector('input[name="taken_dat"]:checked').value
                      var appliedBefore=document.querySelector('input[name="applied_before"]:checked').value
                      var interviewBefore=document.querySelector('input[name="interviewed_before"]:checked').value
                      var hiddenId = document.getElementById('hiddenId').value;
                        var userUID = firebase.auth().currentUser.uid
                        var id = hiddenId|| Date.now()
                        // console.log(userUID, 'userID ................')
                         const becomeaMember = {
                            name: data.val().full_name,
                            email: data.val().email,
                            phone: data.val().phone_number,
                            uid: userUID,
                            id: id,
                            timestamp: new Date().toLocaleString('en-US'),
                            takentheDAT: takentheDAT,
                            appliedBefore:appliedBefore,
                            interviewBefore: interviewBefore
                         }
                         localStorage.setItem("profile_data",JSON.stringify(becomeaMember))
                         if (!takentheDAT|| !appliedBefore|| !interviewBefore) return null
                           
                        
                           
                        
                          db.ref('becomeaMember/' + id).set(becomeaMember);
            
                      
                    })
                })
            
            });
                      
  document.getElementById('referafriendbtn').innerHTML = ` Submitted <i class="bi bi-check-circle" style="color:white"></i>`
//   document.getElementById('referafriendbtn').disabled = true
  document.getElementById('proceedDisableBtn').disabled  = false
  document.getElementById('proceedDisableBtnMbl').disabled  = false
  document.getElementById('proceedDisableBtnMbl').innerHTML  = "Payment verified"
  takentheDAT= "";
  appliedBefore= "";
  interviewBefore= "";
  hiddenId= "";

}
// $('#becomeaMemberForm').submit(function (e) {
//     e.preventDefault();
//     $('#exampleModalCenter').modal('show');
// });