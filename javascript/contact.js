
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()
    
    // Provinces and their respective cities
    const provinceCities = {
        "Punjab": ["Lahore", "Faisalabad", "Rawalpindi", "Multan", "Gujranwala", "Sargodha", "Sialkot", "Bahawalpur", "Sheikhupura"],
        "Sindh": ["Karachi", "Hyderabad", "Sukkur", "Larkana", "Nawabshah", "Mirpur Khas", "Jacobabad"],
        "Khyber Pakhtunkhwa": ["Peshawar", "Mardan", "Abbottabad", "Swat", "Bannu", "Kohat", "Dera Ismail Khan"],
        "Balochistan": ["Quetta", "Gwadar", "Turbat", "Chaman", "Khuzdar", "Loralai", "Zhob"],
        "Gilgit-Baltistan": ["Gilgit", "Skardu", "Hunza", "Diamer", "Astore"],
        "Azad Jammu & Kashmir": ["Muzaffarabad", "Mirpur", "Kotli", "Rawalakot", "Bagh"],
        "Islamabad Capital Territory": ["Islamabad"]
    };

    // Get dropdown elements
    const provinceSelect = document.getElementById("provinceSelect");
    const citySelect = document.getElementById("citySelect");

    // Populate province dropdown dynamically
    Object.keys(provinceCities).forEach(province => {
        let option = document.createElement("option");
        option.value = province;
        option.textContent = province;
        provinceSelect.appendChild(option);
    });

    // Handle province selection and populate cities
    provinceSelect.addEventListener("change", function () {
        const selectedProvince = this.value;
        citySelect.innerHTML = '<option selected disabled value="">Choose City...</option>'; // Reset city options
        citySelect.disabled = false; // Enable city dropdown

        if (selectedProvince in provinceCities) {
            provinceCities[selectedProvince].forEach(city => {
                let option = document.createElement("option");
                option.value = city;
                option.textContent = city;
                citySelect.appendChild(option);
            });
        }
    });

    document.getElementById("validationCustomPhone").addEventListener("input", function () {
        this.setCustomValidity(this.checkValidity() ? "" : "Invalid mobile number format. Example: 03001234567");
    });


    // List of services
    const services = [
        "Architecture", "Construction", "Turnkey Projects", 
        "Interior Designing", "Renovation", "Business to Business"
    ];

    // Get the select element
    const serviceSelect = document.getElementById("serviceSelect");

    // Populate dropdown dynamically
    services.forEach(service => {
        let option = document.createElement("option");
        option.value = service;
        option.textContent = service;
        serviceSelect.appendChild(option);
    });

    // List of property types
    const propertyTypes = [
        "Plot", "House", "Flat", "Villa", "Shop", 
        "Restaurant", "Factory", "Office"
    ];

    // Get the select element
    const propertyTypeSelect = document.getElementById("propertyTypeSelect");

    // Populate dropdown dynamically
    propertyTypes.forEach(property => {
        let option = document.createElement("option");
        option.value = property;
        option.textContent = property;
        propertyTypeSelect.appendChild(option);
    });

    // List of area units
    const areaUnits = [
        "Sq. Ft.", "Sq. Yd.", "Sq Mtr.", 
        "Kanal", "Marla", "Acre", "Hectare"
    ];

    // Get the select element
    const areaUnitSelect = document.getElementById("areaUnitSelect");

    // Populate dropdown dynamically
    areaUnits.forEach(unit => {
        let option = document.createElement("option");
        option.value = unit;
        option.textContent = unit;
        areaUnitSelect.appendChild(option);
    });