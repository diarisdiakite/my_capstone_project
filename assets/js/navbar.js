const socials = document.getElementById('social');
socials.innerHTML = `
<div class="container-fluid w-75 display-desktop flex justify-content-end ">
        <ul class="row social">
            <li class="social-item"><a class="social-item-link" href=""><img class="social-icon" src="../assets/img/icons/socials/github.svg" alt="" /></a></li>
            <li class="social-item"><a class="social-item-link" href=""><img src="../assets/img/icons/socials/twitter.svg" alt=""/></a></li>
            <li class="language"><a class="language-link" href="">English</a></li>
            <li class="language"><a class="language-link" href="">French</a></li>        
        </ul>
      </div>
    `;

const myNabar = document.getElementById('my-navbar');
myNabar.innerHTML = `
    <div class="container container-fluid w-75">
        
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarExpand">
          <span class="navbar-toggler-icon"></span>
        </button>
        
        <a class="navbar-brand" href="index.html">
          <img id="logo" src="assets/img/logo/Logo_final_transparent.png" alt="Art selection logo">
        </a>
        <div class="collapse navbar-collapse" id="navbarExpand">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link active" href="about.html">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">Program</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="join.html">Join</a>
            </li>
            <li class="nav-item"><a class="nav-link" href="">Sponsors</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">News</a>
            </li>
          
            <li class="nav-item">
              <a class="nav-link" href="">AS Campaign</a>
            </li>
          </ul>
        </div>
      </div>
`;


