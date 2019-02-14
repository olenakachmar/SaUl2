 $.get("https://reqres.in/api/users/2", function(data){
    console.log(data.data.avatar);
    $("#userImage").attr("src", data.data.avatar);
    $("#userName").text(data.data.first_name);
    $("#userLastName").text(data.data.last_name);
  })
  
});