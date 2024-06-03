//Home Section opacity

document.addEventListener('scroll', () => {
    const home = document.querySelector('.home_container');
    const homeHeight = home.offsetHeight;

  home.style.opacity = 1 - window.scrollY / homeHeight;
  console.log(1 - window.scrollY / homeHeight);
//   console.log(homeHeight);
});
