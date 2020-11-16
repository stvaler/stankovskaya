// бургер


function myFunction() {
    document.getElementById("topnav").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.burger')) {
    let headerdowns = document.getElementsByClassName("header-nav");
    let i;
    for (i = 0; i < headerdowns.length; i++) {
      let openHeaderdown = headerdowns[i];
      if (openHeaderdown.classList.contains('show')) {
        openHeaderdown.classList.remove('show');
      }
    }
  }
}

// соритровка на главной странице

let btnsFilterContainer = document.querySelector('.portfolio-navigation'); 
let removeClass = function(arr, className){
    arr
    .filter(btn => btn.classList.contains(className))
    .map(btn => btn.classList.remove(className));
};

if (btnsFilterContainer) {
  btnsFilterContainer.addEventListener('click', function(e) {
    let target = e.target;
    if (!e.target.closest('button')) return;
    let btn = e.target.closest('button');
    if (btn.classList.contains('active')) return;
    let btns = document.querySelectorAll('.portfolio-navigation button');

let arrBtns = Array.prototype.slice.call(btns);

    removeClass(arrBtns, 'active');

    btn.classList.add('active');

    let btnId = btn.id;
    let blocks = document.querySelectorAll('.block')
    let arrBlocks = Array.prototype.slice.call(blocks);

    removeClass(arrBlocks, 'hide');
    if (btnId == 'all') return;

    arrBlocks
    .filter(block => (block.dataset.var != btnId))
    .map(block => block.classList.add('hide'));
});

}


// слайдер

$(document).ready(function(){
  $('.slide-team').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
        {
          breakpoint: 990,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 770,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 540,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }

      ]
});

});


