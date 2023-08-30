// const logOut = () => {
//     firebase.auth().signOut().then(() => {
//       window.location.href = 'becomeamember.html'
//       alert('User Logout');
//       // window.location.href = 'login.html'
//     }).catch((error) => {
//       // An error happened.
//     });
//   }

const header = document.getElementById("header");

header.innerHTML = `<header class="topbar" data-navbarbg="skin6">
<nav class="navbar top-navbar navbar-expand-md navbar-light" >
    <div class="navbar-header" data-logobg="skin6" style="position: fixed;">
        <!-- ============================================================== -->
        <!-- Logo -->
        <!-- ============================================================== -->
        <div class="navbar-brand">
            <!-- Logo icon -->
            <a href=#" class="logo-icon">
                <!--You can put here icon as well // <i class="wi wi-sunset"></i> //-->
                <!-- Dark Logo icon -->
                <img src="../assets/images/dentxcel_icon.svg" alt="homepage" class="dark-logo" style="width: 35px;margin-right: 8px;" />
                <!-- Light Logo icon -->
            </a>
            <!--End Logo icon -->
            <!-- Logo text -->
            <a href=#" class="logo-text">
                <!-- dark Logo text -->
                <img src="../assets/images/dentxcel_dark.svg" alt="homepage" class="dark-logo" 
                style="width: 130px !important;
                margin-left: -17px !important;
                margin-top: 6px;"  />
                <!-- Light Logo text -->
                <img src="../assets/images/dentxcel_dark.svg" class="light-logo" alt="homepage" 
                style="width: 130px !important;
                margin-left: -17px !important;
                margin-top: 6px;" />
            </a>
        </div>
        <!-- ============================================================== -->
        <!-- End Logo -->
        <!-- ============================================================== -->
        <!-- This is for the sidebar toggle which is visible on mobile only -->
        <a class="nav-toggler waves-effect waves-light d-block d-md-none" href="javascript:void(0)"><i
                class="mdi mdi-menu"></i></a>
    </div>
    <!-- ============================================================== -->
    <!-- End Logo -->
    <!-- ============================================================== -->
    <div class="navbar-collapse collapse" id="navbarSupportedContent" data-navbarbg="skin5">
        <!-- ============================================================== -->
        <!-- toggle and nav items -->
        <!-- ============================================================== -->
        <ul class="navbar-nav float-start me-auto mt-2">
            <!-- ============================================================== -->
            <!-- Search -->
            <!-- ============================================================== -->
           
      
        </ul>
        <!-- ============================================================== -->
        <!-- Right side toggle and nav items -->
        <!-- ============================================================== -->
            <ul class="navbar-nav float-end mt-3">
                <a href="./becomeamember.html" class="m-2"style="background-color: #8860D0; color: #fff; width: 180px; height: 50px; border: none; outline: none; border-radius: 10px; font-weight: 600; display: flex; flex-direction: row; box-shadow: rgba(100, 100, 111, 0.411) 0px 7px 29px 0px;">
                <i class="bi bi-check-circle" style="color: #7CFF92; margin-top: 14px; margin-left: 10px; font-size:14px;"></i>
                    <input type="submit" value="Become a Member" style="background-color: #8860D0; color: #fff; width: 180px; height: 50px; border: none; outline: none; border-radius: 10px; font-weight: 600; font-size:14px; padding-right:5px;" />
                </a>
            <!-- ============================================================== -->
            <!-- User profile and search -->
            <!-- ============================================================== -->
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle text-muted waves-effect waves-dark pro-pic" href="error-404.html" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="../assets/images/users/profile.png" alt="user" id='profile_Pic' class="rounded-circle" width="45">
                </a>
                <ul class="dropdown-menu dropdown-menu-end user-dd animated" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="./myaccount.html"><i class="ti-user m-r-5 m-l-5"></i>
                        My Profile</a>
                    <a class="dropdown-item" href="javascript:void(0)"><i class="bi bi-clipboard-data" style="font-size: 20px;"></i>
                        My Topics</a>
                    <a class="dropdown-item" href="javascript:void(0)" onclick="signOut()"><i class="bi bi-box-arrow-in-right" style="font-size: 20px;"></i>
                        Logout</a>
                </ul>
            </li>
            <!-- ============================================================== -->
            <!-- User profile and search -->
            <!-- ============================================================== -->
        </ul>
    </div>
</nav>
</header>`;
