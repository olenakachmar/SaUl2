$( ".buttonToToggle" ).click(function(event) {
    $("#theme-name").val($(event.target).text());
//   alert($(event.target).text());
});

