window.addEventListener('scroll', () => {
  document.querySelectorAll('section').forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 300;
    if(top > offset){
      sec.style.opacity = 1;
      sec.style.transform = "translateY(0)";
    }
  });
});
