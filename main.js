$(document).ready(function(){

    $('.fa-bars').click(function(){
     $(this).toggleClass('fa-times');
     $('.navbar').toggleClass('nav-toggle');
    });

    $(windaw).on('srcoll load',function(){

     $('.fa-bars').removeClass('fa-times');
     $('.navbar').removeClass('nav-toggle');
     
     if($(windaw).scrllTop() > 30){
        $('header').addClass('header-active');
     }else{
        $('header').removeClass('header-active');
     }

     $('section').each(function(){
       var top = $(window).scrollTop();
       var id = $(this).attr('id');
       var height = $(this).height();
       var top = $(this).offset().top - 200;
       if(top >= offset && top < height + offset){
         $('.navbar ul li a').removeClass('active');
         $('.navbar').find('[href="#' + id + '"]').addClass('active');
       }
     });

    });

});