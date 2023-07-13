function myFunction() {
  var x = document.getElementById("oldpassword");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
  x.style.border = "1px solid #c3c6d1";
  x.style.borderRadius = "6px";
}

function myFunction1() {
  var x = document.getElementById("newpassword");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
  x.style.border = "1px solid #c3c6d1";
  x.style.borderRadius = "6px";
}
function myFunction2() {
  var x = document.getElementById("repeatnewpassword");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
  x.style.border = "1px solid #c3c6d1";
  x.style.borderRadius = "6px";
}

//  function mypassword()
//  {
//   var x = document.getElementById("pro");
//   var y=document.getElementById("pass");
//   x.style.background='none';
//   x.style.color='#555353';
//   y.style.background = "#eee";
//   y.style.color = "#475BE8";
//  }
//  function mypasswordprofile()
//  {
//   var x=document.getElementById("pass");
//    var y = document.getElementById("pro");
//   x.style.background = "none";
//   x.style.color = "#555353";
//   y.style.background = "#eee";
//   y.style.color = "#475BE8";
//  }
//  function myFunctioncancel1()
//  {
//   var x = document.getElementById("save");
//   x.style.background = "none";
//   x.style.color = "black";
//    var y = document.getElementById("cancel");
//       y.style.background = "#475BE8";
//       y.style.color = "white";
//  }
//  function myFunctionsave1()
//  {
//   var x = document.getElementById("save");
//   x.style.background = "#475BE8";
//   x.style.color = "white";
//   var y = document.getElementById("cancel");
//   y.style.background = "none";
//   y.style.color = "black";
//  }
//  function myFunctioncancel() {
//    var x = document.getElementById("save1");
//    x.style.background = "none";
//    x.style.color = "black";
//    var y = document.getElementById("cancel1");
//    y.style.background = "#475BE8";
//    y.style.color = "white";
//  }
//  function myFunctionsave() {
//    var x = document.getElementById("save1");
//    x.style.background = "#475BE8";
//    x.style.color = "white";
//    var y = document.getElementById("cancel1");
//    y.style.background = "none";
//    y.style.color = "black";
//  }
//  function myFunctioncancel2() {
//  var x = document.getElementById("save2");
//  x.style.background = "none";
//  x.style.color = "black";
//  var y = document.getElementById("cancel2");
//  y.style.background = "#475BE8";
//  y.style.color = "white";
//  }
//  function myFunctionsave2() {
//     var x = document.getElementById("save2");
//     x.style.background = "#475BE8";
//     x.style.color = "white";
//     var y = document.getElementById("cancel2");
//     y.style.background = "none";
//     y.style.color = "black";
//  }

function mynavfunction() {
  var x = document.getElementById("dash");
  x.style.background = "#475BE8";
  x.style.borderRadius = "12px";
  var y = document.getElementById("payment");
  y.style.color = "white";
  var z = document.getElementById("icon1");
  z.style.color = "white";
  var x = document.getElementById("prod");
  x.style.color = "#808191";
  x.style.background = "none";
  var y = document.getElementById("products");
  y.style.color = "#808191";
  var z = document.getElementById("icon2");
  z.style.color = "#808191";
  var x = document.getElementById("settingnav");
  x.style.color = "#808191";
  x.style.background = "none";
  var y = document.getElementById("set");
  y.style.color = "#808191";
  var z = document.getElementById("icon3");
  z.style.color = "#808191";
}
function mynavfunction1() {
  var x = document.getElementById("prod");
  x.style.background = "#475BE8";
  x.style.borderRadius = "12px";
  var y = document.getElementById("products");
  y.style.color = "white";
  var z = document.getElementById("icon2");
  z.style.color = "white";
  var x = document.getElementById("dash");
  x.style.color = "#808191";
  x.style.background = "none";
  var y = document.getElementById("payment");
  y.style.color = "#808191";
  var z = document.getElementById("icon1");
  z.style.color = "#808191";
  var x = document.getElementById("settingnav");
  x.style.color = "#808191";
  x.style.background = "none";
  var y = document.getElementById("set");
  y.style.color = "#808191";
  var z = document.getElementById("icon3");
  z.style.color = "#808191";
}
function mynavfunction2() {
  var x = document.getElementById("settingnav");
  x.style.background = "#475BE8";
  x.style.borderRadius = "12px";
  var y = document.getElementById("set");
  y.style.color = "white";
  var z = document.getElementById("icon3");
  z.style.color = "white";
  var x = document.getElementById("dash");
  x.style.color = "#808191";
  x.style.background = "none";
  var y = document.getElementById("payment");
  y.style.color = "#808191";
  var z = document.getElementById("icon1");
  z.style.color = "#808191";
  var x = document.getElementById("prod");
  x.style.color = "#808191";
  x.style.background = "none";
  var y = document.getElementById("products");
  y.style.color = "#808191";
  var z = document.getElementById("icon2");
  z.style.color = "#808191";
}

$(document).ready(function () {
  $("#secur,#notify").click(function () {
    $("form").hide();
    $("#psw").hide();
    $("#profileform").hide();
    $("#psw1").hide();
  });
  $("#pro").click(function () {
    $("#profileform,#psw1").show();
    $("form").hide();
    $("#psw").hide();
  });
  $("#pass").click(function () {
    $("#passwordprofile,#psw").show();
    $("#profileform").hide();
    $("#psw1").hide();
  });
});

$(document).ready(function () {
  $(".setting").click(function () {
    $(".main-body, .main").show();
    $(".main-body1,.main1").hide();
    $(".main-body2,.Addproducts").hide();
    $(".main2,.main_top2").hide();
    $(".main3,.main_top3").hide();
  });
  $("#prod").click(function () {
    $(".main-body,.main").hide();
    $(".main-body1").show();
    $(".main1").show();
    $(".main-body2,.Addproducts").hide();
    $(".main2,.main_top2").hide();
    $(".main3,.main_top3").hide();
  });
  $("#newproduct").click(function () {
    $(".main-body,.main").hide();
    $(".main-body1").hide();
    $(".main1").hide();
    $(".main-body2,.Addproducts").show();
    $(".main-body2").show();
    $(".main2,.main_top2").show();
    $(".main3,.main_top3").hide();
  });
  $("#dash").click(function () {
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
document.getElementById("dot1").addEventListener("click", function () {
  document.getElementById("subContent1").classList.toggle("d-none");
});
document.getElementById("dot2").addEventListener("click", function () {
  document.getElementById("subContent2").classList.toggle("d-none");
});
document.getElementById("dot3").addEventListener("click", function () {
  document.getElementById("subContent3").classList.toggle("d-none");
});
document.getElementById("dot4").addEventListener("click", function () {
  document.getElementById("subContent4").classList.toggle("d-none");
});
document.getElementById("dot5").addEventListener("click", function () {
  document.getElementById("subContent5").classList.toggle("d-none");
});
document.getElementById("dot6").addEventListener("click", function () {
  document.getElementById("subContent6").classList.toggle("d-none");
});
document.getElementById("dot7").addEventListener("click", function () {
  document.getElementById("subContent7").classList.toggle("d-none");
});
document.getElementById("dot8").addEventListener("click", function () {
  document.getElementById("subContent8").classList.toggle("d-none");
});
 document.getElementById("dot9").addEventListener("click", function () {
   document.getElementById("subContent9").classList.toggle("d-none");
 });
  document.getElementById("dot10").addEventListener("click", function () {
    document.getElementById("subContent10").classList.toggle("d-none");
  });

  //dashboard table Js
  document.getElementById("dot11").addEventListener("click", function () {
    document.getElementById("subContent11").classList.toggle("d-none");
  });
   document.getElementById("dot12").addEventListener("click", function () {
     document.getElementById("subContent12").classList.toggle("d-none");
   });
    document.getElementById("dot13").addEventListener("click", function () {
      document.getElementById("subContent13").classList.toggle("d-none");
    });
  document.getElementById("dot14").addEventListener("click", function () {
    document.getElementById("subContent14").classList.toggle("d-none");
  });
   document.getElementById("dot15").addEventListener("click", function () {
     document.getElementById("subContent15").classList.toggle("d-none");
   });
   document.getElementById("dot16").addEventListener("click", function () {
     document.getElementById("subContent16").classList.toggle("d-none");
   });
