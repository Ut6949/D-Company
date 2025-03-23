
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
