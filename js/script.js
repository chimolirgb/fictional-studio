$(document).ready(function(){
 $("#img1").click(function(){
     $("#d").show();
     $("#img1").hide();  
 });
 $("#d").click(function(){
    $("#img1").show();
    $("#d").hide();
});

$("#img2").click(function(){
    $("#D").show();
    $("#img2").hide(); 
});
$("#D").click(function(){
    $("#img2").show();
    $("#D").hide(); 

});
$("#img3").click(function(){
    $("#r").show();
    $("#img3").hide();  
});
$("#r").click(function(){
   $("#img3").show();
   $("#r").hide();
});
});

$(document).ready(function(){
$("#hover1").hover(function(){
$("#imgtext1").toggle();
});

$("#hover2").hover(function(){
    $("#imgtext2").toggle();
    });

    $("#hover3").hover(function(){
        $("#imgtext3").toggle();
        }); 

        $("#hover4").hover(function(){
            $("#imgtext4").toggle();
            }); 

            $("#hover5").hover(function(){
                $("#imgtext5").toggle();
                }); 
                
                $("#hover6").hover(function(){
                    $("#imgtext6").toggle();
                    });  
                    
                    $("#hover7").hover(function(){
                        $("#imgtext7").toggle();
                        }) 
                        
     
                        $("#hover8").hover(function(){
                            $("#imgtext8").toggle();
                            })                     
});
