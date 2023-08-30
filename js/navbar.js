document.getElementById('navbar').innerHTML = `<nav class="navbar navbar-expand-lg navbar-light navbar-custom fixed-top" style="padding: 0px 25px;">
<div class="container">
   <a class="navbar-brand logo-image" href="../index.html"><img src="../images/guidology-color.png"
         alt="alternative"></a>
   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
   </button>
   <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <br>
      <ul class="navbar-nav">
         <li class="nav-item">
            <a href="https://app.guideology.co/main/introduction" style="text-decoration: none;">
               <button type="button" class="loginbtn nav-item nav-link " id="loginbtn">Log In</button>
            </a>
         </li>
         <li class="nav-item">
            <a class="nav-link" href="https://app.guideology.co/signup">
               <button type="button" class="signupbtn nav-item nav-link" id="signupbtn"> Sign Up</button>
            </a>
         </li>
      </ul>
   </div>
</div>
</nav>`