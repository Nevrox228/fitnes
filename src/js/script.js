$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1300,        
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_activ)', function() {
        $(this)
          .addClass('catalog__tab_activ').siblings().removeClass('catalog__tab_activ')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_activ').eq($(this).index()).addClass('catalog__content_activ');
      });

    $('.catalog-item__link').each(function(i) {
        $(this).on('click', function(e) { 
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_activ');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_activ');
        }) 
    });

    $('.catalog-item__back').each(function(i) {
        $(this).on('click', function(e) { 
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_activ');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_activ');
        }) 
    })       
    
  }); 