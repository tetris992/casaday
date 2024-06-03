
// JavaScript to change the header background color on scroll
document.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  const headerRect = header.getBoundingClientRect();
  const headerHeight = headerRect.height;
  // console.log(headerHeight);
  if (window.scrollY > headerHeight) {
    header.classList.add('scrolled');
  } else if (window.scrollY <= headerHeight) {
    header.classList.remove('scrolled');
  }
});