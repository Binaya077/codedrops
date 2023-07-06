
function myFunction() {
  var x = document.getElementById("oldpassword");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
  x.style.border = '1px solid #c3c6d1';
  x.style.borderRadius = '6px';
}

function myFunction1() {
    var x = document.getElementById("newpassword");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
    x.style.border = '1px solid #c3c6d1';
    x.style.borderRadius = '6px';
  }
  function myFunction2() {
    var x = document.getElementById("repeatnewpassword");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
    x.style.border = '1px solid #c3c6d1';
    x.style.borderRadius = '6px';
  }

     function mypassword()
     {
      var x = document.getElementById("pro");
      var y=document.getElementById("pass");
      x.style.background='none';
      x.style.color='#555353';
      y.style.background = "#eee";
      y.style.color = "#475BE8";
     }
     function mypasswordprofile()
     {
      var x=document.getElementById("pass");
       var y = document.getElementById("pro");
      x.style.background = "none";
      x.style.color = "#555353";
      y.style.background = "#eee";
      y.style.color = "#475BE8";
     }
     function myFunctioncancel1()
     {
      var x = document.getElementById("save");
      x.style.background = "none";
      x.style.color = "black";
       var y = document.getElementById("cancel");
          y.style.background = "#475BE8";
          y.style.color = "white";
     }
     function myFunctionsave1()
     {
      var x = document.getElementById("save");
      x.style.background = "#475BE8";
      x.style.color = "white";
      var y = document.getElementById("cancel");
      y.style.background = "none";
      y.style.color = "black";
     }
     function myFunctioncancel() {
       var x = document.getElementById("save1");
       x.style.background = "none";
       x.style.color = "black";
       var y = document.getElementById("cancel1");
       y.style.background = "#475BE8";
       y.style.color = "white";
     }
     function myFunctionsave() {
       var x = document.getElementById("save1");
       x.style.background = "#475BE8";
       x.style.color = "white";
       var y = document.getElementById("cancel1");
       y.style.background = "none";
       y.style.color = "black";
     }
     function myFunctioncancel2() {
     var x = document.getElementById("save2");
     x.style.background = "none";
     x.style.color = "black";
     var y = document.getElementById("cancel2");
     y.style.background = "#475BE8";
     y.style.color = "white";
     }
     function myFunctionsave2() {
        var x = document.getElementById("save2");
        x.style.background = "#475BE8";
        x.style.color = "white";
        var y = document.getElementById("cancel2");
        y.style.background = "none";
        y.style.color = "black";
     }
 
  $(document).ready(function(){

    $("#secur,#notify").click(function(){
      $("form").hide();
      $("#psw").hide();
      $("#profileform").hide();
       $("#psw1").hide();
      
    });
    $("#pro").click(function(){

    $("#profileform,#psw1").show();  
    $("form").hide();
    $("#psw").hide();
     
      });
    $("#pass").click(function(){
      $("#passwordprofile,#psw").show();
      $("#profileform").hide();
       $("#psw1").hide();
    
     
    });
  });


  $(document).ready(function(){

    $(".setting").click(function(){
      $(".main-body, .main").show();  
      $(".main-body1,.main1").hide();     
      $(".main-body2,.Addproducts").hide(); 
      $(".main2,.main_top2").hide(); 
      $(".main3,.main_top3").hide();   
  
    });
    $("#prod").click(function(){
      $(".main-body,.main").hide();     
      $(".main-body1").show();  
      $(".main1").show();  
      $(".main-body2,.Addproducts").hide(); 
      $(".main2,.main_top2").hide();  
      $(".main3,.main_top3").hide();  

  
    });
    $("#newproduct").click(function(){
     
      $(".main-body,.main").hide(); 
      $(".main-body1").hide();  
      $(".main1").hide();  
      $(".main-body2,.Addproducts").show(); 
      $(".main-body2").show();  
      $(".main2,.main_top2").show(); 
      $(".main3,.main_top3").hide();   
  
    });
    $("#dash").click(function(){
     
      $(".main-body,.main").hide(); 
      $(".main-body1").hide();  
      $(".main1").hide();  
      $(".main-body2,.Addproducts").hide(); 
      $(".main-body2").hide();  
      $(".main2,.main_top2").hide();  
      $(".main3,.main_top3").show();  
      $(".main-body3").show();  
  
    });
   });
 