// slider
const swiper = new Swiper('.slider-materials', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clicable: true
  }
});

// fixed header
window.addEventListener('scroll', function() {
scrollY > 0 ? document.querySelector('.header').classList.add('scroll') : document.querySelector('header').classList.remove('scroll');
scrollY > 0 ? document.querySelector('.header__container').classList.add('scroll') : document.querySelector('.header__container').classList.remove('scroll');
})

// transition
function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
    }
  });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.animation');
for (let elm of elements) {
  observer.observe(elm);
}