$(".buttonToToggle").click(function(event) {
    $("#theme-name").val($(event.target).text());
});

$("#modalRefferenceSenfdlerButton").click(function(event) {
    $.ajax({
        type: "POST",
        url: "https://mandrillapp.com/api/1.0/messages/send.json",
        data: {
            'key': 'aimQtBa7FJaZUvEuyXqfAw',
            'message': {
                'from_email': $("#modalRefferenceSenfdlerEmail").val(),
                'to': [{
                    'email': 'olena.kachmar9@gmail.com',
                    'name': 'Olena',
                    'type': 'to'
                }],
                'autotext': 'true',
                'subject': 'Cheker!',
                'html': 'YOUR EMAIL CONTENT HERE! YOU CAN USE HTML!'
            }
        }
    }).done(function(response) {
        console.log(response);
        // if you're into that sorta thing
    });
})
