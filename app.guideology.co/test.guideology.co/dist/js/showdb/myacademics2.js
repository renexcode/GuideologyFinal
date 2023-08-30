// Initial On Loading
$(document).ready(function () {
    getAllSemester();
});

// FIREBASE CONFIGURATION
const firebaseConfig = {
    apiKey: "AIzaSyD5DMyubSCOcqQzqFWboc7NziRYclrdOxg",
    authDomain: "guideology-cc2b5.firebaseapp.com",
    databaseURL: "https://guideology-cc2b5-default-rtdb.firebaseio.com",
    projectId: "guideology-cc2b5",
    storageBucket: "guideology-cc2b5.appspot.com",
    messagingSenderId: "130250364586",
    appId: "1:130250364586:web:2e9d6427edb6a9e67ce2d3",
    measurementId: "G-RSC5CNSPEG"
};

// FIREBASE INITIALIZATION
firebase.initializeApp(firebaseConfig);
var db = firebase.database();

// ALL DATA
var academicMasterData = [];
var isOpenCoruseModel = false;

// GET ALL SEMESTER DATA FROM DATABASE
const getAllSemester = () => {
    firebase.auth().onAuthStateChanged((user) => {
        // console.log(`Testing............... ${firebase.database().ref('experiences/', from)}`)
        if (user) {
    const ref = db.ref('academics');
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

// GENERATE SEMESTER VIEW
const generateSemesterView = () => {
    const academicSection = document.getElementById('academicSemesterCoruse');
    academicSection.innerHTML = '';

    for (let index = 0; index < academicMasterData.length; index++) {
         const item = academicMasterData[index];

         const div = document.createElement('div');
         div.className = "p-2";
         div.innerHTML = `<div style="background-color:#5680E9; position:relative; padding: 10px;" class="shadow-sm" >
                         <div id="editSemester${item.id}" style="display:none">
                                  <table class="table table-striped table-responsive-stack bg-white" id="tableOne">
                                  <thead>
                                       <tr class="text-center">
                                            <th>TERM</th>
                                            <th>YEAR</th>
                                            <th>ACADEMICS STATUS</th>
                                            <th>COMPLETION STATUS</th>
                                            <th>ACTION</th>
                                       </tr>
                                  </thead>
                                       <tbody class="text-center">
                                            <tr style="background-color: #fcfdff !important; border-radius: 0; padding: 10px;">
                                            <td>
                                                 <select name="Term" id="Term${item.id}" class="form-control" placeholder="select" required>
                                                 <option value=""> Select...</option>
                                                 <option value="Winter" ${item.term === "Winter" && "selected"}>Winter</option>
                                                 <option value="Spring" ${item.term === "Spring" && "selected"}>Spring</option>
                                                 <option value="Summer" ${item.term === "Summer" && "selected"}>Summer</option>
                                                 <option value="Fall" ${item.term === "Fall" && "selected"}>Fall</option>
                                                 </select>
                                            </td>
                                            <td>
                                                 <select name="Year" id="Year${item.id}" class="form-control" placeholder="select" required>
                                                      <option value=""> Select...</option>
                                                      <option value="2005" ${item.year === "2005" && "selected"}>2005</option>
                                                      <option value="2006" ${item.year === "2006" && "selected"}>2006</option>
                                                      <option value="2007" ${item.year === "2007" && "selected"}>2007</option>
                                                      <option value="2008" ${item.year === "2008" && "selected"}>2008</option>
                                                      <option value="2009" ${item.year === "2009" && "selected"}>2009</option>
                                                      <option value="2010" ${item.year === "2010" && "selected"}>2010</option>
                                                      <option value="2011" ${item.year === "2011" && "selected"}>2011</option>
                                                      <option value="2012" ${item.year === "2012" && "selected"}>2012</option>
                                                      <option value="2013" ${item.year === "2013" && "selected"}>2013</option>
                                                      <option value="2014" ${item.year === "2014" && "selected"}>2014</option>
                                                      <option value="2015" ${item.year === "2015" && "selected"}>2015</option>
                                                      <option value="2016" ${item.year === "2016" && "selected"}>2016</option>
                                                      <option value="2017" ${item.year === "2017" && "selected"}>2017</option>
                                                      <option value="2018" ${item.year === "2018" && "selected"}>2018</option>
                                                      <option value="2019" ${item.year === "2019" && "selected"}>2019</option>
                                                      <option value="2020" ${item.year === "2020" && "selected"}>2020</option>
                                                      <option value="2021" ${item.year === "2021" && "selected"}>2021</option>
                                                      <option value="2022" ${item.year === "2022" && "selected"}>2022</option>
                                                      <option value="2023" ${item.year === "2023" && "selected"}>2023</option>
                                                      <option value="2024" ${item.year === "2024" && "selected"}>2024</option>
                                                      <option value="2025" ${item.year === "2025" && "selected"}>2025</option>
                                                      <option value="2026" ${item.year === "2026" && "selected"}>2026</option>
                                                      <option value="2027" ${item.year === "2027" && "selected"}>2027</option>
                                                      <option value="2028" ${item.year === "2028" && "selected"}>2028</option>
                                                      <option value="2029" ${item.year === "2029" && "selected"}>2029</option>
                                                      <option value="2030" ${item.year === "2030" && "selected"}>2030</option>
                                                 </select>
                                            </td>
                                            <td>
                                                 <select name="academicStatus" id="academicStatus${item.id}" class="form-control" placeholder="select" required>
                                                      <option value=""> Select...</option>
                                                      <option value="Freshman" ${item.academicStatus === "Freshman" && "selected"}>Freshman</option>
                                                      <option value="Sophmore" ${item.academicStatus === "Sophmore" && "selected"}>Sophmore</option>
                                                      <option value="Junior" ${item.academicStatus === "Junior" && "selected"}>Junior</option>
                                                      <option value="Senior" ${item.academicStatus === "Senior" && "selected"}>Senior</option>
                                                      <option value="Graduate" ${item.academicStatus === "Graduate" && "selected"}>Graduate</option>
                                                      <option value="Post-Bacc" ${item.academicStatus === "Post-Bacc" && "selected"}>Post-Bacc</option>
                                                 </select>
                                            </td>
                                            <td>
                                                 <select name="completionStatus" id="completionStatus${item.id}" class="form-control" placeholder="select"
                                                 required>
                                                      <option value=""> Select...</option>
                                                      <option value="Inprogress/Planned" ${item.completionStatus === "Inprogress/Planned" && "selected"}>Inprogress</option>
                                                      <option value="Completed" ${item.completionStatus === "Completed" && "selected"}>Planned/Completed</option>
                                                 </select>
                                            </td>
                                            <td class="ml-5">
                                                 <button type="button" class="btn btn-info text-white mb-2" style="background-color:#8860D0 !important" onclick="updateSemester(${item.id})"> Confirm</button> </br>
                                                 <button type="button" class="btn btn-secondary" onclick="toggleSemesterUpdateForm(${false}, ${item.id})"> Cancel </button>
                                            </td>
                                            </tr>
                                       </tbody>
                             </table>
                           
                         </div>
                         <div id="isNotEditSemester${item.id}" style="display:block">
                             <div class="d-flex justify-content-between align-items-center">
                             <h4 class="text-white text-center p-2"> ${item.term} ${item.year} ${item.academicStatus} is in ${item.completionStatus}</h4>
                                  <div>
                                  <button class="btn btn-sm btn-success font-weight-bold text-white" onclick="toggleSemesterUpdateForm(${true}, ${item.id})">Edit</button>
                                  <button class="btn btn-sm btn-danger font-weight-bold text-white" data-toggle="modal" data-target="#isDelete${item.id}">Delete</button>

                                  <!---Confirmation Modal---->
                                  <div class="modal fade" id="isDelete${item.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-centered" role="document">
                                       <div class="modal-content">
                                            <div class="modal-header">
                                                 <h5 class="modal-title" id="exampleModalLongTitle">Delete ${item.term} ${item.year} ${item.academicStatus} is in ${item.completionStatus} </h5>
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
                                  
                                  </div> <!--Delete--->
                            </div>
                         </div>
                      
                     </div>
                  
                     <table class="table  table-striped table-responsive-stack p-5" id="tableOne">
                         <thead id="subjectHeader" class="headerofTH">
                             <tr>
                                 <th class="col-lg-2 col-md-2">Course Code</th>
                                 <th class="col-lg-2 col-md-2">Course Title</th>
                                 <th class="col-lg-2 col-md-2">Subject</th>
                                 <th class="col-lg-2 col-md-2">Credits</th>
                                 <th class="col-lg-2 col-md-2">Grades</th>
                                 <th class="col-lg-2 col-md-2">Action</th>
                             </tr>
                         </thead>
                         <tbody id="${item.id}">
                         </tbody>
                     </table>
                     <div style="text-align:right">
                        <button class="btn-primary mt-3 submitCoruseBtn" type="submit" id="submitCoruseBtn${item.id}" onclick="addCourse(${item.id}, event)" style="border: none; outline: none; display: none;"> Save </button> 
                        <button class="addCourse-btn btn btn-info text-white add addCourseBtn" id="addCourseBtn${item.id}" onclick="newCourseView(${item.id}, ${true})"> <i class="bi bi-plus-circle-fill mx-2" style="margin-bottom: 2px;"></i> Add
                          Course</button>
                     </div>`;
         academicSection.appendChild(div);
         const tableId = item.id.toString();
         if (item && item.coruseData !== null && item.coruseData !== "undefined") {
              courseDataView(item, tableId);
         }
    }
}

// GENERATE COURSE TABLE VIEW
const courseDataView = (masterData, tableId) => {
    const table = document.getElementById(tableId);
    table.innerHTML = '';

    if (masterData && masterData.coruseData && masterData.coruseData.length > 0) {
         for (let index = 0; index < masterData.coruseData.length; index++) {
              const item = masterData.coruseData[index];
              const tr = document.createElement("tr");
              tr.innerHTML = `<tr>
                                  <td class="col-lg-2 col-md-2"> 
                                     <input type="text" class="form-control uname-box" id="popupCourseCode${tableId}${index}" aria-describedby="emailHelp" placeholder="Course Code" value="${item.popupCourseCode ?? item.popupCourseCode}" readonly>
                                  </td>
                                  <td class="col-lg-2 col-md-2"> 
                                     <input type="text" class="form-control uname-box" id="popupCourseTitle${tableId}${index}" aria-describedby="emailHelp" placeholder="Course Title" value="${item.popupCourseTitle}" readonly>
                                  </td>
                                  <td class="col-lg-2 col-md-2"> 
                                     <input type="text" class="form-control uname-box" id="popupSubject${tableId}${index}" aria-describedby="emailHelp" placeholder="Subject" value="${item.popupSubject}" readonly>
                                  </td>
                                  <td class="col-lg-2 col-md-2">
                                     <input type="number" class="form-control uname-box" id="popupCredits${tableId}${index}" aria-describedby="emailHelp" placeholder="Credits" value="${item.popupCredits}" readonly>
                                  </td>
                                  <td class="col-lg-2 col-md-2"> 
                                     <input type="text" class="form-control uname-box" id="popupGrades${tableId}${index}" aria-describedby="emailHelp" placeholder="Grades" value="${item.popupGrades}" readonly>
                                   </td>
                                 
                                  <td class="col-lg-2 col-md-2 btn-field">
                                     <button onclick="courseEdit(this, ${true}, ${tableId}, ${index})" id="isEdit${tableId}${index}">Edit</button>
                                     <button onclick="confirmCoruseEdit(${tableId}, ${index})" id="confirmEdit${tableId}${index}" style="display: none;">Confirm</button>
                                     <button data-toggle="modal" data-target="#isDeleteCoruse${tableId}${index}">Delete</button>
                                  </td>
                             </tr>

                           
                             <!---Confirmation Modal---->
                             <div class="modal fade" id="isDeleteCoruse${tableId}${index}" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                               <div class="modal-dialog modal-dialog-centered" role="document">
                                  <div class="modal-content">
                                       <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLongTitle"> Are you sure to delete this Course?? </h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                 <span aria-hidden="true">&times;</span>
                                            </button>
                                       </div>
                                       <div class="modal-body p-4">
                                          <h6>Coruse Title : ${item.popupCourseTitle}</h6>
                                          <h6>Coruse Code : ${item.popupCourseCode}</h6>
                                          <h6> Subject : ${item.popupSubject}</h6>
                                          <h6> Credits : ${item.popupCredits}</h6>
                                          <h6> Grades : ${item.popupGrades}</h6>
                                       </div>
                                       <div class="modal-footer">
                                            <button type="button" class="btn btn-primary" onclick="deleteSingleCoruse(${tableId}, ${index})" data-dismiss="modal">Yes</button>
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">No</button>
                                       </div>
                                  </div>
                             </div>
                         </div>

                             `;
              table.appendChild(tr)
         }
    }
    else {
        const tr = document.createElement('tr');
        tr.innerHTML = '<td><p style="text-align: center;">No Course Added</p></td>';
        table.appendChild(tr)
   }
}
// CREATE NEW COURSE TABLE VIEW
const newCourseView = (tableId, status) => {

    const table = document.getElementById(tableId);
    const tr = document.createElement("tr");
    tr.innerHTML = `<tr>
         <td class="col-lg-2 col-md-2"> <input type="text" class="form-control uname-box" id="popupCourseCode" aria-describedby="emailHelp" placeholder="Course Code"></td>
         <td class="col-lg-2 col-md-2"> <input type="text" class="form-control uname-box" id="popupCourseTitle" aria-describedby="emailHelp" placeholder="Course Title"></td>
         <td class="col-lg-2 col-md-2"> <input type="text" class="form-control uname-box" id="popupSubject" aria-describedby="emailHelp" placeholder="Subject"></td>
         <td class="col-lg-2 col-md-2"> <input type="number" class="form-control uname-box" id="popupCredits" aria-describedby="emailHelp" placeholder="Credits"></td>
         <td class="col-lg-2 col-md-2"> <input type="text" class="form-control uname-box" id="popupGrades" aria-describedby="emailHelp" placeholder="Grades"> </td>
         <td class="col-lg-2 col-md-2"><a href="#" onclick="removeCourseView(this, ${tableId}, ${!status})" class="fa fa-trash text-danger" style="font-size:16px; display:flex; justify-content: center; align-items: center;">
         <p style="font-weight:600;" class="text-danger ml-1 mb-0"> Delete</p>
     </a></td>
       </tr>
       `;
    table.appendChild(tr)

    if (status === true) {
         document.getElementById(`addCourseBtn${tableId}`).style.display = 'none';
         document.getElementById(`submitCoruseBtn${tableId}`).style.display = "inline-block"
    }
}

// REMOVE COURSE VIEW
const removeCourseView = (btn, tableId, status) => {
    const tr = btn.parentElement.parentElement;
    tr.remove();
    if (status === false) {
         document.getElementById(`addCourseBtn${tableId}`).style.display = 'inline-block';
         document.getElementById(`submitCoruseBtn${tableId}`).style.display = "none"
    }
}



/**
* 
* Add Academics Semester
* 
*/
const addAcademicSemester = () => {
    var term = document.getElementById('Term').value;
    var year = document.getElementById('Year').value;
    var academicStatus = document.getElementById('academicStatus').value;
    var completionStatus = document.getElementById('completionStatus').value;
    var hiddenId = document.getElementById('hiddenId').value;
    var userID = firebase.auth().currentUser.uid
   
    // give user id in here from session

    var id = hiddenId || Date.now();

    if (!term) {
         alertMessage("Term can't be blank..", "warning");
         return false;
    } else if (!year) {
         alertMessage("Year can't be blank..", "warning");
         return false;
    } else if (!academicStatus) {
         alertMessage("Academic status can't be blank..", "warning");
         return false;
    } else if (!completionStatus) {
         alertMessage("Completion status can't be blank..", "warning");
         return false;
    } else {
         const academicsData = {
              id: id,
              uid: userID,
              term: term,
              year: year,
              academicStatus: academicStatus,
              completionStatus: completionStatus,
              coruseData: []
         }

         db.ref('academics/' + id).set(academicsData);
         alertMessage("New semester has been added successfully..", "success")
         showaddSemesterandCoursemain(false)
    }
};


/**
* To Get Specific Semester When add/edit or delete coruse
* @param {string or number} coruseID 
* @returns semesterMasterData
*/
const getSemesterByID = (coruseID) => {
    var semesterMasterData;
    db.ref('academics/' + coruseID).on('value', (snapshot) => {
         semesterMasterData = snapshot.val();
    })
    return semesterMasterData
}


/**
* To Add Semester wise New Coruse
* @param {number} semesterID 
*/

const addCourse = (semesterID, event) => {
    var popupCourseCode = document.getElementById('popupCourseCode').value;
    var popupCourseTitle = document.getElementById('popupCourseTitle').value;
    var popupSubject = document.getElementById('popupSubject').value;
    var popupCredits = document.getElementById('popupCredits').value;
    var popupGrades = document.getElementById('popupGrades').value;

    if (!popupCourseCode) {
         alertMessage("Coruse code can't be blank..", "warning");
         return false;
    } else if (!popupCourseTitle) {
         alertMessage("Course title can't be blank..", "warning");
         return false;
    } else if (!popupSubject) {
         alertMessage("Subject can't be blank..", "warning");
         return false;
    } else if (!popupCredits) {
         alertMessage("Credits can't be blank..", "warning");
         return false;
    } else if (!popupGrades) {
         alertMessage("Grades can't be blank..", "warning");
         return false;
    }

    const courseObj = {
         popupCourseCode: popupCourseCode,
         popupCourseTitle: popupCourseTitle,
         popupSubject: popupSubject,
         popupCredits: popupCredits,
         popupGrades: popupGrades
    }

    if (semesterID !== null && semesterID !== "undefined") {
         let getData = getSemesterByID(semesterID);
         if (getData && getData.coruseData && getData.coruseData.length > 0) {
              getData.coruseData.push(courseObj);
         } else {
              getData.coruseData = [courseObj];
         }

         db.ref('academics/' + semesterID).update(getData);
         alertMessage("New course has been added successfully..", "success")

    }
    event.preventDefault();
}



/**
* To Edit Specifi Coruse Data By Semester ID & Coruse Index
* @param {element} btn 
* @param {number} semesterID 
* @param {number} coruesIndex 
*/

const confirmCoruseEdit = (semesterID, coruesIndex) => {
    var popupCourseCode = document.getElementById(`popupCourseCode${semesterID}${coruesIndex}`).value;
    var popupCourseTitle = document.getElementById(`popupCourseTitle${semesterID}${coruesIndex}`).value;
    var popupSubject = document.getElementById(`popupSubject${semesterID}${coruesIndex}`).value;
    var popupCredits = document.getElementById(`popupCredits${semesterID}${coruesIndex}`).value;
    var popupGrades = document.getElementById(`popupGrades${semesterID}${coruesIndex}`).value;

    if (!popupCourseCode) {
         alertMessage("Coruse code can't be blank..", "warning");
         return false;
    } else if (!popupCourseTitle) {
         alertMessage("Course title can't be blank..", "warning");
         return false;
    } else if (!popupSubject) {
         alertMessage("Subject can't be blank..", "warning");
         return false;
    } else if (!popupCredits) {
         alertMessage("Credits can't be blank..", "warning");
         return false;
    } else if (!popupGrades) {
         alertMessage("Grades can't be blank..", "warning");
         return false;
    }

    const courseObj = {
         popupCourseCode: popupCourseCode,
         popupCourseTitle: popupCourseTitle,
         popupSubject: popupSubject,
         popupCredits: popupCredits,
         popupGrades: popupGrades
    }

    if (semesterID !== null && semesterID !== "undefined") {
         let getData = getSemesterByID(semesterID);
         if (getData && getData.coruseData && getData.coruseData.length > 0) {
              if (coruesIndex !== -1) {
                   getData.coruseData[coruesIndex] = courseObj
              }
         }

         db.ref('academics/' + semesterID).update(getData);
         alertMessage("This course has been updated successfully..", "success")

    }

}
const courseEdit = (btn, status, tableId, index) => {
    const table = btn.parentElement.parentElement;
    const inputFields = table.querySelectorAll("input");

    inputFields.forEach((input) => {
         input.style.backgroundColor = "#ffffff";
         input.removeAttribute('readonly');
    })
    if (status === true) {
         document.getElementById(`confirmEdit${tableId}${index}`).style.display = 'inline-block';
         document.getElementById(`isEdit${tableId}${index}`).style.display = 'none';

    } else {

    }
}


const removeSemester = (semesterID) => {
    db.ref('academics/' + semesterID).remove();
    alertMessage("This Semester has been removed successfully..", "success")
    setTimeout(() => {
        window.location.reload();
    }, 2000);
}

/**
* Delete Single Coruse Data
* @param {number} semesterID 
* @param {number} coruesIndex 
*/
const deleteSingleCoruse = (semesterID, coruesIndex) => {

    if (semesterID !== null && semesterID !== "undefined") {
         let getData = getSemesterByID(semesterID); // To Get Master Data

         if (getData && getData.coruseData && getData.coruseData.length > 0) {
              getData.coruseData.splice(coruesIndex, 1);
         }

         db.ref('academics/' + semesterID).update(getData);
         alertMessage("This coruse has been removed successfully..", "success")
    }
}

/**
* To Taggle Semester From for updated
* @param {boolean} staus 
*/
const toggleSemesterUpdateForm = (status, tableID) => {
    // editSemester
    // isNotEditSemester
    if (status === true) {
         document.getElementById(`editSemester${tableID}`).style.display = "block";
         document.getElementById(`isNotEditSemester${tableID}`).style.display = "none";
    } else {
         document.getElementById(`editSemester${tableID}`).style.display = "none";
         document.getElementById(`isNotEditSemester${tableID}`).style.display = "block";
    }
}


/**
* To Update Semester
* @param {number} semesterID 
* @returns 
*/
const updateSemester = (semesterID) => {
    var term = document.getElementById(`Term${semesterID}`).value;
    var year = document.getElementById(`Year${semesterID}`).value;
    var academicStatus = document.getElementById(`academicStatus${semesterID}`).value;
    var completionStatus = document.getElementById(`completionStatus${semesterID}`).value;

    if (!term) {
         alertMessage("Term can't be blank..", "warning");
         return false;
    } else if (!year) {
         alertMessage("Year can't be blank..", "warning");
         return false;
    } else if (!academicStatus) {
         alertMessage("Academic status can't be blank..", "warning");
         return false;
    } else if (!completionStatus) {
         alertMessage("Completion status can't be blank..", "warning");
         return false;
    }


    if (semesterID !== null && semesterID !== "undefined") {
         let getData = getSemesterByID(semesterID);

         getData.term = term;
         getData.year = year;
         getData.academicStatus = academicStatus;
         getData.completionStatus = completionStatus;

         db.ref('academics/' + semesterID).update(getData);
         alertMessage("This semester has been updated successfully..", "success")

    }
}

const showaddSemesterandCoursemain = (status) => {
    document.getElementById('topForm').innerHTML = ""
    if (status === true) {
         document.getElementById('addSemesterandCoursemain').style.display = 'block'
    } else {
         document.getElementById('addSemesterandCoursemain').style.display = 'none'
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