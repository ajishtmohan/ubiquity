var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector('.header').style.top = '0px';
    document.querySelector('.mainmenu').style.height = '100px';
    
    document.querySelector('.logo2').style.opacity = '0';
    setTimeout(function(){
      document.querySelector('.logo2').style.display = 'none';
      document.querySelector('.logo1').style.display = 'block';
    }, 300);
    setTimeout(function(){
      document.querySelector('.logo1').style.opacity = '1';
    }, 500);
    document.querySelector('.logo1').style.padding = '24px 0';

    var links = document.querySelectorAll('.menulinks');
    for (var i = 0; i < links.length; i ++) {
      links[i].style.padding = '40px 20px';
    }

  } else {
    document.querySelector('.header').style.top = '-50px';
    document.querySelector('.mainmenu').style.height = '50px'

    document.querySelector('.logo1').style.opacity = '0';
    setTimeout(function(){
      document.querySelector('.logo1').style.display = 'none';
      document.querySelector('.logo2').style.display = 'block';
    }, 300);
    setTimeout(function(){
      document.querySelector('.logo2').style.opacity = '1';
    }, 500);
    document.querySelector('.logo2').style.padding = '11px 0';

    var links = document.querySelectorAll('.menulinks');
    for (var i = 0; i < links.length; i ++) {
      links[i].style.padding = '15px 20px';
    }
    
  }
  prevScrollpos = currentScrollPos;
}