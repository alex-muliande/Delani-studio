 $(document).ready(function(){

    $("#design-pic").click(function(){
    $(".design-a").hide(1500).toggle();
       $("#design-pic").slideUp();
    
    });
     $(".design-a").click(function(){
       $("#design-pic").slideDown();
       $(".design-a").hide();
     })
  
    
     $("#develop-pic").click(function(){
        $(".develop-a").hide(1500).toggle();
        $("#develop-pic").slideUp();
      });
      $(".develop-a").click(function(){
        $("#develop-pic").slideDown();
        $(".develop-a").hide();
      })
  
      $("#prod-pic").click(function(){
         $(".prod-a").toggle();
         $("#prod-pic").toggle();
       });
      $(".prod-a").click(function(){
       $("#prod-pic").show();
       $(".prod-a").hide();
     })
    
     });

     $(document).ready(function(){
      $('.nad').mouseover(function () {
            $('.muli').show();
        }).mouseout(function () {
            $('.muli').hide();
        });
      });

     $(document).ready(function(){
      $('.nad2').mouseover(function () {
            $('.muli2').show();
        }).mouseout(function () {
            $('.muli2').hide();
        });
      });

     function contact(form){
        var name = document.forms["form2"]["name"].value;
            var email = document.forms["form2"]["email"].value;
            var message = document.forms["form2"]["message"].value;
            alert("Hi " + name + "," + " We have received your message. Thank you for reaching out to us. ");
              };