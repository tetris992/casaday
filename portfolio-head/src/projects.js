// const headerMenuItems = document.querySelectorAll('.header_menu_item');

// headerMenuItems.forEach(item => {
//   item.addEventListener('click', (event) => {
//     // 모든 아이템에서 'active' 클래스를 제거합니다.
//     headerMenuItems.forEach(item => item.classList.remove('active'));

//     // 클릭된 아이템에 'active' 클래스를 추가합니다.
//     event.target.classList.add('active');
//   });
// });

const headerMenuItems = document.querySelectorAll('.header_menu_item');

headerMenuItems.forEach((item) => {
  item.addEventListener('click', (event) => {
    headerMenuItems.forEach((item) => item.classList.remove('active'));
    event.target.classList.add('active');
  });
});
