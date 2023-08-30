var db = firebase.database();

function test() {

  document.getElementById("bnt").disabled = true; 
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;

      console.log(uid, 'Userki ID')
      const addPersonalizedschoolSelectionRef = firebase.database().ref('registerUsers/');
      const addPersonalizedschoolSelectionData = addPersonalizedschoolSelectionRef.orderByChild('uid').equalTo(user.uid);
      addPersonalizedschoolSelectionData.on('value', snap => {
          snap.forEach((data) => {
            firebase.database().ref('guideologyMembers/' + uid).set({
                userID : uid,
                name: data.val().full_name,
                email: data.val().email,
                number: data.val().phone_number,
                timestamp: new Date().toLocaleString('en-US'),

              })
    })
})
    
      // window.location.href = 'introduction.html'
      console.log(`UserUID ==== ${uid}`)
      // console.log(`User ======........ ${user.emailVerified}`)
      // window.location.href = '/dashboard'
      // ...
    } else {
      console.log("User Logout please Signin")
      // User is signed out
      // ...
    }
  });
}


// ######################################################//

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    var uid = user.uid;
    const datDataRef = firebase.database().ref('guideologyMembers/');
    const userData = datDataRef.orderByChild('userID').equalTo(user.uid);
    userData.on('value', snap =>{
        snap.forEach((data) => {
        
var role = uid;
  
if (role === data.val().userID) {
    // document.getElementById('xyz').disabled = false;
    setTimeout(function(){ window.location = 'introduction.html'; }, 1000)
    // console.log('timeout');
} else{
  document.getElementById('xyz').disabled = true;  
}

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
