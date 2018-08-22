var slideUp = {
  distance: '40px',
  duration: 1000,
  opacity: 0,
  easing: 'cubic-bezier(0.5, 0, 0, 1)'
};
ScrollReveal().reveal('.reveal', slideUp);
  document.getElementById(1).style.transform = 'scale(0)';
  document.getElementById(2).style.transform = 'scale(0)';
  document.getElementById(3).style.transform = 'scale(0)';
function showDetail(href) {
  var detail = document.getElementsByClassName('details')[href-1];
  detail.style.transform = 'scale(1)';
  detail.style.transitionDuration = '0.3s';
  console.log(detail);
}
function hideDetail(href) {
  var detail = document.getElementsByClassName('details')[href-1];
  detail.style.transform = 'scale(0)';
  detail.style.transitionDuration = '0.3s';
  console.log(detail);
}
