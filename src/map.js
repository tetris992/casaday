// document.querySelectorAll('.address_icon').forEach((item) => {
//     item.addEventListener('click', (event) => {
//       const lat = item.getAttribute('data-lat');
//       const lng = item.getAttribute('data-lng');
//       // Geolocation API를 사용하여 사용자의 현재 위치를 가져옵니다.
//       if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(
//           (position) => {
//             const currentLat = position.coords.latitude;
//             const currentLng = position.coords.longitude;
//             const googleMapUrl = `https://www.google.com/maps/dir/?api=1&origin=${currentLat},${currentLng}&destination=${lat},${lng}&travelmode=driving`;

//             // 사용자가 클릭하면 즉시 네비게이션 링크로 이동
//             window.location.href = googleMapUrl;
//           },
//           () => {
//             alert('현재 위치를 가져올 수 없습니다.');
//           }
//         );
//       } else {
//         alert('Geolocation을 지원하지 않는 브라우저입니다.');
//       }
//     });
//   });

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
