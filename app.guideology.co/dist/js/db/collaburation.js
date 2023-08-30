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

// Collaborations Start here
// var collaborations = document.getElementById('collaborations');


const collaburationFunction = () => {
    firebase.auth().onAuthStateChanged((user) => {

        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User

        const addPersonalizedschoolSelectionRef = firebase.database().ref('registerUsers/');
        const addPersonalizedschoolSelectionData = addPersonalizedschoolSelectionRef.orderByChild('uid').equalTo(user.uid);
        addPersonalizedschoolSelectionData.on('value', snap => {
            snap.forEach((data) => {
                var collaborations_fullName = document.getElementById('collaborations_fullName').value;
                var collaborations_email = document.getElementById('collaborations_email').value;
                var collaborations_phone = document.getElementById('collaborations_phone').value;
                var collaborations_organization = document.getElementById('collaborations_organization').value;
                var officer_position = document.getElementById('officer_position').value;
                var number0fActiveMembers = document.getElementById('number0fActiveMembers').value;
                var websiteUrl = document.getElementById('websiteUrl').value;
                var facebook = document.getElementById('facebook').value;
                var insta = document.getElementById('insta').value;
                var tiktok = document.getElementById('tiktok').value;
                var hiddenId = document.getElementById('hiddenId').value;
                var id = hiddenId|| Date.now()
                var userUID = firebase.auth().currentUser.uid
                // console.log(userUID, 'userID ................')
                 const collaborations = {
                    name: data.val().full_name,
                    email: data.val().email,
                    phone: data.val().phone_number,
                    collaborations_fullName : collaborations_fullName,
                    collaborations_email: collaborations_email,
                    collaborations_phone: collaborations_phone,
                    collaborations_phone: collaborations_phone,
                    collaborations_organization: collaborations_organization,
                    officer_position: officer_position,
                    number0fActiveMembers: number0fActiveMembers,
                    websiteUrl: websiteUrl,
                    facebook: facebook,
                    insta: insta,
                    tiktok: tiktok,
                    uid: userUID,
                    id: id,
                    timestamp: new Date().toLocaleString('en-US'),
                 }
                 if (collaborations_fullName !== ""|| collaborations_email !== ""|| collaborations_phone !== ""|| collaborations_phone !== ""|| collaborations_organization !== ""|| officer_position !== ""|| number0fActiveMembers !== ""|| number0fActiveMembers !== ""){
            
                    db.ref('collaborationsDashboard/' + id).set(collaborations);
                    document.getElementById('collaborations_para').innerHTML = `Your form is submitted <i class="bi bi-check-circle" style="color:green"></i>`
                      collaborations_fullName= "";
                      collaborations_email= "";
                      collaborations_phone= "";
                      collaborations_phone= "";
                      collaborations_organization= "";
                      officer_position= "";
                      number0fActiveMembers= "";
                      websiteUrl= "";
                      facebook= "";
                      insta= "";
                      tiktok=""
                      hiddenId = '';
                   
                  }
              
            })
        })

    });


  
};
$('#collaborations').submit(function (e) {
    e.preventDefault();
    $('#exampleModalCenter').modal('show');
});
collaburationFunction()

