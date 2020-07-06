
$(document).ready(function () {
	
	// Поле поиска
	var headerSearch = $(".header__search"),
	headerRequest = $(".header__request"),
	menuLinks = $(".header__info"),
	headerLogo = $(".header__logo svg"),
	headerPhone = $(".header__tel");
	$("#header__search-btn").on("click", function(event) {
        event.preventDefault();

       	headerSearch.toggleClass("hidden");
		headerRequest.toggleClass("hidden");
		menuLinks.toggleClass("hidden");
		headerLogo.toggleClass("hidden");
		headerPhone.toggleClass("hidden");
	});
	$("#header__search-close").on("click", function(event) {
        event.preventDefault();

        headerSearch.toggleClass("hidden");
		headerRequest.toggleClass("hidden");
		menuLinks.toggleClass("hidden");
		headerLogo.toggleClass("hidden");
		headerPhone.toggleClass("hidden");
	});
	
	// Выпадающий каталог
	var browserMinWidth = $(window).width(),
	windowOverflow = $(".window"),
	catalogPopup = $(".catalog-popup"),
	catalogDropdown = $(".catalog-dropdown"),
	catalogFirstLevel = $(".catalog-firstLevel"),
	catalogSecondLevel = $(".catalog-secondLevel"),
	catalogThirdLevel = $(".catalog-thirdLevel"),
	captureTextFirst = $(".capture-text__firstLevel"),
	captureTextSecond = $(".capture-text__secondLevel"),
	captureTextThird = $(".capture-text__thirdLevel");

    if (browserMinWidth < 1200) {
		// Появление каталога при нажатии на кнопку
            $("#HeaderCatalogBTN").on("click", function() {
				
				windowOverflow.toggleClass("window-overflow");
				catalogPopup.toggleClass("active");
				catalogDropdown.toggleClass("active");
				
			});
			
				// Кнопка закрыть каталог
				$(".popup-request__closeBTN #PopupRequestCloseBTN").on("click", function() {
					
					windowOverflow.toggleClass("window-overflow");
					catalogPopup.toggleClass("active");
					catalogDropdown.toggleClass("active");

					catalogSecondLevel.removeClass("active");
					catalogThirdLevel.removeClass("active");
					captureTextFirst.show();
					captureTextSecond.hide();
					captureTextThird.hide();
				});

			catalogSecondLevel.addClass("non-visible");
			catalogThirdLevel.addClass("non-visible");

			// Кнопка назад
			$(".catalog-secondLevel > .catalog-back__btn").on("click", function() {
				event.stopPropagation();
				captureTextFirst.show();
				captureTextSecond.hide();
				captureTextThird.hide();
				catalogFirstLevel.removeClass("non-visible").addClass("active");
				catalogSecondLevel.removeClass("active").addClass("non-visible");
			});
			$(".catalog-thirdLevel > .catalog-back__btn").on("click", function() {
				event.stopPropagation();
				captureTextFirst.hide();
				captureTextSecond.show();
				captureTextThird.hide();
				catalogSecondLevel.removeClass("non-visible").addClass("active");
				catalogThirdLevel.removeClass("active").addClass("non-visible");
			});
			// Первый уровень меню
			if(catalogFirstLevel.children(this).has(".catalog-secondLevel")){
				catalogSecondLevel.parent("li").on("click", function(){
					event.stopPropagation();
					catalogSecondLevel.removeClass("non-visible").addClass("active");
					captureTextFirst.hide();
					captureTextSecond.show();
					
				});
			}else{
				var linkAddress = $(this).attr('href');
				function go(linkAddress){
					location.href=linkAddress;
					}
					
			};
			// Второй уровень меню
			if(catalogSecondLevel.children(this).has(".catalog-thirdLevel")){
				catalogThirdLevel.parent("li").on("click", function(){
					event.stopPropagation();
					catalogSecondLevel.removeClass("active").addClass("non-visible");
					catalogThirdLevel.removeClass("non-visible").addClass("active");
					captureTextSecond.hide();
					captureTextThird.show();
					
				});
			}else{
				var linkAddress = $(this).attr('href');
				function go(linkAddress){
					location.href=linkAddress;
					}
					alert(linkAddress)
			};
			
    } else if (browserMinWidth >= 1200) {
			$(".catalog-firstLevel, .catalog-secondLevel, .catalog-thirdLevel ").addClass("hover-effect");

			$("#HeaderCatalogBTN").on("click", function(event) {
				event.preventDefault();
				$(".header__nav-catalog").toggleClass("active");
				catalogDropdown.toggleClass("active");
				windowOverflow.toggleClass("window-overflow");
			});
	};

	//Выпадающее меню
	var menuPopup = $(".nav-links__popup"),
		menuLinks = $(".header__info");
		// Появление окна меню
		$(".header__navigation-btn").on("click", function(event) {
			event.preventDefault();
			
			windowOverflow.toggleClass("window-overflow");
			menuPopup.toggleClass("active");
			menuLinks.toggleClass("active");
		}); 
		// Скрытие окна меню
		$(".popup-request__closeBTN #NavLinksCloseBTN").on("click", function(event) {
			event.preventDefault();
			
			windowOverflow.toggleClass("window-overflow");
			menuPopup.toggleClass("active");
			menuLinks.toggleClass("active");
		}); 
		// Появление формы заказа
		$(".MenuPopupBtn").on("click", function(event) {
			event.preventDefault();
			
			menuPopup.toggleClass("active");
			menuLinks.toggleClass("active");
			$("#RequestFormWindow").toggleClass("active");
		});
		
	//Слайдер в шапке  
	$('.owl-carousel.header-banner__carousel').owlCarousel({
		dots:false,
		loop:true,
		margin: 0,
		nav:true,
		responsive:{
			0:{
				items: 1,
				stagePadding: 0
			},
			808:{
				items: 1,
				stagePadding: 0
			},
			1200:{
				dots:true,
				items: 1,
				stagePadding: 142
			},
			1620:{
				dots:true,
				items: 1,
				stagePadding: 196
			}

		}
	});

	// Сдвиг полосы слайдера при клике
	var blueLineTop = $('.carousel__nav-block').css('top');
	var blueLineLeft = $('.carousel__nav-block').css('left');
	var greyLineWidth = parseInt($('.owl-nav').css('width'));
					
	const minTop = parseInt(blueLineTop);
	const maxTop = parseInt(blueLineTop) + 36;
	const minLeft = parseInt(blueLineLeft);
	const maxLeft = parseInt(blueLineLeft) + (greyLineWidth * 0.12);
	var slideCount = ($('.owl-item').length) /2 - 1;
	var slideStep = 36/slideCount;
	var slideLeftStep = (greyLineWidth * 0.12) / slideCount;
		
	if (browserMinWidth < 808) {
		//Сдвиг при клике вперед 
		$(".owl-next").on('click', function(){
			if(parseInt($('.carousel__nav-block').css('left')) < (maxLeft -1)){
				$(".carousel__nav-block").animate({ left: "+="+slideLeftStep }, 200); 
			}else{
				$('.carousel__nav-block').animate({	left: "-="+slideLeftStep*slideCount}, 200);
			};
		});
		//Сдвиг при клике назад
		$(".owl-prev").on("click", function(){
			
			if(parseInt($('.carousel__nav-block').css('left')) > minLeft){
				$(".carousel__nav-block").animate({ left: "-="+slideLeftStep }, 200); 
			}else{
				$('.carousel__nav-block').animate({left: "+="+slideLeftStep*slideCount}, 200);
			};
		});
} else if (browserMinWidth >= 808) {
		//Сдвиг при клике вперед 
		$('.owl-next').on('click', function(){
			
			if(parseInt($('.carousel__nav-block').css('top')) < maxTop){
				$(".carousel__nav-block").animate({ top: "+="+slideStep }, 200); 
			}else{
				$('.carousel__nav-block').animate({top: "-="+slideStep*slideCount}, 200);
			};
		});
		//Сдвиг при клике назад
		$(".owl-prev").on("click", function(){
			
			if(parseInt($('.carousel__nav-block').css('top')) > minTop){
				$(".carousel__nav-block").animate({ top: "-="+slideStep }, 200); 
			}else{
				$('.carousel__nav-block').animate({top: "+="+slideStep*slideCount}, 200);
			};
		});
};
	
		

	// Фиксированная боковая навигация
	if (browserMinWidth < 808) {
		$(".content__aside-btn").on("click", function() {
		$("aside").slideToggle(600);
		});
} else if (browserMinWidth > 808) {
	if ($(".content__aside-block").length){
		var $window = $(window);
		var $sidebar = $("aside");
		var $sidebarTop = $sidebar.position().top;
		var $sidebarHeight = $sidebar.height();
		var $mainContent = $('.main-content');
		var asideWidth = parseInt($(".content__aside-block").css("width")) - 20;
		var $mainContentHeight = $mainContent.height();
		var $mainContentTop = $mainContent.position().top;
	  $window.scroll(function(event) {
		$sidebar.addClass("fixed-aside");
		$(".fixed-aside").css({"width": asideWidth});
		var $scrollTop = $window.scrollTop();
		var $topPosition = Math.max(10, $sidebarTop - $scrollTop);
		 
		if ($scrollTop + $sidebarHeight > $mainContentHeight + $mainContentTop) {
		  var $topPosition = Math.min($topPosition, $mainContentHeight 
			+ $mainContentTop - $scrollTop - $sidebarHeight);
		}
	 
		$sidebar.css("top", $topPosition);
	  });
		};
};
if (browserMinWidth < 808) {
	$(".characteristics__table-body.table-button__first").on("click", function() {
		
	$(".characteristics__table-body.one-item__first").slideToggle(600);
	});
	$(".characteristics__table-body.table-button__second").on("click", function() {
	$(".characteristics__table-body.one-item__second").slideToggle(600);
	});
	$(".characteristics__table-body.table-button__third").on("click", function() {
		$(".characteristics__table-body.one-item__third").slideToggle(600);
	});
};
	// Фотогалерея скрытие сокрытие элементов
	$(".photo-gallery__button").on("click", function(event) {
        event.preventDefault();

        $(".photo-gallery__button-view").toggleClass("hidden");
		$(".photo-gallery__button-hide").toggleClass("hidden");
		$(".photo-gallery__body").toggleClass("photo-gallery__body-hidden");
	});
	// Cкролл страницы при нажатии на ссылку
	$("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $(".aside__nav a").removeClass("aside-link__active");
        $this.addClass("aside-link__active");

        $("html, body").animate({
            scrollTop:  blockOffset
        }, 500);
    });
	// Слайдер ссылок на странице каталог товаров
	$('.owl-carousel.catalog__link-carousel').owlCarousel({
		dots:false,
		loop:true,
		margin: 0,
		autoWidth:true,
		nav:true,
		responsive:{
			0:{
				items: 1,
				stagePadding: 0
			},
			768:{
				items: 1,
				stagePadding: 0
			},
			1140:{
				items: 4,
				stagePadding: 0
			}
		}
	});
		//Клик вправо
		$(document).on('click', ".slider-link__next",function(){ 
			var sliderLinks = $(this).parents('.catalog__link-carousel');
			right_carousel(sliderLinks);
			return false;
		});
		//Клик влево
		$(document).on('click',".slider-link__prev",function(){ 
			var sliderLinks = $(this).parents('.catalog__link-carousel');
			left_carousel(sliderLinks);
			return false;
		});
  
	// Popup форма заказа
	// Появление формы при нажатии на кнопку сделать заказ
	$(".RequestBtn").on("click", function(event) {
        event.preventDefault();
		$("#RequestFormWindow").toggleClass("active");
		windowOverflow.toggleClass("window-overflow");
	});
	  
	// Скрытие формы при отправке и появление окна подтверждения
	$("#RequestSubmitBtn").on("click", function(event) {
		event.preventDefault();
		$("#RequestFormWindow").toggleClass("active");
		$(".popup-request__confirm").toggleClass("active");
	});
	// Подтверждение и закрытие Popup
	$("#RequestPopupClose").on("click", function(event) {
		event.preventDefault();
		$(".popup-request__confirm").toggleClass("active");
		windowOverflow.toggleClass("window-overflow");
	});
	// Кнопка закрытия формы
	$("#RequestCloseBtn").on("click", function(event) {
        event.preventDefault();
		$("#RequestFormWindow").toggleClass("active");
		windowOverflow.toggleClass("window-overflow");
	});
	// Поворот стрелки при нажатии на кнопку
	$(".content__aside-btn").on("click", function(event) {
        event.preventDefault();
		$(".content__aside-btn .navigation-btn__arrow").toggleClass("navigation-btn__arrow-rotate");
	});
	
});

