function showPassword() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  
    
  // console.log(firebase.database)
  
  
  
    // Initialize variables
    const auth = firebase.auth()
    const database = firebase.database()
    
    // Set up our register function
  function register () {
  
     
   // Get all our input fields
  program = document.getElementById("program").value;
  full_name = document.getElementById('full_name').value;
  phone_number = document.getElementById('phone_number').value;
  email = document.getElementById('email').value;
  // username = document.getElementById('username').value;
  password = document.getElementById('password').value;
  
  
  // Validate input fields
  if (validate_email(email) === false || validate_password(password) === false) {
//   alert('Email or Password is Incorrect!!')
  return
  // Don't continue running the code
  }
  if (validate_field(full_name) == "" || validate_field(program) == "" || validate_field(phone_number) == "") {
//   alert('One or More Extra Field is Empty!!')
  return
  }
  // Move on with Auth
  auth.createUserWithEmailAndPassword( email, password)
  .then(function(user) {
  console.log(`Testing ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,, ${firebase.auth().currentUser.uid}`);
  console.log('User!!!!!!!!!!!!!!', user)
  // firebase.auth().currentUser.sendEmailVerification()
  // .then(() => {
  // alert('Send Verification email')
  // }).catch((error) => {
  // console.log(error.message)
  // });
  
  // Add this user to Firebase Database
  var database_ref = database.ref()
  
  userUID = firebase.auth().currentUser.uid
  // Create User data
  var user_data = {
  full_name : full_name,
  email : email,
  program : program,
  phone_number : phone_number,
  password: password,
  uid: userUID,
  // last_login : Date.now()
  }
  
  // Push to Firebase Database
  database_ref.child('registerUsers/' + userUID).set(user_data)
  
  full_name = "";
  email = "";
  phone_number = "";
  password = "";
  
  // DOne
//   alert('User Created Sucessfully!!')
document.getElementById('success').innerHTML = 'User Created Sucessfully, Please register your Email first'
  firebase.auth().currentUser.sendEmailVerification()
  .then(() => {
//   alert('Send Verification email')
  }).catch((error) => {
  console.log(error.message)
  });
//   window.location.href = 'login.html'
  }).catch(function(error) {
  // Firebase will use this to alert of its errors
  var error_code = error.code
  var error_message = error.message
  
//   alert(error_message)
  })
  
  
  }
  
    function writeUserData(user) {
      firebase.database().ref('Testingusers/' + user.uid).set(testuser).catch(error => {
          console.log('Error coming from testing ===============>>>>>>>>>>>', error.message)
      });
  }
  
  var userRef = firebase.database().ref("registerUsers/");
  console.log(`UserRef =>>> ${userRef}`)
  
  userRef.on("child_added", function(data, prevChildKey) {
  
     var newUser = data.val();
    //  console.log("full_name: " + newUser.email);
  
  });

  $('#registerForm').submit(function (e) {
    e.preventDefault();
    $('#exampleModalCenter').modal('show');
});
  
  function login () {
    email = document.getElementById('email').value;
    password = document.getElementById('password').value;
    // Validate input fields
    if (validate_email(email) == false || validate_password(password) == false) {
        document.getElementById('error').innerHTML = "Email or Password is Incorrect!!"
    //   alert('Email or Password is Incorrect!!')
      return
      // Don't continue running the code
    }
  
  

  //   if (user.uid) {
  //     windows.location.href = 'collaborate.html'
  //     console.log(`User UID ========== ${user.uid}`)
  //   }else{
  //     alert('abcd')
  //     window.location.href = 'login.html'
  //   }
    var user = firebase.auth().currentUser
  //   console.log('Verify', user.emailVerified)
    
  auth.signInWithEmailAndPassword(email, password)
  .then(function() {
    // Declare user variable
    var user = auth.currentUser

    // Add this user to Firebase Database
    var database_ref = database.ref()

    // Create User data
    var user_data = {
      // last_login : Date.toString()
    }

    // Push to Firebase Database
    database_ref.child('registerUsers/' + user.uid).update(user_data);

    // DOne
    // alert('User Logged In!!')
    window.location.href = 'congratulation.html'

  })
  .catch(function(error) {
    // Firebase will use this to alert of its errors
    var error_code = error.code
    var error_message = error.message
    document.getElementById('error').innerHTML = error_message
    // alert(error_message)
  })

}

  
    // Set up our login function
//     function login () {
//       email = document.getElementById('email').value;
//       password = document.getElementById('password').value;
//       // Validate input fields
//       if (validate_email(email) == false || validate_password(password) == false) {
//         alert('Email or Password is Incorrect!!')
//         return
//         // Don't continue running the code
//       }
    
    
  
//     //   if (user.uid) {
//     //     windows.location.href = 'collaborate.html'
//     //     console.log(`User UID ========== ${user.uid}`)
//     //   }else{
//     //     alert('abcd')
//     //     window.location.href = 'login.html'
//     //   }
//       var user = firebase.auth().currentUser
//     //   console.log('Verify', user.emailVerified)
      
//       if (user.emailVerified) {
//           // window.location.href = 'login.html'
//         //   document.getElementById('login2Btn').style.display = 'block' 
//           user.emailVerified === true
          
//       auth.signInWithEmailAndPassword(email, password)
//       .then(function() {
//         // Declare user variable
//         var user = auth.currentUser
    
//         // Add this user to Firebase Database
//         var database_ref = database.ref()
    
//         // Create User data
//         var user_data = {
//           // last_login : Date.toString()
//         }
    
//         // Push to Firebase Database
//         database_ref.child('registerUsers/' + user.uid).update(user_data);
    
//         // DOne
//         // alert('User Logged In!!')
//         window.location.href = 'congratulation.html'
    
//       })
//       .catch(function(error) {
//         // Firebase will use this to alert of its errors
//         var error_code = error.code
//         var error_message = error.message
//         document.getElementById('error').innerHTML = error_message
//         // alert(error_message)
//       })
         
//         }else{
//           window.location.href = 'verification.html'
//         //   document.getElementById('verifyEmailBtn').style.display = 'none'
//         }

// }

function abcd() {
   
}

// var user = firebase.auth().currentUser
    
// if (user.emailVerified) {
//     // window.location.href = 'login.html'
//     document.getElementById('login2Btn').style.display = 'block' 
   
//   }else{
//     // window.location.href = 'verification.html'
//     document.getElementById('verifyEmailBtn').style.display = 'none'
//   }
    
    
    // Validate Functions
    function validate_email(email) {
      expression = /^[^@]+@\w+(\.\w+)+\w$/
      if (expression.test(email) == true) {
        // Email is good
        return true
      } else {
        // Email is not good
        return false
      }
    }
    
    function validate_password(password) {
      // Firebase only accepts lengths greater than 6
      if (password < 6) {
        return false
      } else {
        return true
      }
    }
    
    function validate_field(field) {
      if (field === null) {
        return false
      }
    
      if (field.length <= 0) {
        return false
      } else {
        return true
      }
    }
  function data() {
    var leadsRef = database.ref('registerUsers');
    var dashboardUsername = document.getElementById('dashboard_user_name');
    leadsRef.once('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          var childKey = childSnapshot.key;
          var childData = childSnapshot.val();
          // dashboardUsername.innerHTML = `<div> ${childData.username} ! </div>`
          // console.log(`childDAta: ${childData.email}`)
          // console.log(`Key: ${childKey}`)
        });
    });
  }
  
  data()
  
  
  const logOut = () => {
    firebase.auth().signOut().then(() => {
      // Sign-out successful.
    //   alert('User Logout');
      // window.location.href = 'login.html'
    }).catch((error) => {
      // An error happened.
    });
  }
  
  // Forget Password
//   function forgotPass(){
//   firebase.auth().onAuthStateChanged((user) => {
//     // console.log(`Testing............... ${firebase.database().ref('experiences/', from)}`)
//     if (user) {
//       // User is signed in, see docs for a list of available properties
//       // https://firebase.google.com/docs/reference/js/firebase.User
//       var myExperiences = document.getElementById('myExperiences');
//       const experienceRef = firebase.database().ref('registerUsers/');
//       const userData = experienceRef.orderByChild('uid').equalTo(user.uid);
//       userData.on('value', snap =>{
//           snap.forEach((data) => {
//             firebase.auth().sendPasswordResetEmail(data.val().email)
//     .then(() => {
//         $('#loginForm').submit(function (e) {
//             e.preventDefault();
//             $('#exampleModalCenter').modal('show');
//         });
//     })
//     .catch((error) => {
//         // document.getElementById("error").innerHTML = error.message
//         console.log(`Error =====> ${error.message}`)
//     });
//            console.log(data.val().email)
//           })
//       })
//     //   firebase.database().ref('datData/').once("value", snap => {
//     //     console.log(snap.val())
//     // })
//     } else {
//       console.log("User Logout please Signin")
//     }
//   });
// }
  function forgotPass(){
    const resetPasswordemail = document.getElementById("resetPasswordemail").value
    firebase.auth().sendPasswordResetEmail(resetPasswordemail)
    .then(() => {
        alert("Reset link sent to your email id")
    })
    .catch((error) => {
        // document.getElementById("error").innerHTML = error.message
        console.log(`Error =====> ${error.message}`)
    });
  }
  
  
  
  // firebase.auth().onAuthStateChanged((user) => {
  //   if (user) {
  //     // User logged in already or has just logged in.
  //     console.log(user.uid);
  //   } else {
  //     // User not logged in or has just logged out.
  //   }
  // });
  
  
  
  
  
  // function getUserData(uid) {
  //   userUID = firebase.auth().currentUser.uid
  //   firebase.database().ref('registerUsers/' + uid).once("value", snap => {
  //       console.log(snap.val())
  //   })
  // }
  
  // getUserData()
  
  
  
  
  
  
  
  
  
  // 33333333333333333######################################3
  // try {
  
    // setTimeout(function() {
    //     $('#exampleModalCenter').modal();
    //   }, 5000);