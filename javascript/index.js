const text = "WE SHAPE YOUR DREAMS...!";
  let index = 0;
  let isDeleting = false;

  function typeEffect() {
    let dynamicText = document.getElementById("dynamic-text");

    if (!isDeleting && index < text.length) {
      dynamicText.innerHTML = text.substring(0, index + 1);
      index++;
      setTimeout(typeEffect, 100);
    } else if (isDeleting && index > 0) {
      dynamicText.innerHTML = text.substring(0, index - 1);
      index--;
      setTimeout(typeEffect, 50);
    } else {
      isDeleting = !isDeleting;
      setTimeout(typeEffect, 4000); // Pause before retyping
    }
  }

  // Add cursor class
  document.getElementById("dynamic-text").classList.add("cursor");

  // Start typing effect
  typeEffect();
