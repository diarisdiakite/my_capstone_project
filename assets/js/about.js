const mainContent = document.getElementById('aboutMain');

const hideSocialDiv = document.getElementById('social');
const hidePartnersDiv = document.getElementById('partners');
const hideFooterDiv = document.getElementById('footer');

window.addEventListener('load', () => {
  if (window.innerWidth < 768) {
    if (hideSocialDiv.classList.contains('my-display-desktop')) {
      hideSocialDiv.classList.add('hidden');
    }

    if (hidePartnersDiv.classList.contains('my-display-desktop')) {
      hidePartnersDiv.classList.add('hidden');
    }

    if (hideFooterDiv.classList.contains('my-display-desktop')) {
      hideFooterDiv.classList.add('hidden');
    }
  }
});

if (window.innerWidth < 768) {
  mainContent.innerHTML = `
      
  <div class="container-fluid my-bg-light">
      
    <div class="row text-center">
      <div class="col-12 about-text-container">
        <h1 class="display-4 mx-auto mt-4" id="about-header-h1">
          ANNUAL 
          <br>
          SMSE SUMMIT 2023
        </h1>
        <hr class="full-width mx-auto mb-5">
        <div class="col-12">
          <p class="my-border-white lead p-0" id="heading-p-about">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
            ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
            in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident.
            <br>
          </p>
        </div>
        <div>
          <p>
            please contact us per email for any further question.
          </p>
          <p class="email">
            info@annualsummit.org
          </p>
        </div>
      </div>
    </div>
  </div>


  
  <div class="container-fluid py-4" id="general">
    <div class="row text-center">
      <!-- get rid of xs, sm and lg-->
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <h3>Annual SMSE summit - Bamako 2023</h3>
        <hr class="full-width mx-auto">
        <p class="lead w-50 mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex.
          <br>
        </p>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mt-5">
        <div class="container">
          <a href="">
            <button type="button" class="btn my-border-red btn-lg">
              <div class="row jambotron">
                <div class="col-4">
                  <img id="jambotronImg" src="assets/img/logo/Logo_final_transparent.png" alt="">
                </div>
                <div class="col-8 text-left">
                  <h5 class="text-nowrap">
                    Annal SMSE Summit
                  </h5>
                  <hr class="full-width">
                  <h6 class="text-nowrap">2023.11.24(Fri) to 26(Sun)</h6>
                  <hr class="full-width">
                  <p class="text-nowrap">ICCB - Bamako(Mali)</p>
                </div>
              </div>
            </button>
          </a>
        </div>
      </div>

    </div>
  </div>


    
    
    <div class="container mt-5 py-4 border-top-1">
      <div class="container-fluid">
        <div class="row text-center space">
          <div class="col-12">
            <h2>See past annual SMSE summits</h2>
            <hr class="full-width mx-auto">
            <div class="col-12 mb-5">
              <p>
                Take a look at the last 2 Annual summits.
              </p>
            </div>
            
          </div>
        </div>
        <div class="row text-center w-75 mx-auto">

                      
          <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 item2 red">
            <img class="img-thumbnail img-fluid" id="past-summits-images" src="assets/img/past-summits/3.jpg" alt="">
            <div class="past-summits-img-caption text-center w-100">
              <h3 class="display-6 bold my-text-white">2021</h3>
              <h6 class="display-5 bold my-text-white">SMSE SUMMIT 2021</h6>
            </div>
          </div>

          <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 item2 red">
            <img class="img-thumbnail img-fluid position-relative" id="past-summits-images" src="assets/img/past-summits/4.jpg" alt="">
            <div class="past-summits-img-caption text-center w-100">
              <h3 class="display-6 bold my-text-white mx-auto">2022</h3>
              <h6 class="display-5 bold my-text-white mx-auto">SMSE SUMMIT 2022</h6>
            </div>
          </div>        
        </div>
      </div>
    </div> 


    
    <div class="container-fluid space my-bg-gray py-4" id="partners">
      <div class="row text-center space">
        <div class="col-12 mb-5">
          <h3>Partners</h3>
          <hr class="full-width mx-auto">
        </div>
        <div class="col-xs-1 col-sm-1 col-md-1 col-lg-hidden" id="partner"></div>
        <div class="col-xs-4 col-sm-4 col-md-2 col-lg-2 col-xl-2" id="partner">
          <a href=""><img class="" src="assets/img/logo/logo-partners/template/partner1.png" alt=""></a>
        </div>
        <div class="col-xs-4 col-sm-4 col-md-2 col-lg-2 col-xl-2" id="partner">
          <a href=""><img class="" src="assets/img/logo/logo-partners/template/partner2.png" alt=""></a>
        </div>
        <div class="col-xs-4 col-sm-4 col-md-2 col-lg-2 col-xl-2" id="partner">
          <a href=""><img class="" src="assets/img/logo/logo-partners/template/partner3.png" alt=""></a>
        </div>
        <div class="col-xs-4 col-sm-4 col-md-2 col-lg-2 col-xl-2" id="partner">
          <a href=""><img class="" src="assets/img/logo/logo-partners/template/partner4.png" alt=""></a>
        </div>
        <div class="col-xs-4 col-sm-4 col-md-2 col-lg-2 col-xl-2" id="partner">
          <a href=""><img class="" src="assets/img/logo/logo-partners/template/partner5.png" alt=""></a>
        </div>
      </div>

    </div>
  </main>

  <footer>
    <div class="container-fluid space py-4" id="aboutFooter">
    <div class="container">
    <div class="row">
        <div class="col-4">
          <img id="jambotronImg" src="assets/img/logo/Logo_final_transparent.png" alt="">
        </div>
        <div class="col-8 py-5" id="footer-text">
          <h6 class="bold">
            2023 Annual SMSE Summit - Bamako(Mali)
          </h6>
          <hr>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
          </p>
          <br>
        </div>
      </div>
    </div>
    </div>
    
  </footer>
  `;
} else {
  mainContent.innerHTML = `
        
  <div class="container-fluid my-bg-light">
      
    <div class="row text-center">
      <div class="col-12 about-text-container">
        <h1 class="display-4 mx-auto mt-4" id="about-header-h1">
          ANNUAL 
          <br>
          SMSE SUMMIT 2023
        </h1>
        <hr class="full-width mx-auto mb-5">
        <div class="col-12">
          <p class="my-border-white lead p-0" id="heading-p-about">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
            ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
            in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident.
            <br>
          </p>
        </div>
        <div>
          <p>
            please contact us per email for any further question.
          </p>
          <p class="email">
            info@annualsummit.org
          </p>
        </div>
      </div>
    </div>
  </div>


  
  <div class="container-fluid py-4" id="general">
    <div class="row text-center">
      <!-- get rid of xs, sm and lg-->
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <h3>Annual SMSE summit - Bamako 2023</h3>
        <hr class="full-width mx-auto">
        <p class="lead w-50 mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex.
          <br>
        </p>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mt-5">
        <div class="container">
          <a href="">
            <button type="button" class="btn my-border-red btn-lg">
              <div class="row jambotron">
                <div class="col-4">
                  <img id="jambotronImg" src="assets/img/logo/Logo_final_transparent.png" alt="">
                </div>
                <div class="col-8 text-left">
                  <h5 class="text-nowrap">
                    Annal SMSE Summit
                  </h5>
                  <hr class="full-width">
                  <h6 class="text-nowrap">2023.11.24(Fri) to 26(Sun)</h6>
                  <hr class="full-width">
                  <p class="text-nowrap">ICCB - Bamako(Mali)</p>
                </div>
              </div>
            </button>
          </a>
        </div>
      </div>

    </div>
  </div>


    
    <div class="container mt-5 py-4 border-top-1">
      <div class="container-fluid">
        <div class="row text-center space">
          <div class="col-12">
            <h2>See past annual SMSE summits</h2>
            <hr class="full-width mx-auto">
            <div class="col-12 mb-5">
              <p>
                Take a look at the last 2 Annual summits.
              </p>
            </div>
            
          </div>
        </div>
        <div class="row text-center w-75 mx-auto">

                      
          <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 item2 red">
            <img class="img-thumbnail img-fluid" id="past-summits-images" src="assets/img/past-summits/3.jpg" alt="">
            <div class="past-summits-img-caption text-center w-100">
              <h3 class="display-6 bold my-text-white">2021</h3>
              <h6 class="display-5 bold my-text-white">SMSE SUMMIT 2021</h6>
            </div>
          </div>

          <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 item2 red">
            <img class="img-thumbnail img-fluid position-relative" id="past-summits-images" src="assets/img/past-summits/4.jpg" alt="">
            <div class="past-summits-img-caption text-center w-100">
              <h3 class="display-6 bold my-text-white mx-auto">2022</h3>
              <h6 class="display-5 bold my-text-white mx-auto">SMSE SUMMIT 2022</h6>
            </div>
          </div>        
        </div>
      </div>
    </div>
    
  </main>

  <footer>
    <div class="container-fluid space my-bg-gray py-4" id="aboutFooter">
    <div class="container">
    <div class="row">
        <div class="col-4">
          <img id="jambotronImg" src="assets/img/logo/Logo_final_transparent.png" alt="">
        </div>
        <div class="col-8 py-5" id="footer-text">
          <h6 class="bold">
            2023 Annual SMSE Summit - Bamako(Mali)
          </h6>
          <hr>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
          </p>
          <br>
        </div>
      </div>
    </div>
    </div>
    
  </footer>
  `;
}