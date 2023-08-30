


  // READ REVEIWS
  
  var timelineDataCard = document.getElementById('timelineDataCard');
  var timelineDataCardRef = firebase.database().ref('timelineData/');
  
  // ######################################################//
  
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var timelineDataCard = document.getElementById('timelineDataCard');
      const timelineDataCardRef = firebase.database().ref('timelineData/');
      const userData = timelineDataCardRef.orderByChild('uid').equalTo(user.uid);
    //   if (userData) {
    //     document.getElementById('subjectHeader').style.display = 'block'
    //   }
      userData.on('value', snap =>{
          snap.forEach((data) => {
            var tr = document.createElement('tr')
            tr.setAttribute('class', 'test')
  tr.id = data.key;
  tr.innerHTML = timelineTemplate(data.val())
  timelineDataCard.appendChild(tr);;
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


  
  var timelineDataCard = document.getElementById('timelineDataCard');
    var timelineDataCardRef = firebase.database().ref('timelineData/');
  

    timelineDataCardRef.on('child_changed', (data) => {
      var interviewQuestionNode = document.getElementById(data.key);
      interviewQuestionNode.innerHTML = timelineTemplate(data.val());
      
    });
    
    timelineDataCardRef.on('child_removed', (data) => {
      var interviewQuestionNode = document.getElementById(data.key);
      interviewQuestionNode.parentNode.removeChild(interviewQuestionNode);
    });
    
    timelineDataCard.addEventListener('click', (e) => {
      var interviewQuestionNode = e.target.parentNode
    // alert("Are you sure you want to delete this?")
  
      // UPDATE REVEIW
      if (e.target.classList.contains('edit')) {
        
        var popupCourseCode = document.getElementById('popupCourseCode');
        var popupCourseTitle = document.getElementById('popupCourseTitle');
        var popupSubject = document.getElementById('popupSubject');
        var popupCredits = document.getElementById('popupCredits');
        var popupGrades = document.getElementById('popupGrades');
        var hiddenId = document.getElementById('hiddenId');
  
        popupCourseCode.value = interviewQuestionNode.querySelector('.popupCourseCode').innerText;
        popupCourseTitle.value  = interviewQuestionNode.querySelector('.popupCourseTitle').innerText;
        popupSubject.value  = interviewQuestionNode.querySelector('.popupSubject').innerText;
        popupCredits.value  = interviewQuestionNode.querySelector('.popupCredits').innerText;
        popupGrades.value  = interviewQuestionNode.querySelector('.popupGrades').innerText;
        hiddenId.value = interviewQuestionNode.id;
      }
   
      // DELETE REVEIW
      if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure you want to delete this?') === true) {
        var id = interviewQuestionNode.id;
        firebase.database().ref('timelineData/' + id).remove();
        window.location.reload()
    }
   
     
   }
    
    
    }
    );
    
   
  function timelineTemplate({name,start_date, des}) {
  
  //   <button class='delete'>Delete</button>
  // <i class="bi bi-trash"></i>
    return `
   <td class="popupCourseCode"> ${name} <span class="ml-2" style="color:#28a745;"> ( ${start_date} ) </span> <br>  <span style="font-size:12px;"> ${des} </span> </td>
   <button  class='delete' style="background: none; border: none; font-size: 14px; outline: none; color: red;">Delete</button>`
  };


//   <td class="popupCourseCode d-lg-none" style="flex-basis: 10%;"><label style="color:black; "><b> Dental School Name: </b></label> <br> ${dentalName} <br> <label style="color:black; "><b> Your Question: </b></label> <br> ${interviewQuestions} </td>
//   <td class=" d-lg-none"><button class='delete'style="background: none; border: none; outline: none; color: red;">Delete</button><button class='edit ml-3'style="background: none; border: none; outline: none; color: #5AB9EA;" data-toggle="modal" data-target="#exampleModalCenter">Edit</button> </td>




{/* <button class='edit d-lg-block  d-none'style="background: none; border: none; font-size: 14px; outline: none; color: #5AB9EA;" data-toggle="modal" data-target="#exampleModalCenter">Edit</button> */}