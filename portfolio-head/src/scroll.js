// 아래 코드를 함수로 리펙토링함
function handleScroll() {
  const header = document.querySelector('.header');
  const headerRect = header.getBoundingClientRect();
  const headerHeight = headerRect.height;

  if (window.scrollY > headerHeight) {
    header.classList.add('scrolled');
  } else if (window.scrollY <= headerHeight) {
    header.classList.remove('scrolled');
  }
}

// Function to toggle menu
function toggleMenu() {
  const headerMenu = document.querySelector('.header_menu');
  const navContainer = document.querySelector('.nav_container');
  const toggleBar = document.querySelector('.toggle_bar');

  toggleBar.addEventListener('click', () => {
    navContainer.classList.toggle('active');
    headerMenu.classList.toggle('open');
  });

  headerMenu.addEventListener('click', function () {
    headerMenu.classList.remove('open');
  });

  // Close menu when clicking outside
  document.addEventListener('click', function (event) {
    if (
      !toggleBar.contains(event.target) &&
      navContainer.classList.contains('active')
    ) {
      navContainer.classList.remove('active');
    }
  });
}

// Initialize all functions
function init() {
  document.addEventListener('scroll', handleScroll);
  toggleMenu();
}

// Call the init function on DOMContentLoaded
document.addEventListener('DOMContentLoaded', init);


// 리펙토링 이전버전

// JavaScript to change the header background color on scroll
// document.addEventListener('scroll', () => {
//   const header = document.querySelector('.header');
//   const headerRect = header.getBoundingClientRect();
//   const headerHeight = headerRect.height;
//   // console.log(headerHeight);
//   if (window.scrollY > headerHeight) {
//     header.classList.add('scrolled');
//   } else if (window.scrollY <= headerHeight) {
//     header.classList.remove('scrolled');
//   }
// });

// const headerMenu = document.querySelector('.header_menu');
// const toggleBar = document.querySelector('.toggle_bar');
// toggleBar.addEventListener('click', () => {
//   headerMenu.classList.add('open');
// });

// const navContainer = document.querySelector('.nav_container');
// toggleBar.addEventListener('click', function () {
//   navContainer.classList.toggle('active');
// });

// headerMenu.addEventListener('click', function () {
//   headerMenu.classList.remove('open');
// });

// // 바깥 영역 클릭 시 메뉴 닫기
// document.addEventListener('click', function (event) {
//   const navContainer = document.querySelector('.nav_container');
//   const toggleBar = document.querySelector('.toggle_bar');

//   // 이벤트 대상이 토글 버튼이거나 토글 버튼의 자식이 아닐 때, nav_container가 열려 있으면 닫기
//   if (
//     !toggleBar.contains(event.target) &&
//     navContainer.classList.contains('active')
//   ) {
//     navContainer.classList.remove('active');
//   }
// });
