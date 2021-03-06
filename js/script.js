// $(function() {
//   $('a[href*="#":not([href="#"])').click(function() {
//     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
//       var target = $(this.hash);
//       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//       if (target.length) {
//         $('html, body').animate({
//           scrollTop: target.offset().top
//         }, 1000);
//         return false;
//       }
//     }
//   });
// });

$(function () {
  
  //tabindex bug fix
  $("a[href^='#']").not("a[href='#']").click(function() {
      $("#"+$(this).attr("href").slice(1)+"").focus();
   });

  //  flickity
$('.container-products-list').flickity({
  cellAlign: 'left',
  wrapAround: true,
  groupCells: true,
  freeScroll: true,
});


  $('.my-form').on('submit', function () {
    event.preventDefault();
    
    if ( $('#my-test-input').val()) {
        alert('Thanks for subscribing!');
        } else {
        alert('Please enter something.')
        }
  });


$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { 
            return false;
          } else {
            $target.attr('tabindex','-1'); 
            $target.focus();
          };
        });
      }
    }
  });
})