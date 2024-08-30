document.querySelectorAll('.address_icon').forEach((item) => {
  item.addEventListener('click', (event) => {
    const url = item.getAttribute('data-url');
    if (url) {
      // 주소를 클릭하면 새 창에서 지정된 URL 열기
      window.open(url, '_blank');
    } else {
      console.error('URL not found for the clicked address.');
    }
  });
});
