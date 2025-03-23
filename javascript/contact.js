
    // List of Pakistani cities
    const cities = [
        "Abbottabad", "Bahawalpur", "Faisalabad", "Gujranwala", "Hyderabad", 
        "Islamabad", "Karachi", "Lahore", "Multan", "Peshawar", "Quetta", 
        "Rawalpindi", "Sargodha", "Sialkot", "Sukkur", "Larkana", "Jhang", 
        "Rahim Yar Khan", "Okara", "Gujrat", "Sheikhupura", "Mirpur Khas", 
        "Mardan", "Kohat", "Gwadar", "Hafizabad", "Chiniot", "Dera Ghazi Khan", 
        "Nawabshah", "Kasur", "Muzaffarabad", "Khushab", "Swat", "Kamyana", 
        "Attock", "Vehari", "Bannu", "Jhelum", "Kandhkot", "Chaman", "Turbat"
    ];

    // Get the select element
    const citySelect = document.getElementById("citySelect");

    // Populate dropdown dynamically
    cities.forEach(city => {
        let option = document.createElement("option");
        option.value = city;
        option.textContent = city;
        citySelect.appendChild(option);
    });

    document.getElementById("validationCustomPhone").addEventListener("input", function () {
        this.setCustomValidity(this.checkValidity() ? "" : "Invalid mobile number format. Example: 03001234567");
    });
