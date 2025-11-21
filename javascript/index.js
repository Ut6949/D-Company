// Use \n where you want line breaks in the text
const text = "We Shape \n Your \n Dreams...!";
let index = 0;
let isDeleting = false;

function typeEffect() {
  let dynamicText = document.getElementById("dynamic-text");

  // Replace '\n' with '<br>' to create line breaks
  let displayText = text.substring(0, index).replace(/\n/g, "<br>");

  dynamicText.innerHTML = displayText;

  if (!isDeleting && index < text.length) {
    index++;
    setTimeout(typeEffect, 100);
  } else if (isDeleting && index > 0) {
    index--;
    setTimeout(typeEffect, 50);
  } else {
    isDeleting = !isDeleting;
    setTimeout(typeEffect, 1000); // Pause before retyping
  }
}

// Add cursor class
document.getElementById("dynamic-text").classList.add("cursor");

// Start typing effect
typeEffect();

// services Cards
let services = [
  { id:1,
    img:"Images/Architecture.svg",
    card_title:"Architecture",
    card_text:"At The Capture Construction, our architectural services focus on innovative designs that balance functionality and aesthetics. We work closely with clients to develop creative solutions tailored to their vision and project requirements."},
  { id:2,
    img:"Images/Construction.svg",
    card_title:"Construction",
    card_text:"We provide high-quality construction services for residential, commercial, and industrial projects, ensuring timely delivery and adherence to safety standards. Our experienced team handles every detail, from planning to execution, guaranteeing durability and cost-efficiency."},
  { id:3,
    img:"Images/Turnkeyprojects.svg",
    card_title:"Turnkey Projects",
    card_text:"Our Turnkey Project service offers end-to-end solutions, managing everything from design to completion for a hassle-free experience. We take full responsibility for delivering projects on time, within budget, and ready for immediate use."},    
  { id:4,
    img:"Images/Interior Designing.svg",
    card_title:"Interior Designing",
    card_text:"We transform spaces with our creative Interior Designing services, combining functionality with style to create visually appealing environments. Our team carefully selects materials and finishes that align with the client’s vision and the overall design concept."},
  { id:5,
    img:"Images/Renovation.svg",
    card_title:"Renovation",
    card_text:"Our Renovation services breathe new life into existing spaces, modernizing and upgrading them for improved functionality and aesthetics. Whether it's a minor update or a major overhaul, we ensure minimal disruption and high-quality results."},
  { id:6,
    img:"Images/B2B.svg",
    card_title:"Business to Business",
    card_text:"We deliver high-quality B2B construction solutions for commercial, industrial, and infrastructure projects. Our expert team ensures seamless execution, safety compliance, and cost-efficient results—on time and within budget."},
  ]

for (let service = 0; service <services.length; service++ ){
  document.getElementById("services-row").innerHTML+=`

            <div class="col-12 col-md-4 col-sm-12">
            <div class="card h-100 services_card">
              <img
                src="${services[service].img}"
                class="card-img-top"
                alt="Architecture"
              />
              <div class="card-body">
                <h5 class="card-title d-flex justify-content-center">
                ${services[service].card_title}
                </h5>
                <p class="card-text text-fluid text-wrap">
                ${services[service].card_text}
                </p>
              </div>
            </div>
          </div>
  `
}

// var swiper = new Swiper(".swiper-container", {
//   slidesPerView: "auto", 
//   spaceBetween: 0, 
//   loop: true, 
//   // freeMode: true, 
//   autoplay: {
//     delay: 0, 
//     disableOnInteraction: true, 
//   },
//   speed: 7000, 
//   allowTouchMove: false, 
// });

// // Restart autoplay when interaction ends
// swiper.el.addEventListener("mouseleave", () => {
//   swiper.autoplay.start();
// });
/* javascript/swiper-init.js
   Initialize Swiper with autoplay and responsive breakpoints.
   Make sure swiper-bundle.min.js is loaded before this file.
*/

document.addEventListener('DOMContentLoaded', function () {
  if (typeof Swiper === 'undefined') {
    console.warn('Swiper lib not found. Include swiper-bundle.min.js before swiper-init.js');
    return;
  }

  // Single selector; change '.swiper' to '.swiper-container' if your markup uses that
  const swiperEl = document.querySelector('.swiper');
  if (!swiperEl) {
    console.warn('No .swiper element found in DOM.');
    return;
  }

  // Clean any previous instance if you accidentally initialize twice (dev-time helper)
  if (swiperEl.swiper) {
    try { swiperEl.swiper.destroy(true, true); } catch (e) {}
  }

  const mySwiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 'auto',          // auto width slides (works with flex: 0 0 auto)
    spaceBetween: 16,
    centeredSlides: false,
    grabCursor: true,
    simulateTouch: true,
    allowTouchMove: true,
    // Autoplay: images will slide automatically without clicking
    autoplay: {
      delay: 2500,                  // ms between slides
      disableOnInteraction: false,  // keep autoplay after user interactions
      pauseOnMouseEnter: true       // pause when mouse hovers (good for desktop)
    },
    // Fine-tune touch behavior
    touchStartPreventDefault: false,
    touchReleaseOnEdges: true,
    // Pagination + navigation (enable if present in markup)
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    // Responsive breakpoints (override slidesPerView for bigger screens)
    breakpoints: {
      0:    { slidesPerView: 1.05, spaceBetween: 12 },
      576:  { slidesPerView: 1.2,  spaceBetween: 14 },
      768:  { slidesPerView: 2,    spaceBetween: 18 },
      992:  { slidesPerView: 3,    spaceBetween: 24 }
    },
    // Accessibility (optional)
    a11y: {
      enabled: true,
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
      firstSlideMessage: 'This is the first slide',
      lastSlideMessage: 'This is the last slide'
    }
  });

  // Optional: expose instance for debugging in console: window.mySwiper = mySwiper;
  window.mySwiper = mySwiper;
});


// Our Client Slider
const track = document.querySelector(".marquee-track");
      if (track) {
        const children = Array.from(track.children);
        children.forEach((child) => track.appendChild(child.cloneNode(true)));
      }


document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector(".marquee-track");
  const slides = Array.from(track.children);

  // Duplicate all slides twice (you can change 2 to any number)
  for (let i = 0; i < 2; i++) {
    slides.forEach(slide => {
      track.appendChild(slide.cloneNode(true));
    });
  }
});

