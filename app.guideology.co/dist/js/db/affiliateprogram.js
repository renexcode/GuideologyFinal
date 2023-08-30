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
var db = firebase.database();
// affiliateProgram Start here



const affiliateData = () => {
    firebase.auth().onAuthStateChanged((user) => {


        const addPersonalizedschoolSelectionRef = firebase.database().ref('registerUsers/');
        const addPersonalizedschoolSelectionData = addPersonalizedschoolSelectionRef.orderByChild('uid').equalTo(user.uid);
        addPersonalizedschoolSelectionData.on('value', snap => {
            snap.forEach((data) => {
                var fullName = document.getElementById('affiliate_fullName').value;
                var email = document.getElementById('affiliate_email').value;
                var phone_number = document.getElementById('affiliate_phone_number').value;
                var university = document.getElementById('affiliate_university').value;
                var facebook = document.getElementById('affiliate_facebook').value;
                var insta = document.getElementById('affiliate_insta').value;
                var tiktok = document.getElementById('affiliate_tiktok').value;
                var hiddenId = document.getElementById('hiddenId').value;
                var id = hiddenId || Date.now()
                var userUID = firebase.auth().currentUser.uid
                // console.log(userUID, 'userID ................')
                const affiliateProgram = {
                    name: data.val().full_name,
                    useremail: data.val().email,
                    phone: data.val().phone_number,
                    fullName: fullName,
                    email: email,
                    phone_number: phone_number,
                    university: university,
                    facebook: facebook,
                    insta: insta,
                    tiktok: tiktok,
                    id: id,
                    uid: userUID,
                    timestamp: new Date().toLocaleString('en-US'),
                }

                if (!fullName || !email || !phone_number || !university || !facebook || !insta || !tiktok) return null

                    db.ref('affiliateProgramDashboard/' + id).set(affiliateProgram);

                    fullName = "";
                    email = "";
                    phone_number = "";
                    university = "";
                    facebook = "";
                    insta = "";
                    tiktok = "";
                    hiddenId = '';

                

            })
        })

    });



};

$('#affiliateProgram').submit(function (e) {
    e.preventDefault();
    $('#exampleModalCenter').modal('show');
});