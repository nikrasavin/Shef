$('.questions__body').css({'display':'none'});  
$('.questions__header').click(function(){
   $(this).next('.questions__body').slideToggle(400)
   $(this).children('.plus-transform').toggleClass('plus-active');
});

