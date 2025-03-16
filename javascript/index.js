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
    setTimeout(typeEffect, 2000); // Pause before retyping
  }
}

// Add cursor class
document.getElementById("dynamic-text").classList.add("cursor");

// Start typing effect
typeEffect();
