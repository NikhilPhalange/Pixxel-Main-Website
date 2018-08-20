// var canvas = document.getElementById("background");
// var ctx = canvas.getContext("2d");
// // function drawStars() {
// for(var i=0; i<40; i++) {
//   var x = Math.random()*1400;
//   var y = Math.random()*1000;
//   var radius = Math.random()*10;
//   ctx.beginPath();
//   ctx.arc(x,y,radius,0,2*Math.PI);
//   ctx.strokeStyle = 'white';
//   ctx.fillStyle = '#222222'
//   ctx.fill();
//   ctx.stroke();
//
// }

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
  // console.log(circle[k].style.width,  circle[k].style.marginTop,circle[k]);
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
// }

//
// window.requestAnimFrame = (function(){
//       return  window.requestAnimationFrame       ||
//               window.webkitRequestAnimationFrame ||
//               window.mozRequestAnimationFrame    ||
//               window.oRequestAnimationFrame      ||
//               window.msRequestAnimationFrame     ||
//               function(/* function */ callback, /* DOMElement */ element){
//                 window.setTimeout(callback, 1000 / 60);
//               };
//     })();

//     var canvas, context, toggle;
//
//     init();
//     animate();
//
// function init() {
//
//     canvas = document.createElement( 'canvas' );
//     canvas.id = 'background';
//     canvas.width = 1400;
//     canvas.height = 1000;
//
//     context = canvas.getContext( '2d' );
//
//     document.body.appendChild( canvas );
//
// }
//
// function animate() {
//     requestAnimFrame( animate );
//     draw();
//
// }
//
// function draw() {
//
//   for(var i=0; i<40; i++) {
//     var x = Math.random()*1400;
//     var y = Math.random()*1000;
//     var radius = Math.random()*10;
//     context.beginPath();
//     context.arc(x,y,radius,0,2*Math.PI);
//     context.strokeStyle = 'white';
//     context.fillStyle = '#222222'
//     context.fill();
//     context.stroke();
//   }
//
// }
// setTimeout(window.cancelAnimationFrame(3),4);

// var rotate_orbit;
// var context;
//
// var requestAnimFrame = (function () {
//     return window.requestAnimationFrame ||
//         window.webkitRequestAnimationFrame ||
//         window.mozRequestAnimationFrame ||
//         window.oRequestAnimationFrame ||
//         window.msRequestAnimationFrame ||
//         function (callback) {
//             window.setTimeout(callback, 1000 / 60, new Date().getTime());
//         };
// })();
//
// function init() {
//     rotate_orbit = document.getElementById('rotate_orbit')
//     context = rotate_orbit.getContext("2d");
// }
//
// function rotateOrbit() {
//   rotate_orbit = document.getElementById('rotate_orbit')
//   context = rotate_orbit.getContext("2d");
//   context.translate(400,400);
//   context.rotate(360*Math.PI/180);
//   context.translate(-400,-400);
//   context.beginPath();
//   context.setLineDash([5]);
//   context.arc(0,400,400,0,2 * Math.PI,false);
//   context.strokeStyle = '#82CEEC';
//   context.stroke();
// }
//
// rotateOrbit();
//
// function animate() {
//     requestAnimFrame(animate);
//     draw();
// }
//
// function draw() {
//     context.clearRect(0, 0, 400, 400);
//     context.translate(400, 400);
//     context.rotate(2 * Math.PI / 180);
//     context.translate(-400, -400);
// }
