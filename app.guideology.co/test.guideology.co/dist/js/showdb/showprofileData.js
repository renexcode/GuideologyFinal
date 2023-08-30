
// firebase.auth().onAuthStateChanged((user) => {
//     if (user) {
//       // User is signed in, see docs for a list of available properties
//       // https://firebase.google.com/docs/reference/js/firebase.User
//       var uid = user.uid;
//       firebase.database().ref('profileImage/').once("value", snap => {
//         console.log('ImageUrl' ,snap.val())
//         document.getElementById('test').src = snap.val().imageUrl
//       // //   console.log(snap.val().username)
//       //   console.log(snap.val().password)
//       //   console.log(snap.val().phone_number)
//     })
//       // console.log(`UserUID ==== ${uid}`)
//       // console.log(`User ======........ ${user.emailVerified}`)
//       // window.location.href = '/dashboard'
//       // ...
//     } else {
//       console.log("User Logout please Signin")
//       // User is signed out
//       // ...
//     }
//   });
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var myAcademics = document.getElementById('myAcademics');
      var uid = user.uid;
      const datDataRef = firebase.database().ref('profileImage/');
      const userData = datDataRef.orderByChild('uid').equalTo(user.uid);
      userData.on('value', snap =>{
          snap.forEach((data) => {
            // li.classList.add('card')
            //   console.log('DatakiKey',data.key)
            //   console.log(data.val().imageUrl, 'ABCD')
              if (data.val().uid === user.uid) {
                document.getElementById('profile_Pic').src = data.val().imageUrl
                document.getElementById('mblProfile_Pic').src = data.val().imageUrl
                document.getElementById('photo').src = data.val().imageUrl
              }
            //   else{
            //     document.getElementById('profile_Pic').src = 'https://dashboard.guideology.co/assets/images/users/profile.png'
            //   }
              
          })
      })
    //   firebase.database().ref('datData/').once("value", snap => {
    //     console.log(snap.val())
    // })
    } else {
      console.log("User Logout please Signin")
    }
  });
//   const profileImage = firebase.database().ref('profileImage/').orderByChild('uid');
//   console.log(`Abcd`, profileImage)
// firebase.auth().onAuthStateChanged((user) => {
//     // console.log(`Testing............... ${firebase.database().ref('experiences/', from)}`)
//     if (user) {
//       // User is signed in, see docs for a list of available properties
//       // https://firebase.google.com/docs/reference/js/firebase.User
//       var myExperiences = document.getElementById('myExperiences');
//       var uid = user.uid;
//       const profileImage = firebase.database().ref('profileImage/').orderByChild('uid');
//       const userData = profileImage.orderByChild('uid').equalTo(user.uid);
//       userData.on('value', snap =>{
//           snap.forEach((data) => {
//             //   console.log('DatakiKey',data.key)
//               console.log(data.val(), 'ABCD')
//           })
//       })
//     //   firebase.database().ref('datData/').once("value", snap => {
//     //     console.log(snap.val())
//     // })
//     } else {
//       console.log("User Logout please Signin")
//     }
//   });

const signOut = () => {
    firebase.auth().signOut().then(() => {
        // alert('User Logout Sucessfully')
      }).catch((error) => {
        // alert(error.message)
        console.log(error.message)
      });
}
