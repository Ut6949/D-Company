const text = "We Shape Your Dreams";
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
      setTimeout(typeEffect, 1000); // Pause before retyping
    }
  }

  // Start typing effect
  typeEffect();
