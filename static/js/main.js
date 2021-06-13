function GenerateAkan() 
{
    var DD = parseInt(document.getElementById("date").value);
    var MM = parseInt(document.getElementById("month").value);
    var year = document.getElementById("year").value;
    var gender=document.getElementsByName('gender');


    if(DD<=0 || DD>31)
    {
        alert("Enter a valid date!");
    }
    else
    {
        if(MM<1 || MM>12)
        {
            alert("Enter a valid month!");
        }
        else
        {
            if(year=="")
            {
                alert("Please enter the value of the year!");
            }
            else if(year.length<4)
            {
                alert("Year must have 4 digits!");
            }
            else
            {
                if(!(gender[0].checked || gender[1].checked))
                {
                    alert("Please Select Your Gender!");
                }
                else
                {
                    if (document.getElementById("gender1").checked) 
                        {
                            gender = document.getElementById("gender1").value;
                        }
                    if (document.getElementById("gender2").checked) 
                        {
                            gender = document.getElementById("gender2").value;
                        }
                                              
                        var digits = year.toString().split('');
                        var firstDigit = digits[0];
                        var secondDigit = digits[1];
                        var thirdDigit = digits[2];
                        var fourthDigit = digits[3];
        
                        var CC = parseInt(firstDigit.concat(secondDigit));
                        var YY = parseInt(thirdDigit.concat(fourthDigit));
        
                        d = (((CC/4) -2*CC-1) + (5*YY/4) + (26*(MM+1)/10) + DD) % 7;
                        d = Math.round(d);
                         if(gender === "male")
                         {
                             akanNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
                             days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

                             akanName = akanNames[d];
                             document.getElementById("showAkan").innerHTML = "<p class='bg-success'>"+akanName+"</p>";
                             document.getElementById("showDay").innerHTML = "Born on <strong>"+days[d]+"</strong>";

                         }
                         else if(gender === "female")
                         {
                             akanNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
                             days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

                             akanName = akanNames[d];
                             document.getElementById("showAkan").innerHTML = "<p class='bg-success'>"+akanName+"</p>";
                             document.getElementById("showDay").innerHTML = "Born on <strong>"+days[d]+"</strong>";

                         }                                
                   
                }
            }

            
        }
        
    }
    
}
    


!(function($) {
    "use strict";
  
    // Smooth scroll for the navigation menu and links with .scrollto classes
    var scrolltoOffset = $('#header').outerHeight() - 15;
    $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        if (target.length) {
          e.preventDefault();
  
          var scrollto = target.offset().top - scrolltoOffset;
  
          if ($(this).attr("href") == '#header') {
            scrollto = 0;
          }
  
          $('html, body').animate({
            scrollTop: scrollto
          }, 1500, 'easeInOutExpo');
  
          if ($(this).parents('.nav-menu, .mobile-nav').length) {
            $('.nav-menu .active, .mobile-nav .active').removeClass('active');
            $(this).closest('li').addClass('active');
          }
  
          if ($('body').hasClass('mobile-nav-active')) {
            $('body').removeClass('mobile-nav-active');
            $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
            $('.mobile-nav-overly').fadeOut();
          }
          return false;
        }
      }
    });

    $(".portfolio-details-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        items: 1
      });
    
      // Init AOS
      function aos_init() {
        AOS.init({
          duration: 500,
          easing: "ease-in-out",
          once: true,
          mirror: false
        });
      }
      $(window).on('load', function() {
        aos_init();
      });
    
    })(jQuery);