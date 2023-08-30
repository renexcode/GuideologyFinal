

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;

      console.log(uid, 'Userki ID')

      firebase.database().ref('registerUsers/' + uid).once("value", snap => {

        document.getElementById('name').innerHTML = snap.val().full_name;

    })
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


  var db = firebase.database();


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
      document.getElementById('show').style.display = 'block';
    //   document.getElementById('calender').style.display = 'block';
      document.getElementById('creditCard').style.display = 'none';
      document.getElementById('calendar').style.display = 'block';
      document.getElementById('showBtns').style.display = 'block';
      document.getElementById('xyz').disabled = false;
  } else{
    document.getElementById('xyz').disabled = true;  
  }
              console.log('DatakiKey',data.key)
              console.log(data.val().userID)
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

