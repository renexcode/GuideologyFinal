var config={apiKey:"AIzaSyD5DMyubSCOcqQzqFWboc7NziRYclrdOxg",authDomain:"guideology-cc2b5.firebaseapp.com",databaseURL:"https://guideology-cc2b5-default-rtdb.firebaseio.com",projectId:"guideology-cc2b5",storageBucket:"guideology-cc2b5.appspot.com",messagingSenderId:"130250364586",appId:"1:130250364586:web:2e9d6427edb6a9e67ce2d3",measurementId:"G-RSC5CNSPEG"};firebase.initializeApp(config);var db=firebase.database(),collaborations=document.getElementById("collaborations"),collaborations_fullName=document.getElementById("collaborations_fullName"),collaborations_email=document.getElementById("collaborations_email"),collaborations_phone=document.getElementById("collaborations_phone"),collaborations_organization=document.getElementById("collaborations_organization"),officer_position=document.getElementById("officer_position"),number0fActiveMembers=document.getElementById("number0fActiveMembers"),websiteUrl=document.getElementById("websiteUrl"),facebook=document.getElementById("facebook"),insta=document.getElementById("insta"),tiktok=document.getElementById("tiktok"),hiddenId=document.getElementById("hiddenId");collaborations.addEventListener("submit",(e=>{if(e.preventDefault(),!(collaborations_fullName.value&&collaborations_email.value&&collaborations_phone.value&&collaborations_phone.value&&collaborations_organization.value&&officer_position&&number0fActiveMembers&&number0fActiveMembers&&websiteUrl&&facebook&&insta&&tiktok))return null;var o=hiddenId.value||Date.now();db.ref("collaborations/"+o).set({collaborations_fullName:collaborations_fullName.value,collaborations_email:collaborations_email.value,collaborations_phone:collaborations_phone.value,collaborations_phone:collaborations_phone.value,collaborations_organization:collaborations_organization.value,officer_position:officer_position.value,number0fActiveMembers:number0fActiveMembers.value,websiteUrl:websiteUrl.value,facebook:facebook.value,insta:insta.value,tiktok:tiktok.value}),document.getElementById("collaborations_dataSend").innerHTML='Your form is submitted <i class="bi bi-check-circle" style="color:green"></i>',collaborations_fullName.value="",collaborations_email.value="",collaborations_phone.value="",collaborations_phone.value="",collaborations_organization.value="",officer_position.value="",number0fActiveMembers.value="",websiteUrl.value="",facebook.value="",insta.value="",tiktok.value="",hiddenId.value=""}));