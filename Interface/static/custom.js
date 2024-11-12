(function ($) {
   "use strict";

   $(".single_gallery_part, .img-pop-up").magnificPopup({
      type: "image",
      gallery: {
         enabled: true,
      },
   });

   var review = $(".sliding");
   if (review.length) {
      review.owlCarousel({
         items: 3,
         loop: true,
         dots: true,
         autoplay: true,
         autoplayHoverPause: true,
         autoplayTimeout: 10000,
         nav: false,
         margin: 30,
         responsiveClass: true,
         responsive: {
            0: {
               items: 1,
            },
            576: {
               items: 2,
            },
            991: {
               items: 3,
            },
         },
      });
   }
   //------- Mailchimp js --------//
   function mailChimp() {
      $("#mc_embed_signup").find("form").ajaxChimp();
   }
   mailChimp();

   $(document).ready(function () {
      $("select").niceSelect();
   });
   // // menu fixed js code
   $(window).scroll(function () {
      var window_top = $(window).scrollTop() + 1;
      if (window_top > 50) {
         $(".main_menu").addClass("menu_fixed animated fadeInDown");
      } else {
         $(".main_menu").removeClass("menu_fixed animated fadeInDown");
      }
   });

   $(".counter").counterUp({
      time: 2000,
   });
})(jQuery);
var offcanvasMenu = function () {
   $("#page").prepend('<div id="fh5co-offcanvas" />');
   $("#page").prepend(
      '<a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle fh5co-nav-white"><i></i></a>'
   );
   var clone1 = $(".menu-1 > ul").clone();
   $("#fh5co-offcanvas").append(clone1);
   var clone2 = $(".menu-2 > ul").clone();
   $("#fh5co-offcanvas").append(clone2);

   $("#fh5co-offcanvas .has-dropdown").addClass("offcanvas-has-dropdown");
   $("#fh5co-offcanvas").find("li").removeClass("has-dropdown");

   // Hover dropdown menu on mobile
   $(".offcanvas-has-dropdown")
      .mouseenter(function () {
         var $this = $(this);

         $this.addClass("active").find("ul").slideDown(500, "easeOutExpo");
      })
      .mouseleave(function () {
         var $this = $(this);
         $this.removeClass("active").find("ul").slideUp(500, "easeOutExpo");
      });

   $(window).resize(function () {
      if ($("body").hasClass("offcanvas")) {
         $("body").removeClass("offcanvas");
         $(".js-fh5co-nav-toggle").removeClass("active");
      }
   });
};
