$(document).ready(function() {
    //
    // Auto heihgt========================
    // 
    var videoBlockHeight = $('.video-block').height(); 
    $('.news-block').css('height', videoBlockHeight+'px');
    // on resize
    $( window ).resize(function() {
        var videoBlockHeight = $('.video-block').height(); 
        $('.news-block').css('height', videoBlockHeight+'px');
    });


    //
    // Owl Carousel 1 ========================
    // 
    var owl1 = $(".owl-carousel").owlCarousel({
        loop: true,
        nav: true,
        items: 4,
        // 4 блоков на компьютерах (экран от 1200px до 901px)
        itemsDesktop: [900, 3],
        // 2 блоков на компьютерах (экран от 1400px до 901px)
        itemsDesktopSmall: [700, 2],
        // 1 элемента на планшетах (экран от 700 до 480 пикселей)
        itemsTablet: [500, 1],
        // Настройки для телефона отключены, в этом случае будут
        // использованы настройки планшета
        itemsMobile: false
    });

    // Назад
    // При клике на "Назад"
    $("#js-prev").click(function() {
        // Запускаем перемотку влево
        owl1.trigger('owl.prev');
        return false;
    });

    // Вперед
    // При клике на "Вперед"
    $('#js-next').click(function() {
        // Запускаем перемотку вправо
        owl1.trigger('owl.next');
        return false;
    });


    //
    // Owl Carousel 2 ========================
    // 
    var owl2 = $(".owl-carousel2").owlCarousel({
        loop: true,
        nav: true,
        items: 5,
        // 4 блоков на компьютерах (экран от 1200px до 901px)
        itemsDesktop: [900, 4],
        // 2 блоков на компьютерах (экран от 1400px до 901px)
        itemsDesktopSmall: [700, 3],
        // 1 элемента на планшетах (экран от 700 до 480 пикселей)
        itemsTablet: [500, 2],
        // Настройки для телефона отключены, в этом случае будут
        // использованы настройки планшета
        itemsMobile: false
    });

    // Назад
    // При клике на "Назад"
    $("#k-prev").click(function() {
        // Запускаем перемотку влево
        owl2.trigger('owl.prev');
        return false;
    });

    // Вперед
    // При клике на "Вперед"
    $('#k-next').click(function() {
        // Запускаем перемотку вправо
        owl2.trigger('owl.next');
        return false;
    });
});