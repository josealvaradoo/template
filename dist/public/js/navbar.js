jQuery(document).ready(function(){
    var navbar      = jQuery('.navbar');
    var nav         = jQuery('.navbar .nav');
    var nav__toggle = jQuery('.nav-toggle');
    var status      = false;

    nav__toggle.click(function(){
        if (status == false) {
            status = true;
            navbar.addClass("active");
            nav.animate({ 'height': '500px' }, 1000);
        } else {
            status = false;
            navbar.removeClass("active");
            nav.css({ 'height': 0 });
        }
    });
});