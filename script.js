document.addEventListener('DOMContentLoaded', function () {
  const shareIcon = document.querySelector('.share-icon');
  const popup = document.getElementById('popup');

  let isOpen = false;

  shareIcon.addEventListener('click', function () {
    isOpen = !isOpen;

    if (isOpen) {
      popup.style.display = 'block';
    } else {
      popup.style.display = 'none';
    }
  });
});
