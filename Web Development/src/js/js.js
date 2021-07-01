
$('.search').click(function() {
	var disp=$('.header-search').css('display');
	if (disp=='none') {
		$('.header-search').css('display','inline-block');
		$('.search').css('margin-left', '-8px');
		$('.search').css('background-color', '#000');
		$('.search').css('color', '#fff');

	} 
	else {
		$('.header-search').css('display','none');
		$('.search').css('margin-left', '30px');
		$('.search').css('background-color', 'inherit');
		$('.search').css('color', '#000');
	}
});
/* open popup */
$('.btn-now').click(function() {
	var disp=$('.popup-signUp').css('display');
	if (disp=='none') {
		$('.popup-signUp').css('display','block');
	} 
});
$('.box-btn').click(function() {
	var disp=$('.popup-signUp').css('display');
	if (disp=='none') {
		$('.popup-signUp').css('display','block');
	} 
});
/* close popup */
$('.close-popup').click(function() {
	var disp=$('.popup-signUp').css('display');
	if (disp=='block') {
		$('.popup-signUp').css('display','none');
	} 
});

$('.box').hover(function() {
	$(this).addClass('animate__animated animate__pulse')
}, function() {
	$(this).removeClass('animate__animated animate__pulse')
});

$('.box-btn').hover(function() {
	$(this).addClass('animate__animated animate__pulse')
}, function() {
	$(this).removeClass('animate__animated animate__pulse')
});

$('.box-work').hover(function() {
	$(this).addClass('animate__animated animate__pulse')
}, function() {
	$(this).removeClass('animate__animated animate__pulse')
});

$('.about-animate').hover(function() {
	$(this).removeClass('animate__animated animate__fadeIn')
}, function() {
	$(this).addClass('animate__animated animate__fadeIn')
});

/*--- slick slider ---*/
$(document).ready(function(){
  $('.team-content').slick({
  	infinite: true,
  	 slidesToShow: 3,
  	 slidesToScroll: 1,
  	 prevArrow:'<button class="arrow prev"><img src="img/left-chevron.svg" alt=""></button>',
  	 nextArrow:'<button class="arrow next"><img src="img/right-arrow-button.svg" alt=""></button>'
  });
});

/* loader */
$(document).ready(function() {
	$('.loader').css('display','none')
});