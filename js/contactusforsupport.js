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
var db = firebase.database(),
    contactusforSupport = document.getElementById("contactusforSupport"),
    full_name = document.getElementById("full_name"),
    email = document.getElementById("email"),
    subject = document.getElementById("subject"),
    phone_number = document.getElementById("phone_number"),
    textarea = document.getElementById("textarea"),
    hiddenId = document.getElementById("hiddenId");
contactusforSupport.addEventListener("submit", (e => {
    if (e.preventDefault(), !(full_name.value && email.value && subject.value && phone_number.value && textarea.value)) return null;
    var a = hiddenId.value || Date.now();
    db.ref("contactusforSupport/" + a).set({
        full_name: full_name.value,
        email: email.value,
        subject: subject.value,
        phone_number: phone_number.value,
        textarea: textarea.value,
        id: a
    }), document.getElementById("contactusforSupport_para").innerHTML = '"Your form has been submitted <i class="bi bi-check-circle" style="color:green"></i>"', full_name.value = "", email.value = "", subject.value = "", phone_number.value = "", textarea.value = "", hiddenId.value = ""
}));
var reviews = document.getElementById("reviews"),
    reviewsRef = db.ref("/reviews");
reviewsRef.on("child_added", (e => {
    var a = document.createElement("li");
    a.id = e.key, a.innerHTML = reviewTemplate(e.val()), reviews.appendChild(a), a.classList.add("card", "ml-5", "mr-2")
})), reviewsRef.on("child_changed", (e => {
    document.getElementById(e.key).innerHTML = reviewTemplate(e.val())
})), reviewsRef.on("child_removed", (e => {
    var a = document.getElementById(e.key);
    a.parentNode.removeChild(a)
})), reviews.addEventListener("click", (e => {
    var a = e.target.parentNode;
    if (e.target.classList.contains("edit") && (fullName.value = a.querySelector(".fullName").innerText, message.value = a.querySelector(".message").innerText, hiddenId.value = a.id), e.target.classList.contains("delete")) {
        var t = a.id;
        db.ref("reviews/" + t).remove()
    }
}));
const reviewsStarts = () => {
    const e = document.querySelector(".select_ratings"),
        a = e.querySelectorAll(".select_ratings-item");
    e.onclick = e => {
        const t = e.target.classList;
        t.contains("active") || (a.forEach((e => e.classList.remove("active"))), console.log(e.target.getAttribute("data-rate", "DataRate_Stars")), t.add("active"))
    }
};

function reviewTemplate({
    fullName: e,
    message: a
}) {
    return `\n          <div class="card-body pt-0 mt-5">\n             <div class="widget-49">\n                <div class="widget-49-title-wrapper">\n                   <div class="widget-49-meeting-info" style="display: flex; flex-direction: row;">\n                      <h4 class="card-title fullName" style="margin-left: 0px; margin-top: -20px !important;">${e}</h4>\n                     \n                   </div>\n                     <div class="student_reviewa">\n                      <span class="fa fa-star checked"></span>\n                      <span class="fa fa-star checked"></span>\n                      <span class="fa fa-star checked"></span>\n                      <span class="fa fa-star checked"></span>\n                      <span class="fa fa-star checked"></span>\n                   </div>\n                </div>\n                <p style="text-align: left; margin-top: 0px !important;" class="card-text fst-box-desc message">${a}</p>\n             </div>\n          </div>\n      \n     \n    `
}