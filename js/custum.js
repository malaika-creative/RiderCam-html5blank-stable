$(document).ready(function(){
    $( ".scroll" ).click(function() { // Top to Bottom
    console.log("scroll button clicked");
    $.scrollTo('+=700px', 800);
    });    
    
    //scroll to correct page function for menu    
    
      jQuery(".widget_nav_menu li a" ).click( function(e) {
      e.preventDefault(); 
      pagelink2 = jQuery(this).attr("title_link_s") 
          
      console.log("Menu Link Clicked event - success");
      console.log(pagelink2);
     $.scrollTo(document.getElementById(pagelink2), 800);;
    });              
    
    jQuery.ajax({
         type : "post",
         dataType : "json",
         url : myAjax.ajaxurl,
         data:{ action: "my_user_vote", pagelink2 : pagelink2},
         success: function(response) {
            if(response.type == "success") {
               jQuery("ajax output").html(pagelink2)
               console.log(pagelink2);
            }
            else {
               alert("didn't work")
            }
         }
      })   
//    
//    $( ".widget_nav_menu li a" ).click(function() {
//        var pagelink = $(this).data('title_link_s');
//        console.log("Menu Link Clicked event - success");
//        console.log(pagelink);
//     $.scrollTo(document.getElementById(pagelink), 800);;
//    });              
});

