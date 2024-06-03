
// 객실이미지 모달
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal_img');
    const links = document.querySelectorAll('.project_link');
  
    links.forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        modal.style.display = 'block';
        modalImg.src = link.getAttribute('data-img-src');
      });
    });
  
    const span = document.querySelector('.close');
  
    span.onclick = () => {
      modal.style.display = 'none';
    };
  
    window.onclick = (event) => {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    };
  });
  
  
  
