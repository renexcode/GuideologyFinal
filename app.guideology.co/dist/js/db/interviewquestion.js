


var db = firebase.database();
function interviewQuestionFun() {
    
var hiddenId = document.getElementById('hiddenId').value;
var dentalName = document.getElementById(`dentalName`).value;
var interviewQuestions = document.getElementById(`interviewQuestions`).value;
var key = firebase.database().ref('academics').push().key;
userUID = firebase.auth().currentUser.uid
var id = hiddenId|| Date.now()
// console.log(userUID, 'userID ................')
 const interviewQuestionsObj = {
    id: id,
    dentalName: dentalName,
    interviewQuestions: interviewQuestions,
    uid: userUID,
 }
if (!dentalName|| !interviewQuestions ) return null
   



  db.ref('interviewQuestions/' + id).set(interviewQuestionsObj);
//   window.location.href = "interviewquestion.html"
  $('#interviewQuestionsForm').submit(function (e) {
    e.preventDefault();
    $('#exampleModalCenter').modal('show');
});
//   document.getElementById('academicsPara2').innerHTML = `"Your form has been submitted <i class="bi bi-check-circle" style="color:green"></i>"`
//   window.location.href = 'myacademics.html'
  dentalName= "";
  interviewQuestions= "";
  hiddenId= '';
};

