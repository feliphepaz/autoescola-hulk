export default function anima() {
  const target = document.querySelectorAll('[data-anime]');
  const animationClass = 'animate';
  const video = document.querySelector('.video-home');
  const vid = document.getElementById('myVideo');
  const body = document.getElementsByTagName('body')[0];

  function animeScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    target.forEach(element => {
      if (windowTop > element.offsetTop) {
        element.classList.add(animationClass);
      } else if(element.classList.contains(animationClass)) {
        element.classList.remove(animationClass);
        if (!video.classList.contains(animationClass)) {
          vid.pause();
        }
      }
    })
  }

  animeScroll();

  if (body.classList.contains('home')) {
    const observer = new MutationObserver(handleMutation);
    observer.observe(video, {attributes: true});
  
    function handleMutation(mutation) {
      if (mutation[0].target.classList.contains('animate')) {
        vid.play();
        observer.disconnect();
      }
    }
  }

  if (target.length) {
    window.addEventListener('scroll', animeScroll)
  }
}