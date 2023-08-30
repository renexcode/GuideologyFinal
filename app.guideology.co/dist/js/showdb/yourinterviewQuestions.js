// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%////////////

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
window.location.reload()

};

// Initial On Loading
$(document).ready(function () {
    getAllSemester();
});

var db = firebase.database();


// var myExperiences = document.getElementById('myExperiences');

// #####################################################

  // ALL DATA
  var academicMasterData = [];
  var isOpenCoruseModel = false;
  
  // GET ALL SEMESTER DATA FROM DATABASE
  const getAllSemester = () => {
      firebase.auth().onAuthStateChanged((user) => {
          // console.log(`Testing............... ${firebase.database().ref('experiences/', from)}`)
          if (user) {
      const ref = firebase.database().ref('interviewQuestions');
      const userData = ref.orderByChild('uid').equalTo(user.uid);
      userData.on('value', (snapshot) => {
           const semesters = snapshot.val();
           const result = Object.keys(semesters).map((key) => [key, semesters[key]]);
           academicMasterData = [];
           console.log(academicMasterData)
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

  var x = document.getElementById("interviewQuestionsCards").rows.length;
  if(x === 0){
    const interviewQuestionsCards = document.getElementById('interviewQuestionsCards');
    interviewQuestionsCards.innerHTML = '';
      const tr = document.createElement('tr');
      tr.innerHTML = '<td><p style="text-align: center;">No Interview Question Added</p></td>';
      interviewQuestionsCards.appendChild(tr)
    //   document.getElementById('addMore').style.display = "none"
  }

const generateSemesterView = () => {
    const interviewQuestionsCards = document.getElementById('interviewQuestionsCards');
    interviewQuestionsCards.innerHTML = '';

    if (interviewQuestionsCards !== "") {
        document.getElementById('writebtn').style.display = "none"
         document.getElementById('addMore').style.display = "block"
    }

    for (let index = 0; index < academicMasterData.length; index++) {
         const item = academicMasterData[index];

         const tr = document.createElement('tr');
        
            tr.innerHTML = `
            <td class="col-lg-10">
            <label style="color:black; "><b> Dental School Name: </b></label> <br> <p style="line-break: anywhere;"> ${item.dentalName} </p> <br> <label style="color:black; "><b>Your Question: </b></label> <br> <p style="line-break: anywhere;" class="display"> ${item.interviewQuestions} </p>
            </td>
             <td class="col-lg-2 col-md-2 btn-field">
                <button data-toggle="modal" data-target="#editModal${item.id}" id="isEdit${item.id}${index}">Edit</button>
                <button data-toggle="modal" data-target="#isDelete${item.id}">Delete</button>
             </td>
       

      
        <!---Confirmation Modal---->
        <div class="modal fade" id="isDelete${item.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
           <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                   <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">Delete ${item.dentalName}  Experience </h5>
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
<div class="modal fade" id="editModal${item.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
<div class="modal-dialog modal-dialog-centered" role="document">
<div class="modal-content">
<div class="modal-header">
<h5 class="modal-title" id="exampleModalLongTitle">Update ${item.dentalName}</h5>
<button type="button" class="close" data-dismiss="modal" aria-label="Close">
<span aria-hidden="true">&times;</span>
</button>
</div>
<div class="modal-body">
<div  class="container">
<form onsubmit="return false">
                            <div class="row">
                                <div class="col-sm-12 list">
                                    <div class="mb-2 row justify-content-between">
                                        <div class="mob">
                                            <label id="lable_write" for="mass">Dental School</label>
                                            <input type="text" value="${item.dentalName}" id="dname${item.id}" cols="6" rows="1" placeholder="Name of Dental" class="form-control" maxlength="600" required>
                                        </div>
                                        <div class="mob mb-2">
                                            <label id="lable_write" for="mass">Paste Your Sample Interview Questions Below</label>
                                            <textarea value="${item.interviewQuestions}" placeholder="Type here..." id="iques${item.id}" maxlength="600" cols="6" rows="12" class="textarea form-control" required> ${item.interviewQuestions} </textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </form>
</div>
</div>
<div class="modal-footer">
<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
<button type="button" class="btn btn-primary" onclick="updateSemester(${item.id})">Update</button>
</div>
</div>
</div>
</div>

    `;
interviewQuestionsCards.appendChild(tr);
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
    firebase.database().ref('interviewQuestions/' + coruseID).on('value', (snapshot) => {
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
    firebase.database().ref('interviewQuestions/' + semesterID).remove();
    alertMessage("This Question has been removed successfully..", "success")
    setTimeout(() => {
        window.location.reload();
    }, 2000);
}

/**
* To Update Semester
* @param {number} semesterID 
* @returns 
*/
// Update
const updateSemester = (semesterID) => {
    console.log(semesterID)
    var dentalName = document.getElementById(`dname${semesterID}`).value;
    var interviewQuestions = document.getElementById(`iques${semesterID}`).value;

    if (!dentalName) {
         alertMessage("Dental name can't be blank..", "warning");
         return false;
    } else if (!interviewQuestions) {
         alertMessage("Interview question can't be blank..", "warning");
         return false;
    }


    if (semesterID !== null && semesterID !== "undefined") {
         let getData = getSemesterByID(semesterID);

         getData.dentalName = dentalName;
         getData.interviewQuestions = interviewQuestions;

         firebase.database().ref('interviewQuestions/' + semesterID).update(getData);
         alertMessage("This Question has been updated successfully..", "success")
        //  $(document).ready(function(){
        //     $('#openModalBtn').click(()=>{
        //         $('#exampleModal').modal('show');
        //         setTimeout(() => {
        //             $('#exampleModal').modal('hide');
        //         },3000);
        //     });
        // });
         setTimeout($('.modal-backdrop').remove(), 2000);
         setTimeout(() => {
        window.location.reload();
    }, 2000);

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

  const textarea = document.querySelector('.textarea');
  const display = document.querySelector('.display');
  
  textarea.addEventListener('keyup', (event) => {
    if (event.key === "Enter") {
      let content = textarea.value;
      content = content.replace(/\n/g, '<br>');
      display.innerHTML = content;
    }
  });


// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


//   // READ REVEIWS
  
//   var interviewQuestionsCards = document.getElementById('interviewQuestionsCards');
//   var interviewQuestionsRef = firebase.database().ref('interviewQuestions/');
  
//   // ######################################################//
  
//   firebase.auth().onAuthStateChanged((user) => {
//     if (user) {
//       var interviewQuestionsCards = document.getElementById('interviewQuestionsCards');
//       const interviewQuestionsRef = firebase.database().ref('interviewQuestions/');
//       const userData = interviewQuestionsRef.orderByChild('uid').equalTo(user.uid);
//     //   if (userData) {
//     //     document.getElementById('subjectHeader').style.display = 'block'
//     //   }
//       userData.on('value', snap =>{
//           snap.forEach((data) => {
//             var tr = document.createElement('tr')
//             tr.setAttribute('class', 'test')
//   tr.id = data.key;
//   tr.innerHTML = interviewquestionTemplate(data.val())
//   interviewQuestionsCards.appendChild(tr);;
//             // li.classList.add('card')
//               console.log('Datawali Key',data.key)
//               console.log(data.val())
//           })
//       })
//     //   firebase.database().ref('datData/').once("value", snap => {
//     //     console.log(snap.val())
//     // })
//     } else {
//       console.log("User Logout please Signin")
//     }
//   });


  
//   var interviewQuestionsCards = document.getElementById('interviewQuestionsCards');
//     var interviewQuestionsRef = firebase.database().ref('interviewQuestions/');
  

//     interviewQuestionsRef.on('child_changed', (data) => {
//       var interviewQuestionNode = document.getElementById(data.key);
//       interviewQuestionNode.innerHTML = interviewquestionTemplate(data.val());
      
//     });
    
//     interviewQuestionsRef.on('child_removed', (data) => {
//       var interviewQuestionNode = document.getElementById(data.key);
//       interviewQuestionNode.parentNode.removeChild(interviewQuestionNode);
//     });
    
//     interviewQuestionsCards.addEventListener('click', (e) => {
//       var interviewQuestionNode = e.target.parentNode
//     // alert("Are you sure you want to delete this?")
  
//       // UPDATE REVEIW
//       if (e.target.classList.contains('edit')) {
        
//         var popupCourseCode = document.getElementById('popupCourseCode');
//         var popupCourseTitle = document.getElementById('popupCourseTitle');
//         var popupSubject = document.getElementById('popupSubject');
//         var popupCredits = document.getElementById('popupCredits');
//         var popupGrades = document.getElementById('popupGrades');
//         var hiddenId = document.getElementById('hiddenId');
  
//         popupCourseCode.value = interviewQuestionNode.querySelector('.popupCourseCode').innerText;
//         popupCourseTitle.value  = interviewQuestionNode.querySelector('.popupCourseTitle').innerText;
//         popupSubject.value  = interviewQuestionNode.querySelector('.popupSubject').innerText;
//         popupCredits.value  = interviewQuestionNode.querySelector('.popupCredits').innerText;
//         popupGrades.value  = interviewQuestionNode.querySelector('.popupGrades').innerText;
//         hiddenId.value = interviewQuestionNode.id;
//       }
   
//       // DELETE REVEIW
//       if (e.target.classList.contains('delete')) {
//         if (confirm('Are you sure you want to delete this?') === true) {
//         var id = interviewQuestionNode.id;
//         firebase.database().ref('interviewQuestions/' + id).remove();
//     }
//     // window.location.reload()
     
//    }
    
    
//     }
//     );
    
   
//   function interviewquestionTemplate({dentalName,interviewQuestions}) {
  
//   //   <button class='delete'>Delete</button>
//   // <i class="bi bi-trash"></i>
//     return `
//    <td class="d-lg-block  d-none popupCourseCode"><label style="color:black; "><b> Dental School Name: </b></label> <br> ${dentalName} <br> <label style="color:black; "><b>Your Question: </b></label> <br> ${interviewQuestions} </td>
//    <button  class='delete d-lg-block d-none' style="background: none; border: none; font-size: 14px; outline: none; color: red;">Delete</button>
//     <button class='edit d-lg-block  d-none'style="background: none; border: none; font-size: 14px; outline: none; color: #5AB9EA;" data-toggle="modal" data-target="#exampleModalCenter">Edit</button>
   
  
//   <td class="popupCourseCode d-lg-none" style="flex-basis: 10%;"><label style="color:black; "><b> Dental School Name: </b></label> <br> ${dentalName} <br> <label style="color:black; "><b> Your Question: </b></label> <br> ${interviewQuestions} </td>
//   <td class=" d-lg-none"><button class='delete'style="background: none; border: none; outline: none; color: red;">Delete</button><button class='edit ml-3'style="background: none; border: none; outline: none; color: #5AB9EA;" data-toggle="modal" data-target="#exampleModalCenter">Edit</button> </td>
  
//   `
//   };


