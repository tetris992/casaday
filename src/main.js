//Home Section opacity

document.addEventListener('scroll', () => {
  const home = document.querySelector('.home_container');
  const homeHeight = home.offsetHeight;
  //   console.log(homeHeight);
  home.style.opacity = 1 - window.scrollY / homeHeight;
  // console.log(1 - window.scrollY / homeHeight);
});

// arrow up 투명도
document.addEventListener('scroll', () => {
  const arrow = document.querySelector('.arrow_up');
  const homeHeight = home.offsetHeight;

  if (window.scrollY > homeHeight) {
    // console.log(window.scrollY - homeHeight);
    arrow.style.opacity = 1;
  } else {
    arrow.style.opacity = 0;
  }
});
