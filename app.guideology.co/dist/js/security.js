
firebase.auth().onAuthStateChanged((user) => {
  if (!user) {
   window.location.pathname = '/login.html';
  } 
 });

//   firebase.auth().onAuthStateChanged(function(user) {
//    if (user.emailVerified) {
//    //  window.location.href = '/introduction.html'
//    } else {
//        window.location = "/emailverify.html";
//    }
// });