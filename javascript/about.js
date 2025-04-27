 // Dummy data for demo
 const card = [
  {
  id:1,
  img: 'Images/Farhan Profile.svg',
  name:'Mr. Farhan-Ul-Haq',
  des:'Managing Director / 3D Visualizer',
  intro:'Is a seasoned <strong>3D Visualizer</strong> with vast experience in architectural visualization and construction design.'},
  {
  id:2,
  img: 'Images/Haris Profile.svg',
  name:'Mr. M. Haris Mughal',
  des:'Architect /Interior Designer',
  intro:'An accomplished <strong>Architect and Interior Designer</strong>, brings creativity and expertise to innovative architectural and interior design solutions.'},
  {
  id:3,
  img: 'Images/Farhan Profile.svg',
  name:'Mr. Naveed Saqib',
  des:'Civil Engineer',
  intro:'A skilled <strong>Civil Engineer</strong>, brings expertise in structural design and construction, ensuring durable and efficient engineering solutions.'
  },
  {
  id:4,
  img: 'Images/Farhan Profile.svg',
  name:'Mr. Hamza Jameel',
  des:'Site Surveyor /Draftsman',
  intro:'A proficient <strong>Site Surveyor and Draftsman</strong>, specializes in precise site assessments and detailed technical drawings for accurate project execution.'
  },
  {
    id:5,
    img: 'Images/Atif Profile.svg',
    name:'Mr. Atif Mujahid',
    des:'Designer /Site Supervisor',
    intro:'A proficient <strong>Designer and Site Supervisor</strong>, combines creative vision with on-site leadership to deliver seamless project execution and outstanding results.'
    }]

    // Inject cards into Swiper
    for (let cards = 0; cards < card.length; cards++) {
      document.getElementById("profile_card").innerHTML += `
    <div class="swiper-slide d-flex">
      <div class="card h-100 w-100">
        <img src="${card[cards].img}" class="card-img-top" alt="..." style="height:auto; object-fit:cover;">
        <div class="card-body d-flex flex-column ">
          <h2 class="card-title">${card[cards].name}</h2>
          <hr class="styled-hr"/>
          <h3>${card[cards].des}</h3>
          <p class="card-text flex-grow-1">${card[cards].intro}</p>
        </div>
      </div>
    </div>
`;
    }

    // Initialize Swiper
    const swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });