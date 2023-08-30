// firebase.auth().onAuthStateChanged((user) => {
//     if (user) {
//       // User is signed in, see docs for a list of available properties
//       // https://firebase.google.com/docs/reference/js/firebase.User
//       var myDatCards = document.getElementById('myDatCards');
//       var uid = user.uid;
//       const DataRef = firebase.database().ref('registerUsers/' + user.uid);
//       const userData = DataRef.orderByChild('uid').equalTo(user.uid);
//       userData.on('value', snap =>{
//           snap.forEach((data) => {
//             // var li = document.createElement('li')
//             // li.id = data.key;
//             // li.innerHTML = addDatTemplate(data.val())
//             // myDatCards.appendChild(li);
//             // li.classList.add('card', 'ml-3')
//               console.log('DatakiKey',data.key)
//               console.log(data.val())
//           })
//       })
//     //   firebase.database().ref('datData/').once("value", snap => {
//     //     console.log(snap.val())
//     // })
//     } else {
//       console.log("User Logout please Signin")
//       // User is signed out
// //       const refUserInformation = database.ref('UserInformation/')
// // const currentUserQuery = refUserInformation.orderByChild('user_id').equalTo(user.uid);
// // currentUserQuery.on('value', function(snapshot){
// //   snapshot.forEach((data) => {
// //     console.log(data.val())
// //   });
// // })
//       // ...
//     }
//   });

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    var uid = user.uid;
    var fullName = document.getElementById('fullName');
    var email = document.getElementById('email');
    var number = document.getElementById('number');
    // var userName = document.getElementById('userName');
    firebase.database().ref('registerUsers/' + uid).once("value", snap => {
      fullName.value = snap.val().full_name;
      // email.value = snap.val().email;
      number.value = snap.val().phone_number;
    //   userName.value = snap.val().username;

      document.getElementById('sideName').innerHTML = snap.val().full_name;
      document.getElementById('sideEmail').innerHTML = snap.val().email;

    //   console.log(snap.val().email)
    // //   console.log(snap.val().username)
    //   console.log(snap.val().password)
    //   console.log(snap.val().phone_number)
  })
    // console.log(`UserUID ==== ${uid}`)
    // console.log(`User ======........ ${user.emailVerified}`)
    // window.location.href = '/dashboard'
    // ...
  } else {
    console.log("User Logout please Signin")
    // User is signed out
    // ...
  }
});

