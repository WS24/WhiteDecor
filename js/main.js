"use strict";
function hide_preloader() {
	rotate = 0;
	$("#preloader").fadeOut(1e3);
	//$.stellar("refresh");
}
function anim() {
	$("#preloader_image").animate({left: "-1400px"}, 8e3, function () {
		$("#preloader_image").animate({left: "0px"}, 5e3);
		if (rotate == 1) {
			anim()
		}
	})
}
function wresize() {
	var e = $("body").height();
	$("#banner-slide-img .item").height(e)
}
var rotate = 1;
var screen_ht = $(window).height();
var preloader_ht = 10;
var padding = screen_ht / 4 - preloader_ht;
$("#preloader").css("padding-top", padding + "px");
anim();

function getPrefooterOffset() {
  var height = $(window).height();
  $('#prefooter').attr('data-offset', height);
}

function isScrolledIntoView(elem)
{
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();

  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();

  return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

function getSections() {

  var sections = [];

  // Find all links in menu
  $('.block-menu').find('a[href^="#"]').each(function() {

    // Add sections
    var id = $(this).attr('href');
    var section = $(id);
    if (section.length > 0) {
      sections.push(section);
    } else {
      console.warn('Element ' + id + ' does not exist');
    }
  });
  return sections;
}

function getCurSection() {
  var top = $(window).scrollTop();
  var current = null;
  var sections = getSections();
  $.each(sections, function() {
    var position = this.position();

/*
    if (typeof this[0].dataset.offset !== "undefined") {
      var offset = this[0].dataset.offset;
    } else {
      var offset = 72;
    }
*/

    var bottomReviews = $(document).height() - $(window).height() - $('#footer').height() + 72 + $('#reviews').height();
    var topReviews = bottomReviews - $('#reviews').height();

    if(top >= topReviews && top <= bottomReviews) {
      current = document.getElementById('reviews');
    } else {
      var offset = 72;
      var start = position.top;
      var end = start + this.outerHeight();

      top = top + parseInt(offset);

      if (top >= start && top <= end) {
        current = this;
      }
    }
  });

  var $curMenuItem = $('.block-menu a[href="#'+$(current).attr('id')+'"]');
  if(!$curMenuItem.hasClass('current')) {
    $('.block-menu a').removeClass('current');
    $curMenuItem.addClass('current');
  }
}

$(window).scroll(function () {
  getCurSection();
});

function scrollMenu() {

  $('body.home .logo').click(function(){
    $('html, body').animate({
      scrollTop: '0px'
    }, 1000);
    return false;
  });

  $('.block-menu ul li a').click(function(){

    $('.block-menu ul li a').removeClass('current');
    $(this).addClass('current');

    var $target = $($(this).attr('href'));
    if( $target.length ) {
      if($(this).attr('href') == '#reviews') {
          $('html, body').animate({
            scrollTop: parseInt($(document).height()) - $(window).height() - $('#footer').height() + 'px'
          }, 1000);
      } else {
          $('html, body').animate({
            scrollTop: parseInt($target.offset().top) - 72 + 'px'
          }, 1000);
      }
    }
    return false;
  });
}

$(window).resize(function () {
  getPrefooterOffset();
	wresize();
});
$(document).ready(function ($) {

  getPrefooterOffset();
  
  
  if(device.windowsTablet() || device.windowsPhone()  ) {
		
	} else {
		var nice = $("html").niceScroll({boxzoom: true});  // The document page (body)
	}
	


	$('.slider').glide({
		autoplay: 5000,
		arrows: true,
		hoverpause: true,
		nav: false,
		keyboard: true,
		touchDistance: 60,
		animationDuration: 3000
	});

	/*var sticky = $(".header-top");
	var origOffsetY = sticky.offset().top + 1;
	$(window).scroll(function () {
		$(window).scrollTop() > origOffsetY ? $(".header-top").addClass("head-effect") : $(".header-top").removeClass("head-effect")
	});*/

	var sticky = $(".header-top");
	var origOffsetY = 10;
  $(window).scrollTop() > origOffsetY ? $(".header-top").addClass("head-effect") : $(".header-top").removeClass("head-effect")
	$(window).scroll(function () {
		$(window).scrollTop() > origOffsetY ? $(".header-top").addClass("head-effect") : $(".header-top").removeClass("head-effect")
	});

	/*$('.menu').singlePageNav();*/

/*  $('.menu').singlePageNav({
    offset: 72
  });*/
  scrollMenu();
	/*$('.menu').singlePageNav({
      offset: 72
  });*/







	new WOW().init();

//	var owl = $("#owl-demo");

//	owl.owlCarousel({
//		autoPlay: 12000,
//		slideSpeed: 1e3,
//		navigation: false,
//		pagination: false,
//		singleItem: true,
//		transitionStyle: "fadeUpTop"
//	});
  
  var owl1 = $(".block2.left.div2");
	owl1.owlCarousel({
		//autoPlay: 7500,
    autoPlay: false,
		slideSpeed: 1e3,
		navigation: false,
		pagination: true,
		singleItem: true,
    lazyLoad: true,
		transitionStyle: "fade"
	});
  $(".block2.left.div2").hover(
    function(){
      owl1.trigger('owl.play',1500);
    },
    function(){
      owl1.trigger('owl.stop');
    }
  );
  
  var owl2 = $(".block2.left.div1");
	owl2.owlCarousel({
		//autoPlay: 4500,
		autoPlay: false,
		slideSpeed: 1e3,
		navigation: false,
		pagination: true,
		singleItem: true,
    lazyLoad: true,
		transitionStyle: "fade"
	});
  $(".block2.left.div1").hover(
    function(){
      owl2.trigger('owl.play',1500);
    },
    function(){
      owl2.trigger('owl.stop');
    }
  );
    var owl4 = $(".block2.left.div4");
	owl4.owlCarousel({
		//autoPlay: 4500,
		autoPlay: false,
		slideSpeed: 1e3,
		navigation: false,
		pagination: true,
		singleItem: true,
    lazyLoad: true,
		transitionStyle: "fade"
	});
  $(".block2.left.div4").hover(
    function(){
      owl4.trigger('owl.play',1500);
    },
    function(){
      owl4.trigger('owl.stop');
    }
  );
    var owl5 = $(".block2.left.div5");
	owl5.owlCarousel({
		//autoPlay: 4500,
		autoPlay: false,
		slideSpeed: 1e3,
		navigation: false,
		pagination: true,
		singleItem: true,
    lazyLoad: true,
		transitionStyle: "fade"
	});
  $(".block2.left.div5").hover(
    function(){
      owl5.trigger('owl.play',1500);
    },
    function(){
      owl5.trigger('owl.stop');
    }
  );
  
  var owl3 = $(".block2.left.div3");
	owl3.owlCarousel({
		//autoPlay: 6000,
		autoPlay: false,
		slideSpeed: 1e3,
		navigation: false,
		pagination: true,
		singleItem: true,
    lazyLoad: true,
		transitionStyle: "fade"
	});
  $(".block2.left.div3").hover(
    function(){
      owl3.trigger('owl.play',1500);
    },
    function(){
      owl3.trigger('owl.stop');
    }
  );

/* 	$("a.btn.fancybox").on('click', function(){
    //var element = $(this);
    var razdel = $(this).parent().parent().find('h2').text();
    $.fancybox({
      beforeShow: function() {
        console.log($('.fancybox-inner input[name="razdel"]'));
        //$('.fancybox-inner').find("[name='razdel']").val(razdel);
        //$(element).parents('form').find("[name='razdel']").val(razdel);
        //console.log(razdel);
        //console.log($("#form-popup input[name='razdel']"));
      },
      onCancel: function() {
        //$('.fancybox-inner #razdel').val("");
        //$(".fancybox-inner").find("[name='razdel']").val("");
      }
    });
  
  }); */
  
  $("a.btn.fancybox, a.white-button.header__order").fancybox({
    beforeShow: function() {
      if($('h1.inner-page-title').length) {
        var razdel = $('h1.inner-page-title').html();
        $('.fancybox-inner input[name="razdel"]').val(razdel);
      }
      $('.fancybox-inner button').removeClass('success');
      $('.fancybox-inner button').text('Отправить');
    },
      onCancel: function() {
        $('.fancybox-inner input[name="razdel"]').val("");
      }
  });
  
	$(".fancybox").fancybox();

  $('form#p-form').validate({
    rules: {
      'name': {
        required: true
      },
      'phone': {
        required: true
      },
      'email': {
        required: true
      }
    },
    messages: {
      name: "Введите ваше имя!",
      phone: "Введите ваш телефон!",
      email: "Введите ваш email!"
    }
  });

  $('form#t-form').validate({
    rules: {
      'name': {
        required: true
      },
      'phone': {
        required: true
      },
      'email': {
        required: true
      }
    },
    messages: {
      name: "Введите ваше имя!",
      phone: "Введите ваш телефон!",
      email: "Введите ваш email!"
    }
  });


  $('button').on('click touch', function(){
    var $btn = $(this);
    var id = $(this).parents('form').attr('id');

    if($('#'+id).valid()) {
      $(this).parents('form').ajaxForm({
        success: function(data) {
          $btn.text('Отправлено!');
          $btn.addClass('success');
        }
      });
    }

  });


});