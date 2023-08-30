
// var db = firebase.database();

const timelineDataFun = () => {
var name = document.getElementById(`name`).value;
var start_date = document.getElementById(`start_date`).value;
var des = document.getElementById(`des`).value;
var key = firebase.database().ref('academics').push().key;
userUID = firebase.auth().currentUser.uid
// console.log(userUID, 'userID ................')
 const timeLineData = {
    name: name,
    start_date: start_date,
    des: des,
    uid: userUID,
    key: key
 }
if (!name|| !start_date|| !des ) return null
   

  firebase.database().ref('timelineData/' + key).set(timeLineData);
//   document.getElementById('academicsPara2').innerHTML = `"Your form has been submitted <i class="bi bi-check-circle" style="color:green"></i>"`
//   window.location.href = 'myacademics.html'
  name= "";
  start_date= "";
  des= "";
};

$('#courseForm').submit(function (e) {
    e.preventDefault();
    $('#exampleModalCenter').modal('show');
});