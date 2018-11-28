




$(document).ready(function(){

 
    function lookMa() {
        $('.hero').removeClass('up');
        $('.swiper-slide').find('.hero__slide-number, .hero__info h1, .hero__info p, .hero__info a, .hero__img').removeClass('up');
    }


$.stellar();


// ПРОМО БЛОК 
// ===================================================================================


    // при нажатии на буллеты и стрелки:
    // 1. запускается разбор слайда - элементы уезжают с экрана
    // 2. Вызывается смена слайда с нулевым временем перехода (мгновенно)
    // 3. Новый слайд собирается - элементы появляются на экране


    if ($( window ).width() > 768) {
        var heroSwiper = new Swiper('.swiper-hero', {
          speed: 0,
          touchRatio: 0,
        });
    } else {
        var heroSwiper = new Swiper('.swiper-hero', {
          speed: 400,
        });
    }

    // разобрать слайд до свайпа
    function breakSlide() {
        $('.hero').addClass('up');
        $('.swiper-slide').find('.hero__slide-number, .hero__info h1, .hero__info p, .hero__info a, .hero__img').addClass('up');
        console.log('break slide');
    }

    // собрать слайд после свайпа
    function makeupSlide() {
        $('.hero').removeClass('up');
        $('.swiper-slide').find('.hero__slide-number, .hero__info h1, .hero__info p, .hero__info a, .hero__img').removeClass('up');
        console.log('make slide');
    }

    // свайп влево-справо
    function slideNext() { 
        heroSwiper.slideNext(0);
        makeupSlide(); 
    }
    function slidePrev() { 
        heroSwiper.slidePrev(0);
        makeupSlide(); 
    }


    // триггеры
    $('.js-slide-next').click(function() {
        $(this).parent().find('.arrow_active').removeClass('arrow_active');
        $(this).parent().find('.bullet_active').removeClass('bullet_active');
        $(this).parent().next().find('.arrow').addClass('arrow_active');
        $(this).parent().next().find('.bullet').addClass('bullet_active');
        breakSlide();
        setTimeout(slideNext, 950);
    });

    $('.js-slide-prev').click(function() {
        $(this).parent().find('.arrow_active').removeClass('arrow_active');
        $(this).parent().find('.bullet_active').removeClass('bullet_active');
        $(this).parent().prev().find('.arrow').addClass('arrow_active')
        $(this).parent().prev().find('.bullet').addClass('bullet_active');
        breakSlide();
        setTimeout(slidePrev, 950);
    });

    $('.js-slide-to-me').click(function(event) {
        var me = $(this);
        var myNum = me.attr('data-slide-to');

        // если нажат текщущий слайд, ничего не происходит
        if(me.hasClass('bullet_active')) {
            return false;
        } else {
            breakSlide();

            $('.bullet').removeClass('bullet_active');
            me.addClass('bullet_active');

            $('.arrow').removeClass('arrow_active');
            me.parent().find($('.arrow')).addClass('arrow_active');

            function slideToMe() {
                heroSwiper.slideTo(myNum, 0);
                makeupSlide();
            }

            setTimeout(slideToMe, 950);
        }
    });


// =========================================================================================
// ПРОМО БЛОК КОНЕЦ 












// прелоадер

var width = 100,
    perfData = window.performance.timing, // The PerformanceTiming interface represents timing-related performance information for the given page.
    EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
    time = parseInt((EstimatedTime/1000)%60)*100;

// Loadbar Animation
$(".loadbar").animate({
  width: width + "%"
}, time);

// Loadbar Glow Animation
$(".glow").animate({
  width: width + "%"
}, time);

// Percentage Increment Animation
var PercentageID = $("#precent"),
        start = 0,
        end = 100,
        durataion = time;
        animateValue(PercentageID, start, end, durataion);
        
function animateValue(id, start, end, duration) {
  
    var range = end - start,
      current = start,
      increment = end > start? 1 : -1,
      stepTime = Math.abs(Math.floor(duration / range)),
      obj = $(id);
    
    var timer = setInterval(function() {
        current += increment;
        $(obj).text(current + "%");
      //obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

// Fading Out Loadbar on Finised
setTimeout(function(){
  $('.overlay_loading').fadeOut(300);
  setTimeout(lookMa, 500);
}, time);









// шторки






// $(window).scroll(function() {
//     var top_of_element = $("#scene1").offset().top;
//     var bottom_of_element = $(".anim-trigger1").offset().top + $(".anim-trigger1").outerHeight();
//     var bottom_of_screen = $(window).scrollTop() + window.innerHeight;
//     var top_of_screen = $(window).scrollTop();

//     if((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
//         console.log('look ma');
//     }
//     else {
//         console.log('not today');
//     }
// });











$(window).scroll(function() {

    $('.trigger').each(function() {
        if( $(this).visible(true) ) {  
            $(this).find('.hideme').addClass('hideme_visible');
            $(this).find('.zero').removeClass('zero_hidden');
            $(this).find('.bg-square').removeClass('bg-square_anim');

            
        }        
    });

    // $('.sbor').each(function() {
    //     if( $(this).visible(true) ) {  
    //         $(this).find('.zero').removeClass('zero_hidden');
    //         $(this).removeClass('sbor');
    //     }        
    // });

});











// УСЛУГИ
// ===================================================================================


});


// ОТЗЫВЫ
// ===================================================================================

    // основной слайдер
    var feedbackSwiper = new Swiper('.swiper-feedback', {
      speed: 800,
        navigation: {
            nextEl: '.swiper-feedback__btn-next',
            prevEl: '.swiper-feedback__btn-prev',
        },
    });


// =========================================================================================
// ОТЗЫВЫ КОНЕЦ 





// ОБУЧЕНИЕ
// ===================================================================================

    var teachingSwiper = new Swiper('.swiper-teaching', {
      speed: 300,
      pagination: {
        clickable: true,
        el: '.teaching-pagination',
      },
    });


// =========================================================================================
// ОБУЧЕНИЕ КОНЕЦ 



// БЛОГ
// ===================================================================================


    if ($( window ).width() > 768) {
        var newsSwiper = new Swiper('.swiper-container-news', {
          slidesPerView: 1,
          spaceBetween: 30,
            touchRatio: 0,
          // pagination: {
          //   clickable: true,
          //   el: '.news-pagination',
          // },
        });
    } else {
        var newsSwiper = new Swiper('.swiper-container-news', {
          slidesPerView: 2,
          spaceBetween: 30,
             breakpoints: {
                568: {
                  slidesPerView: 1,
                  spaceBetween: 10
                }
            }
        });
    }





    var newsAnimationFinished = true;

        // сжать слайд до свайпа
        function shrinkSlide() {
            $('.news-item').addClass('shrink');

            newsAnimationFinished = true;
        }

        // отпустить слайд после свайпа
        function enlargeSlide() {
            $('.news-item').removeClass('shrink');
            newsAnimationFinished = true;
        }

        // свайп влево-справо
        function slideNewsNext() { 
            newsSwiper.slideNext(0);
            setTimeout(enlargeSlide, 400);
        }
        function slideNewsPrev() { 
            newsSwiper.slidePrev(0);
            setTimeout(enlargeSlide, 400);
        }
    

    function newsPrev() {
        newsAnimationFinished = false;
        $('.news-item').addClass('shrink');

        $('.news-pagination__item').removeClass('news-pagination__item_active');
        $('.news-pagination__item').first().addClass('news-pagination__item_active');

        setTimeout(slideNewsPrev, 500);
    }

    function newsNext() {
        newsAnimationFinished = false;
        $('.news-item').addClass('shrink');

        $('.news-pagination__item').removeClass('news-pagination__item_active');
        $('.news-pagination__item').last().addClass('news-pagination__item_active');

        setTimeout(slideNewsNext, 500);
    }


    // триггеры

    $('.js-news-next').click(function(e) {
        console.log(e);
        if (newsAnimationFinished) {
            newsNext();
        } else {
            console.log('animation in progress')
        }
    });

    $('.js-news-prev').click(function() {
        if (newsAnimationFinished) {
            newsPrev();
        } else {
            console.log('animation in progress')
        }
    });


    $('.news-pagination__item').click(function() {
        $('.news-pagination__item').removeClass('news-pagination__item_active');
        $(this).addClass('news-pagination__item_active');
    })





// =========================================================================================
// ОБУЧЕНИЕ КОНЕЦ 

$('.js-floating-label').blur();

$('.js-floating-label').on('focus', function() {
    $(this).parent().find('.signup-form__floating-placeholder').addClass('float');
});

$('.js-floating-label').on('blur', function() {
    // $(this).parent().find('.signup-form__floating-placeholder').removeClass('float');
    if($(this).val()!=""){} else {
        $(this).parent().find('.signup-form__floating-placeholder').removeClass('float');
    };
});



  
   
 
    /* МОДАЛЬНЫЕ ОКНА */
$(document).ready(function(){        
    $(".callback-link").on('click', function(){
        var btn = $(this);                        
        $(".overlay").fadeIn(100, function(){
            $($(btn).data('window')).show();                        
        }); 
       $('#callback-window').show();
        return false;
    });
    
    $("#overlay, .modal .modal-close").on('click', function(){
        $(".overlay, .modal").fadeOut();
    $('.modal').find('input, textarea').val('');
        return false;
    });    
    $('.modal').each(function(){
        var f=$(this).find('.modal-content');
        var t=$(this).find('.modal-content-copy');
        t.html(f.html());
        t.hide();

    });
});
/* МОДАЛЬНЫЕ ОКНА END */






// отправка колбека
$(".modal form").on('submit', function(e){
        e.preventDefault();
        var modal = $(this).parents('.modal');
        var form = $(this);         
        $(this).ajaxSubmit({  
            url: "/ajax.php?file="+$(form).data('file'),
            data: $(form).serialize(),
            dataType: "JSON",
            type: "POST",
            success: function(data){
                if(data.done) {
      $(modal).find('.modal-result').html(data.message);
      $(modal).find('.modal-result').show('fast')
      setTimeout("$('.modal-result').hide('fast')",1500);

      setTimeout("$('.modal').hide()",2000);
                  setTimeout("$('#overlay').hide()",2000);
      var f=$(modal).find('.modal-content-copy');
      var t=$(modal).find('.modal-content');
                  setTimeout("$('.modal').find('input, textarea').val('')",3000);
      
                } else {
                    $(modal).find('.modal-errors').html(data.message);
    $(modal).find('.modal-errors').show('fast')
    setTimeout("$('.modal-errors').hide('fast')",1000);
                    $(modal).children(".spinner").hide();
                }
            },
            complete: function(){
                $(modal).children(".spinner").hide();                     
            }
        });
        return false;
    });




// TABS
// =================================

    $('.section-tabs .section-tabs__tabs ul li').click(function() {
        $(this).parent().children('li.active').removeClass('active');

        $(this).addClass('active');



        var sectionTabs = $(this).parent().parent().parent().parent().children('.section-tabs__content');

        var index = $(this).index();

        var sectionContent = $(this).parent().parent().parent().parent().children('.section-tabs__content');
        console.log(sectionContent);

        // $(this).parent().parent().parent().find('.slide').each(function(i, elem) {
        sectionContent.children('.slide').each(function(i, elem) {
            if (i == index) {
                $(elem).show();
            } else {
                $(elem).hide();
            }
        });
    });



 var li_name = [];
    $(document).ready(function() {
       
        
        $('.section-tabs .section-tabs__tabs').each(function(i, elem) {
            elem.setAttribute('rel', i);
            $('.section-tabs .section-tabs__tabs[rel=' + i + ']').parent().find('.section-tabs__content').attr('rel', i);
            super_sbor(i);
           
        })

            $('#mini_tab ul.cd-accordion-menu .has-children').click(function(e) {
    	
        if ($(this).attr('class') == 'has-children active') {
            $(this).find('.slide_children').slideUp(200);
            $(this).removeClass('active');
        } else {
            $('.slide_children').hide(200);
            console.log("hide me");
            $('#mini_tab ul.cd-accordion-menu .has-children.active').removeClass('active');
            $(this).addClass('active');
            $(this).find('.slide_children').slideDown(200);
        }
   	 });
    });

    function super_sbor(number) {
        $('.section-tabs .section-tabs__tabs[rel=' + number + '] ul li').each(function(i, elem) {
            li_name[i] = elem.innerHTML;
        });

        var content = [];

        $('.section-tabs__content[rel=' + number + '] .slide').each(function(i, elem) {
            content[i] = elem.innerHTML;
        });            
        paint_dom(content, li_name, number);

        content = new Array();
        li_name = new Array();
    }



function paint_dom(content, li_name, number, name_home_dom) {
    if (!name_home_dom) {
        name_home_dom='section-tabs__tabs';
    }
    var structur_dom = '<ul class="cd-accordion-menu">';
    for (var i = 0; i < li_name.length; i++) {

        if (content[i] == undefined) {
            content[i] = ' ';
        }
        structur_dom = structur_dom + '<li rel=' + i + ' class="has-children"><label class="group-1">' + li_name[i] + '</label><div style="display:none;" class="slide_children">' + content[i] + '</div></li>';
    }
    structur_dom = structur_dom + '</ul>';

    if (name_home_dom=='section-tabs__tabs') {
     $('.section-tabs__tabs[rel=' + number + '] ').append("<div id='mini_tab'>" + structur_dom + "</div>");
    }else{

      $('.'+name_home_dom+'').append("<div id='mini_tab'>" + structur_dom + "</div>");
    }
}



// function paint_dom(content, li_name, number, name_home_dom='section-tabs__tabs') {
//     var structur_dom = '<ul class="cd-accordion-menu">';
//     for (var i = 0; i < li_name.length; i++) {

//         if (content[i] == undefined) {
//             content[i] = ' ';
//         }
//         structur_dom = structur_dom + '<li rel=' + i + ' class="has-children"><label class="group-1">' + li_name[i] + '</label><div style="display:none;" class="slide_children">' + content[i] + '</div></li>';
//     }
//     structur_dom = structur_dom + '</ul>';

//     if (name_home_dom=='section-tabs__tabs') {
//      $('.section-tabs__tabs[rel=' + number + '] ').append("<div id='mini_tab'>" + structur_dom + "</div>");
//     }else{

//       $('.'+name_home_dom+'').append("<div id='mini_tab'>" + structur_dom + "</div>");
//     }
// }






$(document).ready(function () {

    // ACCORDEON

    // $('.js-accordeon .js-accordeon__content').slideUp(0);    
    $('.js-accordeon .js-accordeon__label').click(function() {

        // подсвечиваем открытый аккордеон
        if ( $(this).parent().hasClass('opened') ) {
            $(this).parent().removeClass('opened');
            $(this).parent().children('.js-accordeon__content').slideUp(300);
        }
        else {
            $(this).parent().addClass('opened');
            $(this).parent().children('.js-accordeon__content').slideDown(300);
        }
    });



    // DROPDOWN
    $('.dropdown').hover(function() {
        $(this).find('.dropdown__nav').fadeIn(0);
        $(this).addClass('active');
    });

    $('.dropdown').mouseleave(function() {
        $('.dropdown__nav').fadeOut(0);
        $(this).removeClass('active');
    });




    // WOW
    new WOW().init();

    // MENU ACCORDEONS
    $('.nav-full > li .nav-full__rubrika').click(function() {


        var curAccord = $(this).parent().find( $('.nav-full__list'));

        if (curAccord.hasClass('nav-full__list_opened')) {
            curAccord.slideUp(300);
            curAccord.removeClass('nav-full__list_opened');
            console.log('hide acc');
        }
        else {
            curAccord.slideDown(300);
            curAccord.addClass('nav-full__list_opened');
            console.log('show acc');
        }

        // подсвечиваем открытый аккордеон
        // if ( $(this).parent().hasClass('opened') ) {
        //     $(this).parent().removeClass('opened');
        //     $(this).parent().children('.js-accordeon__content').slideUp(300);
        // }
        // else {
        //     $(this).parent().addClass('opened');
        //     $(this).parent().children('.js-accordeon__content').slideDown(300);
        // }
    });

});



function showTags() {
    if( !$('.tagcontainer').hasClass('tagcontainer_opened') ) {
        $('.tagcontainer').addClass('tagcontainer_opened');
            $('.js-overlay').show();
            console.log('1');
    }
    else {
        $('.tagcontainer').removeClass('tagcontainer_opened');
        $('.js-overlay').hide();
        console.log('2');
    }
};

function moveProgress() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("progress").style.width = scrolled + "%";
};


// STICKY HEADER

// $(document).ready(function() {
//     if ($(window).width() <= 667) {
//         $('.page-header').addClass('page-header_sticky');
//     }
// })

function showStickyHeader() {


    if ( window.pageYOffset > 0 ) {
       $('.page-header').addClass('page-header_sticky');
    }
    else {
        $('.page-header').removeClass('page-header_sticky');
    }
};

function showToTopButton() {
    // var heroHeight = $('.hero').height();
    // console.log(heroHeight);

    if ( window.pageYOffset > 500 ) {
       $('.to-top').addClass('to-top_visible')
    }
    else {
        $('.to-top').removeClass('to-top_visible')
    }
}; 

function scrollToTop() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
}; 

function opeFilterCategory() {
    if( $(this).parent().hasClass('filter-category_opened') ) {
        $(this).parent().find('.filter-category__content').slideUp(200);        
        $(this).parent().removeClass('filter-category_opened');        
    } else {
        $(this).parent().find('.filter-category__content').slideDown(200);        
        $(this).parent().addClass('filter-category_opened');        
    }
  
}; 


function openMenu() {
    if ( !$('.menu').hasClass('menu_active') ) {
        $('.menu').addClass('menu_active');
        $('.menu .col-4').addClass('visible'); //анимации появления колонок
        $('body').addClass('no-scroll');
    } else {
        $('.menu').removeClass('menu_active');
        $('.menu .col-4').removeClass('visible');
        $('body').removeClass('no-scroll');
    }
}

// $('#element').visible();

// triggers
$(document).ready(function() {   
    $('.js-menu-controls').click(openMenu);
    // $('.js-menu-close').click(openMenu);
    // $('.menu .nav-full .nav-full__list li a').click(openMenu);
    // $('.js-scroll-to-top').click(scrollToTop);

    // tags
    // $('.overlay_menu').click(openMenu);
    // $('.overlay_modal').click(openModal);
    // $('.js-slide-tagcontainer').click(showTags);

    // $('.filter-category__name').click(opeFilterCategory);


    $(window).scroll(showStickyHeader);  
    // $(window).scroll(showToTopButton);    
});

// close on "esc"
$(document).on( 'keydown', function ( e ) {
    if ( e.keyCode === 27 ) {
        if ( menuIsOpen == true ) {
         openMenu();
         console.log('esc menu close');
        }
    }
});


// BTN-GROUP

// показать карту
function showMap() {
    var isActive = $('.showtype').hasClass('showtype_active-map');
    var btnGroup = $('.showtype');

    if (isActive) {
        console.log('break')
        return false;
    }
    else {
        btnGroup.removeClass('showtype_active-list');
        btnGroup.addClass('showtype_active-map');
        $('.show-list').slideUp(300);
        $('.map').slideDown(300);
        console.log('show map');
    } 
}

// показать список
function showList() {    
    var isActive = $('.showtype').hasClass('showtype_active-list');
    var btnGroup = $('.showtype');

    if (isActive) {
        console.log('break')
        return false;
    }
    else {
        btnGroup.removeClass('showtype_active-map');
        btnGroup.addClass('showtype_active-list');
        $('.map').slideUp(300);
        $('.show-list').slideDown(300);
        console.log('show list');
    } 
}


// triggers
$(document).ready(function() {   
    // $('.showtype_map').click(showMap);    
    // $('.showtype_list').click(showList);    
});


// $(document).ready(function() { 

//     $(window).on('resize scroll', function() {
//         if ( $('.counter').visible() ) {
//            $('.counter').addClass('wow'); 
//            $('.counter').each(function() { 
//                 var $this = $(this), 
//                 countTo = $this.attr('data-count-to'); 

//                 $({ countNum: $this.text()}).animate({ 
//                 countNum: countTo 
//                 }, 

//                 { 
//                     duration: 2000, 
//                     easing:'swing', 
//                         step: function() { 
//                         $this.text(Math.floor(this.countNum)); 
//                         }, 
//                     complete: function() { 
//                         $this.text(this.countNum); 
//                     } 
//                 });
//             });
//         }
//     });
// });







(function($){

    /**
     * Copyright 2012, Digital Fusion
     * Licensed under the MIT license.
     * http://teamdf.com/jquery-plugins/license/
     *
     * @author Sam Sehnert
     * @desc A small plugin that checks whether elements are within
     *       the user visible viewport of a web browser.
     *       only accounts for vertical position, not horizontal.
     */
    var $w=$(window);
    $.fn.visible = function(partial,hidden,direction,container){

        if (this.length < 1)
            return;
    
    // Set direction default to 'both'.
    direction = direction || 'both';
        
        var $t          = this.length > 1 ? this.eq(0) : this,
                        isContained = typeof container !== 'undefined' && container !== null,
                        $c                = isContained ? $(container) : $w,
                        wPosition        = isContained ? $c.position() : 0,
            t           = $t.get(0),
            vpWidth     = $c.outerWidth(),
            vpHeight    = $c.outerHeight(),
            clientSize  = hidden === true ? t.offsetWidth * t.offsetHeight : true;

        if (typeof t.getBoundingClientRect === 'function'){

            // Use this native browser method, if available.
            var rec = t.getBoundingClientRect(),
                tViz = isContained ?
                                                rec.top - wPosition.top >= 0 && rec.top < vpHeight + wPosition.top :
                                                rec.top >= 0 && rec.top < vpHeight,
                bViz = isContained ?
                                                rec.bottom - wPosition.top > 0 && rec.bottom <= vpHeight + wPosition.top :
                                                rec.bottom > 0 && rec.bottom <= vpHeight,
                lViz = isContained ?
                                                rec.left - wPosition.left >= 0 && rec.left < vpWidth + wPosition.left :
                                                rec.left >= 0 && rec.left <  vpWidth,
                rViz = isContained ?
                                                rec.right - wPosition.left > 0  && rec.right < vpWidth + wPosition.left  :
                                                rec.right > 0 && rec.right <= vpWidth,
                vVisible   = partial ? tViz || bViz : tViz && bViz,
                hVisible   = partial ? lViz || rViz : lViz && rViz,
        vVisible = (rec.top < 0 && rec.bottom > vpHeight) ? true : vVisible,
                hVisible = (rec.left < 0 && rec.right > vpWidth) ? true : hVisible;

            if(direction === 'both')
                return clientSize && vVisible && hVisible;
            else if(direction === 'vertical')
                return clientSize && vVisible;
            else if(direction === 'horizontal')
                return clientSize && hVisible;
        } else {

            var viewTop                 = isContained ? 0 : wPosition,
                viewBottom      = viewTop + vpHeight,
                viewLeft        = $c.scrollLeft(),
                viewRight       = viewLeft + vpWidth,
                position          = $t.position(),
                _top            = position.top,
                _bottom         = _top + $t.height(),
                _left           = position.left,
                _right          = _left + $t.width(),
                compareTop      = partial === true ? _bottom : _top,
                compareBottom   = partial === true ? _top : _bottom,
                compareLeft     = partial === true ? _right : _left,
                compareRight    = partial === true ? _left : _right;

            if(direction === 'both')
                return !!clientSize && ((compareBottom <= viewBottom) && (compareTop >= viewTop)) && ((compareRight <= viewRight) && (compareLeft >= viewLeft));
            else if(direction === 'vertical')
                return !!clientSize && ((compareBottom <= viewBottom) && (compareTop >= viewTop));
            else if(direction === 'horizontal')
                return !!clientSize && ((compareRight <= viewRight) && (compareLeft >= viewLeft));
        }
    };

})(jQuery);