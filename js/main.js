$( document ).ready(function() {
//наши коллекции, смена окон
	$('#click-natural').click(function(){
		$('.collections-window').css('display','none');
		$('.collections-menu p').css({'text-decoration': 'underline', 'background-color': '#fbfbfb'});				
		$('#collections-natural').css('display','inline-flex');		
		$(this).css({'background-color': '#ffb32d', 'color': '#1b1b1b', 'text-decoration': 'none'});
	});
	$('#click-infinity').click(function(){
		$('.collections-window').css('display','none');
		$('.collections-menu p').css({'text-decoration': 'underline', 'background-color': '#fbfbfb'});
		$('#collections-infinity').css('display','inline-flex');
		$(this).css({'background-color': '#ffb32d', 'color': '#1b1b1b', 'text-decoration': 'none'});
	});	
		//$(this).parent().children('.catalog-popup').show();
//скроллинг экрана при нажатии на желтую кнопку
	$(".yellow-circle").click(function(){
        $('html, body').animate({
            scrollTop: $(".collections").offset().top
        }, 1500);
    });

//слайдер раздела популярные товары
    $('.popular-slider').slick({
    	dots: true,
    	infinite: false,
    	slidesToShow: 4,    	
  		slidesToScroll: 4,
  		responsive: [
		    {
		      breakpoint: 1160,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 3,
		      }
		    },
		    {
		      breakpoint: 900,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2,
		      }
		    },
		    {
		      breakpoint: 640,
		      settings: {
		      	arrows: false,
		        slidesToShow: 2,
		        slidesToScroll: 2,
		      }
		    },
		    {
		      breakpoint: 400,
		      settings: {
		        arrows: false,
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        autoplay: true,
  				autoplaySpeed: 2000,
		      }
		    },		   
		  ]
    });

//слайдер в разделе отзывы
    $(".feedbacks-slider").slick({
    	dots: true,
    	infinite: false,
    	slidesToShow: 3,    	
  		slidesToScroll: 3,
  		responsive: [
		    {
		      breakpoint: 1160,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 3,
		      }
		    }, 
		    {
		      breakpoint: 1000,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2,
		      }
		    }, 
		    {
		      breakpoint: 767,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		      }
		    },
		    {
		      breakpoint: 490,
		      settings: {
		      	arrows: false,
		        slidesToShow: 1,
		        slidesToScroll: 1,
		      }
		    },
		    {
		      breakpoint: 400,
		      settings: {
		      	arrows: false,
		        slidesToShow: 1,
		        slidesToScroll: 1,		        
		      }
		    },
		  ]
    });

//показать-скрыть топ меню, размер экрана < 767px
    $('.icon-menu').click(function(){
		$('.top-nav_menu').slideToggle();
	});

//показать-скрыть навигацию по продукции, размер экрана < 576px
	$('.production-nav-btn').click(function(){
		$('.production-nav-list').slideToggle();
	});

//показать-скрыть топ меню, размер экрана < 420px
	$('.mobile-top-nav-menu-btn').click(function(){
		$('.mobile-top-nav-menu').slideToggle();
	});

//показать-скрыть форму поиска
	$('.lens, .search').click(function(){
		$('#header-menu-searching').toggle('slow');
		$('.search').toggleClass('search-active');
	});	

//показать-скрыть форму поиска, размер экрана < 420px
	$('.mobile-top-nav-search').click(function(){
		$('#mobile-top-nav-searching').slideToggle(300);
	});

//развернуть-свернуть корзину
	$('.basket, .how_much').click(function(){
		$('.basket-content').toggle('fast');
	});

//развернуть-свернуть корзину, размер экрана < 420px
	$('.mobile-top-nav-basket').click(function(){
		$('.mobile-top-nav-basket-content').toggle(300);
	});

//слайдер с акциями, размер экрана < 420px
	$(".mobile-actions-slider").slick({
    	dots: true,
    	infinite: false,
    	arrows: false,
    	slidesToShow: 1,    	
  		slidesToScroll: 1,
  		autoplay: true,
  		autoplaySpeed: 2000
    });

//Ползунок выбора цены, стр. каталог
    $( function() {
	    $( "#price-slider-range" ).slider({
	      range: true,
	      min: 4499,
	      max: 54499,
	      values: [0, 30000],
	      slide: function( event, ui ) {
	        $( "#price-input1" ).val(ui.values[ 0 ]);
	        $( "#price-input2" ).val(ui.values[ 1 ]);
	      	}
	    });
  	});
//Изменение местоположения ползунка при вводе данных в первый элемент input
	  $("input#price-input1").change(function(){
	  	var value1=$("input#price-input1").val();
	  	var value2=$("input#price-input2").val();
	      if(parseInt(value1) > parseInt(value2)){
	  		value1 = value2;
	  		$("input#price-input1").val(value1);
	  	}
	  	$("#price-slider-range").slider("values",0,value1);	
	  });	      
// Изменение местоположения ползунка при вводиде данных в второй элемент input 	
	  $("input#price-input2").change(function(){
	  	var value1=$("input#price-input1").val();
	  	var value2=$("input#price-input2").val();

	  	if(parseInt(value1) > parseInt(value2)){
	  		value2 = value1;
	  		$("input#price-input2").val(value2);
	  	}
	  	$("#price-slider-range").slider("values",1,value2);
	  });
// фильтрация ввода в поля
		jQuery('#price-input1, #price-input2').keypress(function(event){
			var key, keyChar;
			if(!event) var event = window.event;
			
			if (event.keyCode) key = event.keyCode;
			else if(event.which) key = event.which;
		
			if(key==null || key==0 || key==8 || key==13 || key==9 || key==46 || key==37 || key==39 ) return true;
			keyChar=String.fromCharCode(key);
			
			if(!/\d/.test(keyChar))	return false;		
		});

//скрыть-показать параметр товара
$('#catalog-toggle-price').click(function(){
	$('.catalog-price-slider').slideToggle(300);
	$(this).toggleClass('rotated');
	});
$('#catalog-toggle-size').click(function(){
	$('.catalog-size>form').slideToggle(300);
	$(this).toggleClass('rotated');
	});
$('#catalog-toggle-hardness').click(function(){
	$('.catalog-hardness>form').slideToggle(300);
	$(this).toggleClass('rotated');
	});
$('#catalog-toggle-brand').click(function(){
	$('.catalog-brand>form').slideToggle(300);
	$(this).toggleClass('rotated');
	});
$('#catalog-toggle-age').click(function(){
	$('.catalog-age>form').slideToggle(300);
	$(this).toggleClass('rotated');
	});
$('#catalog-toggle-spring-block').click(function(){
	$('.catalog-spring-block>form').slideToggle(300);
	$(this).toggleClass('rotated');
	});
$('#catalog-toggle-height').click(function(){
	$('.catalog-hight-slider').slideToggle(300);
	$(this).toggleClass('rotated');
	});
$('#catalog-toggle-maxweight').click(function(){
	$('#catalog-maxweight-slider').slideToggle(300);
	$(this).toggleClass('rotated');
	});
$('#catalog-toggle-filling').click(function(){
	$('.catalog-filling>form').slideToggle(300);
	$(this).toggleClass('rotated');
	});
$('#catalog-toggle-other').click(function(){
	$('.catalog-other>form').slideToggle(300);
	$(this).toggleClass('rotated');
	});

//изменение цвета текста при клике на чекбокс
//появление всплывающего окна
$('.yellow-checkbox').click(function(){
	if ($(this).children('input').is(':checked')){
    	$(this).children('p').css('color', '#ffb32d');
    	$(this).parent().children('.catalog-popup').show();
    	$('.catalog-popup').not($(this).parent().children('.catalog-popup')).hide();
	} else {
   		$(this).children('p').css('color', '#686868');   		
   		$(this).parent().children('.catalog-popup').hide();
	}
	});

//закрытие всплывающего окна
$('.catalog-popup>p').click(function(){
	$(this).parent().hide();
	});

//Ползунок выбора высоты, стр. каталог
    $( function() {
	    $( "#height-slider-range" ).slider({
	      range: true,
	      min: 1,
	      max: 5,
	      values: [1, 3],
	      slide: function( event, ui ) {

	      	}
	    });
  	});

//Ползунок выбора максимального веса, стр. каталог
$( function() {
    var handle = $( "#maxweight-custom-handle" );
    $( "#catalog-maxweight-slider" ).slider({
    	min: 55,
	    max: 155,
      create: function() {
        handle.text( $( this ).slider( "value" ) );
      },
      slide: function( event, ui ) {
        handle.text( ui.value );
      }
    });
  });

//эффект при нажатии на кнопку "сбросить фильтр"
$('.catalog-find-reset').click(function(){ //чекбоксы
	$('.yellow-checkbox>input').removeAttr("checked");
	$('.yellow-checkbox').children('p').css('color', '#686868');
	$('.catalog-popup').hide();

  	$( "#price-slider-range" ).slider({ //ползунок цены
	      range: true,
	      min: 4499,
	      max: 54499,
	      values: [0, 30000],
	      slide: function( event, ui ) {
	        $( "#price-input1" ).val(ui.values[ 0 ]);
	        $( "#price-input2" ).val(ui.values[ 1 ]);
	      	}
	    });
  	$( "#price-input1" ).val('');
  	$( "#price-input2" ).val('');

  	//выбор ширины и высоты
  	$('.catalog-size>form>select[name="width"] option:first').prop('selected', true);
  	$('.catalog-size>form>select[name="length"] option:first').prop('selected', true);
  	
  	$( "#height-slider-range" ).slider({ //ползунок высоты
	      range: true,
	      min: 1,
	      max: 5,
	      values: [1, 3],
	      slide: function( event, ui ) {
	      	}
	    });

  	//ползунок выбора максимального веса
    var handle = $( "#maxweight-custom-handle" ); 
    $( "#catalog-maxweight-slider" ).slider({
    	min: 55,
	    max: 155,
	    values: [55],
      create: function() {
        handle.text( $( this ).slider( "value" ) );
      },
      slide: function( event, ui ) {
        handle.text( ui.value );
      }
    });
  	handle.text('55' );  	
	});

//слайдер аксессуаров, стр. Карточка товара
$('.item-accessories-slider').slick({
    	dots: false,
    	infinite: false,
    	slidesToShow: 4,    	
  		slidesToScroll: 4,
  		responsive: [
		    {
		      breakpoint: 1180,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 3,
		      }
		    }, 
		    {
		      breakpoint: 890,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2,
		      }
		    }, 
		    {
		      breakpoint: 670,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2,
		        arrows: false,
		        dots: true,
		      }
		    },
		    {
		      breakpoint: 520,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        arrows: false,
		        dots: true,
		      }
		    },

		  ] 		
    });

//последовательные вклакди, отзывы, длина желтой линии
LineLength5=$("#voices_5").html()/$("#voices_all").html()*100;
$('#line_5').css('background-position-x',100-LineLength5+'%');
LineLength4=$("#voices_4").html()/$("#voices_all").html()*100;
$('#line_4').css('background-position-x',100-LineLength4+'%');
LineLength3=$("#voices_3").html()/$("#voices_all").html()*100;
$('#line_3').css('background-position-x',100-LineLength3+'%');
LineLength2=$("#voices_2").html()/$("#voices_all").html()*100;
$('#line_2').css('background-position-x',100-LineLength2+'%');
LineLength1=$("#voices_1").html()/$("#voices_all").html()*100;
$('#line_1').css('background-position-x',100-LineLength1+'%');

//слайдер других товаров, стр. Карточка товара
$('.item-other-slider').slick({
    	dots: false,
    	infinite: false,
    	slidesToShow: 3,    	
  		slidesToScroll: 3, 
  		responsive: [
		    {
		      breakpoint: 1300,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2,
		      }
		    }, 
		    {
		      breakpoint: 920,
		      settings: {
		      	dots: true,
		      	arrows: false,
		        slidesToShow: 2,
		        slidesToScroll: 2,
		      }
		    }, 
		    {
		      breakpoint: 800,
		      settings: {
		      	dots: false,
		      	arrows: true,
		        slidesToShow: 1,
		        slidesToScroll: 1,
		      }
		    },
		    {
		      breakpoint: 530,
		      settings: {
		      	dots: true,
		      	arrows: false,
		        slidesToShow: 1,
		        slidesToScroll: 1,
		      }
		    }, 		 	    

		  ] 					
    });

//изменение цвета текста при клике на чекбокс
//появление всплывающего окна
$('.yellow-checkbox').click(function(){
	if ($(this).children('input').is(':checked')){    	
    	$(this).children('p[class="item-subscribe-check"]').children('a').css('color', '#ffb32d');    	
	} else {   		
   		$(this).children('p[class="item-subscribe-check"]').css('color', '#1b1b1b');
   		$(this).children('p[class="item-subscribe-check"]').children('a').css('color', '#1b1b1b');
	}
	});


//слайдер фотографий товара, стр. Карточка товара
$('.item-mattressImg-grayBlocks').slick({
    	dots: false,
    	arrows: false,
    	slidesToShow: 3,
  		slidesToScroll: 1,  		
    });

//модальное окно при клике на кнопку YouTube
$('.review>span').click(function(){
	$('.review').hide(500);
	});
$('.catalog-item-youtube').click(function(){
	$('.review').show(500);
	});

//модальное окно при клике на кнопку Быстрый заказ
$('.order-popup-window>span').click(function(){
	$('.order-popup').hide(500);
	});
$('#order-button').click(function(){
	$('.order-popup').show(500);
	});

$('.order-popup-window>span').click(function(){
	$('.order-popup').hide(500);
	});
$('.catalog-item-order').click(function(){
	$('.order-popup').show(500);
	});

//модальной окно Бысрый заказ. при клике на чекбокс цвет текста не меняется
$('.yellow-checkbox').click(function(){
	if ($(this).children('input').is(':checked')){    	
    	$(this).children('p[class="order-popup-check"]').css('color', '#1b1b1b');
    	$(this).children('p[class="order-popup-check"]').children('a').css('color', '#1b1b1b');  	
	} else {   		
   		$(this).children('p[class="order-popup-check"]').css('color', '#1b1b1b');
   		$(this).children('p[class="order-popup-check"]').children('a').css('color', '#1b1b1b');
	}
	});


});


	