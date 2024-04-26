document.addEventListener('DOMContentLoaded', function () {
  const shareIcon = document.querySelector('.share-icon');
  const popup = document.getElementById('popup');

  let isOpen = false;

  console.log(shareIcon);
  console.log(popup);

  shareIcon.addEventListener('click', function () {
    isOpen = !isOpen;
    console.log('Clicked');
    if (isOpen) {
      popup.style.display = 'block';
    } else {
      popup.style.display = 'none';
    }
  });
});
