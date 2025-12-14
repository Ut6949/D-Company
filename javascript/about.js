 // Dummy data for demo
 const card = [
  {
  id:1,
  img: 'Images/Farhan Profile.svg',
  name:'Mr. Farhan-Ul-Haq',
  des:'MD/ 3D VISUALISER',
  intro:'Is a seasoned <strong>3D Visualizer</strong> with vast experience in architectural visualization and construction design.'},
  {
  id:2,
  img: 'Images/Javaid Iqbal.png',
  name:'Mr. Javaid Iqbal',
  des:'ARCHITECT / INTERIOR DESIGNER',
  intro:'An accomplished <strong>Architect and Interior Designer</strong>, brings creativity and expertise to innovative architectural and interior design solutions.'},
  {
  id:3,
  img: '',
  name:'Mr. Naveed Saqib',
  des:'CIVIL ENGINEER',
  intro:'A skilled <strong>Civil Engineer</strong>, brings expertise in structural design and construction, ensuring durable and efficient engineering solutions.'
  },
  {
  id:4,
  img: '',
  name:'Mr. Hamza Jameel',
  des:'SITE SUPERVISOR / DRAFTSMAN',
  intro:'A proficient <strong>Site Surveyor and Draftsman</strong>, specializes in precise site assessments and detailed technical drawings for accurate project execution.'
  },
  {
    id:5,
    img: 'Images/Atif Profile.svg',
    name:'Mr. Atif Mujahid',
    des:'DESIGNER / SITE SUPERVISOR',
    intro:'A proficient <strong>Designer and Site Supervisor</strong>, combines creative vision with on-site leadership to deliver seamless project execution and outstanding results.'
    }]

for (let cards = 0; cards < card.length; cards++) {
      document.getElementById("profile_card").innerHTML += `
        <div class="slide-card">
          <div class="card">
            <img
              src="${card[cards].img}"
              alt="N/A"
              class="card-img-top img-fluid"
            />
            <div class="card-body">
              <h3 class="card-title mb-1">${card[cards].name}</h3>
              <hr>
              <p class="card-text small mb-0">${card[cards].des}</p>
            </div>
          </div>
        </div>
        `;
    }
    
    // Slider code
$(document).ready(function () {
        // initialize slick with responsive breakpoints
        $(".autoplay").slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          dots: true,
          arrows: true,
          pauseOnHover: true,
          adaptiveHeight: true,
          responsive: [
            {
              breakpoint: 992, // below large (lg)
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 576, // below small (sm)
              settings: {
                slidesToShow: 1,
              },
            },
          ],
        });

        // Optional: link external buttons to slick controls
        $("#prevBtn").on("click", function () {
          $(".autoplay").slick("slickPrev");
        });
        $("#nextBtn").on("click", function () {
          $(".autoplay").slick("slickNext");
        });
      });