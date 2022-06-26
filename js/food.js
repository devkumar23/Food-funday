$('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    autoplay: true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:3
        },
        1600:{
            items:3
        }
    }
})




// i am changing somthing


// form validation start

function validation(){
    var valu1 = document.getElementById("valu1").value;
    var valu2 = document.getElementById("valu2").value;
    var valu3 = document.getElementById("valu3").value;
    var valu4 = document.getElementById("valu4").value;
    var valu5 = document.getElementById("valu5").value;
    var valu6 = document.getElementById("valu6").value;
    var valu7 = document.getElementById("valu7").value;
    var valu8 = document.getElementById("valu8").value;

    if(valu1 == ""){
        document.getElementById("name").innerHTML="Username is rquired";

        return false;
    }


    if(valu2 == ""){
        document.getElementById("email").innerHTML="Emai is rquired";

        return false;
    }

    if(valu3 == ""){
        document.getElementById("contect").innerHTML="Contect Number is rquired";

        return false;
    }

    if(valu4 == ""){
        document.getElementById("Person").innerHTML=" Number Of Person is rquired";

        return false;
    }

    if(valu5 == ""){
        document.getElementById("date").innerHTML="Date is rquired";

        return false;
    }

    if(valu6 == ""){
        document.getElementById("time").innerHTML="Time is rquired";

        return false;
    }

    if(valu7 == ""){
        document.getElementById("food").innerHTML="Food is rquired";

        return false;
    }

    if(valu8 == ""){
        document.getElementById("Occasion").innerHTML="Occasion is rquired";

        return false;
    }

    else{
        document.write("<h1>congratulations Your Reservations For Food Funday Is Complet</h1>");
    }

}

// form validation end




// nav on scroll
$(document).ready(function () {
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      if (scroll > 100) {
        $("nav").addClass("add-me");
      } else {
        $("nav").removeClass("add-me");
      }
    });
  });