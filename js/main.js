//슬라이드 notice
new Swiper('.notice-line .swiper',{
    direction : 'vertical',
    autoplay : true,
    loop : true
});
//슬라이드 promotion
new Swiper('.promotion .swiper',{
    direction : 'horizontal',
    autoplay : {
        delay : 3000,
        disableOnInteraction:false
        },
    loop : true,
    slidesPerView : 3,
    centeredSlides: true,
    spaceBetween : 15,
    pagination : {
        el: '.promotion .swiper-pagination',
        clickable: true
    },
    navigation: {
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next',
    }
});
//요소가 화면에 보여짐
const scrollEls = document.querySelectorAll('section.scrollEl')
scrollEls.forEach(function(scrollEl){
    new ScrollMagic
        .Scene({
            triggerElement: scrollEl,
            triggerHook:.7
        })
        .setClassToggle(scrollEl,'show')
        .addTo(new ScrollMagic.Controller())
});

document.getElementById('toggle-promotion').addEventListener('change', function() {
    var promotionDiv = document.querySelector('.notice .promotion');
    var swiperDiv = document.querySelector('.notice .promotion .swiper');

    if (this.checked) {
        promotionDiv.style.height = '553px';
        swiperDiv.style.display = 'block';

    } else {
        promotionDiv.style.height = '0';
        swiperDiv.style.display = 'none'
    }
    promotionDiv.style.transition = 'height 0.5s ease';
    swiperDivs.forEach(function(swiperDiv) {
        swiperDiv.style.transition = 'display 0.5s ease';
    });

});