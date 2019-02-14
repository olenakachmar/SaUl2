$("#login").click(function() {
    $.ajax({
        type: "POST",
        url: "https://reqres.in/api/login",
        data: {
            email: $("#userName").val(),
            password: $("#userPassword").val()
        },
        success: function(data) {
            $("#loginHeader").replaceWith($("#myAccountHeader"));
            $("#loginModal").modal('toggle');
        }
    })
})
