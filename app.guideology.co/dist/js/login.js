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
    console.log('user', user)
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
    firebase.auth().onAuthStateChanged(function(user) {
      if (user.emailVerified) {
       window.location.href = 'congratulation.html'
      } else {
          window.location = "/emailverify.html";
      }
   });

  })
  .catch(function(error) {
    // Firebase will use this to alert of its errors
    var error_code = error.code
    var error_message = error.message
    document.getElementById('error').innerHTML = error_message
    // alert(error_message)
  })

}