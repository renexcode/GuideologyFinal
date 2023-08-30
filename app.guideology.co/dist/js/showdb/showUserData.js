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
       
      // document.getElementById('sideEmail').innerHTML = snap.val().email;
      // console.log('verify')

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
////////////////
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
  
 if (role == data.val().userID) {
  document.getElementById('verify').innerHTML = 'Guideology Member' +  '<i class="bi bi-check-circle-fill" style="color: #7CFF92; margin-top: 14px; margin-left: 10px; font-size:12px; margin-right: 6px;"></i>';
  document.getElementById('verif').innerHTML = 'Guideology Member';
  console.log('verify')
  
}
// let voteable = (role !== data.val().userID) ? "Too young":"Old enough";
// console.log(voteable)

// if (data.val().userID != role ) {
//   document.getElementById('verif').innerHTML = 'not verified';
//   console.log('not verify')
  
// }
  
            // console.log('DatakiKey',data.key)
            // console.log(data.val().userID)
        })
    })
  
  //   firebase.database().ref('datData/').once("value", snap => {
  //     console.log(snap.val())
  // })
  } 

  else {
    // document.getElementById('verify').innerHTML = 'not verified';
    console.log("User Logout please Signin")
//     User is signed out
//       const refUserInformation = database.ref('UserInformation/')
// const currentUserQuery = refUserInformation.orderByChild('user_id').equalTo(user.uid);
// currentUserQuery.on('value', function(snapshot){
//   snapshot.forEach((data) => {
//     console.log(data.val())
//   });
// })
//     ...
  }
 
});
// /////

firebase.auth().onAuthStateChanged((user) => {
  if (!user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    var uid = user.uid;
    const datDataRef = firebase.database().ref('testFuntion/');
    const userData = datDataRef.orderByChild('userID').equalTo(user.uid);
    userData.on('value', snap =>{
        snap.forEach((data) => {
        
var role = uid;
  
//  if (role !== data.val().userID) {
//   document.getElementById('verify').innerHTML = 'Not Guideology Member';
//   // console.log('verify')
  
// }

  
            // console.log('DatakiKey',data.key)
            // console.log(data.val().userID)
        })
    })
  

  } 

  else {
    document.getElementById('verify').innerHTML = 'Not a Member'+'<i class="bi bi-x red-color" style="font-size: 25px; color: rgb(255, 0, 0); opacity: 1; -webkit-text-stroke-width: 2.2px;"></i>';
    // document.getElementById('verif').innerHTML = 'Not Guideology Member';

    console.log("User Logout please Signin")
//     User is signed out
//       const refUserInformation = database.ref('UserInformation/')
// const currentUserQuery = refUserInformation.orderByChild('user_id').equalTo(user.uid);
// currentUserQuery.on('value', function(snapshot){
//   snapshot.forEach((data) => {
//     console.log(data.val())
//   });
// })
//     ...
  }
 
});

///////////////////////////

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
       
      // document.getElementById('sideEmail').innerHTML = snap.val().email;
      // console.log('verify')

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
////////////////
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
  
 if (role == data.val().userID) {
  document.getElementById('verified').innerHTML = 'Guideology Member' +  '<span id="boot-icon" class="bi bi-patch-check" style="font-size: 16px; color: rgb(0, 128, 55); -webkit-text-stroke-width: 1.2px; opacity: 1; margin-left:10px;"></span>';
  // document.getElementsByClassName('verified').innerHTML = 'Guideology Member';
  console.log('verified')
  
  
}
// let voteable = (role !== data.val().userID) ? "Too young":"Old enough";
// console.log(voteable)

// if (data.val().userID != role ) {
//   document.getElementById('verif').innerHTML = 'not verified';
//   console.log('not verify')
  
// }
  
            // console.log('DatakiKey',data.key)
            // console.log(data.val().userID)
        })
    })
  
  //   firebase.database().ref('datData/').once("value", snap => {
  //     console.log(snap.val())
  // })
  } 

  else {
    // document.getElementById('verify').innerHTML = 'not verified';
    console.log("User Logout please Signin")
//     User is signed out
//       const refUserInformation = database.ref('UserInformation/')
// const currentUserQuery = refUserInformation.orderByChild('user_id').equalTo(user.uid);
// currentUserQuery.on('value', function(snapshot){
//   snapshot.forEach((data) => {
//     console.log(data.val())
//   });
// })
//     ...
  }
 
});
// /////

firebase.auth().onAuthStateChanged((user) => {
  if (!user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    var uid = user.uid;
    const datDataRef = firebase.database().ref('testFuntion/');
    const userData = datDataRef.orderByChild('userID').equalTo(user.uid);
    userData.on('value', snap =>{
        snap.forEach((data) => {
        
var role = uid;
  
//  if (role !== data.val().userID) {
//   document.getElementById('verify').innerHTML = 'Not Guideology Member';
//   // console.log('verify')
  
// }

  
            // console.log('DatakiKey',data.key)
            // console.log(data.val().userID)
        })
    })
  

  } 

  else {
       document.getElementById('verified').innerHTML = 'Guideology Member' +  '<span id="boot-icon" class="bi bi-patch-check" style="font-size: 16px; color: rgb(0, 128, 55); -webkit-text-stroke-width: 1.2px; opacity: 1; margin-left:10px;"></span>';
    // document.getElementById('verified').innerHTML = ` <a href="./becomeamember.html" class="m-2"style="background-color: #8860D0; color: #fff; width: 180px; height: 50px; border: none; outline: none; border-radius: 10px; font-weight: 600; display: flex; flex-direction: row; box-shadow: rgba(100, 100, 111, 0.411) 0px 7px 29px 0px;">
    // <i class="bi bi-check-circle" style="color: #7CFF92; margin-top: 14px; margin-left: 10px; font-size:14px;"></i>
    //     <input type="submit" value="Become a Member" style="background-color: #8860D0; color: #fff; width: 180px; height: 50px; border: none; outline: none; border-radius: 10px; font-weight: 600; font-size:14px; padding-right:5px;" />

       
    // </a>`;
    // document.getElementById('verified').innerHTML = 'Not Guideology Member';
    

    

    console.log("User Logout please Signin")
//     User is signed out
//       const refUserInformation = database.ref('UserInformation/')
// const currentUserQuery = refUserInformation.orderByChild('user_id').equalTo(user.uid);
// currentUserQuery.on('value', function(snapshot){
//   snapshot.forEach((data) => {
//     console.log(data.val())
//   });
// })
//     ...
  }
 
});
