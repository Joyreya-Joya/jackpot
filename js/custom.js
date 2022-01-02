$(function(){

    //  Sticky Header  
    $(window).scroll(function(){
      var scrolling = $(this).scrollTop();
      
      if(scrolling > 200){
          $('.navbar').addClass('bg');
      }
      else {
           $('.navbar').removeClass('bg');
      }
      }); 

      //game item slider
      $('.game_slider').slick({
        
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed:500,
        arrows: false,
        // prevArrow:'<i class="fa fa-arrow-circle-left saleprev"></i>',
        // nextArrow:'<i class="fa fa-arrow-circle-right salenext"></i>',
        responsive: [
          
    
            {  
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
            
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        
        ]
      });
    
      //game item slider

      
      
        //counter up
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
          //counter up

          // FAQ ques and Ans up down
          // ------------1------
          $('.faq_icon_one').click(function(){
            $('.faq_ans_one').slideToggle();
            $('.fa_icon_down_one').toggle();
            $('.fa_icon_up_one').toggle();
          });

          // ------------2------
          $('.faq_icon_two').click(function(){
            $('.faq_ans_two').slideToggle();
            $('.fa_icon_down_two').toggle();
            $('.fa_icon_up_two').toggle();
          });

          // ------------3------
          $('.faq_icon_three').click(function(){
            $('.faq_ans_three').slideToggle();
            $('.fa_icon_down_three').toggle();
            $('.fa_icon_up_three').toggle();
          });

          // ------------4------
          $('.faq_icon_four').click(function(){
            $('.faq_ans_four').slideToggle();
            $('.fa_icon_down_four').toggle();
            $('.fa_icon_up_four').toggle();
          });
          // FAQ ques and Ans up down

          // FAQ  border
          // ----------------1-----
          $(".fa_icon_down_one").click(function(){

            $(".faq_body_one").addClass('faq_border_active');
        
          });

          $(".fa_icon_up_one").click(function(){

            $(".faq_body_one").removeClass('faq_border_active');
        
          });
  
          // ----------------2-----
          $(".fa_icon_down_two").click(function(){

            $(".faq_body_two").addClass('faq_border_active');
        
          });

          $(".fa_icon_up_two").click(function(){

            $(".faq_body_two").removeClass('faq_border_active');
        
          });
      
          // ----------------3-----
          $(".fa_icon_down_three").click(function(){

            $(".faq_body_three").addClass('faq_border_active');
        
          });

          $(".fa_icon_up_three").click(function(){

            $(".faq_body_three").removeClass('faq_border_active');
        
          });
     
          // ----------------4-----
          $(".fa_icon_down_four").click(function(){

            $(".faq_body_four").addClass('faq_border_active');
        
          });

          $(".fa_icon_up_four").click(function(){

            $(".faq_body_four").removeClass('faq_border_active');
        
          });
          // ----------------4-----
          //===== venobox======//

    $(document).ready(function(){
      $('.venobox').venobox(); 
  });
          
          // FAQ  border

}); 