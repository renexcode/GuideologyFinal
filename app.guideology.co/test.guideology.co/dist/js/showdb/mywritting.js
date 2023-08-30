
// ###################### Show Data Start here ################################//
var writtingForm = document.getElementById('writtingForm');
var writtingRef = firebase.database().ref('/writting');

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    var writtingForm = document.getElementById('writtingForm');
    var uid = user.uid;
    const writtingRef = firebase.database().ref('writting/');
    const userData = writtingRef.orderByChild('uid').equalTo(user.uid);
    userData.on('value', snap =>{
        snap.forEach((data) => {
          var div = document.createElement('div')
        //   div.setAttribute('class', 'test')
div.id = data.key;
div.innerHTML = writtingTamplate(data.val())
writtingForm.appendChild(div);;
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
firebase.database().ref('applicationStatus').once('value',  snap => {
  snap.forEach((data) => {

      console.log(`Update FunctionKey!!!!!!!!!!!! >>>>>>>>> ${data.key}`)
  })
  // console.log(`Remove FunctionKey!!!!!!!!!!!! >>>>>>>>> ${data.key}`)
})

const deleteFun = () => {
    if (confirm('Are you sure you want to delete this?') === true) {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
              const writtingRef = firebase.database().ref('writting/');
              const userData = writtingRef.orderByChild('uid').equalTo(user.uid);
              userData.on('value', snap =>{
                  snap.forEach((data) => {
                   firebase.database().ref('writting/' + user.uid).remove()
                     
                  })
              })
            //   firebase.database().ref('datData/').once("value", snap => {
            //     console.log(snap.val())
            // })
            } else {
              console.log("User Logout please Signin")
            }
          });

          window.location.reload()
    }

}

// Update function
function update() {
    if (confirm('Are you sure you want to update this?') === true) {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
              const writtingRef = firebase.database().ref('writting/');
              const userData = writtingRef.orderByChild('uid').equalTo(user.uid);
              userData.on('value', snap =>{
                  snap.forEach((data) => {
                    var personalStatement = document.getElementById('personalStatement').value;
                    var goodSchool = document.getElementById('goodSchool').value;
                    var manualDexterity = document.getElementById('manualDexterity').value;
                    var descriptionForVolunteering = document.getElementById('descriptionForVolunteering').value;
                    var descriptionForAchievements = document.getElementById('descriptionForAchievements').value;
                    var title = document.getElementById('title').value;
                    var keyResponsibilities = document.getElementById('keyResponsibilities').value;
                    var hiddenId = document.getElementById('hiddenId').value;
                  
                    var updates = {
                        personalStatement : personalStatement,
                        goodSchool: goodSchool,
                        manualDexterity: manualDexterity,
                        descriptionForVolunteering: descriptionForVolunteering,
                        descriptionForAchievements: descriptionForAchievements,
                        title: title,
                        keyResponsibilities: keyResponsibilities,
                    }
                   var userUID = firebase.auth().currentUser.uid
                    firebase.database().ref().child('applicationStatus/' + userUID).update(updates)
                     
                  })
              })
            //   firebase.database().ref('datData/').once("value", snap => {
            //     console.log(snap.val())
            // })
            }
          });
          window.location.reload()
    } 
 
  
}


var writtingForm = document.getElementById('writtingForm');
  var writting = firebase.database().ref('/writting');

  
  writting.on('child_added', (data) => {

});

  writting.on('child_changed', (data) => {
    console.log('DDDDDDDDDDDDDDDDDDDDDDDDDDDDDd', data.key)
    var academicsNode = document.getElementById(data.key);
    academicsNode.innerHTML = writtingTamplate(data.val());
    
  });
  
  writting.on('child_removed', (data) => {
    var academicsNode = document.getElementById(data.key);
    academicsNode.parentNode.removeChild(academicsNode);
  });
  
  writtingForm.addEventListener('click', (e) => {
    var academicsNode = e.target.parentNode

 // UPDATE REVEIW

      
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


// DELETE REVEIW
if (e.target.classList.contains('edit')) {
if (e.target.classList.contains('delete')) {
  var id = academicsNode.id;
  firebase.database().ref('writting/' + id).remove();
}


    }
   
  }
  );
  

 
function writtingTamplate({
    personalStatement,
    goodSchool,
    manualDexterity,
    descriptionForVolunteering,
    descriptionForAchievements,
    title,
    keyResponsibilities,
    }) {
    
   
//   <button class='delete'>Delete</button>
// <i class="bi bi-trash"></i>
  return `
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
          <textarea name="mass" id="personalStatement" cols="6" rows="10" class="form-control writeinput" maxlength="4500"  required> ${personalStatement}</textarea> 
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
          <textarea name="" id="goodSchool" cols="6" rows="10" class="form-control writeinput" maxlength="2500" required> ${goodSchool} </textarea> 
       
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
          <textarea name="" id="manualDexterity" cols="6" rows="10" class="form-control writeinput" maxlength="600"  required> ${manualDexterity} </textarea> 
       
              <div style="display: flex; float: right; margin-right: 115px;">
                  <div id="manualDexteritycount" style="width: auto; background-color:#E1E1E1; font-size:10px; border-radius:10px;color:black; padding-left:10px; padding-right: 10px; margin-top:5px;">
                      <span id="manualDexteritycurrent_count">0</span>
                      <span id="manualDexteritymaximum_count">/ 600</span>
                  </div>
          </div>
  
      </div>
  </div>
  
  </div>
  <div class="container">
  <div class="row">
      <div class="col">
          <button type="button" id="writebtn" class=" col-lg-3 col-sm-6 col-md-3 btn btn-purple text-white mt-4 " onclick="add_exprience()">  <i  class="bi bi-plus-circle-fill"></i>  Add an experience</button>
          <button type="button" id="writebtn" class=" col-lg-3 col-sm-6 col-md-3 btn btn-success text-white mt-4 " onclick=" add_achievement()"> <i  class="bi bi-plus-circle-fill"></i> Add an Achievement</button>
          <button type="button" id="writebtn" style="  background-color:#D0BD60 !important; " class="col-lg-3 col-sm-6 col-md-3 btn btn-info text-white mt-4 add" onclick="add_custom()"> <i  class="bi bi-plus-circle-fill"></i> Add Custom Prompt</button>
      </div>
  </div>
  </div>
  <!-- Button 1 -->
  <div class="container" id="add_exprience" style="display: none;">
  <div class="row"><div class="col-lg-12"><label id="lable_write" for="mass">Write A Description For Each One Of Your Volunteering/Shadowing Experiences</label><textarea id="descriptionForVolunteering" cols="6" rows="6" class="form-control writeinput" maxlength="600" required> ${descriptionForVolunteering} </textarea><div style="display: flex; float: right; margin-right: 115px;">
      <div style="display: flex; float: right;">
          <div id="descriptionForVolunteeringcount" style="width: auto; background-color:#E1E1E1; font-size:10px; border-radius:10px;color:black; padding-left:10px; padding-right: 10px; margin-top:5px;">
              <span id="descriptionForVolunteeringcurrent_count">0</span>
              <span id="descriptionForVolunteeringmaximum_count">/ 600</span>
          </div>
  </div>
  </div></div></div>
  </div>
  <!-- Button 2 -->
  <div class="container" id="add_achievement" style="display: none;"><div class="row"><div class="col-lg-12">
  <label id="lable_write" for="mass">Write A Description For Each One Of Your Achievements</label><textarea  id="descriptionForAchievements" cols="6" rows="6" class="form-control writeinput" maxlength="600" required> ${descriptionForAchievements}</textarea> <div style="display: flex; float: right; margin-right: 115px;">
  <div style="display: flex; float: right;">
  <div id="descriptionForAchievementscount" style="width: auto; background-color:#E1E1E1; font-size:10px; border-radius:10px;color:black; padding-left:10px; padding-right: 10px; margin-top:5px;">
      <span id="descriptionForAchievementscurrent_count">0</span>
      <span id="descriptionForAchievementsmaximum_count">/ 600</span>
  </div>
  </div>
  </div></div></div></div>
  <!-- Button 3 -->
  <div class="container" id="add_custom" style="display: none;"><div class="row">
      <div class="col-lg-12">
          <label id="lable_write" for="mass">Title</label>
          <input value="${title}" id="title" cols="6" rows="1" placeholder="Type Your Prompt Here…" class="form-control writeinput" maxlength="600" required>
      <label id="lable_write" for="mass">Write A Description For Each One Of Your Achievements</label><textarea value="" id="keyResponsibilities" maxlength="600" cols="6" rows="6" class="form-control writeinput" required> ${keyResponsibilities} </textarea> <div style="display: flex; float: right; margin-right: 115px;">
      <div style="display: flex; float: right;">
      <div id="descriptionForAchievementscount" style="width: auto; background-color:#E1E1E1; font-size:10px; border-radius:10px;color:black; padding-left:10px; padding-right: 10px; margin-top:5px;">
          <span id="descriptionForAchievementscurrent_count">0</span>
          <span id="descriptionForAchievementsmaximum_count">/ 600</span>
      </div>
      </div>
      </div></div></div></div>
`
};

// $('#courseForm').submit(function (e) {
//   e.preventDefault();
//   $('#exampleModal').modal('show');
// });
