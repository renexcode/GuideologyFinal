// Initial On Loading
$(document).ready(function () {
    getAllSemester();
});

var db = firebase.database();

// #####################################################

  // ALL DATA
  var academicMasterData = [];
  var isOpenCoruseModel = false;
  
  // GET ALL SEMESTER DATA FROM DATABASE
  const getAllSemester = () => {
      firebase.auth().onAuthStateChanged((user) => {
          // console.log(`Testing............... ${firebase.database().ref('experiences/', from)}`)
          if (user) {
      const ref = firebase.database().ref('addanEvalution');
      const userData = ref.orderByChild('uid').equalTo(user.uid);
      userData.on('value', (snapshot) => {
           const semesters = snapshot.val();
           const result = Object.keys(semesters).map((key) => [key, semesters[key]]);
           academicMasterData = [];
           for (let i = 0; i < result.length; i++) {
                const element = result[i];
                academicMasterData.push(element[1])
           }
           generateSemesterView();
      }, (errorObject) => {
           console.log('The read failed: ' + errorObject.name);
  
      });
  }
  })
  }


  const generateSemesterView = () => {
    const evalutionsDiv = document.getElementById('evalutionsDiv');
    evalutionsDiv.innerHTML = '';

    for (let index = 0; index < academicMasterData.length; index++) {
         const item = academicMasterData[index];

         const tr = document.createElement('tr');
         tr.classList.add('card')
            tr.innerHTML = `
            <td class="col-lg-10">
            <label style="color:black; "><b> Title: </b></label> <br> <p style="line-break: anywhere;"> ${item.title} </p> <br> <label style="color:black; "><b>Document: </b></label> <br>  <a href="${item.imageUrl}"  download target="_blank" style="width:60px; height:60px;"> <i class="bi bi-file-earmark-arrow-down-fill" style="font-size:40px;"></i></a>
            </td>
            <td class="col-lg-2 col-md-2 btn-field">
            <!---  <button data-toggle="modal" data-target="#editModal${item.id}" id="isEdit${item.id}${index}">Edit</button> ---->
                <button data-toggle="modal" data-target="#isDelete${item.id}">Delete</button>
             </td>
            
         
         <!---Confirmation Modal---->
         <div class="modal fade" id="isDelete${item.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
               <div class="modal-content">
                    <div class="modal-header">
                         <h5 class="modal-title" id="exampleModalLongTitle">Delete ${item.title}</h5>
                         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                         </button>
                    </div>
                    <div class="modal-body p-4">
                       <h2> Are you sure to delete this?? </h2>
                    </div>
                    <div class="modal-footer">
                         <button type="button" class="btn btn-primary" onclick="removeEvalution(${item.id})" data-dismiss="modal">Yes</button>
                         <button type="button" class="btn btn-secondary" data-dismiss="modal">No</button>
                    </div>
               </div>
          </div>
      </div>

          `;

evalutionsDiv.appendChild(tr);
const tableId = item.id.toString();
if (item && item.coruseData !== null && item.coruseData !== "undefined") {
//   courseDataView(item, tableId);
}
        }
        
      
    }


    
/**
* To Get Specific Semester When add/edit or delete coruse
* @param {string or number} coruseID 
* @returns semesterMasterData
*/
const getSemesterByID = (coruseID) => {
    var semesterMasterData;
    firebase.database().ref('addanEvalution/' + coruseID).on('value', (snapshot) => {
         semesterMasterData = snapshot.val();
    })
    return semesterMasterData
}


// #############################3

/**
* To Taggle Semester From for updated
* @param {boolean} staus 
*/



// Delete
const removeEvalution = (semesterID) => {
    console.log(semesterID)
    firebase.database().ref('addanEvalution/' + semesterID).remove();
    alertMessage("This Evaluation has been removed successfully..", "success")
    setTimeout(() => {
        window.location.reload();
    }, 2000);
}




const alertMessage = (message, status = "success") => {
    toastr.options = {
         "closeButton": true,
         "debug": false,
         "newestOnTop": false,
         "progressBar": true,
         "positionClass": "toast-top-right",
         "preventDuplicates": false,
         "onclick": null,
         "showDuration": "300",
         "hideDuration": "5000",
         "timeOut": "5000",
         "extendedTimeOut": "1000",
         "showEasing": "swing",
         "hideEasing": "linear",
         "showMethod": "fadeIn",
         "hideMethod": "fadeOut"
    }

    Command: toastr[status](message)
}