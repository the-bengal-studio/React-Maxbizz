(function($) {
  "use strict";
    /* ========================================== 
	Header Mobile
	========================================== */
	// mobile_mainmenu create span
	var element = $('#mmenu-toggle'),
          mmenu   = $('#mmenu-wrapper');

      function mmenu_handler() {
          var isActive = !element.hasClass('active');

          element.toggleClass('active', isActive);
          mmenu.toggleClass('mmenu-open', isActive);
          $('body').toggleClass('mmenu-active', isActive);
          return false;
      }

      $('#mmenu-toggle, .mmenu-close, .mmenu-overlay').on('click', mmenu_handler);

      $('.mmenu-wrapper li:has(ul)').prepend('<span class="arrow"><i class="ot-flaticon-next"></i></span>');
      $(".mmenu-wrapper .mobile_mainmenu > li span.arrow").on('click',function() {
          $(this).parent().find("> ul").stop(true, true).slideToggle()
          $(this).toggleClass( "active" ); 
      });

})(jQuery);