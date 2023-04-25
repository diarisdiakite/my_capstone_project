import { speakers } from './list.js';
console.log(speakers);

let speakersContainer = document.getElementById('speakers');

speakers.forEach(speaker => { 
  speakersContainer.innerHTML += `
    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
    <!-- Speaker card-->
      <div class="row">
        <div class="col-sm-8 col-md-4 col-xl-4">
          <img id="speakerImg" w-100 h-25 src="${speaker.mainImageUrl}" alt="">
        </div>
        <div class="col-8">
          <h4>
            ${speaker.name}
          </h4>
          <hr>
          <h6 class="my-text-red">
            ${speaker.position}
          </h6>
          <p>
            ${speaker.presentation}
          </p>
          <br>
        </div>
      </div>
    </div>
    `
  })

  //speakersContainer += speakerCardContent;