var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector('.header').style.top = '0px';
  } else {
    document.querySelector('.header').style.top = '-50px';
  }
  prevScrollpos = currentScrollPos;
}