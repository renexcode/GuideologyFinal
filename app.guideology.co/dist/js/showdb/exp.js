// Initial On Loading
$(document).ready(function () {
    getAllSemester();
});

var db = firebase.database();


var myExperiences = document.getElementById('myExperiences');

// #####################################################

  // ALL DATA
  var academicMasterData = [];
  var isOpenCoruseModel = false;
  
  // GET ALL SEMESTER DATA FROM DATABASE
  const getAllSemester = () => {
      firebase.auth().onAuthStateChanged((user) => {
          // console.log(`Testing............... ${firebase.database().ref('experiences/', from)}`)
          if (user) {
      const ref = db.ref('experiences');
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
  var x = document.getElementById("exp").rows.length;
  if(x === 0){
    const academicSection = document.getElementById('exp');
    academicSection.innerHTML = '';
      const tr = document.createElement('tr');
      tr.innerHTML = '<td><p style="text-align: center;">No Experiences Added</p></td>';
      academicSection.appendChild(tr)
  }

const generateSemesterView = () => {
    const academicSection = document.getElementById('exp');
    academicSection.innerHTML = '';

    for (let index = 0; index < academicMasterData.length; index++) {
         const item = academicMasterData[index];

         const table = document.createElement('tr');
        
            table.innerHTML = `
            <td class="col-lg-2 col-md-2"> 
                <input type="text" class="form-control uname-box selectExp" id="popupCourseCode${item.id}${index}" aria-describedby="emailHelp" placeholder="Course Code" value="${item.selectExperience}" readonly>
             </td>
             <td class="col-lg-2 col-md-2"> 
                <input type="text" class="form-control uname-box" id="popupCourseTitle${item.id}${index}" aria-describedby="emailHelp" placeholder="Course Title" value="${item.organization}" readonly>
             </td>
             <td class="col-lg-2 col-md-2"> 
                <input type="text" class="form-control uname-box" id="popupSubject${item.id}${index}" aria-describedby="emailHelp" placeholder="Subject" value="${item.from}" readonly>
             </td>
             <td class="col-lg-2 col-md-2">
                <input type="text" class="form-control uname-box" id="popupCredits${item.id}${index}" aria-describedby="emailHelp" placeholder="Credits" value="${item.to}" readonly>
             </td>
             <td class="col-lg-2 col-md-2"> 
                <input type="text" class="form-control uname-box" id="popupGrades${item.id}${index}" aria-describedby="emailHelp" placeholder="Grades" value="${item.hours}" readonly
              </td>
            
             <td class="col-lg-2 col-md-2 btn-field">
                <button data-toggle="modal" data-target="#exampleModalCenter" id="isEdit${item.id}${index}">Edit</button>
                <button onclick="confirmCoruseEdit(${item.id}, ${index})" id="confirmEdit${item.id}${index}" style="display: none;">Confirm</button>
                <button data-toggle="modal" data-target="#isDelete${item.id}">Delete</button>
             </td>
       

      
        <!---Confirmation Modal---->
        <div class="modal fade" id="isDelete${item.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
           <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                   <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">Delete ${item.organization}  Experience </h5>
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
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
<div class="modal-dialog modal-dialog-centered" role="document">
<div class="modal-content">
<div class="modal-header">
<h5 class="modal-title" id="exampleModalLongTitle">Update Experiences</h5>
<button type="button" class="close" data-dismiss="modal" aria-label="Close">
<span aria-hidden="true">&times;</span>
</button>
</div>
<div class="modal-body">
<div  class="container">
<form onsubmit="return false" id="experienceForm">
<div class="row">
<h5 id="expheading">Experience Type</h5>
<div class="col-lg-5 col-md-12 col-sm-12">
<label id="explablel">What Type Of Experience Do You Want To Add?</label>
<input type="hidden" id="hiddenId">
</div>
<div class="col-lg-5 col-md-12 col-sm-12">

<select name="expinput" id="expinput${item.id}"  class=" form-control uname-box " placeholder="select" required>
<option> ${item.selectExperience} </option>
<option value="Employment" ${item.Employment === "Employment" && "selected"}>Employment</option>
<option value="DentalShadowing" ${item.DentalShadowing === "DentalShadowing" && "selected"}>DentalShadowing</option>
<option value="Volunteer" ${item.Volunteer === "Volunteer" && "selected"}>Volunteer</option>
<option value="Research" ${item.Research === "Research" && "selected"}>Research</option>
<option value="ExtracaurricularActivities" ${item.ExtracaurricularActivities === "ExtracaurricularActivities" && "selected"}>Extracaurricular Activities</option>
</select>

</div>
</div>

<hr>
<div class="container">
<div class="row">
<h5 id="expheading">Organization</h5>
<div class="col-lg-5 col-md-12 col-sm-12">
<label id="explablel">Organization Name</label>

</div>
<div class="col-lg-5 col-md-12 col-sm-12 ">


<input type="text" id="organization${item.id}" value="${item.organization}" class="form-control" required/>
</div>
</div>
<div class="row mt-2">

<div class="col-lg-5 col-md-12">
<label id="explablel">Start Date - End Date</label>

</div>
<div class="col-lg-5 col-md-4">


<div class="form-question">
<div class="form-question__title">

</div>
<div class="input-container" style="display: flex; flex-direction: row;">
<input id="from${item.id}" class="form-control expinput" type="date" name="effective-date"
 required="required" value="${item.to}" />
 <p class="mx-1"> <strong>To</strong></p>
<input id="to${item.id}" class="form-control expinput" type="date" name="effective-date"
 required="required" value="${item.from}"/>
<span class="bar"></span>
</div>
</div>
</div>

</div>
</div>
<hr>
<div class="container">
<div class="row">
<h5 id="expheading">Total Hours</h5>
<div class="col-lg-5 col-md-12 col-sm-12">
<label id="explablel">Total Hours</label>

</div>
<div class="col-lg-5 col-md-12 col-sm-12">
<input type="number" id="hours${item.id}" class="form-control" value="${item.hours}" placeholder="0" required />
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
academicSection.appendChild(table);
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
    firebase.database().ref('experiences/' + coruseID).on('value', (snapshot) => {
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
    db.ref('experiences/' + semesterID).remove();
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
    var expinput = document.getElementById(`expinput${semesterID}`).value;
    var organization = document.getElementById(`organization${semesterID}`).value;
    var from = document.getElementById(`from${semesterID}`).value;
    var to = document.getElementById(`to${semesterID}`).value;
    var hours = document.getElementById(`hours${semesterID}`).value;

    if (!expinput) {
         alertMessage("expinput can't be blank..", "warning");
         return false;
    } else if (!organization) {
         alertMessage("organization can't be blank..", "warning");
         return false;
    } else if (!from) {
         alertMessage("from status can't be blank..", "warning");
         return false;
    } else if (!to) {
         alertMessage("To status can't be blank..", "warning");
         return false;
    }else if (!hours) {
         alertMessage("Hours status can't be blank..", "warning");
         return false;
    }


    if (semesterID !== null && semesterID !== "undefined") {
         let getData = getSemesterByID(semesterID);

         getData.expinput = expinput;
         getData.organization = organization;
         getData.from = from;
         getData.to = to;
         getData.hours = hours;

         db.ref('experiences/' + semesterID).update(getData);
         alertMessage("This semester has been updated successfully..", "success")
     //     setTimeout(window.location.reload(), 10000);
     setTimeout($('.modal-backdrop').remove(), 10000);

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