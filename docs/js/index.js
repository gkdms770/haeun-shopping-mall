$(function(){

    var swiper_1 = new Swiper('#visual .swiper', {
        loop: true,
        pagination: {
          el: '#visual .swiper-pagination',
        },
        navigation: {
          nextEl: '#visual .swiper-button-next',
          prevEl: '#visual .swiper-button-prev',
        },
    });
     
      $('#our_item .tab_menu>li').on('click', function(e){
        e.preventDefault();
          var i = $(this).index(); // 클릭한 애가 몇번째에 있는지?
      
          $('#our_item .tab_panel>li').fadeOut(300).eq(i).fadeIn(300);
          
      });
      $('#our_item .tab_menu>li').first().trigger('click');

      var win_w = $(window).width();
      var pos = [];
      var tmp_tag = '';
      var index = 0;
      var base_line = -300;
      var is_run = true; 
  
      function save_section_offset(){
          pos = [];
          $('section').each(function(){
              pos.push( $(this).offset().top );
          }); 
          pos[0] = 0 ;
      }
      
  
});

