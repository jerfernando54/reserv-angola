$(document).ready(function() {
    
    //progress bar
    let containerA = document.getElementById("circleA");
    let circleA = new ProgressBar.Circle(containerA, {

       color: '#65DAF9',
       strokeWidth: 8,
       duration: 2000,
       from: { color: '#AAA'},
       to: { color: '#65DAF9'},

       step: function(state, circle) {
           circle.path.setAttribute('stroke', state.color);

           let value = Math.round(circle.value() * 5965);

           circle.setText(value);
       }

       });

       let containerB = document.getElementById("circleB");
       let circleB = new ProgressBar.Circle(containerB, {
   
          color: '#65DAF9',
          strokeWidth: 8,
          duration: 2100,
          from: { color: '#AAA'},
          to: { color: '#65DAF9'},
   
          step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);
   
            let value = Math.round(circle.value() * 1542);
   
            circle.setText(value);
          }
   
        });
        
        let containerC = document.getElementById("circleC");
        let circleC = new ProgressBar.Circle(containerC, {
    
            color: '#65DAF9',
            strokeWidth: 8,
            duration: 2400,
            from: { color: '#AAA'},
            to: { color: '#65DAF9'},
    
            step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);
    
            let value = Math.round(circle.value() * 6000);
    
            circle.setText(value);
            }
    
        });

        let containerD = document.getElementById("circleD");
        let circleD = new ProgressBar.Circle(containerD, {
    
            color: '#65DAF9',
            strokeWidth: 8,
            duration: 1800,
            from: { color: '#AAA'},
            to: {color: '#65DAF9'},
        
            step: function(state, circle) {
                circle.path.setAttribute('stroke', state.color);
        
                let value = Math.round(circle.value() * 1080);
        
                circle.setText(value);
            }
    
        });
       
        //INICIANDO O LOADER
        let dataAreaOffset = $('#data-area').offset();
        let stop = 0;

        $(window).scroll(function(e) {
            let scroll = $(window).scrollTop();
            if(scroll > (dataAreaOffset.top - 500) && stop == 0){
                circleA.animate(1.0);
                circleB.animate(1.0);
                circleC.animate(1.0);
                circleD.animate(1.0);

                stop = 1;
            }
        });

       // setTimeout serve para carregar primeiro as imagens
       setTimeout(function() {
        $('#data-area').parallax({imageSrc: 'img/cidadeparallax.png'});
        $('#apply-area').parallax({imageSrc: 'img/pattern.png'});
      }, 229);

      //filtro do portofolio

      $('.filter-btn').on('click', function() {
          let type = $(this).attr('id');
          let boxes = $('.project-box');

          $('.main-btn').removeClass('active');
          $(this).addClass('active');

          if(type == 'hotel-btn') {
              eachBoxes('hotel', boxes)
          } else if(type == 'rent-btn') {
              eachBoxes('rent', boxes);
          } else if(type == 'hostal-btn'){
              eachBoxes('hostal', boxes);
          } else {
              eachBoxes('all', boxes);
          }
      });
      
      function eachBoxes(type, boxes) {
          if(type == 'all') {
              $(boxes).fadeIn();
          } 
          else {
              $(boxes).each(function() {
                  if (!$(this).hasClass(type)) {
                      $(this).fadeOut('slow');
                  } else {
                      $(this).fadeIn();
                  }
              });
          }
      }

      //scroll

      let navBtn = $('.nav-item');

      

      let bannerSection = $('#mainslider');
      let serviceSection = $('#services-area');
      let askingSection = $('#data-area');
      let aboutSection = $('#about-area');
      let offerSection = $('#portofolio-area');
      let contactSection = $('#contact-area');

      let scrollTo = '';

      $(navBtn).click(function() {
          let btnId = $(this).attr('id');

          $('.nav-item').removeClass('active');
          $(this).addClass('active');

          if(btnId == 'services-menu'){
            scrollTo = serviceSection;
          } else if(btnId == 'asking-menu'){
            scrollTo = askingSection;
          } else if(btnId == 'about-menu') {
            scrollTo = aboutSection;
          }else if (btnId == 'offers-menu') {
            scrollTo  = offerSection;
          }else if (btnId == 'contact-menu') {
            scrollTo = contactSection;
          
          } else {
            scrollTo = bannerSection;
          }
          
        $([document.documentElement, document.body]).animate({
            scrollTop: $(scrollTo).offset().top - 70
        }, 1500);

      });

});