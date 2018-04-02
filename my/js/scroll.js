(function(){
    $( document ).ready(function() {
        $('.go-down').click(function(){
            var height = $(window).height();

            $('html, body').animate({scrollTop: (height )}, 'slow');
        });

        $('.go-up').click(function(){

            $('html, body').animate({scrollTop: 0}, 'slow');
        });
        

        $("#menu-toggle").click(function(){
            $(this).add(".main-menu").toggleClass("active");
        });
    
        $(".main-menu__item").each(function(index) {
            $(this).css("transition-delay", 0.3+0.1*index + "s");
        });
    });
})();