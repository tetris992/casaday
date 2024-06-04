document.addEventListener('DOMContentLoaded', () => {
  // Function to handle header background change on scroll
  const handleScroll = () => {
    const header = document.querySelector('.header');
    const headerHeight = header.getBoundingClientRect().height;
    if (window.scrollY > headerHeight) {
      header.classList.add('headerBlackedByscrolled');
    } else {
      header.classList.remove('headerBlackedByscrolled');
    }
  };

  // CSS
  // .scrolled {
  //     background-color: var(--color-primary);
  //     opacity: 1;
  //   }

  // Function to toggle navigation menu
  const toggleNavigation = () => {
    const headerMenu = document.querySelector('.header_menu');
    const navContainer = document.querySelector('.nav_container');
    const toggleBar = document.querySelector('.toggle_bar');

    toggleBar.addEventListener('click', () => {
      navContainer.classList.toggle('active');
      headerMenu.classList.toggle('open');
      toggleBar.style.display = navContainer.classList.contains('active') ? 'none' : 'block';
    });

    document.querySelectorAll('.header_menu_item').forEach((item) => {
      item.addEventListener('click', () => {
        navContainer.classList.remove('active');
        headerMenu.classList.remove('open');
        toggleBar.style.display = 'block';
      });
    });

    document.addEventListener('click', (event) => {
      if (
        !toggleBar.contains(event.target) &&
        navContainer.classList.contains('active')
      ) {
        navContainer.classList.remove('active');
        headerMenu.classList.remove('open');
        toggleBar.style.display = 'block';
      }
    });
  };

  // Function to handle modal popup
  const handleModalPopup = () => {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal_img');
    const links = document.querySelectorAll('.project_link');
    const span = document.querySelector('.close');

    links.forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        modal.style.display = 'block';
        modalImg.src = link.getAttribute('data-img-src');
      });
    });

    span.onclick = () => {
      modal.style.display = 'none';
    };

    window.onclick = (event) => {
      if (event.target == modal || event.target === modalImg) {
        modal.style.display = 'none';
      }
    };
  };

  // 부드러운 스크롤은 css로 간단히 해결가능
  // Function to enable smooth scroll for menu items
  // const enableSmoothScroll = () => {
  //   const menuItems = document.querySelectorAll('.header_menu_item');
  //   menuItems.forEach(item => {
  //     item.addEventListener('click', (event) => {
  //       event.preventDefault(); // 기본 링크 동작을 방지
  //       const targetId = item.getAttribute('href').substring(1);
  //       const targetSection = document.getElementById(targetId);
  //       if (targetSection) {
  //         targetSection.scrollIntoView({ behavior: 'smooth' }); // 부드럽게 스크롤
  //       }
  //     });
  //   });
  // };

  // Initialize functions
  handleScroll();
  toggleNavigation();
  handleModalPopup();
  // enableSmoothScroll(); // 이건 CSS에서 간단하게 설정이 가능함.
  document.addEventListener('scroll', handleScroll);
});