  AOS.init({
    once: false,
    mirror: true,
    duration: 1000,
    easing: 'ease-in-out'
  });
  const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
item.querySelector(".faq-question").addEventListener("click", () => {
  item.classList.toggle("open");
});
});