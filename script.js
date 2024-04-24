// JavaScript
document.addEventListener('DOMContentLoaded', function () {
  const shareIcon = document.querySelector('.share-icon');
  const popup = document.getElementById('popup');

  console.log(shareIcon);
  console.log(popup);

  shareIcon.addEventListener('click', function () {
    console.log('Clicked');
    popup.classList.toggle('show');
  });
});
