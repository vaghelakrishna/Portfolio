let cursor = document.querySelector('.cursor');
let cursor_outline = document.querySelector('.cursor-outline');

document.addEventListener('mousemove', (e) => {

  const poseX = e.clientX;
  const poseY = e.clientY;

  cursor.style.left = `${poseX}px`;
  cursor.style.top = `${poseY}px`;

  cursor.animate({
    left: `${poseX}px`,
    top: `${poseY}px`
  }, { duration: 500, fill: "forwards" });
})


function toggleMenu() {
  const menu = document.querySelector('.menu-links');
  const icon = document.querySelector('.humburger-icon  ');
  menu.classList.toggle('open');
  icon.classList.toggle('open');

}


