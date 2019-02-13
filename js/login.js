// //ще не готове

$(document).ready(function(){
  $("#login").click(function(){
    alert("ready");
    $.ajax({
    type: "POST",
    data: {
    "email": $(email).val(),
    "password": "cityslicka"
	},
    url: "https://reqres.in/api/login",
    success: function(result){
      console(result.toString());
    }});
  });
});