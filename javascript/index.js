
      const text = "WE SHAPE YOUR DREAMS!";
      let index = 0;

      function typeEffect() {
        if (index < text.length) {
          document.getElementById("dynamic-text").innerHTML +=
            text.charAt(index);
          index++;
          setTimeout(typeEffect, 100); // Adjust speed here
        }
      }

      typeEffect();
