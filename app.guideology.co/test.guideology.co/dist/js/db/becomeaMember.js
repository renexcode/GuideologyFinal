function becomeaMember()
            {
                var takentheDAT=document.querySelector('input[name="taken_dat"]:checked').value
                var appliedBefore=document.querySelector('input[name="applied_before"]:checked').value
                var interviewBefore=document.querySelector('input[name="interviewed_before"]:checked').value
                var hiddenId = document.getElementById('hiddenId').value;
                userUID = firebase.auth().currentUser.uid
                let becomeaMemberObj={
                    takentheDAT:takentheDAT,
                    appliedBefore:appliedBefore,
                    interviewBefore:interviewBefore,
                    uid:userUID
                }
                console.log(becomeaMemberObj)
                localStorage.setItem("profile_data",JSON.stringify(becomeaMemberObj))
                if (!takentheDAT|| !appliedBefore|| !interviewBefore) return null
   

    var id = hiddenId|| Date.now()

  firebase.database().ref('becomeaMember/' + id).set(becomeaMemberObj);
//   document.getElementById('academicsPara2').innerHTML = `"Your form has been submitted <i class="bi bi-check-circle" style="color:green"></i>"`
//   window.location.href = 'myacademics.html'
  takentheDAT= "";
  appliedBefore= "";
  interviewBefore= "";
  hiddenId= "";

}
$('#becomeaMemberForm').submit(function (e) {
    e.preventDefault();
    $('#exampleModalCenter').modal('show');
});