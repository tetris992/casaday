// // // IntersectionObserver

const options = {
  root: null,
  rootMargin: '-10px 0px 0px 0px',
  threshold: [0, 0.8],
};

// 섹션의 id들을 배열로 가져오기
// const sectionIds = ['home', 'about', 'rooms', 'location', 'guest', 'contact'];
const sections = Array.from(document.querySelectorAll('.section'));
const menuItems = document.querySelectorAll('.header_menu_item');

const observer = new IntersectionObserver(callback, options);
sections.forEach((section) => observer.observe(section));

function callback(entries) {
  let firstIntersectingEntry = null;

  entries.forEach((entry) => {
    if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
      if (
        !firstIntersectingEntry ||
        entry.boundingClientRect.top <
          firstIntersectingEntry.boundingClientRect.top
      ) {
        firstIntersectingEntry = entry;
      }
    }
  });

  if (firstIntersectingEntry) {
    const id = firstIntersectingEntry.target.getAttribute('id');
    const menuItem = document.querySelector(`.header_menu_item[href="#${id}"]`);
    if (menuItem) {
      menuItems.forEach((item) => item.classList.remove('active'));
      menuItem.classList.add('active');
    }
  }
}



//   // Function to update menu item based on scroll position
//   const updateMenuOnScroll = () => {
//     const sections = Array.from(document.querySelectorAll('.section'));
//     const menuItems = document.querySelectorAll('.header_menu_item');

//     window.addEventListener('scroll', () => {
//       let visibleSections = [];

//       const viewportCenter = window.innerHeight / 2;

//       sections.forEach(section => {
//         const rect = section.getBoundingClientRect();
//         if (rect.top < window.innerHeight && rect.bottom > 0) {
//           visibleSections.push(section);
//         }
//       });

//       if (visibleSections.length > 0) {
//         let targetSection;
//         if (visibleSections.length >= 3) {
//           targetSection = visibleSections[Math.floor(visibleSections.length / 2)];
//         } else {
//           let closestDistance = Infinity;
//           visibleSections.forEach(section => {
//             const rect = section.getBoundingClientRect();
//             const sectionCenter = rect.top + rect.height / 2;
//             const distance = Math.abs(viewportCenter - sectionCenter);
//             if (distance < closestDistance) {
//               closestDistance = distance;
//               targetSection = section;
//             }
//           });
//         }

//         const id = targetSection.getAttribute('id');
//         const menuItem = document.querySelector(`.header_menu_item[href="#${id}"]`);
//         if (menuItem) {
//           menuItems.forEach(item => item.classList.remove('active'));
//           menuItem.classList.add('active');
//         }
//       }
//     });
//   };

// updateMenuOnScroll();