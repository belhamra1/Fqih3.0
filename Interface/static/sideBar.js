/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
$(document).ready(function () {
   function openNav() {
      mWidth = 520;
      if ($(window).width() > mWidth) {
         document.getElementById("mySidebar").style.width = "300px";
      } else {
         document.getElementById("mySidebar").style.width = "100%";
      }
      i = 2;
      /*  if ($(window).width() > mWidth) {
         $("#main").addClass("shoppingCartClass");
      } */
   }

   /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
   function closeNav() {
      document.getElementById("mySidebar").style.width = "0";
      $(".drop-list").hide();
      mWidth = 520;
      /*   if ($(window).width() > mWidth) {
         $("#main").removeClass("shoppingCartClass");
      } */
   }
   $(".openbtn").click(function (e) {
      e.preventDefault();
      openNav();
   });
   $(".closebtn").click(function (e) {
      e.preventDefault();
      closeNav();
   });
   $(document).scroll(function () {
      closeNav();
   });

   /* drop link and drop menu */
   /*    $(".drop-link").hover(
      function () {
         // over
         $(this).next().slideDown();
      },
      function () {
         // out
      }
   ); */
   var delay = 200,
      setTimeoutConst;
   $(".drop-link").hover(
      function () {
         resentLink = $(this);
         setTimeoutConst = setTimeout(function () {
            $(resentLink).next().slideDown();
         }, delay);
      },
      function () {
         clearTimeout(setTimeoutConst);
      }
   );
});
