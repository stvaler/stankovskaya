// бургер

// menu.onclick = function() {
//     var x = document.getElementById("topnav");

//     if(x.className === "header-nav") {
//         x.className += " responsive";
//     } else{
//         x.className = "header-nav";
//     }
// }

// соритровка на главной странице

let btnsFilterContainer = document.querySelector('.portfolio-navigation'); 
let removeClass = function(arr, className){
    arr
    .filter(btn => btn.classList.contains(className))
    .map(btn => btn.classList.remove(className));
};

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

// слайдер
// $(document).ready(function(){
//   $('.your-class').slick({
//     setting-name: setting-value
//   });
// });


// $('.slide-team').slick({
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     variableWidth: true,
//     responsive: [
//         {
//           breakpoint: 960,
//           settings: {
//             slidesToShow: 3,
//             slidesToScroll: 1,
//             infinite: true,
//             dots: true
//           }
//         },
//         {
//           breakpoint: 720,
//           settings: {
//             slidesToShow: 2,
//             slidesToScroll: 1
//           }
//         },
//         {
//           breakpoint: 540,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1
//           }
//         }

//       ]
// });
