//menu
var num = 0; //number of pixels before modifying styles
jQuery(window).bind('scroll', function () {
    if (jQuery(window).scrollTop() > 0) {
        jQuery('.fusion-header').addClass('header-fixed');
    } else {
        jQuery('.fusion-header').removeClass('header-fixed');
    }
});

/*.header-fixed{
 position:fixed;
 top:0px !important;
 background:#fff;
 width:100%;
 z-index:999;
}*/