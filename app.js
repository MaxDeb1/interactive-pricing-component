/// PAGEVIEWS + PRICE
let values = [10+"K",50+"K",100+"K",500+"K",1+"M"];
let prices = [8,12,16,24,36];

let price = document.querySelector('#price');
let i = document.querySelector('input'),
   o = document.querySelector('output');

/// RANGE BACKGROUND
let slider = document.querySelector('input[type=range].slider');

slider.addEventListener("mousemove", function() {
  let x = (slider.value * "25");
  let color = 'linear-gradient(to right, hsl(174, 86%, 45%) ' + x + '%, hsl(224, 65%, 95%) ' + x + '%)';

  slider.style.background = color;
})

/// TOGGLE
$(function(){
  $('.toggle').on('click', function(event){
    event.preventDefault();
    $(this).toggleClass('active');
  });
});

/// DISCOUNT PRICE
$(function () {
  $('.toggle').on('click', function () {
    let price = document.querySelector('#price');
    let p = document.querySelector('#price').innerText;
      if ($(".toggle").hasClass("active")) {
        price.innerHTML = p * 0.75;
      } else {
        price.innerHTML = p / 0.75;
      }
  });
});


i.oninput = function() {
  o.innerHTML = values[this.value];

  if ($('.toggle').hasClass('active')) {
    price.innerHTML = prices[this.value] * 0.75;
  } else {
    price.innerHTML = prices[this.value];
  }
};
i.oninput();


//JAVASCRIPT
/* const toggle = document.querySelector(".toggle");

toggle.classList.contains("active"); */

