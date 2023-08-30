

function applicatonStatus()
            {
                var applied=document.querySelector('input[name="Applied"]:checked').value
                var supplementalCompleted=document.querySelector('input[name="supplementalCompleted"]:checked').value
                var interview=document.querySelector('input[name="interview"]:checked').value
                var Waitlisted=document.querySelector('input[name="Waitlisted"]:checked').value
                var accepted=document.querySelector('input[name="Accepted"]:checked').value
                var date=document.getElementById('dateID').value
                var schoolName=document.getElementById('Selected_School_ST').value
                var hiddenId = document.getElementById('hiddenId').value;
                userUID = firebase.auth().currentUser.uid
                var id = hiddenId|| Date.now()
                let applicationStatusObj={
                    id: id,
                    applied:applied,
                    supplementalCompleted:supplementalCompleted,
                    interview:interview,
                    Waitlisted:Waitlisted,
                    accepted:accepted,
                    date:date,
                    schoolName:schoolName,
                    uid:userUID
                }
                console.log(applicationStatusObj)
                localStorage.setItem("profile_data",JSON.stringify(applicationStatusObj))
                if (!applied|| !supplementalCompleted|| !interview|| !Waitlisted|| !accepted|| !date || !schoolName ) return null
   

    // var id = hiddenId|| Date.now()

  firebase.database().ref('applicationStatus/' + id).set(applicationStatusObj);
//   document.getElementById('academicsPara2').innerHTML = `"Your form has been submitted <i class="bi bi-check-circle" style="color:green"></i>"`
//   window.location.href = 'myacademics.html'
  applied= "";
  supplementalCompleted= "";
  interview= "";
  Waitlisted= "";
  accepted= "";
  date= "";
  schoolName= "";
  hiddenId= "";

}
$('#applicationStatusForm').submit(function (e) {
    e.preventDefault();
    $('#formSubmitModal').modal('show');
});


// ##################################%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// Initial On Loading
$(document).ready(function () {
    getAllSemester();
});
  // ALL DATA
  var academicMasterData = [];
  var isOpenCoruseModel = false;
  
  // GET ALL SEMESTER DATA FROM DATABASE
  const getAllSemester = () => {
      firebase.auth().onAuthStateChanged((user) => {
          // console.log(`Testing............... ${firebase.database().ref('experiences/', from)}`)
          if (user) {
      const ref = firebase.database().ref('applicationStatus');
      const userData = ref.orderByChild('uid').equalTo(user.uid);
      userData.on('value', (snapshot) => {
           const semesters = snapshot.val();
           const result = Object.keys(semesters).map((key) => [key, semesters[key]]);
           academicMasterData = [];
           for (let i = 0; i < result.length; i++) {
                const element = result[i];
                academicMasterData.push(element[1])
           }
           generateSemesterView();
      }, (errorObject) => {
           console.log('The read failed: ' + errorObject.name);
  
      });
  }
  })
  }
  var x = document.getElementById("applicationStatusTableBody").rows.length;
  if(x === 0){
    const applicationStatusSection = document.getElementById('applicationStatusTableBody');
    applicationStatusSection.innerHTML = '';
      const tr = document.createElement('tr');
      tr.innerHTML = '<td><p style="text-align: center;">No Application Status Added</p></td>';
      applicationStatusSection.appendChild(tr)
  }

const generateSemesterView = () => {
    const applicationStatusSection = document.getElementById('applicationStatusTableBody');
    applicationStatusSection.innerHTML = '';

    for (let index = 0; index < academicMasterData.length; index++) {
         const item = academicMasterData[index];

         const tr = document.createElement('tr');
        //  schoolName,
         //   applied,
         //   supplementalCompleted,
         //   interview,
         //   date,
         //   Waitlisted,
         //   accepted
            tr.innerHTML = `
            <td class="col-lg-4 col-md-2"> 
                ${item.schoolName}
             </td>
             <td class="col-lg-2 col-md-2"> 
             ${item.applied}
             </td>
             <td class="col-lg-2 col-md-2"> 
             ${item.supplementalCompleted}
             </td>
             <td class="col-lg-2 col-md-2">
             ${item.interview} <span style="font-weight:600;"> ${item.date} </span>
             </td>
           
             <td class="col-lg-2 col-md-2"> 
             ${item.Waitlisted}
              </td>
             <td class="col-lg-2 col-md-2"> 
             ${item.accepted}
              </td>
            
             <td class="col-lg-2 col-md-2 btn-field">
                <button data-toggle="modal" data-target="#exampleModalCenter${item.id}" id="isEdit${item.id}${index}">Edit</button>
                <button onclick="confirmCoruseEdit(${item.id}, ${index})" id="confirmEdit${item.id}${index}" style="display: none;">Confirm</button>
                <button data-toggle="modal" data-target="#isDelete${item.id}">Delete</button>
             </td>
       

      
        <!---Confirmation Modal---->
        <div class="modal fade" id="isDelete${item.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
           <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                   <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">Delete ${item.schoolName}  </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                             <span aria-hidden="true">&times;</span>
                        </button>
                   </div>
                   <div class="modal-body p-4">
                      <h2> Are you sure to delete this?? </h2>
                   </div>
                   <div class="modal-footer">
                        <button type="button" class="btn btn-primary" onclick="removeSemester(${item.id})" data-dismiss="modal">Yes</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">No</button>
                   </div>
              </div>
         </div>
     </div>
         
          <!--Edit Modal--->
<div class="modal fade" id="exampleModalCenter${item.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
<div class="modal-dialog modal-dialog-centered" role="document">
<div class="modal-content">
<div class="modal-header">
<h5 class="modal-title" id="exampleModalLongTitle">Update Application Status</h5>
<button type="button" class="close" data-dismiss="modal" aria-label="Close">
<span aria-hidden="true">&times;</span>
</button>
</div>
<div class="modal-body">
<div  class="container">
<div class="container">
                
<form onsubmit="return false">
<div class="row">
    <div class="col-lg-6 col-md-4 col-sm-4">
        <label id="explablel">School Name</label>
    </div>
    <div class="col-lg-6 col-sm-12">
         <input id="schoolName${item.id}" value="${item.schoolName}" class="form-control" type="text"  placeholder=" - - - - "  required/>
    </div>
</div>
<div class="row">
    <div class="col-lg-6 col-md-4 col-sm-4">
        <label id="explablel">Applied?</label>
    </div>
    <div class="col-lg-6 col-sm-12">
         <input id="applied${item.id}" value="${item.applied}" class="form-control" type="text"  placeholder=" - - - - "  required/>
    </div>
</div>
<div class="row">
    <div class="col-lg-6 col-md-4 col-sm-4">
        <label id="explablel">Supplemental completed?</label>
    </div>
    <div class="col-lg-6 col-sm-12">
         <input id="supplementalcompleted${item.id}"  value="${item.supplementalCompleted}" class="form-control" type="text"  placeholder=" - - - - " required/>
    </div>
</div>
<div class="row">
    <div class="col-lg-6 col-md-4 col-sm-4">
        <label id="explablel">Interview Scheduled?

        </label>
    </div>
    <div class="col-lg-6 col-sm-12">
         <input id="interview${item.id}" value="${item.interview}" class="form-control" type="text"  placeholder=" - - - - "  required/>
         <input type="date" id="updatedate${item.id}" value="${item.date}" name="date" style="height: 25px;
                        margin-left: 0px;
                        border: 1px solid cornflowerblue;
                        padding: 5px 2px 5px 10px;
                        color: black;
                        font-size: 12px;
                        border-radius: 5px;
                        margin-top: 2px;">

                        <hr>
    </div>
</div>
<div class="row">
    <div class="col-lg-6 col-md-4 col-sm-4">
        <label id="explablel">Waitlisted?? </label>
    </div>
    <div class="col-lg-6 col-sm-12">
         <input id="Waitlisted${item.id}" value="${item.Waitlisted}" class="form-control" type="text"  placeholder=" - - - - "  required/>
    </div>
</div>
<div class="row">
    <div class="col-lg-6 col-md-4 col-sm-4">
        <label id="explablel">Accepted?</label>
    </div>
    <div class="col-lg-6 col-sm-12">
         <input id="accepted${item.id}" value="${item.accepted}" class="form-control" type="text"  placeholder=" - - - - "  required/>
    </div>
</div>


</form>

</div>
<div class="modal-footer">
<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
<button type="button" class="btn btn-primary" onclick="updateSemester(${item.id})">Update</button>
</div>
</div>
</div>
</div>

    `;
applicationStatusSection.appendChild(tr);
const tableId = item.id.toString();
if (item && item.coruseData !== null && item.coruseData !== "undefined") {
//   courseDataView(item, tableId);
}
        }
        
      
    }
    


// Edit function

//####################################################3

/**
* To Get Specific Semester When add/edit or delete coruse
* @param {string or number} coruseID 
* @returns semesterMasterData
*/
const getSemesterByID = (coruseID) => {
    var semesterMasterData;
    firebase.database().ref('applicationStatus/' + coruseID).on('value', (snapshot) => {
         semesterMasterData = snapshot.val();
    })
    return semesterMasterData
}


/**
* Delete Single Coruse Data
* @param {number} semesterID 
* @param {number} coruesIndex 
*/


// #############################3

/**
* To Taggle Semester From for updated
* @param {boolean} staus 
*/



// Delete
const removeSemester = (semesterID) => {
    firebase.database().ref('applicationStatus/' + semesterID).remove();
    alertMessage("This Experience has been removed successfully..", "success")
    setTimeout(window.location.reload(), 10000);
}

/**
* To Update Semester
* @param {number} semesterID 
* @returns 
*/
// Update
const updateSemester = (semesterID) => {
    console.log(semesterID)

    var applied=document.getElementById(`applied${semesterID}`).value
    var supplementalCompleted=document.getElementById(`supplementalcompleted${semesterID}`).value
    var interview=document.getElementById(`interview${semesterID}`).value
    var Waitlisted=document.getElementById(`Waitlisted${semesterID}`).value
    var accepted=document.getElementById(`accepted${semesterID}`).value
    var date=document.getElementById(`updatedate${semesterID}`).value
    var schoolName=document.getElementById(`schoolName${semesterID}`).value

//     if (applied !== "Yes" || applied !== "No") {
//         alertMessage("Please write Yes or No..", "warning");
//         return false;
//    } else if (supplementalCompleted !== "Yes" || supplementalCompleted !== "No") {
//     alertMessage("Please write Yes or No..", "warning");
//         return false;
//    } else if (interview !== "Yes" || interview !== "No") {
//     alertMessage("Please write Yes or No..", "warning");
//         return false;
//    } else if (Waitlisted !== "Yes" || Waitlisted !== "No") {
//     alertMessage("Please write Yes or No..", "warning");
//         return false;
//    }else if (!accepted !== "Yes" || accepted !== "No") {
//     alertMessage("Please write Yes or No..", "warning");
//         return false;
//    }else if (!date) {
//     alertMessage("Date status can't be blank..", "warning");
//     return false;
// }
// else if (!schoolName) {
//     alertMessage("School Name status can't be blank..", "warning");
//     return false;
// }

    if (semesterID !== null && semesterID !== "undefined") {

         let getData = getSemesterByID(semesterID);

         getData.applied = applied;
         getData.supplementalCompleted = supplementalCompleted;
         getData.interview = interview;
         getData.Waitlisted = Waitlisted;
         getData.accepted = accepted;
         getData.date = date;
         getData.schoolName = schoolName;

         firebase.database().ref('applicationStatus/' + semesterID).update(getData);
         alertMessage("This Application Status has been updated successfully..", "success")
         setTimeout(window.location.reload(), 10000);

    }
}


const alertMessage = (message, status = "success") => {
    toastr.options = {
         "closeButton": true,
         "debug": false,
         "newestOnTop": false,
         "progressBar": true,
         "positionClass": "toast-top-right",
         "preventDuplicates": false,
         "onclick": null,
         "showDuration": "300",
         "hideDuration": "5000",
         "timeOut": "5000",
         "extendedTimeOut": "1000",
         "showEasing": "swing",
         "hideEasing": "linear",
         "showMethod": "fadeIn",
         "hideMethod": "fadeOut"
    }

    Command: toastr[status](message)
}
// ##################################%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// ###################### Show Data Start here ################################//
// var applicationStatusTableBody = document.getElementById('applicationStatusTableBody');
// var applicationStatusRef = firebase.database().ref('/applicationStatus');

// firebase.auth().onAuthStateChanged((user) => {
//   if (user) {
//     var applicationStatusTableBody = document.getElementById('applicationStatusTableBody');
//     var uid = user.uid;
//     const applicationStatusRef = firebase.database().ref('applicationStatus/');
//     const userData = applicationStatusRef.orderByChild('uid').equalTo(user.uid);
//     if (userData) {
//       document.getElementById('subjectHeader').style.display = 'block'
//     }
//     userData.on('value', snap =>{
//         snap.forEach((data) => {
//           var tr = document.createElement('tr')
//           tr.setAttribute('class', 'test')
// tr.id = data.key;
// tr.innerHTML = applicationStatusTamplate(data.val())
// applicationStatusTableBody.appendChild(tr);;
//           // li.classList.add('card')
//             console.log('Datawali Key',data.key)
//             console.log(data.val())
//         })
//     })
//   //   firebase.database().ref('datData/').once("value", snap => {
//   //     console.log(snap.val())
//   // })
//   } else {
//     console.log("User Logout please Signin")
//   }
// });
// firebase.database().ref('applicationStatus').once('value',  snap => {
//   snap.forEach((data) => {

//       console.log(`Update FunctionKey!!!!!!!!!!!! >>>>>>>>> ${data.key}`)
//   })
//   // console.log(`Remove FunctionKey!!!!!!!!!!!! >>>>>>>>> ${data.key}`)
// })

// // Update function
// function update() {
//   firebase.database().ref('applicationStatus').once('value',  snap => {
//     snap.forEach((data) => {
     
//       var popupCourseCode = document.getElementById('popupCourseCode');
//       var popupCourseTitle = document.getElementById('popupCourseTitle');
//       var popupSubject = document.getElementById('popupSubject');
//       var popupCredits = document.getElementById('popupCredits');
//       var popupGrades = document.getElementById('popupGrades');
      
//         var updates = {
//           courseCode: popupCourseCode.value,
//           courseTitle: popupCourseTitle.value,
//           subject: popupSubject.value,
//           credits: popupCredits.value,
//           grade: popupGrades.value,
//         }
      
//         firebase.database().ref().child('applicationStatus/' + data.key).update(updates)
      
//         // alert('updated')
//      console.log(`Update FunctionKey!!!!!!!!!!!! >>>>>>>>> ${data.key}`)
//     })
//     // console.log(`Remove FunctionKey!!!!!!!!!!!! >>>>>>>>> ${data.key}`)
//   })
  
// }


// var applicationStatusTableBody = document.getElementById('applicationStatusTableBody');
//   var applicationStatus = firebase.database().ref('/applicationStatus');

  
//   applicationStatus.on('child_added', (data) => {

// });

//   applicationStatus.on('child_changed', (data) => {
//     console.log('DDDDDDDDDDDDDDDDDDDDDDDDDDDDDd', data.key)
//     var academicsNode = document.getElementById(data.key);
//     academicsNode.innerHTML = applicationStatusTamplate(data.val());
    
//   });
  
//   applicationStatus.on('child_removed', (data) => {
//     var academicsNode = document.getElementById(data.key);
//     academicsNode.parentNode.removeChild(academicsNode);
//   });
  
//   applicationStatusTableBody.addEventListener('click', (e) => {
//     var academicsNode = e.target.parentNode
//     if (confirm('Are you sure you want to delete this?') === true) {
//  // UPDATE REVEIW

      
//   var popupCourseCode = document.getElementById('popupCourseCode');
//   var popupCourseTitle = document.getElementById('popupCourseTitle');
//   var popupSubject = document.getElementById('popupSubject');
//   var popupCredits = document.getElementById('popupCredits');
//   var popupGrades = document.getElementById('popupGrades');
//   var hiddenId = document.getElementById('hiddenId');

//   popupCourseCode.value = academicsNode.querySelector('.popupCourseCode').innerText;
//   popupCourseTitle.value  = academicsNode.querySelector('.popupCourseTitle').innerText;
//   popupSubject.value  = academicsNode.querySelector('.popupSubject').innerText;
//   popupCredits.value  = academicsNode.querySelector('.popupCredits').innerText;
//   popupGrades.value  = academicsNode.querySelector('.popupGrades').innerText;
//   hiddenId.value = academicsNode.id;
// }

// // DELETE REVEIW
// if (e.target.classList.contains('edit')) {
// if (e.target.classList.contains('delete')) {
//   var id = academicsNode.id;
//   firebase.database().ref('applicationStatus/' + id).remove();
// }

// window.location.reload()
//     }
   
//   }
//   );
  

 
// function applicationStatusTamplate({
//   schoolName,
//   applied,
//   supplementalCompleted,
//   interview,
//   date,
//   Waitlisted,
//   accepted}) {
    
   
// //   <button class='delete'>Delete</button>
// // <i class="bi bi-trash"></i>
//   return `
//  <td class="d-lg-block  d-none popupCourseCode">${schoolName}</td>
//   <td class="d-lg-block d-none popupCourseTitle">${applied}</td>
//   <td class="d-lg-block d-none popupSubject">${supplementalCompleted}</td>
//   <td class="d-lg-block d-none popupCredits">${interview} <span style="font-weight:600;"> ${date} </span> </td>
//   <td class="d-lg-block d-none popupGrades">${Waitlisted}</td>
//   <td class="d-lg-block d-none popupGrades">${accepted}</td>
//   <button  class='delete d-lg-block  d-none'style="background: none; border: none; font-size: 14px; outline: none; color: red;">Delete</button>
//   <button class='edit d-lg-block  d-none'style="background: none; border: none; font-size: 14px; outline: none; color: #5AB9EA;" data-toggle="modal" data-target="#exampleModalCenter">Edit</button>


//   <td class="popupCourseCode d-lg-none" style="flex-basis: 10%;"><span class="table-responsive-stack-thead" style="">Course Code:</span> ${schoolName}</td>
//   <td class="popupCourseTitle d-lg-none" style="flex-basis: 10%;"><span class="table-responsive-stack-thead" style="">Course Title:</span> ${applied}</td>
//   <td class="popupSubject d-lg-none" style="flex-basis: 10%;"><span class="table-responsive-stack-thead" style="">Subject:</span> ${supplementalCompleted}</td>
//   <td class="popupCredits d-lg-none" style="flex-basis: 10%;"><span class="table-responsive-stack-thead" style="">Credits:</span> ${interview} ${date}</td>
//   <td class="popupGrades d-lg-none" style="flex-basis: 10%;"><span class="table-responsive-stack-thead" style="">Grades:</span> ${Waitlisted}</td>
//   <td class="popupGrades d-lg-none" style="flex-basis: 10%;"><span class="table-responsive-stack-thead" style="">Grades:</span> ${accepted}</td>
//   <td class=" d-lg-none"><button class='delete'style="background: none; border: none; outline: none; color: red;">Delete</button><button class='edit ml-3'style="background: none; border: none; outline: none; color: #5AB9EA;" data-toggle="modal" data-target="#exampleModalCenter">Edit</button> </td> 
// `
// };

// $('#courseForm').submit(function (e) {
//   e.preventDefault();
//   $('#exampleModal').modal('show');
// });



