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

  

// READ REVEIWS


var myDatCards = document.getElementById('myDatCards');
var datDataRef = db.ref('/datData');

// ######################################################//

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var myDatCards = document.getElementById('myDatCards');
      var uid = user.uid;
      const datDataRef = firebase.database().ref('datData/');
      const userData = datDataRef.orderByChild('uid').equalTo(user.uid);
      userData.on('value', snap =>{
          snap.forEach((data) => {
            var li = document.createElement('li')
            li.id = data.key;
            li.innerHTML = addDatTemplate(data.val())
            myDatCards.appendChild(li);
            li.classList.add('card', 'ml-3')
              console.log('DatakiKey',data.key)
              console.log(data.val())
          })
      })
    //   firebase.database().ref('datData/').once("value", snap => {
    //     console.log(snap.val())
    // })
    } else {
      console.log("User Logout please Signin")
      // User is signed out
//       const refUserInformation = database.ref('UserInformation/')
// const currentUserQuery = refUserInformation.orderByChild('user_id').equalTo(user.uid);
// currentUserQuery.on('value', function(snapshot){
//   snapshot.forEach((data) => {
//     console.log(data.val())
//   });
// })
      // ...
    }
  });

// ##########################################################//

// datDataRef.on('child_added', (data) => {
//     console.log(`datDataRef ===>>> ${data.key}`)
//   var li = document.createElement('li')
//   li.id = data.key;
//   li.innerHTML = addDatTemplate(data.val())
//   myDatCards.appendChild(li);
//   li.classList.add('card', 'ml-3')
// });

// datDataRef.on('child_changed', (data) => {
//   var datNode = document.getElementById(data.key);
//   datNode.innerHTML = addDatTemplate(data.val());
// });

datDataRef.on('child_removed', (data) => {
  var datNode = document.getElementById(data.key);
  datNode.parentNode.removeChild(datNode);
});

myDatCards.addEventListener('click', (e) => {
  var datNode = e.target.parentNode

  // UPDATE REVEIW
  if (e.target.classList.contains('edit')) {
    fullName.value = datNode.querySelector('.fullName').innerText;
    message.value  = datNode.querySelector('.message').innerText;
    hiddenId.value = datNode.id;
  }

  // DELETE REVEIW
  if (e.target.classList.contains('delete')) {
    var id = datNode.id;
    db.ref('datData/' + id).remove();
  }
});
   
   
function addDatTemplate({perceptualAbility,quantitativeReasoing,readingComprehension,biology,generalChemitry,organicChemistry,totalScience,academicAverage}) {
 
    return `
    <div style="padding: 44px 35px; background-color: white; border-radius: 40px; width: 90%;">
    <div class="row">
        <div class="col-lg-4 col-sm-6">
            <label style="color:black; "><b> Perceptual Ability: </b></label>
        </div>
        <div class="col-lg-2 col-sm-6">
            <label style="color:#5AB9EA; text-align: center !important;"><b> ${perceptualAbility} </b></label>
        </div>
        <div class="col-lg-5 d-none d-md-block" id="add_editBtn">
            <div style="display:flex; flex-direction:row;">
               
                    <Button style="color: red; background: none; border:none; outline:none;" class=''>Remove</Button>
                    <Button style="color: #5AB9EA; background: none; border:none; outline:none; margin-left: 20px;">Edit</Button>
            </div>

        </div>



    </div>
    <div class="row ">
        <div class="col-lg-4 col-sm-6">
            <label style="color:black; ;"><b> Quantitative Reasoning: </b></label>

        </div>
        <div class="col-lg-2 col-sm-6">
            <label style="color:#5AB9EA; ;"> <b> ${quantitativeReasoing} </b></label>
        </div>


    </div>
    <div class="row">
        <div class="col-lg-4 col-sm-6">
            <label style="color:black; ;"><b> Reading Comprehension: </b></label>
        </div>
        <div class="col-lg-2 col-sm-6">
            <label style="color:#5AB9EA; ;"><b> ${readingComprehension} </b></label>
        </div>

    </div>
    <div class="row">
        <div class="col-lg-4 col-sm-6">
            <label style="color:black; ;"><b> Biology: </b></label>
        </div>
        <div class="col-lg-2 col-sm-6">
            <label style="color:#5AB9EA; ;"><b> ${biology} </b></label>
        </div>

    </div>
    <div class="row">
        <div class="col-lg-4 col-sm-6 ">
            <label style="color:black; ;"><b> General Chemistry: </b></label>
        </div>
        <div class="col-lg-2 col-sm-6">
            <label style="color:#5AB9EA; ;"><b> ${generalChemitry} </b></label>
        </div>

    </div>
    <div class="row">
        <div class="col-lg-4 col-sm-6">
            <label style="color:black; ;"><b> Organic Chemistry: </b></label>
        </div>
        <div class="col-lg-2 col-sm-6">
            <label style="color:#5AB9EA; ;"><b> ${organicChemistry} </b></label>
        </div>

    </div>
    <div class="row">
        <div class="col-lg-4 col-sm-6">
            <label style="color:black; ;"><b> Total Science: </b></label>
        </div>
        <div class="col-lg-2 col-sm-6">
            <label style="color:#5AB9EA; ;"><b> ${totalScience} </b></label>
        </div>

    </div>
    <div class="row">
        <div class="col-lg-4 col-sm-6">
            <label style="color:black; ;"><b> Academic Average: </b></label>
        </div>
        <div class="col-lg-2 col-sm-6">
            <label style="color:#5AB9EA; ;"><b> ${academicAverage} </b></label>
        </div>

    </div>
    
    <div class="d-block d-sm-none ">
    <div style="display:flex; flex-direction:row;">
            <Button style="color: red; background: none; border:none; outline:none;" class=''>Remove</Button>
            <Button style="color: #5AB9EA; background: none; border:none; outline:none; margin-left: 20px;">Edit</Button>
        </div>
    </div>

</div>





</div>
    `
  };
  
//   d-none d-md-block 
//   <div style="display: flex; flex-direction: row" class="mb-5">
//   <button class='edit'style="background: none; border: none; font-size: 14px; outline: none; color: green;">Edit</button> 
//   <button class='delete ml-3'style="background: none; border: none; font-size: 14px; outline: none; color: red;">Delete</button>
//   </div>

{/* <button class='delete'>Delete</button>
<button class='edit'>Edit</button> */}