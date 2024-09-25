const firstText = "I'm a Web Desiner.|";
const secondText = "I'm a Web Developer.|";

function typeEffect(element, text, index, deleting) {
  if (!deleting && index < text.length) {
    // Add characters one by one
    element.innerHTML += text.charAt(index);
    setTimeout(() => typeEffect(element, text, index + 1, false), 100);
  } else if (!deleting && index === text.length) {
    // Pause before deleting
    setTimeout(() => typeEffect(element, text, index, true), 1000);
  } else if (deleting && index > 0) {
    // Delete characters one by one
    element.innerHTML = text.substring(0, index - 1);
    setTimeout(() => typeEffect(element, text, index - 1, true), 100);
  } else if (deleting && index === 0) {
    // Move to the next tag after finishing deletion
    if (element.id === "firstText") {
      setTimeout(() => typeEffect(document.getElementById("secondText"), secondText, 0, false), 500);
    } else {
      setTimeout(() => typeEffect(document.getElementById("firstText"), firstText, 0, false), 500);
    }
  }
}

// Start typing loop with the first h4
typeEffect(document.getElementById("firstText"), firstText, 0, false);