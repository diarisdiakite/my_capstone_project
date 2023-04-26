const socials = document.getElementById('social');
socials.innerHTML = `
<div class="container display-desktop flex justify-content-end ">
        <ul class="row social">
          <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
            <button type="button" class="btn my-bg-gray">Facebook</button>
            <button type="button" class="btn my-bg-gray">Twitter</button>
          
            <div class="btn-group" role="group">
              <button id="btnGroupDrop1" z-index="1000" type="button" class="btn my-bg-gray dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Languages
              </button>
              <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                <a class="dropdown-item" href="#">French</a>
                <a class="dropdown-item" href="#">English</a>
              </div>
            </div>
          </div>
        </ul>
      </div>
    `;

const myNabar = document.getElementById('my-navbar');
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
`;

// myNabar.appendChild(navbarContent);
