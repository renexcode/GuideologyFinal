// Initial On Loading
$(document).ready(function () {
    getAllSemester();
});

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
  



// #####################################################

  // ALL DATA
  var academicMasterData = [];
  var isOpenCoruseModel = false;
  
  // GET ALL SEMESTER DATA FROM DATABASE
  const getAllSemester = () => {
      firebase.auth().onAuthStateChanged((user) => {
          // console.log(`Testing............... ${firebase.database().ref('experiences/', from)}`)
          if (user) {
      const ref = db.ref('datData');
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


const generateSemesterView = () => {
    const datSection = document.getElementById('datCards');
    datSection.innerHTML = '';

    for (let index = 0; index < academicMasterData.length; index++) {
         const item = academicMasterData[index];

         const tr = document.createElement('tr');
        
            tr.innerHTML = `
            <td popupCourseCode"><label style="color:black; "><b> Perceptual Ability: </b> <span id="perceptualAbility${item.id}" style="margin-left:20px; color: #5680E9;">  ${item.perceptualAbility} </span> <br>  <br> <label style="color:black; "><b>Quantitative Reasoning: </b> <span id="quantitativeReasoing${item.id}" style="margin-left:20px; color: #5680E9;">  ${item.quantitativeReasoing} </span> <br>  <br> <label style="color:black; "><b>Reading Comprehension: </b> <span id="readingComprehension${item.id}" style="margin-left:20px; color: #5680E9;">  ${item.readingComprehension} </span> <br>  <br> <label style="color:black; "><b>Biology: </b> <span id="biology${item.id}" style="margin-left:20px; color: #5680E9;">  ${item.biology} </span> <br>  <br> <label style="color:black; "><b>General Chemistry: </b> <span id="generalChemitry${item.id}" style="margin-left:20px; color: #5680E9;">  ${item.generalChemitry} </span> <br>  <br> <label style="color:black; "><b>Organic Chemistry: </b> <span id="organicChemistry${item.id}" style="margin-left:20px; color: #5680E9;">  ${item.organicChemistry} </span> <br>  <br> <label style="color:black; "><b>Total Science: </b> <span id="totalScience${item.id}" style="margin-left:20px; color: #5680E9;">  ${item.totalScience} </span> <br>  <br> <label style="color:black; "><b>Academic Average: </b> <span id="academicAverage${item.id}" style="margin-left:20px; color: #5680E9;">  ${item.academicAverage} </span> </td>
          
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
                        <h5 class="modal-title" id="exampleModalLongTitle">Delete this DAT Score </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                             <span aria-hidden="true">&times;</span>
                        </button>
                   </div>
                   <div class="modal-body p-4">
                      <h2> Are you sure to delete this semester?? </h2>
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
<h5 class="modal-title" id="exampleModalLongTitle">Update DAT Scores</h5>
<button type="button" class="close" data-dismiss="modal" aria-label="Close">
<span aria-hidden="true">&times;</span>
</button>
</div>
<div class="modal-body">
<div class="container">
<form onsubmit="return false" id="addDatForm">
<div class="row">
    <div class="col-lg-4 col-md-4 col-sm-4">
        <label id="explablel">Perceptual Ability</label>
    </div>
    <div class="col-lg-6 col-sm-12">
         <input id="perceptualability${item.id}" value="${item.perceptualAbility}" class="form-control" type="number"  placeholder=" - - - - "  required/>
    </div>
</div>
<div class="row">
    <div class="col-lg-4 col-md-4 col-sm-4">
        <label id="explablel">Quantitative Reasoning</label>
    </div>
    <div class="col-lg-6 col-sm-12">
         <input id="quantitativereasoing${item.id}" value="${item.quantitativeReasoing}" class="form-control" type="number"  placeholder=" - - - - "  required/>
    </div>
</div>
<div class="row">
    <div class="col-lg-4 col-md-4 col-sm-4">
        <label id="explablel">Reading Comprehension</label>
    </div>
    <div class="col-lg-6 col-sm-12">
         <input id="readingcomprehension${item.id}"  value="${item.readingComprehension}" class="form-control" type="number"  placeholder=" - - - - " required/>
    </div>
</div>
<div class="row">
    <div class="col-lg-4 col-md-4 col-sm-4">
        <label id="explablel">Biology</label>
    </div>
    <div class="col-lg-6 col-sm-12">
         <input id="biologydat${item.id}" value="${item.biology}" class="form-control" type="number"  placeholder=" - - - - "  required/>
    </div>
</div>
<div class="row">
    <div class="col-lg-4 col-md-4 col-sm-4">
        <label id="explablel">General Chemistry</label>
    </div>
    <div class="col-lg-6 col-sm-12">
         <input id="generalchemitry${item.id}" value="${item.generalChemitry}" class="form-control" type="number"  placeholder=" - - - - "  required/>
    </div>
</div>
<div class="row">
    <div class="col-lg-4 col-md-4 col-sm-4">
        <label id="explablel">Organic Chemistry</label>
    </div>
    <div class="col-lg-6 col-sm-12">
         <input id="organicchemistry${item.id}" value="${item.organicChemistry}" class="form-control" type="number"  placeholder=" - - - - "  required/>
    </div>
</div>
<div class="row">
    <div class="col-lg-4 col-md-4 col-sm-4">
        <label id="explablel">Total Science</label>
    </div>
    <div class="col-lg-6 col-sm-12">
         <input id="totalscience${item.id}" value="${item.totalScience}" class="form-control" type="number"  placeholder=" - - - - "  required/>
    </div>
</div>
<div class="row">
    <div class="col-lg-4 col-md-4 col-sm-4">
        <label id="explablel">Academic Average</label>
    </div>
    <div class="col-lg-6 col-sm-12">
         <input id="academicaverage${item.id}" value="${item.academicAverage}" class="form-control" type="number"  placeholder=" - - - - "  required/>
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
datSection.appendChild(tr);
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
    firebase.database().ref('datData/' + coruseID).on('value', (snapshot) => {
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
    console.log(semesterID)
    db.ref('datData/' + semesterID).remove();
    alertMessage("This Experience has been removed successfully..", "success")
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
    var perceptualAbility = document.getElementById(`perceptualability${semesterID}`).value;
    var quantitativeReasoing = document.getElementById(`quantitativereasoing${semesterID}`).value;
    var readingComprehension = document.getElementById(`readingcomprehension${semesterID}`).value;
    var biology = document.getElementById(`biologydat${semesterID}`).value;
    var generalChemitry = document.getElementById(`generalchemitry${semesterID}`).value;
    var organicChemistry = document.getElementById(`organicchemistry${semesterID}`).value;
    var totalScience = document.getElementById(`totalscience${semesterID}`).value;
    var academicAverage = document.getElementById(`academicaverage${semesterID}`).value;

    if (!perceptualAbility) {
         alertMessage("perceptualAbility can't be blank..", "warning");
         return false;
    } else if (!quantitativeReasoing) {
         alertMessage("quantitativeReasoing can't be blank..", "warning");
         return false;
    } else if (!readingComprehension) {
         alertMessage("readingComprehension status can't be blank..", "warning");
         return false;
    } else if (!biology) {
         alertMessage("biology status can't be blank..", "warning");
         return false;
    }else if (!generalChemitry) {
         alertMessage("generalChemitry status can't be blank..", "warning");
         return false;
    }else if (!organicChemistry) {
        alertMessage("organicChemistry status can't be blank..", "warning");
        return false;
   }else if (!totalScience) {
    alertMessage("totalScience status can't be blank..", "warning");
    return false;
}else if (!academicAverage) {
    alertMessage("academicAverage status can't be blank..", "warning");
    return false;
}


    if (semesterID !== null && semesterID !== "undefined") {
         let getData = getSemesterByID(semesterID);

         getData.perceptualAbility = perceptualAbility;
         getData.quantitativeReasoing = quantitativeReasoing;
         getData.readingComprehension = readingComprehension;
         getData.biology = biology;
         getData.organicChemistry = organicChemistry;
         getData.generalChemitry = generalChemitry;
         getData.totalScience = totalScience;
         getData.academicAverage = academicAverage;

         console.log(getData)

         firebase.database().ref('datData/' + semesterID).update(getData);
         alertMessage("This semester has been updated successfully..", "success")
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

  

// // READ REVEIWS


// // var myDatCards = document.getElementById('myDatCards');
// // var datDataRef = db.ref('/datData');

// // // ######################################################//

// // firebase.auth().onAuthStateChanged((user) => {
// //     if (user) {
// //       // User is signed in, see docs for a list of available properties
// //       // https://firebase.google.com/docs/reference/js/firebase.User
// //       var myDatCards = document.getElementById('myDatCards');
// //       var uid = user.uid;
// //       const datDataRef = firebase.database().ref('datData/');
// //       const userData = datDataRef.orderByChild('uid').equalTo(user.uid);
// //       userData.on('value', snap =>{
// //           snap.forEach((data) => {
// //             var li = document.createElement('li')
// //             li.id = data.key;
// //             li.innerHTML = addDatTemplate(data.val())
// //             myDatCards.appendChild(li);
// //             li.classList.add('card')
// //               console.log('DatakiKey',data.key)
// //               console.log(data.val())
// //           })
// //       })
// //     //   firebase.database().ref('datData/').once("value", snap => {
// //     //     console.log(snap.val())
// //     // })
// //     } else {
// //       console.log("User Logout please Signin")
// //     }
// //   });

// // // ##########################################################//



// // datDataRef.on('child_removed', (data) => {
// //   var datNode = document.getElementById(data.key);
// //   datNode.parentNode.removeChild(datNode);
// // });

// // myDatCards.addEventListener('click', (e) => {
// //   var datNode = e.target.parentNode
// //   if (confirm('Are you sure you want to delete this?') === true) {
// // // UPDATE REVEIW
// // if (e.target.classList.contains('edit')) {
// //     fullName.value = datNode.querySelector('.fullName').innerText;
// //     message.value  = datNode.querySelector('.message').innerText;
// //     hiddenId.value = datNode.id;
// //   }

// //   // DELETE REVEIW
// //   if (e.target.classList.contains('delete')) {
// //     var id = datNode.id;
// //     db.ref('datData/' + id).remove();
// //   }
// //   }
  
// // });
   
   
// // function addDatTemplate({perceptualAbility,quantitativeReasoing,readingComprehension,biology,generalChemitry,organicChemistry,totalScience,academicAverage}) {
 
// //     return `
// //     <div style="padding: 44px 35px; background-color: white; border-radius: 40px; width: 90%;">
// //     <div class="row">
// //         <div class="col-lg-4 col-sm-6">
// //             <label style="color:black; "><b> Perceptual Ability: </b></label>
// //         </div>
// //         <div class="col-lg-2 col-sm-6">
// //             <label style="color:#5AB9EA; text-align: center !important;"><b> ${perceptualAbility} </b></label>
// //         </div>
// //         <div class="col-lg-5 d-none d-md-block" id="add_editBtn">
// //             <div style="display:flex; flex-direction:row;">
               
// //                     <Button style="color: red; background: none; border:none; outline:none;" class='delete'>Remove</Button>
// //                     <Button style="color: #5AB9EA; background: none; border:none; outline:none; margin-left: 20px;">Edit</Button>
// //             </div>

// //         </div>



// //     </div>
// //     <div class="row ">
// //         <div class="col-lg-4 col-sm-6">
// //             <label style="color:black; ;"><b> Quantitative Reasoning: </b></label>

// //         </div>
// //         <div class="col-lg-2 col-sm-6">
// //             <label style="color:#5AB9EA; ;"> <b> ${quantitativeReasoing} </b></label>
// //         </div>


// //     </div>
// //     <div class="row">
// //         <div class="col-lg-4 col-sm-6">
// //             <label style="color:black; ;"><b> Reading Comprehension: </b></label>
// //         </div>
// //         <div class="col-lg-2 col-sm-6">
// //             <label style="color:#5AB9EA; ;"><b> ${readingComprehension} </b></label>
// //         </div>

// //     </div>
// //     <div class="row">
// //         <div class="col-lg-4 col-sm-6">
// //             <label style="color:black; ;"><b> Biology: </b></label>
// //         </div>
// //         <div class="col-lg-2 col-sm-6">
// //             <label style="color:#5AB9EA; ;"><b> ${biology} </b></label>
// //         </div>

// //     </div>
// //     <div class="row">
// //         <div class="col-lg-4 col-sm-6 ">
// //             <label style="color:black; ;"><b> General Chemistry: </b></label>
// //         </div>
// //         <div class="col-lg-2 col-sm-6">
// //             <label style="color:#5AB9EA; ;"><b> ${generalChemitry} </b></label>
// //         </div>

// //     </div>
// //     <div class="row">
// //         <div class="col-lg-4 col-sm-6">
// //             <label style="color:black; ;"><b> Organic Chemistry: </b></label>
// //         </div>
// //         <div class="col-lg-2 col-sm-6">
// //             <label style="color:#5AB9EA; ;"><b> ${organicChemistry} </b></label>
// //         </div>

// //     </div>
// //     <div class="row">
// //         <div class="col-lg-4 col-sm-6">
// //             <label style="color:black; ;"><b> Total Science: </b></label>
// //         </div>
// //         <div class="col-lg-2 col-sm-6">
// //             <label style="color:#5AB9EA; ;"><b> ${totalScience} </b></label>
// //         </div>

// //     </div>
// //     <div class="row">
// //         <div class="col-lg-4 col-sm-6">
// //             <label style="color:black; ;"><b> Academic Average: </b></label>
// //         </div>
// //         <div class="col-lg-2 col-sm-6">
// //             <label style="color:#5AB9EA; ;"><b> ${academicAverage} </b></label>
// //         </div>

// //     </div>
    
// //     <div class="d-block d-sm-none ">
// //     <div style="display:flex; flex-direction:row;">
// //             <Button style="color: red; background: none; border:none; outline:none;" class=''>Remove</Button>
// //             <Button style="color: #5AB9EA; background: none; border:none; outline:none; margin-left: 20px;">Edit</Button>
// //         </div>
// //     </div>

// // </div>





// // </div>
// //     `
// //   };
  
// //   d-none d-md-block 
// //   <div style="display: flex; flex-direction: row" class="mb-5">
// //   <button class='edit'style="background: none; border: none; font-size: 14px; outline: none; color: green;">Edit</button> 
// //   <button class='delete ml-3'style="background: none; border: none; font-size: 14px; outline: none; color: red;">Delete</button>
// //   </div>

// {/* <button class='delete'>Delete</button>
// <button class='edit'>Edit</button> */}




// // #######################   Table  #############################################




//   // READ REVEIWS
  
//   var datCards = document.getElementById('datCards');
//   var datCardsRef = firebase.database().ref('datData/');
  
//   // ######################################################//
  
//   firebase.auth().onAuthStateChanged((user) => {
//     if (user) {
//       var datCards = document.getElementById('datCards');
//       const datCardsRef = firebase.database().ref('datData/');
//       const userData = datCardsRef.orderByChild('uid').equalTo(user.uid);
//     //   if (userData) {
//     //     document.getElementById('subjectHeader').style.display = 'block'
//     //   }
//       userData.on('value', snap =>{
//           snap.forEach((data) => {
//             var tr = document.createElement('tr')
//             tr.setAttribute('class', 'test')
//   tr.id = data.key;
//   tr.innerHTML = datTemplate(data.val())
//   datCards.appendChild(tr);;
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


  
//   var datCards = document.getElementById('datCards');
//     var datCardsRef = firebase.database().ref('datData/');
  

//     datCardsRef.on('child_changed', (data) => {
//       var interviewQuestionNode = document.getElementById(data.key);
//       interviewQuestionNode.innerHTML = datTemplate(data.val());
      
//     });
    
//     datCardsRef.on('child_removed', (data) => {
//       var interviewQuestionNode = document.getElementById(data.key);
//       interviewQuestionNode.parentNode.removeChild(interviewQuestionNode);
//     });
    
//     datCards.addEventListener('click', (e) => {
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
//         firebase.database().ref('datData/' + id).remove();
//     }
//     // window.location.reload()
     
//    }
    
    
//     }
//     );
    
   
//   function datTemplate({perceptualAbility,quantitativeReasoing,readingComprehension,biology,generalChemitry,organicChemistry,totalScience,academicAverage}) {
  
//   //   <button class='delete'>Delete</button>
//   // <i class="bi bi-trash"></i>
//     return `
//    <td class="d-lg-block  d-none popupCourseCode"><label style="color:black; "><b> Perceptual Ability: </b> <span style="margin-left:20px; color: #5680E9;">  ${perceptualAbility} </span> <br>  <br> <label style="color:black; "><b>Quantitative Reasoning: </b> <span style="margin-left:20px; color: #5680E9;">  ${quantitativeReasoing} </span> <br>  <br> <label style="color:black; "><b>Reading Comprehension: </b> <span style="margin-left:20px; color: #5680E9;">  ${readingComprehension} </span> <br>  <br> <label style="color:black; "><b>Biology: </b> <span style="margin-left:20px; color: #5680E9;">  ${biology} </span> <br>  <br> <label style="color:black; "><b>General Chemistry: </b> <span style="margin-left:20px; color: #5680E9;">  ${generalChemitry} </span> <br>  <br> <label style="color:black; "><b>Organic Chemistry: </b> <span style="margin-left:20px; color: #5680E9;">  ${organicChemistry} </span> <br>  <br> <label style="color:black; "><b>Total Science: </b> <span style="margin-left:20px; color: #5680E9;">  ${totalScience} </span> <br>  <br> <label style="color:black; "><b>Academic Average: </b> <span style="margin-left:20px; color: #5680E9;">  ${academicAverage} </span> </td>
//    <button  class='delete d-lg-block d-none' style="background: none; border: none; font-size: 14px; outline: none; color: red;">Delete</button>
//     <button class='edit d-lg-block  d-none'style="background: none; border: none; font-size: 14px; outline: none; color: #5AB9EA;" data-toggle="modal" data-target="#exampleModalCenter">Edit</button>
   
//     <td class="popupCourseCode d-lg-none" style="flex-basis: 10%;"> <label style="color:black; "><b> Perceptual Ability: </b> <span style="margin-left:20px; color: #5680E9;">  ${perceptualAbility} </span> <br>  <br> <label style="color:black; "><b>Quantitative Reasoning: </b> <span style="margin-left:20px; color: #5680E9;">  ${quantitativeReasoing} </span> <br>  <br> <label style="color:black; "><b>Reading Comprehension: </b> <span style="margin-left:20px; color: #5680E9;">  ${readingComprehension} </span> <br>  <br> <label style="color:black; "><b>Biology: </b> <span style="margin-left:20px; color: #5680E9;">  ${biology} </span> <br>  <br> <label style="color:black; "><b>General Chemistry: </b> <span style="margin-left:20px; color: #5680E9;">  ${generalChemitry} </span> <br>  <br> <label style="color:black; "><b>Organic Chemistry: </b> <span style="margin-left:20px; color: #5680E9;">  ${organicChemistry} </span> <br>  <br> <label style="color:black; "><b>Total Science: </b> <span style="margin-left:20px; color: #5680E9;">  ${totalScience} </span> <br>  <br> <label style="color:black; "><b>Academic Average: </b> <span style="margin-left:20px; color: #5680E9;">  ${academicAverage} </span> <br> <br> <button class='delete'style="background: none; border: none; outline: none; color: red;">Delete</button><button class='edit ml-3'style="background: none; border: none; outline: none; color: #5AB9EA;" data-toggle="modal" data-target="#exampleModalCenter">Edit</button> </td>
  
  
  
  
//   `
//   };

