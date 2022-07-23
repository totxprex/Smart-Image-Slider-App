'use strict'

let arrowfront = document.querySelector('.arrow--front');

let arrowback = document.querySelector('.arrow--back');
let allslides = document.querySelectorAll('.slider--');
let pointsContainer = document.querySelector('.points');
let allpoints = document.querySelectorAll('.point');


let slidesArr = []
let newarr = []

allslides.forEach(function (el, ind) {

  el.style = `transform: translateX(${100 * ind}%)`
  slidesArr.push(Number(el.style.transform.slice(11).replace('%', '').replace(')', '')));


  pointsContainer.insertAdjacentHTML('beforeend', `<span class="point opa">⏺️</span>`);

  if (ind == allslides.length - 1) {
    allpoints[0].classList.remove('opa')
  };
  allpoints = document.querySelectorAll('.point');

});

allpoints.forEach(function (el, ind) {
  el.setAttribute('data-pointnumber', `${ind}`)
});



let resetSlidesArrBack = function () {

  allpoints[0].classList.remove('opa')
  slidesArr = slidesArr.map(function (el, ind, arr) {
    return el + Math.abs(slidesArr[0])
  });
};



arrowfront.addEventListener('click', function () {


  allpoints.forEach(function (el) {
    el.classList.add('opa')
  });


  if (!slidesArr[slidesArr.length - 1] == 0) {

    allslides.forEach(function (el, ind) {

      slidesArr[ind] = slidesArr[ind] - 100
      el.style = `transform: translateX(${slidesArr[ind]}%)`


      if (slidesArr[ind] == 0) {
        allpoints[ind].classList.remove('opa')
      }
    });
  }


  else {
    resetSlidesArrBack();
    allslides.forEach(function (el, ind) {
      el.style = `transform: translateX(${slidesArr[ind]}%)`
    });
  }

});




arrowback.addEventListener('click', function () {

  allpoints.forEach(function (el) {
    el.classList.add('opa')
  });


  if (!slidesArr[0] == 0) {

    allslides.forEach(function (el, ind) {

      slidesArr[ind] = slidesArr[ind] + 100
      el.style = `transform: translateX(${slidesArr[ind]}%)`;

      if (slidesArr[ind] == 0) {
        allpoints[ind].classList.remove('opa')
      }
    })
  };
});




