import { speakers } from './list.js';

const speakersContainer = document.getElementById('speakers');

if (window.innerWidth < 768) {
  for (let i = 0; i < 2; i += 1) {
    const speaker = speakers[i];
    speakersContainer.innerHTML += `
    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
    
      <div class="row">
        
        <div class="col-xs-14 col-sm-4 col-md-4 col-lg-4 col-xl-4 text-center w-25" id="speaker-img-container">
          <img id="speakerImg" class="w-100 h-50 align-middle mt-5" src="${speaker.mainImageUrl}" alt="">
        </div>
        
        <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8 col-xl-8 w-75">
          <h5 class="bold">
            ${speaker.name}
          </h5>
          
          <h6 class="my-text-red bold">
            ${speaker.position}
          </h6>
          <hr>
          <p>
            ${speaker.presentation}
          </p>
          
          <br>  
        </div>    
      </div>
    </div>
    `;
  }
} else {
  speakers.forEach((speaker) => {
    speakersContainer.innerHTML += `
      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
        <div class="row">
          
          <div class="col-xs-14 col-sm-4 col-md-4 col-lg-4 col-xl-4 text-center w-25" id="speaker-img-container">
            <img id="speakerImg" class="w-100 h-50 align-middle mt-5" src="${speaker.mainImageUrl}" alt="">
          </div>
          
          <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8 col-xl-8 w-75">
            <h5 class="bold">
              ${speaker.name}
            </h5>
            
            <h6 class="my-text-red bold">
              ${speaker.position}
            </h6>
            <hr>
            <p>
              ${speaker.presentation}
            </p>
            
            <br>  
          </div>    
        </div>
      </div>
      `;
  });
}
