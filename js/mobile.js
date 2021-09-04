export default function mobile() {
  const btn = document.querySelector('.btn-mobile');
  const btnImg = document.querySelector('.btn-mobile img');
  const menu = document.querySelector('.header .container nav');

  btn.addEventListener('click', handleMobile);

  function handleMobile(e) {
    menu.classList.toggle('active-mobile');
    if (menu.classList.contains('active-mobile')) {
      btnImg.src = '/img/close.svg';
    } else {
      btnImg.src = '/img/open.svg';
    }
  }
}