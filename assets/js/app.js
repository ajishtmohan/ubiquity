var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector('.header').style.top = '0px';
    document.querySelector('.mainmenu').style.height = '100px';
    document.querySelector('.logo').innerHTML = '<a href="index.html"><img src="assets/img/uds-hr-01.svg" alt="Ubiquity Design Studio Logo" width="35%" height="auto"></a>';
    document.querySelector('.logo').style.padding = '29px 0';

    var links = document.querySelectorAll('.menulinks');
    console.log(links)
    for (var i = 0; i < links.length; i ++) {
      links[i].style.padding = '40px 20px';
    }

  } else {
    document.querySelector('.header').style.top = '-50px';
    document.querySelector('.mainmenu').style.height = '50px'
    document.querySelector('.logo').innerHTML = '<a href="index.html"><img src="assets/img/uds-hr-02.svg" alt="Ubiquity Design Studio Logo" width="50%" height="auto"></a>';
    document.querySelector('.logo').style.padding = '14px 0';

    var links = document.querySelectorAll('.menulinks');
    for (var i = 0; i < links.length; i ++) {
      links[i].style.padding = '15px 20px';
    }
    
  }
  prevScrollpos = currentScrollPos;
}