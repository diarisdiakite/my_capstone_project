import { speakers } from './list.js';

console.log(speakers);

const speakersContainer = document.getElementById('speakers');

speakers.forEach((speaker) => {
  speakersContainer.innerHTML += `
    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-5">
    <!-- Speaker card-->
      <div class="row">
        <div class="col-xs-4 col-sm-4 col-md-4 col-xl-4 text-center" id="speaker-img-container">
          <img id="speakerImg" class="w-100 h-75 align-middle" src="${speaker.mainImageUrl}" alt="">
        </div>
        <div class="col-xs-8 col-sm-8 col-md-8 col-xl-8">
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
          <button class="btn my-bg-red small bold mb-5">Register</button>
          <br>  
        </div>    
      </div>
    </div>
    `;
});

// speakersContainer += speakerCardContent;