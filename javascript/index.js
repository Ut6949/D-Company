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
                <p class="card-text">
                ${services[service].card_text}
                </p>
              </div>
            </div>
          </div>
  `
}

var swiper = new Swiper(".swiper-container", {
  slidesPerView: "auto", // Automatically adjust based on container width
  spaceBetween: 0, // No gaps between cards
  loop: true, // Enable infinite scrolling
  freeMode: true, // Allow continuous smooth movement
  autoplay: {
    delay: 0, // No delay, continuous scrolling
    disableOnInteraction: false,
  },
  speed: 7000, // Slow and smooth scrolling
  allowTouchMove: false, // Disable manual sliding for smooth effect
});