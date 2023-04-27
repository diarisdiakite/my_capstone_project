const programCards = document.getElementById('program-cards');

if (window.innerWidth < 768) {
  programCards.innerHTML += `
  <div class="card program-card ml-0 mr-0">
  <div class="row">
    <div class="col-2">
      <img class="card-img-top w-100 h-100 mx-auto d-block" src="assets/img/icons/program-icons/program_icon_01.svg" alt="">
    </div>
    
    <div class="col-2">
      <p class="bold my-text-red text-center mx-auto py-4">Launching ceremony</p>
    </div>
  
    <div class="col-8">
      <p class="small text-center mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      </p>
    </div>

  </div>
</div>

<div class="card program-card ml-0 mr-0">
  <div class="row">
    <div class="col-2">
      <img class="card-img-top w-100 h-100 mx-auto d-block" src="assets/img/icons/program-icons/program_icon_02.svg" alt="">
    </div>
    
    <div class="col-2">
      <p class="bold my-text-red text-center mx-auto py-4">Webinaires</p>
    </div>
  
    <div class="col-8">
      <p class="small text-center mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      </p>
    </div>

  </div>
</div>

<div class="card program-card ml-0 mr-0">
  <div class="row">
    <div class="col-2">
      <img class="card-img-top w-100 h-100 mx-auto d-block" src="assets/img/icons/program-icons/program_icon_03.svg" alt="">
    </div>
    
    <div class="col-2">
      <p class="bold my-text-red text-center mx-auto py-4">Exhibition</p>
    </div>
  
    <div class="col-8">
      <p class="small text-center mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      </p>
    </div>

  </div>
</div>


<div class="card program-card ml-0 mr-0">
  <div class="row">
    <div class="col-2">
      <img class="card-img-top w-100 h-100 mx-auto d-block" src="assets/img/icons/program-icons/program_icon_04.svg" alt="">
    </div>
    
    <div class="col-2">
      <p class="bold my-text-red text-center mx-auto py-4">Workshops</p>
    </div>
  
    <div class="col-8">
      <p class="small text-center mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      </p>
    </div>

  </div>
</div>

<div class="card program-card ml-0 mr-0">
  <div class="row">
    <div class="col-2">
      <img class="card-img-top w-100 h-100 mx-auto d-block" src="assets/img/icons/program-icons/program_icon_05.svg" alt="">
    </div>
    
    <div class="col-2">
      <p class="bold my-text-red text-center mx-auto py-4">Entreprises Visits</p>
    </div>
  
    <div class="col-8">
      <p class="small text-center mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      </p>
    </div>

  </div>
</div>

<div class="card program-card ml-0 mr-0">
  <div class="row">
    <div class="col-2">
      <img class="card-img-top w-100 h-100 mx-auto d-block" src="assets/img/icons/program-icons/program_icon_01.svg" alt="">
    </div>
    
    <div class="col-2">
      <p class="bold my-text-red text-center mx-auto py-4">Closing ceremony</p>
    </div>
  
    <div class="col-8">
      <p class="small text-center mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      </p>
    </div>

  </div>
</div>
  `;
} else {
  programCards.innerHTML += `
<div class="col-md-2 col-lg-2 col-xl-2">
<div class="card program-card ml-0 mr-0">
  <img class="card-img-top w-25 h-25 mx-auto d-block" src="assets/img/icons/program-icons/program_icon_01.svg" alt="">
  <h6 class="my-text-red">Launching ceremony</h6>
  <p class="small">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    <br>
  </p>
</div>
</div>

<div class="col-md-2 col-xl-2">
<div class="card program-card ml-0 mr-0">
  <img class="card-img-top w-25 h-25 mx-auto d-block" src="assets/img/icons/program-icons/program_icon_02.svg" alt="">
  <h6 class="my-text-red">Webinaires</h6>
  <p class="small">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    <br>
  </p>
</div>
</div>

<div class="col-md-2 col-xl-2">
<div class="card program-card ml-0 mr-0">
  <img class="card-img-top w-25 h-25 mx-auto d-block" src="assets/img/icons/program-icons/program_icon_03.svg" alt="">
  <h6 class="my-text-red">Exhibition</h6>
  <p class="small">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    <br>
  </p>
</div>
</div>

<div class="col-md-2 col-xl-2">
<div class="card program-card ml-0 mr-0"> <!-- CARD IMAGE TOP ???-->
  <img class="card-img-top w-25 h-25 mx-auto d-block" src="assets/img/icons/program-icons/program_icon_04.svg" alt="">
  <h6 class="my-text-red">Workshops</h6>
  <p class="small">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    <br>
  </p>
</div>
</div>


<div class="col-md-2 col-xl-2">
<div class="card program-card ml-0 mr-0">
  <img class="card-img-top w-25 h-25 mx-auto d-block" src="assets/img/icons/program-icons/program_icon_05.svg" alt="">
  <h6 class="my-text-red">Entreprises visits</h6>
  <p class="small">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    <br>
  </p>
</div>
</div>

<div class="col-md-2 col-xl-2">
<div class="card program-card ml-0 mr-0">
  <img class="card-img-top w-25 h-25 mx-auto d-block" src="assets/img/icons/program-icons/program_icon_01.svg" alt="">
  <h6 class="my-text-red">Closing Ceremony</h6>
  <p class="small">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    <br>
  </p>
</div>
</div>
</div>
`;
}