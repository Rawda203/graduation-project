function flipToFront(button) {
  const card = button.closest('.flip-card');
  card.classList.remove('show-back', 'show-learn');
}

function flipToLearn(button) {
  const card = button.closest('.flip-card');
  card.classList.add('show-learn');
  card.classList.remove('show-back');
}
function addResult(event, button, type) {
  event.preventDefault();

  const card = button.closest('.flip-card');
  const input = card.querySelector('input');
  const value = input.value.trim();

  const resultMap = {
    password: 'Password Leak Check Result',
    url: ' URL Scan Result',
    tor: ' TOR Search Result',
    threat: ' Threat Intelligence Result'
  };

  const resultsSection = document.getElementById('resultsOutput');
  const resultHeader = document.getElementById('resultHeader');
  const resultBody = document.getElementById('resultBody');

  if (value === '') {
    resultHeader.textContent = "Input Required!";
    resultBody.innerHTML = `<span style="color: red;">Please enter something!</span>`;
  } else {
    resultHeader.textContent = resultMap[type] || "Result";
    resultBody.innerHTML = `
      <div><strong>Input:</strong> ${value}</div>
      <div class="mt-2"> Submitted successfully. </div>
    `;
  }

  resultsSection.classList.remove('d-none');
  resultsSection.scrollIntoView({ behavior: "smooth" });
}

AOS.init({
  duration: 1200,
  once: true
}); 

document.addEventListener("DOMContentLoaded", function() {
  const hash = window.location.hash;
  const carousel = new bootstrap.Carousel(document.querySelector('#cardCarousel'));

  if (hash) {
    const cards = ['#password-card', '#url-card', '#tor-card', '#threat-card'];
    const index = cards.indexOf(hash);
    if (index !== -1) {
      carousel.to(index);
    }
  }
});