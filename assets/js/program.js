import { programs } from './list.js';

const programCards = document.getElementById('program-cards');

programs.forEach((program) => {
  if (window.innerWidth < 768) {
    programCards.innerHTML += `
  <div class="card program-card ml-0 mr-0">
  <div class="row" my-bg-light>
    <div class="col-3">
      <img class="card-img-top w-100 h-100 mx-auto d-block" src="${program.imgLink}" alt="">
    </div>
    
    <div class="col-3">
      <p class="bold my-text-red text-center mx-auto mt-5">${program.activity}</p>
    </div>
  
    <div class="col-6">
      <p class="small text-justify mx-auto p-0">
        ${program.mobileDescription}
      </p>
    </div>

  </div>
</div>
  `;
  } else {
    programCards.innerHTML += `
<div class="col-md-2 col-lg-2 col-xl-2 px-1 py-1 text-center">
<div class="card program-card ml-0 mr-0">
  <img class="card-img-top w-25 h-25 mx-auto d-block" src="${program.imgLink}" alt="">
  <h6 class="my-text-red">${program.activity}</h6>
  <p class="small">
    ${program.desktopDescription}
    <br>
  </p>
</div>
</div>
`;
  }
});