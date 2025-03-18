let card = [
    {
    id:1,
    img: 'Images/Farhan Profile.svg',
    name:'Mr. Farhan-Ul-Haq',
    des:'Managing Director / 3D Visualizer',
    intro:'Is a seasoned <strong>3D Visualizer</strong> with vast experience in architectural visualization and construction design.'},
    {
    id:2,
    img: 'Images/Haris Profile.svg',
    name:'Mr. Muhammad Haris Mughal',
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
    des:'Site Surveyor/Draftsman',
    intro:'A proficient <strong>Site Surveyor and Draftsman</strong>, specializes in precise site assessments and detailed technical drawings for accurate project execution.'
    }]

    for(let cards=0; cards<card.length; cards++){
        document.getElementById("profile_card").innerHTML+=`
        
          <div class="col">
            <div class="card h-100">
              <img src="${card[cards].img}" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">${card[cards].name}</h5>
                <hr />
                <h3>${card[cards].des}</h3>
                <p class="card-text">${card[cards].intro}</p>
              </div>
            </div>
          </div>
        
        ` }

        
