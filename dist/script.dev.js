"use strict";

document.addEventListener('scroll', function (event) {
  var a = window.scrollY;

  if (a > 80) {
    document.getElementById('navbar-static').classList.add('active');
    document.getElementById('navbar-static').classList.remove('disable');
  }

  if (a < 80) {
    document.getElementById('navbar-static').classList.remove('active');
    document.getElementById('navbar-static').classList.add('disable');
  }
});
var contents = document.querySelectorAll('.animation-fade');
var observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('true');
    } else {
      entry.target.classList.remove('true');
    }
  });
}, {
  threshold: 0
}); // مشاهده هر عنصر

contents.forEach(function (content) {
  observer.observe(content);
}); // ////////////////////////////////////

var card = document.querySelectorAll('.section-Projects-card');
card.forEach(function (i) {
  i.addEventListener('mousemove', function (event) {
    console.log(event.offsetX);
  });
});