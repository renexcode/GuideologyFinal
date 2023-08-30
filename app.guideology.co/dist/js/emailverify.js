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

firebase.auth().onAuthStateChanged(function(user) {
    if (user.emailVerified) {
       setTimeout(function () {
        window.location.reload()
          window.location.href = './main/introduction.html'
        }, 2000);
     
    }
     else {
        window.location = "/emailverify.html";
    }
 });
 