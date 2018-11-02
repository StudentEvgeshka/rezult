/*первая каруселька*/
$(document).ready(function() {
  // Owl Carousel
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    	loop: true,
    	nav: true,
    	items:             4,
		// 4 блоков на компьютерах (экран от 1200px до 901px)
		itemsDesktop:      [900, 3],
		// 2 блоков на компьютерах (экран от 1400px до 901px)
		itemsDesktopSmall: [700, 2],
		// 1 элемента на планшетах (экран от 700 до 480 пикселей)
		itemsTablet:       [500, 1],
		// Настройки для телефона отключены, в этом случае будут
	// использованы настройки планшета
		itemsMobile:       false
  					});
 // Назад
// При клике на "Назад"
$("#js-prev").click(function () {

	// Запускаем перемотку влево
	owl.trigger('owl.prev');

	return false;
});

// Вперед
// При клике на "Вперед"
$('#js-next').click(function () {

	// Запускаем перемотку вправо
	owl.trigger('owl.next');

	return false;
});
});
/*вторая*/
$(document).ready(function() {
  // Owl Carousel
  var owl = $(".owl-carousel2");
  owl.owlCarousel({
    	loop: true,
    	nav: true,
    	items:             5,
		// 4 блоков на компьютерах (экран от 1200px до 901px)
		itemsDesktop:      [900, 4],
		// 2 блоков на компьютерах (экран от 1400px до 901px)
		itemsDesktopSmall: [700, 3],
		// 1 элемента на планшетах (экран от 700 до 480 пикселей)
		itemsTablet:       [500, 2],
		// Настройки для телефона отключены, в этом случае будут
	// использованы настройки планшета
		itemsMobile:       false
  					});
 // Назад
// При клике на "Назад"
$("#k-prev").click(function () {

	// Запускаем перемотку влево
	owl.trigger('owl.prev');

	return false;
});

// Вперед
// При клике на "Вперед"
$('#k-next').click(function () {

	// Запускаем перемотку вправо
	owl.trigger('owl.next');

	return false;
});
});