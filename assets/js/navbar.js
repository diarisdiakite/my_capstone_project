let myNabar = document.getElementById('my-navbar');

myNabar.innerHTML = `
    <div class="container">
        
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarExpand">
          <span class="navbar-toggler-icon"></span>
        </button>
        
        <a class="navbar-brand display-desktop" href="index.html">
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
              <a class="nav-link" href="">CC Campaign</a>
            </li>
          </ul>
        </div>
      </div>
`

//myNabar.appendChild(navbarContent);
