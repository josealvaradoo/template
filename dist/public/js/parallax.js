jQuery(document).ready(function(){
    jQuery(window).scroll(function(){
        var window__bar     = jQuery(window).scrollTop();
        var position        = window__bar*0.15;
        jQuery('.parallax').css({
            'background-position': '0 -' + position + 'px' 
        });
    });
})();