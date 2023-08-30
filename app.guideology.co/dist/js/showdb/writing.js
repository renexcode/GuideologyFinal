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
    const ref = db.ref('testwriting');
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

    if (academicSection !== "") {
        document.getElementById('writebtn').style.display = "none"
    }

    for (let index = 0; index < academicMasterData.length; index++) {
         const item = academicMasterData[index];

         const div = document.createElement('div');
         div.className = "p-2";
         div.innerHTML = `<div style=" position:relative; padding: 10px;" >
                         <div id="editSemester${item.id}" style="display:none">
                         <button type="button" class="btn btn-info text-white mb-2" style="background-color:#8860D0 !important" onclick="updateSemester(${item.id})"> Confirm</button> </br>
                         <button type="button" class="btn btn-secondary" onclick="toggleSemesterUpdateForm(${false}, ${item.id})"> Cancel </button>
                           
                         </div>
                         <div id="isNotEditSemester${item.id}" style="display:block">
                         <button class="btn btn-sm btn-success font-weight-bold text-white" onclick="updateSemester(${item.id})">Edit</button>
                         <button class="btn btn-sm btn-danger font-weight-bold text-white" data-toggle="modal" data-target="#isDelete${item.id}">Delete</button>
                         <form onsubmit="return false">
                         <div class="container">
                             <div class="row">
                                 <div class="col-lg-12" >
                                     <label id="lable_write" for="mass" >Personal Statement <div class="popup-container">
                                         <span class="popup-body popup-top">
                                             <h3> Personal Statement </h3>
                                             <hr>
                                             <p>Please explain why you want to pursue a dental career.</p>
                                           </span>
                                         <span class="popup-link"><i class="fa fa-info-circle" aria-hidden="true"style="font-size: 14px;"></i></span>
                                       
                                       </div></label>
                                     <input type="hidden" id="hiddenId">
                                     <textarea name="mass" id="personalStatement" cols="6" rows="12" class="form-control writeinput" maxlength="4500"  required> ${item.personalStatement } </textarea> 
                                     <div style="display: flex; float: right; margin-right: 115px;">
                                         <div id="count" style="width: auto; background-color:#E1E1E1; font-size:10px; border-radius:10px;color:black; padding-left:10px; padding-right: 10px; margin-top:5px;">
                                             <span id="current_count">0</span>
                                             <span id="maximum_count">/ 4500</span>
                                         </div>
                                 </div>
                                 </div>
                             </div>
             
                         </div>
                         <div class="container">
                             <div class="row">
                                 <div class="col-lg-12" >
                                     <label id="lable_write" for="mass">COVID-19 Impact.  <div class="popup-container">
                                         <span class="popup-body popup-top">
                                             <h3> COVID-19 Impact </h3>
                                             <hr>
                                             <p>Describe how COVID-19 has impacted your preparation for the application to dental school. (Academically, professionally, or/and personally.</p>
                                           </span>
                                         <span class="popup-link"><i class="fa fa-info-circle" aria-hidden="true"style="font-size: 14px;"></i></span>
                                       
                                       </div> </label>
                                     <textarea name="" id="goodSchool" cols="6" rows="12" class="form-control writeinput" maxlength="2500" required> ${item.goodSchool } </textarea> 
                                  
                                         <div style="display: flex; float: right; margin-right: 115px;">
                                             <div id="goodSchoolcount" style="width: auto; background-color:#E1E1E1; font-size:10px; border-radius:10px;color:black; padding-left:10px; padding-right: 10px; margin-top:5px;">
                                                 <span id="goodSchoolcurrent_count">0</span>
                                                 <span id="goodSchoolmaximum_count">/ 2500</span>
                                             </div>
                                   
                                     </div>
             
                                 </div>
                             </div>
             
                         </div>
                         <div class="container">
                             <div class="row">
                                 <div class="col-lg-12" >
                                     <label id="lable_write" for="mass">Manual Dexterity.  <div class="popup-container">
                                         <span class="popup-body popup-top">
                                             <h3> Manual Dexterity </h3>
                                             <hr>
                                             <p>Describe any activities requiring manual dexterity (e.g. activities requiring hand-eye coordination and fine motor skills such as cross-stitching, sewing, art, crafts, playing musical instruments, auto repair, etc.) at which you are proficient. Be sure to enter your response as a narrative list; do not use bullet points.</p>
                                           </span>
                                         <span class="popup-link"><i class="fa fa-info-circle" aria-hidden="true"style="font-size: 14px;"></i></span>
                                       
                                       </div> </label>
                                     <textarea name="" id="manualDexterity" cols="6" rows="12" class="form-control writeinput" maxlength="600"  required> ${item.manualDexterity} </textarea> 
                                  
                                         <div style="display: flex; float: right; margin-right: 115px;">
                                             <div id="manualDexteritycount" style="width: auto; background-color:#E1E1E1; font-size:10px; border-radius:10px;color:black; padding-left:10px; padding-right: 10px; margin-top:5px;">
                                                 <span id="manualDexteritycurrent_count">0</span>
                                                 <span id="manualDexteritymaximum_count">/ 600</span>
                                             </div>
                                     </div>
             
                                 </div>
                             </div>
                         </div>
                         <div style="text-align:left">
                         <!---Save Buttons Starts---->

                         <!--- <button class="btn-primary mt-3 submitCoruseBtn" type="submit" id="submitCoruseBtn${item.id}" onclick="addCourse(${item.id}, event)" style="border: none; outline: none; display: none;"> Save Promt</button> 
                         <button class="btn-primary mt-3 submitCoruseBtn" type="submit" id="submitCoruseBtn2${item.id}" onclick="addCourse2(${item.id}, event)" style="border: none; outline: none; display: none;"> Save Achievement</button>
                         <button class="btn-primary mt-3 submitCoruseBtn" type="submit" id="submitCoruseBtn3${item.id}" onclick="close()" style="border: none; outline: none; display: none;"> Save Experience</button>   ---->

                         <!---Save Buttons End---->

                         <!---Show Buttons Start---->
                        
                         <button style="background-color: #7460ee !important;" class="addCourse-btn btn btn-info text-white add addCourseBtn" id="addCourseBtn3${item.id}" onclick="addanExperience(${item.id}, ${true})"> <i class="bi bi-bookmarks-fill mx-2" style="margin-bottom: 2px;"></i> Show Experiences </button>
                         <button style="background-color: #39cb7f !important;" class="addCourse-btn btn btn-info text-white add addCourseBtn" id="addCourseBtn2${item.id}" onclick="addanAchievement(${item.id}, ${true})"> <i class="bi bi-bookmarks-fill mx-2" style="margin-bottom: 2px;"></i> Show Achievements </button>
                         <button style="background-color: #D0BD60 !important;" class="addCourse-btn btn btn-info text-white add addCourseBtn" id="addCourseBtn${item.id}" onclick="newCourseView(${item.id}, ${true})"> <i class="bi bi-bookmarks-fill mx-2" style="margin-bottom: 2px;"></i> Show
                         Custom Promts</button>

                         <!---Show Buttons End---->
                      </div>

                      <!---Add Buttons Start---->
                        <div class="mt-5">
                      <button style="background: none !important; color:#7460ee !important; font-weight: 600;" class="addCourse-btn btn btn-info text-white add addCourseBtn" data-toggle="modal" data-target="#addExperiencesModal"> <i class="bi bi-plus-circle-fill mx-2" style="margin-bottom: 2px;"></i> Add
                         Experiences</button>
                      <button style="background: none !important; color:#39cb7f !important; font-weight: 600;" class="addCourse-btn btn btn-info text-white add addCourseBtn" data-toggle="modal" data-target="#addAchievementsModal"> <i class="bi bi-plus-circle-fill mx-2" style="margin-bottom: 2px;"></i> Add
                       Achievements</button>
                      <button style="background: none !important; color:#D0BD60 !important; font-weight: 600;" class="addCourse-btn btn btn-info text-white add addCourseBtn" data-toggle="modal" data-target="#addCustomPromtModal"> <i class="bi bi-plus-circle-fill mx-2" style="margin-bottom: 2px;"></i> Add
                      Custom Promts</button>
                        </div>
                      <!---Add Buttons End---->

                      <!---Add custom promt Modal Start---->
                      <div class="modal fade" id="addCustomPromtModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <div class="mb-2 row justify-content-between"><div class="mob"><label id="lable_write" for="mass">Title</label><input value="" id="title" cols="6" rows="1" placeholder="Type Your Prompt Here…" class="form-control" maxlength="600" required=""></div><div class="mob mb-2"> <label id="lable_write" for="mass">Description/Key Responsibilities</label><textarea value="" id="keyResponsibilities" maxlength="600" cols="6" rows="3" class="form-control" required=""></textarea></div></div> 
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary" onclick="addCourse(${item.id}, event)">Save</button>
      </div>
    </div>
  </div>
</div>
                     
<!---Add custom promt Modal End---->


                      <!---Add Achievements Modal  Start---->

                      <div class="modal fade" id="addAchievementsModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <div class="mb-2 row justify-content-between"><div class="mob mb-2"> <label id="lable_write" for="mass">Write A Description For Each One Of Your Achievements</label><textarea value="" id="keyResponsibilities2" maxlength="600" cols="6" rows="3" class="form-control" required=""></textarea></div></div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary" onclick="addCourse2(${item.id}, event)">Save</button>
      </div>
    </div>
  </div>
</div>
                      <!---Add Achievements Modal  End---->

                      <!---Add Experiences Modal  Start---->

                      <div class="modal fade" id="addExperiencesModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <div class="mb-2 row justify-content-between"><div class="mob mb-2"> <label id="lable_write" for="mass">Write A Description For Each One Of Your Volunteering/Shadowing Experiences</label><textarea value="" id="keyResponsibilities3" maxlength="600" cols="6" rows="3" class="form-control" required=""></textarea></div></div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary" onclick="addCourse3(${item.id}, event)">Save</button>
      </div>
    </div>
  </div>
</div>
                      <!---Add Experiences Modal  End---->


                                  

                                  <!---Confirmation Modal---->
                                  <div class="modal fade" id="isDelete${item.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-centered" role="document">
                                       <div class="modal-content">
                                            <div class="modal-header">
                                                 <h5 class="modal-title" id="exampleModalLongTitle">Delete Writing </h5>
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
                    
                  <div style="display:none;" id="table_main">
                     <table class="table  table-striped table-responsive-stack p-5" id="tableOne">
                     <!-- <thead id="subjectHeader" class="headerofTH">
                             <tr>
                                 <th class="col-lg-2 col-md-2">Course Code</th>
                                 <th class="col-lg-2 col-md-2">Course Title</th>
                                 <th class="col-lg-2 col-md-2">Subject</th>
                                 <th class="col-lg-2 col-md-2">Credits</th>
                                 <th class="col-lg-2 col-md-2">Grades</th>
                                 <th class="col-lg-2 col-md-2">Action</th>
                             </tr>
                         </thead> --->
                         <tbody id="addCustomPromt">
                         </tbody>
                     </table>

                     </div>
                  <div style="display:none;" id="table_main2">
                     <table class="table  table-striped table-responsive-stack p-5" id="tableOne">
                     <!-- <thead id="subjectHeader" class="headerofTH">
                             <tr>
                                 <th class="col-lg-2 col-md-2">Course Code</th>
                                 <th class="col-lg-2 col-md-2">Course Title</th>
                                 <th class="col-lg-2 col-md-2">Subject</th>
                                 <th class="col-lg-2 col-md-2">Credits</th>
                                 <th class="col-lg-2 col-md-2">Grades</th>
                                 <th class="col-lg-2 col-md-2">Action</th>
                             </tr>
                         </thead> --->
                         <tbody id="addanAchievement">
                         </tbody>
                     </table>
                     
                     </div>
                    
                    <div style="display:none;" id="table_main3">
                     <table class="table  table-striped table-responsive-stack p-5" id="tableOne">
                     <!--  <thead id="subjectHeader" class="headerofTH">
                             <tr>
                                 <th class="col-lg-2 col-md-2">Course Code</th>
                                 <th class="col-lg-2 col-md-2">Course Title</th>
                                 <th class="col-lg-2 col-md-2">Subject</th>
                                 <th class="col-lg-2 col-md-2">Credits</th>
                                 <th class="col-lg-2 col-md-2">Grades</th>
                                 <th class="col-lg-2 col-md-2">Action</th>
                             </tr>
                         </thead> --->
                         <tbody id="addanExperience">
                         </tbody>
                     </table>
                     </div>
                     `;
         academicSection.appendChild(div);
         const tableId = item.id.toString();
         if (item && item.customPromtData !== null && item.customPromtData !== "undefined") {
              addCustomPromt(item, tableId);
         }
         if (item && item.achievementData !== null && item.achievementData !== "undefined") {
              addachievement(item, tableId);
         }
         if (item && item.experienceData !== null && item.experienceData !== "undefined") {
              addexperience(item, tableId);
         }
    }
}

// GENERATE COURSE TABLE VIEW
const addCustomPromt = (masterData, tableId) => {
    const table = document.getElementById("addCustomPromt");
    table.innerHTML = '';

    if (masterData && masterData.customPromtData && masterData.customPromtData.length > 0) {
         for (let index = 0; index < masterData.customPromtData.length; index++) {
              const item = masterData.customPromtData[index];
              const tr = document.createElement("tr");
              tr.innerHTML = `<tr>
             
                                  <td class="col-lg-12 col-md-2"> 
                                     <input type="text" class="form-control uname-box" id="title${tableId}${index}" aria-describedby="emailHelp" placeholder="Course Code" value="${item.title ?? item.title}"> 

                                     <textarea value="" id="keyResponsibilities${tableId}${index}" maxlength="600" cols="6" rows="4" class="form-control mt-2" required="" spellcheck="false">${item.keyResponsibilities}</textarea>
                                  </td>
                             
                                 
                                 
                                  <td class="col-lg-2 col-md-2 btn-field">
                                  <!---  <button onclick="courseEdit(this, ${true}, ${tableId}, ${index})" id="isEdit${tableId}${index}">Edit</button> ---->
                                     <button onclick="confirmCoruseEdit(${tableId}, ${index})" id="confirmEdit${tableId}${index}" >Confirm</button>
                                     <button data-toggle="modal" data-target="#isDeleteCoruse${tableId}${index}">Delete</button>
                                  </td>
                                  
                             </tr>

                           
                             <!--- Confirmation Modal ---->
                             <div class="modal fade" id="isDeleteCoruse${tableId}${index}" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                               <div class="modal-dialog modal-dialog-centered" role="document">
                                  <div class="modal-content">
                                       <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLongTitle">Delete this</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                 <span aria-hidden="true">&times;</span>
                                            </button>
                                       </div>
                                       <div class="modal-body p-4">
                                       <h5 class="modal-title" id="exampleModalLongTitle"> Are you sure to delete this?? </h5>
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
        tr.innerHTML = '<td><p style="text-align: center;">No Custom Promt Added</p></td>';
        table.appendChild(tr)
   }
}

const addachievement = (masterData, tableId) => {
    const table = document.getElementById("addanAchievement");
    table.innerHTML = '';

    if (masterData && masterData.achievementData && masterData.achievementData.length > 0) {
         for (let index = 0; index < masterData.achievementData.length; index++) {
              const item = masterData.achievementData[index];
              const tr = document.createElement("tr");
              tr.innerHTML = `<tr>
             
                                  <td class="col-lg-12 col-md-2"> 
                        
                                     <textarea value="" id="keyResponsibilities2${tableId}${index}" maxlength="600" cols="6" rows="4" class="form-control mt-2" required="" spellcheck="false">${item.keyResponsibilities}</textarea>
                                  </td>
                             
                                 
                                 
                                  <td class="col-lg-2 col-md-2 btn-field">
                                  <!--- <button onclick="courseEdit(this, ${true}, ${tableId}, ${index})" id="isEdit${tableId}${index}">Edit</button> ---->
                                     <button onclick="confirmCoruseEdit2(${tableId}, ${index})" id="confirmEdit${tableId}${index}" >Confirm</button>
                                     <button data-toggle="modal" data-target="#isDeleteCoruse2${tableId}${index}">Delete</button>
                                  </td>
                                  
                             </tr>

                           
                             <!--- Confirmation Modal ---->
                             <div class="modal fade" id="isDeleteCoruse2${tableId}${index}" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                               <div class="modal-dialog modal-dialog-centered" role="document">
                                  <div class="modal-content">
                                       <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLongTitle"> Delete this Course?? </h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                 <span aria-hidden="true">&times;</span>
                                            </button>
                                       </div>
                                       <div class="modal-body p-4">
                                       <h5 class="modal-title" id="exampleModalLongTitle"> Are you sure to delete this?? </h5>
                                       </div>
                                       <div class="modal-footer">
                                            <button type="button" class="btn btn-primary" onclick="deleteSingleCoruse2(${tableId}, ${index})" data-dismiss="modal">Yes</button>
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
        tr.innerHTML = '<td><p style="text-align: center;">No Achievements Added</p></td>';
        table.appendChild(tr)
   }
}

const addexperience = (masterData, tableId) => {
    const table = document.getElementById("addanExperience");
    table.innerHTML = '';

    if (masterData && masterData.experienceData && masterData.experienceData.length > 0) {
         for (let index = 0; index < masterData.experienceData.length; index++) {
              const item = masterData.experienceData[index];
              const tr = document.createElement("tr");
              tr.innerHTML = `<tr>
             
                                  <td class="col-lg-12 col-md-2"> 
                        
                                     <textarea value="" id="keyResponsibilities3${tableId}${index}" maxlength="600" cols="6" rows="4" class="form-control mt-2" required="" spellcheck="false"> ${item.keyResponsibilities3}</textarea>
                                  </td>
                             
                                 
                                 
                                  <td class="col-lg-2 col-md-2 btn-field">
                                  <!---  <button onclick="courseEdit(this, ${true}, ${tableId}, ${index})" id="isEdit${tableId}${index}">Edit</button>  ---->
                                     <button onclick="confirmCoruseEdit3(${tableId}, ${index})" id="confirmEdit${tableId}${index}" >Confirm</button>
                                     <button data-toggle="modal" data-target="#isDeleteCoruse3${tableId}${index}">Delete</button>
                                  </td>
                                  
                             </tr>

                           
                             <!--- Confirmation Modal ---->
                             <div class="modal fade" id="isDeleteCoruse3${tableId}${index}" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                               <div class="modal-dialog modal-dialog-centered" role="document">
                                  <div class="modal-content">
                                       <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLongTitle"> Delete this</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                 <span aria-hidden="true">&times;</span>
                                            </button>
                                       </div>
                                       <div class="modal-body p-4">
                                       <h5 class="modal-title" id="exampleModalLongTitle"> Are you sure to delete this?? </h5>
                                       </div>
                                       <div class="modal-footer">
                                            <button type="button" class="btn btn-primary" onclick="deleteSingleCoruse3(${tableId}, ${index})" data-dismiss="modal">Yes</button>
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
        tr.innerHTML = '<td><p style="text-align: center;">No Experiences Added</p></td>';
        table.appendChild(tr)
   }
}


// CREATE NEW COURSE TABLE VIEW
const newCourseView = (tableId, status) => {
    document.getElementById('table_main').style.display = "block"
    document.getElementById('table_main2').style.display = "none"
    document.getElementById('table_main3').style.display = "none"
  

    // if (status === true) {
    //      document.getElementById(`addCourseBtn${tableId}`).style.display = 'none';
    //      document.getElementById(`addCourseBtn2${tableId}`).style.display = 'inline-block';
    //      document.getElementById(`addCourseBtn3${tableId}`).style.display = 'inline-block';
    //      document.getElementById(`submitCoruseBtn${tableId}`).style.display = "inline-block"
    //      document.getElementById(`submitCoruseBtn2${tableId}`).style.display = "none"
    //      document.getElementById(`submitCoruseBtn3${tableId}`).style.display = "none"
    //     //  document.getElementsByClassName('testing').style.display = 'block'
    // }
}


const addanAchievement = (tableId, status) => {
document.getElementById('table_main2').style.display = "block"
document.getElementById('table_main').style.display = "none"
document.getElementById('table_main3').style.display = "none"
   

    // if (status === true) {
    //      document.getElementById(`addCourseBtn2${tableId}`).style.display = 'none';
    //      document.getElementById(`addCourseBtn${tableId}`).style.display = 'inline-block';
    //      document.getElementById(`addCourseBtn3${tableId}`).style.display = 'inline-block';
    //      document.getElementById(`submitCoruseBtn2${tableId}`).style.display = "inline-block"
    //      document.getElementById(`submitCoruseBtn${tableId}`).style.display = "none"
    //      document.getElementById(`submitCoruseBtn3${tableId}`).style.display = "none"
    //     //  document.getElementsByClassName('testing').style.display = 'block'
    // }
}
const addanExperience = (tableId, status) => {
document.getElementById('table_main3').style.display = "block"
document.getElementById('table_main').style.display = "none"
document.getElementById('table_main2').style.display = "none"
   

    // if (status === true) {
    //      document.getElementById(`addCourseBtn3${tableId}`).style.display = 'none';
    //      document.getElementById(`addCourseBtn2${tableId}`).style.display = 'inline-block';
    //      document.getElementById(`addCourseBtn${tableId}`).style.display = 'inline-block';
    //      document.getElementById(`submitCoruseBtn3${tableId}`).style.display = "inline-block"
    //      document.getElementById(`submitCoruseBtn2${tableId}`).style.display = "none"
    //      document.getElementById(`submitCoruseBtn${tableId}`).style.display = "none"
    //     //  document.getElementsByClassName('testing').style.display = 'block'
    // }
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
const removeCourseView2 = (btn, tableId, status) => {
    const tr = btn.parentElement.parentElement;
    tr.remove();
    if (status === false) {
         document.getElementById(`addCourseBtn2${tableId}`).style.display = 'inline-block';
         document.getElementById(`submitCoruseBtn2${tableId}`).style.display = "none"
    }
}
const removeCourseView3 = (btn, tableId, status) => {
    const tr = btn.parentElement.parentElement;
    tr.remove();
    if (status === false) {
         document.getElementById(`addCourseBtn3${tableId}`).style.display = 'inline-block';
         document.getElementById(`submitCoruseBtn3${tableId}`).style.display = "none"
    }
}



/**
* 
* Add Academics Semester
* 
*/
const addAcademicSemester = () => {
    var personalStatement = document.getElementById('personalStatement').value;
    var goodSchool = document.getElementById('goodSchool').value;
    var manualDexterity = document.getElementById('manualDexterity').value;
    var hiddenId = document.getElementById('hiddenId').value;
    var userID = firebase.auth().currentUser.uid
   
    // give user id in here from session

    var id = hiddenId || Date.now();

    if (!personalStatement) {
         alertMessage("Personal Statement can't be blank..", "warning");
         return false;
    } else if (!goodSchool) {
         alertMessage("Good School can't be blank..", "warning");
         return false;
    } else if (!manualDexterity) {
         alertMessage("Manual Dexterity status can't be blank..", "warning");
         return false;
    } else {
         const academicsData = {
              id: id,
              uid: userID,
              personalStatement: personalStatement,
              goodSchool: goodSchool,
              manualDexterity: manualDexterity,
              experienceData: [],
              achievementData: [],
              customPromtData: []
         }

         db.ref('testwriting/' + id).set(academicsData);
         alertMessage("Writing has been added successfully..", "success")
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
    db.ref('testwriting/' + coruseID).on('value', (snapshot) => {
         semesterMasterData = snapshot.val();
    })
    return semesterMasterData
}

const close = () => {
    document.getElementById('table_main').style.display = "none";
    document.getElementById('table_main2').style.display = "none";
    document.getElementById('table_main3').style.display = "none";
}

/**
* To Add Semester wise New Coruse
* @param {number} semesterID 
*/

const addCourse = (semesterID, event) => {
    var title = document.getElementById('title').value;
    var keyResponsibilities = document.getElementById('keyResponsibilities').value;

    if (!title) {
         alertMessage("Title can't be blank..", "warning");
         return false;
    } else if (!keyResponsibilities) {
         alertMessage("Keyresponsibilities can't be blank..", "warning");
         return false;
    } 

    const courseObj = {
         title: title,
         keyResponsibilities: keyResponsibilities,
    }

    if (semesterID !== null && semesterID !== "undefined") {
         let getData = getSemesterByID(semesterID);
         if (getData && getData.customPromtData && getData.customPromtData.length > 0) {
              getData.customPromtData.push(courseObj);
         } else {
              getData.customPromtData = [courseObj];
         }

         db.ref('testwriting/' + semesterID).update(getData);
         alertMessage("New Custom prompt has been added successfully..", "success")
         setTimeout(() => {
            window.location.reload();
        }, 2000);
    }
    event.preventDefault();
}

const addCourse2 = (semesterID, event) => {
    var keyResponsibilities2 = document.getElementById('keyResponsibilities2').value;

    if (!keyResponsibilities2) {
         alertMessage("Keyresponsibilities can't be blank..", "warning");
         return false;
    } 

    const courseObj = {
         keyResponsibilities: keyResponsibilities2,
    }

    if (semesterID !== null && semesterID !== "undefined") {
         let getData = getSemesterByID(semesterID);
         if (getData && getData.achievementData && getData.achievementData.length > 0) {
              getData.achievementData.push(courseObj);
         } else {
              getData.achievementData = [courseObj];
         }

         db.ref('testwriting/' + semesterID).update(getData);
         alertMessage("New Achievement has been added successfully..", "success")
  setTimeout(() => {
            window.location.reload();
        }, 2000);
    }
    event.preventDefault();
}
const addCourse3 = (semesterID, event) => {
    var keyResponsibilities3 = document.getElementById('keyResponsibilities3').value;

    if (!keyResponsibilities3) {
         alertMessage("Keyresponsibilities can't be blank..", "warning");
         return false;
    }
    const courseObj = {
         keyResponsibilities3: keyResponsibilities3,
    }

    if (semesterID !== null && semesterID !== "undefined") {
         let getData = getSemesterByID(semesterID);
         if (getData && getData.experienceData && getData.experienceData.length > 0) {
              getData.experienceData.push(courseObj);
         } else {
              getData.experienceData = [courseObj];
         }

         db.ref('testwriting/' + semesterID).update(getData);
         alertMessage("New Experience has been added successfully..", "success")
         setTimeout(() => {
            window.location.reload();
        }, 2000);
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
    var title = document.getElementById(`title${semesterID}${coruesIndex}`).value;
    var keyResponsibilities = document.getElementById(`keyResponsibilities${semesterID}${coruesIndex}`).value;

    if (!title) {
         alertMessage("Title can't be blank..", "warning");
         return false;
    } else if (!keyResponsibilities) {
         alertMessage("Keyresponsibilities can't be blank..", "warning");
         return false;
    } 

    const courseObj = {
         title: title,
         keyResponsibilities: keyResponsibilities,
    }

    if (semesterID !== null && semesterID !== "undefined") {
         let getData = getSemesterByID(semesterID);
         if (getData && getData.customPromtData && getData.customPromtData.length > 0) {
              if (coruesIndex !== -1) {
                   getData.customPromtData[coruesIndex] = courseObj
              }
         }

         db.ref('testwriting/' + semesterID).update(getData);
         alertMessage("This Custom promt has been updated successfully..", "success")

    }

}
const confirmCoruseEdit2 = (semesterID, coruesIndex) => {
    var keyResponsibilities = document.getElementById(`keyResponsibilities2${semesterID}${coruesIndex}`).value;

    if (!keyResponsibilities) {
         alertMessage("Keyresponsibilities can't be blank..", "warning");
         return false;
    } 

    const courseObj = {
         keyResponsibilities: keyResponsibilities,
    }

    if (semesterID !== null && semesterID !== "undefined") {
         let getData = getSemesterByID(semesterID);
         if (getData && getData.achievementData && getData.achievementData.length > 0) {
              if (coruesIndex !== -1) {
                   getData.achievementData[coruesIndex] = courseObj
              }
         }

         db.ref('testwriting/' + semesterID).update(getData);
         alertMessage("This Achievement has been updated successfully..", "success")

    }

}
const confirmCoruseEdit3 = (semesterID, coruesIndex) => {
    var keyResponsibilities3 = document.getElementById(`keyResponsibilities3${semesterID}${coruesIndex}`).value;

    if (!keyResponsibilities3) {
         alertMessage("Keyresponsibilities can't be blank..", "warning");
         return false;
    }

    const courseObj = {
         keyResponsibilities3: keyResponsibilities3,
    }

    if (semesterID !== null && semesterID !== "undefined") {
         let getData = getSemesterByID(semesterID);
         if (getData && getData.experienceData && getData.experienceData.length > 0) {
              if (coruesIndex !== -1) {
                   getData.experienceData[coruesIndex] = courseObj
              }
         }

         db.ref('testwriting/' + semesterID).update(getData);
         alertMessage("This Experience has been updated successfully..", "success")

    }

}


const courseEdit = (btn, status, tableId, index) => {
    const table = btn.parentElement.parentElement;
    const inputFields = table.querySelectorAll("input");

    inputFields.forEach((input, textarea) => {
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
    db.ref('testwriting/' + semesterID).remove();
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

         if (getData && getData.customPromtData && getData.customPromtData.length > 0) {
              getData.customPromtData.splice(coruesIndex, 1);
         }

         db.ref('testwriting/' + semesterID).update(getData);
         alertMessage("This Custom promt has been removed successfully..", "success")
        //  setTimeout(() => {
        //     window.location.reload();
        // }, 2000);
    }
}
const deleteSingleCoruse2 = (semesterID, coruesIndex) => {

    if (semesterID !== null && semesterID !== "undefined") {
         let getData = getSemesterByID(semesterID); // To Get Master Data

         if (getData && getData.achievementData && getData.achievementData.length > 0) {
              getData.achievementData.splice(coruesIndex, 1);
         }

         db.ref('testwriting/' + semesterID).update(getData);
         alertMessage("This Achievement has been removed successfully..", "success")
        //  setTimeout(() => {
        //     window.location.reload();
        // }, 2000);
    }
}
const deleteSingleCoruse3 = (semesterID, coruesIndex) => {

    if (semesterID !== null && semesterID !== "undefined") {
         let getData = getSemesterByID(semesterID); // To Get Master Data

         if (getData && getData.experienceData && getData.experienceData.length > 0) {
              getData.experienceData.splice(coruesIndex, 1);
         }

         db.ref('testwriting/' + semesterID).update(getData);
         alertMessage("This Experience has been removed successfully..", "success")
        //  setTimeout(() => {
        //     window.location.reload();
        // }, 2000);
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
    var personalStatement = document.getElementById('personalStatement').value;
    var goodSchool = document.getElementById('goodSchool').value;
    var manualDexterity = document.getElementById('manualDexterity').value;
    var hiddenId = document.getElementById('hiddenId').value;
    var userID = firebase.auth().currentUser.uid
   
    // give user id in here from session

    var id = hiddenId || Date.now();

    if (!personalStatement) {
         alertMessage("Personal Statement can't be blank..", "warning");
         return false;
    } else if (!goodSchool) {
         alertMessage("Good School can't be blank..", "warning");
         return false;
    } else if (!manualDexterity) {
         alertMessage("Manual Dexterity status can't be blank..", "warning");
         return false;
    }


    if (semesterID !== null && semesterID !== "undefined") {
         let getData = getSemesterByID(semesterID);

         getData.personalStatement = personalStatement;
         getData.goodSchool = goodSchool;
         getData.manualDexterity = manualDexterity;

         db.ref('testwriting/' + semesterID).update(getData);
         alertMessage("The writing has been updated successfully..", "success")

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

$('#personalStatement').keyup(function() {    
    var characterCount = $(this).val().length,
        current_count = $('#current_count'),
        maximum_count = $('#maximum_count'),
        count = $('#count');    
        current_count.text(characterCount);        
});
$('#goodSchool').keyup(function() {    
    var characterCount = $(this).val().length,
        current_count = $('#goodSchoolcurrent_count'),
        maximum_count = $('#goodSchoolmaximum_count'),
        count = $('#goodSchoolcount');    
        current_count.text(characterCount);        
});
$('#manualDexterity').keyup(function() {    
    var characterCount = $(this).val().length,
        current_count = $('#manualDexteritycurrent_count'),
        maximum_count = $('#manualDexteritymaximum_count'),
        count = $('#manualDexteritycount');    
        current_count.text(characterCount);        
});
$('#descriptionForVolunteering').keyup(function() {    
    var characterCount = $(this).val().length,
        current_count = $('#descriptionForVolunteeringcurrent_count'),
        maximum_count = $('#descriptionForVolunteeringmaximum_count'),
        count = $('#descriptionForVolunteeringcount');    
        current_count.text(characterCount);        
});

$('#descriptionForExperiences').keyup(function() {    
    var characterCount = $(this).val().length,
        current_count = $('#descriptionForExperiencescurrent_count'),
        maximum_count = $('#descriptionForExperiencesmaximum_count'),
        count = $('#descriptionForExperiencescount');    
        current_count.text(characterCount);        
});
$('#descriptionForAchievements').keyup(function() {    
    var characterCount = $(this).val().length,
        current_count = $('#descriptionForAchievementscurrent_count'),
        maximum_count = $('#descriptionForAchievementsmaximum_count'),
        count = $('#descriptionForAchievementscount');    
        current_count.text(characterCount);        
});
$('#keyResponsibilities').keyup(function() {    
    var characterCount = $(this).val().length,
        current_count = $('#keyResponsibilitiescurrent_count'),
        maximum_count = $('#keyResponsibilitiesmaximum_count'),
        count = $('#keyResponsibilitiescount');    
        current_count.text(characterCount);        
});
{/* <td class="col-lg-2 col-md-2"> <input type="text" class="form-control uname-box" id="keyResponsibilities" aria-describedby="emailHelp" placeholder="Course Title"></td>
<td class="col-lg-2 col-md-2"> <input type="text" class="form-control uname-box" id="popupSubject" aria-describedby="emailHelp" placeholder="Subject"></td>
<td class="col-lg-2 col-md-2"> <input type="number" class="form-control uname-box" id="popupCredits" aria-describedby="emailHelp" placeholder="Credits"></td>
<td class="col-lg-2 col-md-2"> <input type="text" class="form-control uname-box" id="popupGrades" aria-describedby="emailHelp" placeholder="Grades"> </td> */}