
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

const datafor200Words = () => {
    firebase.auth().onAuthStateChanged((user) => {

        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User

        const addPersonalizedschoolSelectionRef = firebase.database().ref('registerUsers/');
        const addPersonalizedschoolSelectionData = addPersonalizedschoolSelectionRef.orderByChild('uid').equalTo(user.uid);
        addPersonalizedschoolSelectionData.on('value', snap => {
            snap.forEach((data) => {
                var hiddenId = document.getElementById('hiddenId').value;
                var description200words = document.getElementById(`description200words`).value;
                var id = hiddenId|| Date.now()
                var userUID = firebase.auth().currentUser.uid
                // console.log(userUID, 'userID ................')
                 const supplemental200 = {
                    name: data.val().full_name,
                    email: data.val().email,
                    phone: data.val().phone_number,
                    description200words: description200words,
                    uid: userUID,
                    id: id,
                    timestamp: new Date().toLocaleString('en-US'),
                 }
                if (!description200words) return null
                   
                
                   
                
                  db.ref('supplemental200/' + id).set(supplemental200);
                  document.getElementById('supplemental200Btn').innerHTML = ` Submitted <i class="bi bi-check-circle" style="color:white"></i>`
                  //   document.getElementById('referafriendbtn').disabled = true
                    document.getElementById('supplemental200cardBtn').disabled  = false
                  
                //   window.location.href = 'myacademics.html'
                  description200words= "";
              
            })
        })

    });

};


const datafor400Words = () => {
    firebase.auth().onAuthStateChanged((user) => {

        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User

        const addPersonalizedschoolSelectionRef = firebase.database().ref('registerUsers/');
        const addPersonalizedschoolSelectionData = addPersonalizedschoolSelectionRef.orderByChild('uid').equalTo(user.uid);
        addPersonalizedschoolSelectionData.on('value', snap => {
            snap.forEach((data) => {
                var hiddenId = document.getElementById('hiddenId').value;
                var description400words = document.getElementById(`400wordsdescription`).value;
                var id = hiddenId|| Date.now()
                var userUID = firebase.auth().currentUser.uid
                // console.log(userUID, 'userID ................')
                 const supplemental400 = {
                    name: data.val().full_name,
                    email: data.val().email,
                    phone: data.val().phone_number,
                    description400words: description400words,
                    uid: userUID,
                    id: id,
                    timestamp: new Date().toLocaleString('en-US'),
                 }
                if (!description400words) return null
                   
                
                   
                
  db.ref('supplemental400/' + id).set(supplemental400);
  document.getElementById('supplemental400Btn').innerHTML = ` Submitted <i class="bi bi-check-circle" style="color:white"></i>`
  //   document.getElementById('referafriendbtn').disabled = true
    document.getElementById('supplemental400cardBtn').disabled  = false
  
//   window.location.href = 'myacademics.html'
  description400words= "";
              
            })
        })

    });

};

const datafor600Words = () => {
    firebase.auth().onAuthStateChanged((user) => {

        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User

        const addPersonalizedschoolSelectionRef = firebase.database().ref('registerUsers/');
        const addPersonalizedschoolSelectionData = addPersonalizedschoolSelectionRef.orderByChild('uid').equalTo(user.uid);
        addPersonalizedschoolSelectionData.on('value', snap => {
            snap.forEach((data) => {
                var hiddenId = document.getElementById('hiddenId').value;
                var description600words = document.getElementById(`600wordsdescription`).value;
                var id = hiddenId|| Date.now()
                var userUID = firebase.auth().currentUser.uid
                // console.log(userUID, 'userID ................')
                 const supplemental600 = {
                    name: data.val().full_name,
                    email: data.val().email,
                    phone: data.val().phone_number,
                    description600words: description600words,
                    uid: userUID,
                    id: id,
                    timestamp: new Date().toLocaleString('en-US'),
                 }
                 if (!description600words) return null
   

   

                 db.ref('supplemental600/' + id).set(supplemental600);
                 document.getElementById('supplemental600Btn').innerHTML = ` Submitted <i class="bi bi-check-circle" style="color:white"></i>`
                 //   document.getElementById('referafriendbtn').disabled = true
                   document.getElementById('supplemental600cardBtn').disabled  = false
                 
               //   window.location.href = 'myacademics.html'
                 description600words= "";
              
            })
        })

    });

};

const datafor800Words = () => {
    firebase.auth().onAuthStateChanged((user) => {

        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User

        const addPersonalizedschoolSelectionRef = firebase.database().ref('registerUsers/');
        const addPersonalizedschoolSelectionData = addPersonalizedschoolSelectionRef.orderByChild('uid').equalTo(user.uid);
        addPersonalizedschoolSelectionData.on('value', snap => {
            snap.forEach((data) => {
                var hiddenId = document.getElementById('hiddenId').value;
                var description800words = document.getElementById(`800wordsdescription`).value;
                var id = hiddenId|| Date.now()
                var userUID = firebase.auth().currentUser.uid
                // console.log(userUID, 'userID ................')
                 const supplemental800 = {
                    name: data.val().full_name,
                    email: data.val().email,
                    phone: data.val().phone_number,
                    description800words: description800words,
                    uid: userUID,
                    id: id,
                    timestamp: new Date().toLocaleString('en-US'),
                 }
                 if (!description800words) return null
   

   

                 db.ref('supplemental800/' + id).set(supplemental800);
                 document.getElementById('supplemental800Btn').innerHTML = ` Submitted <i class="bi bi-check-circle" style="color:white"></i>`
                 //   document.getElementById('referafriendbtn').disabled = true
                   document.getElementById('supplemental800cardBtn').disabled  = false
                 
               //   window.location.href = 'myacademics.html'
                 description800words= "";
              
            })
        })

    });



};

