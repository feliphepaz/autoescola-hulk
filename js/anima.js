export default function anima() {
  const sectionLeft = document.querySelectorAll(".section-left"),
  sectionRight = document.querySelectorAll('.section-right'),
  toTopSection = window.innerHeight * 0.8;

function animaScroll() {
  sectionLeft.forEach(secLeft => {
    const viewTop = secLeft.getBoundingClientRect().top - toTopSection;
    if (viewTop < 0) {
      secLeft.style.animation = 'translateLeft 0.5s forwards';
    }
  })

  sectionRight.forEach(secRight => {
    const viewTop = secRight.getBoundingClientRect().top - toTopSection;
    if (viewTop < 0) {
      secRight.style.animation = 'translateRight 0.5s forwards';
    }
  })
}

window.addEventListener("scroll", animaScroll);
}