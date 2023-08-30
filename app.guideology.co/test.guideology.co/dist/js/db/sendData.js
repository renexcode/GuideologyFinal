var db = firebase.database();

function test() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;

      console.log(uid, 'Userki ID')

      firebase.database().ref('testFuntion/' + uid).set({
        userID : uid
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
    const datDataRef = firebase.database().ref('testFuntion/');
    const userData = datDataRef.orderByChild('userID').equalTo(user.uid);
    userData.on('value', snap =>{
        snap.forEach((data) => {
        
var role = uid;
  
if (role === data.val().userID) {
    document.getElementById('xyz').disabled = false;
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
