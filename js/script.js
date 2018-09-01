var bg = document.getElementById('background');
var circle = new Array(40);
for(var k=0;k<40;k++) {
  circle[k] = document.createElement('span');
  circle[k].class = 'stars';
  circle[k].id = k+1;
  circle[k].style.width = Math.random()*4+"vh";
  circle[k].style.height = circle[k].style.width;
  circle[k].style.borderRadius = '50%';
  circle[k].style.border = '1px solid white';
  circle[k].style.backgroundColor = '#222222';
  circle[k].style.position = 'absolute';
  var x = Math.random()*1400+"px";
  var y = Math.random()*1000+"px";
  circle[k].style.marginLeft = x;
  circle[k].style.marginTop = y;
  circle[k].style.transform = 'scale(0)';
  bg.appendChild(circle[k]);
}
setInterval(enlarge,300);
function enlarge() {
  var circles = new Array(40);
  for(var m=0;m<40;m++) {
    circles[m] = document.getElementById(m+1);
    circles[m].style.transform = 'scale(1.1)';
    circles[m].style.transition = '0.3s ease-in-out';
  }
}

setInterval(enlarge2,600);
function enlarge2() {
  var circles = new Array(40);
  for(var m=0;m<40;m++) {
    circles[m] = document.getElementById(m+1);
    circles[m].style.transform = 'scale(0.9)';
    circles[m].style.transition = '0.3s ease-in-out';
  }
}

setInterval(enlarge3,1100);
function enlarge3() {
  var circles = new Array(40);
  for(var m=0;m<40;m++) {
    circles[m] = document.getElementById(m+1);
    circles[m].style.transform = 'scale(1)';
    circles[m].style.transition = '0.3s ease-in-out';
  }
}

var orbits = document.getElementsByClassName("orbit");
for(i=0; i<orbits.length; i++) {
    y = orbits[i].getBoundingClientRect().top;
    x = orbits[i].getBoundingClientRect().left;
    height = orbits[i].offsetHeight;
    width = orbits[i].offsetWidth;
    orbits[i].style.transformOrigin = x+width/2 + " " + -(y+height/2);
}


function myFunction(x) {
    if (x.matches) { // If media query matches
      var elem = document.querySelector('.main-carousel');
      var flkty = new Flickity( elem, {
  // options
      cellAlign: 'left',
      contain: true
      });

// element argument can be a selector string
//   for an individual element
      var flkty = new Flickity( '.main-carousel', {
  // options
      });
    }
}

var x = window.matchMedia("(max-width: 600px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes
