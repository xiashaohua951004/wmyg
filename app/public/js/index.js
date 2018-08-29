$(function () {

    $(".top").click(function () {

        $("html,body").animate({ scrollTop: 0 }, 500);
    })




    $(".ding .menu ul li a").mouseenter(function () {
        $(this).children().hide();
     
      $(this).find(".span1").show().css("display","block");
        $(this).next(".tel").show();
      $(this).find(".span2").show().css("display","block");    
      $(this).find(".span3").show().css("display","block");
    })


    $(".ding .menu ul li a").mouseleave(function () {
        $(this).find("img").show()
      $(this).find(".span1").show().css("display","none");


      $(this).find(".span2").show().css("display","none");    
      $(this).find(".span3").show().css("display","none");
    })






});



    
         
 