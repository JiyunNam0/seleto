$(document).ready(function () {

   // 스크롤 다운시 헤더 숨김 올리면 헤더 다시 나타남
   var idheader = $('#header');
   var header = $('.header');

   var headerMoving = function( direction ) {
      if ( direction === 'up') {
         idheader.removeClass('scrollDown');
         header.removeClass('scrollDown');
      } else if ( direction === "down") {
         idheader.addClass('scrollDown');
         header.addClass('scrollDown');
      }
   };

   var prevScrollTop = 0;

   $(window).scroll(function() {
      var nextScrollTop = $(this).scrollTop();
      let value = nextScrollTop;

      console.log(prevScrollTop);

      if (nextScrollTop > prevScrollTop && value > 0) {
         headerMoving("down");
      }else if (nextScrollTop < prevScrollTop || value <= 1) {
         headerMoving("up");
      }
      prevScrollTop = nextScrollTop;
   });

   //헤더 마우스 오버시 풀다운메뉴
   var HiddenHeader = $('.header_hidden');
   var MenuList = $('.menu li');

   for (let menu of MenuList) {
      menu.addEventListener("mousemove", function() {
         HiddenHeader.addClass("active");
      });
   }
   
   HiddenHeader.on("mouseleave", function() {
      HiddenHeader.removeClass("active");
   })

   // 마우스가 스크롤밖에 나가면 히든메뉴 인액티브
   document.addEventListener("mouseleave", (event) => {
      if(
         event.clientY <= 0 ||
         event.clientX <= 0 ||
         event.clientX >= window.innerWidth ||
         event.clientY >= window.innerHeight
      ) {
         HiddenHeader.removeClass("active");
      }
   });

   // 모바일 메뉴 액티브
   
   let mobileMenuInner = $('.mobile_menu_inner');
   let mainBlur = $('#main');

   $('.hamburger_button').on("click", function() {
      mobileMenuInner.toggleClass("open");
      mainBlur.toggleClass("blur");
   })

   $('.closeBtn').on("click", function() {
      mobileMenuInner.removeClass("open");
      mainBlur.removeClass("blur");
   })

   // 모바일 메뉴안에 하위메뉴

   $('.hidden_menu_list').on("click", function() {
      let categoryList = $(this).next('.category_list');
      categoryList.toggleClass('is_show');
   })
   

   // 셀렉토 메뉴 클릭이벤트
   $(".section_selection_list button").on("click", function() {
      let category = $(this).text();
      let index = $(this).index();

      //카테고리 스타일
      $(this).addClass('is_active').siblings().removeClass('is_active');

      //이미지 플립 효과
      $('.selected_menu_img .bg_item img').css({
         'transition': 'transform 0.5s ease',
         'transform': 'rotateY(180deg)'
      });

      // 카테고리 타이틀 및 설명
      $('.category_title .title').text(category);
      $('.category_title .desc').eq(index).addClass('is_show').siblings().removeClass('is_show');
      $('.selected_category_item .category_item').eq(index).removeClass('is_hide').siblings().addClass('is_hide');
      
      // 카테고리 대표 이미지
      $('.selected_menu_img .bg_item').eq(index).removeClass('is_hide').siblings().addClass('is_hide');
      
      // 토핑 재료 카테고리
      $('.category_recomm_item .topping').eq(index).addClass('is_show').siblings().removeClass('is_show');

      //이미지 플립효과 제거
      setTimeout(function() {
         $('.selected_menu_img .bg_item img').css({
            'transform':'none'
         });
      }, 100);
   })

   // 뉴스 이벤트 이미지 페이드인아웃 효과
   $('.event_news_info li').hover(
      function () {
         let index = $(this).index();
         $('.event_news_content .event_news_img').eq(index).removeClass('fade_out').siblings().addClass('fade_out');
         $('.fade_out').css({
            'transition': 'all 1s',
         });

         setTimeout(function() {
            $('.fade_out').css({
               'transition':'none'
            });
         }, 500);
      }
   )

   
   
})






