const footer = document.getElementById('become');
become.innerHTML = ` <div class="row d-block d-md-none col-md-6" style="display: flex; flex-direction: row;">
<a href="./becomeamember.html">
    <div id="mobile_view_btn">
        <p>Become A Member</p>
        <i class="bi bi-arrow-right p-large ml-2"></i>
    </div>
</a>

<div class="col-md-6">
    <ul class="navbar-nav float-end" style="margin-top: -80px;">
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle text-muted waves-effect waves-dark pro-pic" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style="color: #fff !important;">
                <img src="../assets/images/users/profile.png" alt="user" class="rounded-circle" width="35" id="mblProfile_Pic">
            </a>
            <ul class="dropdown-menu dropdown-menu-end user-dd animated" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="./myaccount.html"><i class="ti-user m-r-5 m-l-5"></i>
                    My Profile</a>
               
                <a class="dropdown-item" href="javascript:void(0)" onclick="logOut()"><i class="bi bi-box-arrow-in-right" style="font-size: 20px;"></i>
                    Logout</a>
            </ul>
        </li>
    </ul>
</div>

</div>`