


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
// Send Data to Databse Start
const academicsDataFun = () => {
var hiddenId = document.getElementById('hiddenId').value;
var courseCode = document.getElementById(`courseCode`).value;
var courseTitle = document.getElementById(`courseTitle`).value;
var subject = document.getElementById(`subject`).value;
var credits = document.getElementById(`credits`).value;
var grade = document.getElementById(`grade`).value;
var key = firebase.database().ref('academics').push().key;
userUID = firebase.auth().currentUser.uid
// console.log(userUID, 'userID ................')
 const academicsData = {
    courseCode: courseCode,
    courseTitle: courseTitle,
    subject: subject,
    credits: credits,
    grade: grade,
    uid: userUID,
    key: key,
    // key2: key
 }
if (!courseCode|| !courseTitle|| !subject|| !credits|| !grade ) return null
   

    var id = hiddenId|| Date.now()

  db.ref('academics/' + key).set(academicsData);
  document.getElementById('academicsPara2').innerHTML = `"Your form has been submitted <i class="bi bi-check-circle" style="color:green"></i>"`
//   window.location.href = 'myacademics.html'
  courseCode= "";
  courseTitle= "";
  subject= "";
  credits= "";
  grade= "";
  hiddenId= '';
};

// Send Data to Databse End


// READ REVEIWS

var myAcademics = document.getElementById('myAcademics');
var datDataRef = db.ref('/academics');

// ######################################################//

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    var myAcademics = document.getElementById('myAcademics');
    var uid = user.uid;
    const datDataRef = firebase.database().ref('academics/');
    const userData = datDataRef.orderByChild('uid').equalTo(user.uid);
    // if (userData) {
    //   document.getElementById('subjectHeader').style.display = 'block'
    // }
    userData.on('value', snap =>{
        snap.forEach((data) => {
          var tr = document.createElement('tr')
          tr.setAttribute('class', 'test')
tr.id = data.key;
tr.innerHTML = academicsTemplate(data.val())
myAcademics.appendChild(tr);;
          // li.classList.add('card')
            console.log('Datawali Key',data.key)
            console.log(data.val())
        })
    })
  //   firebase.database().ref('datData/').once("value", snap => {
  //     console.log(snap.val())
  // })
  } else {
    console.log("User Logout please Signin")
  }
});
firebase.database().ref('academics').once('value',  snap => {
  snap.forEach((data) => {

      console.log(`Update FunctionKey!!!!!!!!!!!! >>>>>>>>> ${data.key}`)
  })
  // console.log(`Remove FunctionKey!!!!!!!!!!!! >>>>>>>>> ${data.key}`)
})

// Update function
function update() {
  // courseCode,
  // courseTitle,
  // subject,
  // credits,
  // grade
  // var myAcademicsRef = db.ref('/academics');
  // myAcademicsRef.on("child_changed", data => {
  //   let titleId = data.key;
  //   let courseCode = data.val().courseCode;
  //   let courseTitle = data.val().courseTitle;
  //   let subject = data.val().subject;
  //   let credits = data.val().credits;
  //   let grade = data.val().grade;
  
  //   let listNode = document.getElementById(titleId);
  //   listNode.innerHTML = academicsTemplate(titleId, courseCode, courseTitle, subject, credits, grade);
  // });

  firebase.database().ref('academics').once('value',  snap => {
    snap.forEach((data) => {
     
      var popupCourseCode = document.getElementById('popupCourseCode');
      var popupCourseTitle = document.getElementById('popupCourseTitle');
      var popupSubject = document.getElementById('popupSubject');
      var popupCredits = document.getElementById('popupCredits');
      var popupGrades = document.getElementById('popupGrades');
      
        var updates = {
          courseCode: popupCourseCode.value,
          courseTitle: popupCourseTitle.value,
          subject: popupSubject.value,
          credits: popupCredits.value,
          grade: popupGrades.value,
        }
      data.ref.update(updates)
        firebase.database().ref('academics/' + data.key).update(updates)
      
        // alert('updated')
     console.log(`Update FunctionKey!!!!!!!!!!!! >>>>>>>>> ${data.key}`)
    //  console.log(`Update FunctionKey!!!!!!!!!!!! >>>>>>>>> ${data.key2}`)
    })
    // console.log(`Remove FunctionKey!!!!!!!!!!!! >>>>>>>>> ${data.key}`)
  })
  
}


var myAcademics = document.getElementById('myAcademics');
  var myAcademicsRef = db.ref('/academics');

  
  myAcademicsRef.on('child_added', (data) => {

});
// var commentsRef = firebase.database().ref('post-comments/' + postId);
// commentsRef.on('child_added', function(data) {
//   addCommentElement(postElement, data.key, data.val().text, data.val().author);
// });

// commentsRef.on('child_changed', function(data) {
//   setCommentValues(postElement, data.key, data.val().text, data.val().author);
// });

// commentsRef.on('child_removed', function(data) {
//   deleteComment(postElement, data.key);
// });
  myAcademicsRef.on('child_changed', (data) => {
    console.log('DDDDDDDDDDDDDDDDDDDDDDDDDDDDDd', data.key)
    var academicsNode = document.getElementById(data.key);
    academicsNode.innerHTML = academicsTemplate(data.val());
    
  });
  
  myAcademicsRef.on('child_removed', (data) => {
    var academicsNode = document.getElementById(data.key);
    academicsNode.parentNode.removeChild(academicsNode);
  });
  
  myAcademics.addEventListener('click', (e) => {
    var academicsNode = e.target.parentNode
  // alert("Are you sure you want to delete this?")

    // UPDATE REVEIW
    if (e.target.classList.contains('edit')) {
      
      var popupCourseCode = document.getElementById('popupCourseCode');
      var popupCourseTitle = document.getElementById('popupCourseTitle');
      var popupSubject = document.getElementById('popupSubject');
      var popupCredits = document.getElementById('popupCredits');
      var popupGrades = document.getElementById('popupGrades');
      var hiddenId = document.getElementById('hiddenId');

      popupCourseCode.value = academicsNode.querySelector('.popupCourseCode').innerText;
      popupCourseTitle.value  = academicsNode.querySelector('.popupCourseTitle').innerText;
      popupSubject.value  = academicsNode.querySelector('.popupSubject').innerText;
      popupCredits.value  = academicsNode.querySelector('.popupCredits').innerText;
      popupGrades.value  = academicsNode.querySelector('.popupGrades').innerText;
      hiddenId.value = academicsNode.id;
    }
 
    // DELETE REVEIW
    if (e.target.classList.contains('delete')) {
      if (confirm('Are you sure you want to delete this?') === true) {
      var id = academicsNode.id;
      db.ref('academics/' + id).remove();
      window.location.reload()
    }
   
 }
  
  
  }
  );
  

 
function academicsTemplate({
  courseCode,
  courseTitle,
  subject,
  credits,
  grade,
  key}) {

//   <button class='delete'>Delete</button>
// <i class="bi bi-trash"></i>
  return `
 <td class="d-lg-block  d-none popupCourseCode">${courseCode}</td>
  <td class="d-lg-block d-none popupCourseTitle">${courseTitle}</td>
  <td class="d-lg-block d-none popupSubject">${subject}</td>
  <td class="d-lg-block d-none popupCredits">${credits}</td>
  <td class="d-lg-block d-none popupGrades">${grade}</td>
  <button  class='delete d-lg-block  d-none'style="background: none; border: none; font-size: 14px; outline: none; color: red;">Delete</button>
  <button class='edit d-lg-block  d-none'style="background: none; border: none; font-size: 14px; outline: none; color: #5AB9EA;" data-toggle="modal" data-target="#exampleModalCenter">Edit</button>
 

<td class="popupCourseCode d-lg-none" style="flex-basis: 10%;"><span class="table-responsive-stack-thead" style="">Course Code:</span> ${courseCode}</td>
<td class="popupCourseTitle d-lg-none" style="flex-basis: 10%;"><span class="table-responsive-stack-thead" style="">Course Title:</span> ${courseTitle}</td>
<td class="popupSubject d-lg-none" style="flex-basis: 10%;"><span class="table-responsive-stack-thead" style="">Subject:</span> ${subject}</td>
<td class="popupCredits d-lg-none" style="flex-basis: 10%;"><span class="table-responsive-stack-thead" style="">Credits:</span> ${credits}</td>
<td class="popupGrades d-lg-none" style="flex-basis: 10%;"><span class="table-responsive-stack-thead" style="">Grades:</span> ${grade}</td>
<td class=" d-lg-none"><button class='delete'style="background: none; border: none; outline: none; color: red;">Delete</button><button class='edit ml-3'style="background: none; border: none; outline: none; color: #5AB9EA;" data-toggle="modal" data-target="#exampleModalCenter">Edit</button> </td>

`
};

$('#courseForm').submit(function (e) {
  e.preventDefault();
  $('#exampleModal').modal('show');
});

//   #5AB9EA
//   <td style="flex-basis: 10%;"><span class="table-responsive-stack-thead" style="">Order VPS:</span> <button type="button" class="btn btn-primary">Configure</button></td>

//   <div style="display: flex; flex-direction: row" class="mb-5">
//   <button class='edit'style="background: none; border: none; font-size: 14px; outline: none; color: green;">Edit</button> 
//   <button class='delete ml-3'style="background: none; border: none; font-size: 14px; outline: none; color: red;">Delete</button>
//   </div>

{/* <button class='delete'>Delete</button>
<button class='edit'>Edit</button> */}