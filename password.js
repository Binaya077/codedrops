
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