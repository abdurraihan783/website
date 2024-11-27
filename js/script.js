// js
var mixer = mixitup('#hello', {
     animation: {
     duration: 300
     }

});



var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });







  




































// JQ
$(document).ready(function(){
     $('.owl-carousel').owlCarousel({
    stagePadding: 50,
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
});




// preloader
$(document).ready(function(){
  $(window).load(function () {
    $("#loading").fadeOut(400);
  });
})


// load more
$(document).ready(function(){
$('.some-list').simpleLoadMore({
  item: 'div'
});
})

