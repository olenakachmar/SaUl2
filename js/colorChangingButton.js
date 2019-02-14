function getCookie(name) {
    let value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length == 2)
        return parts.pop().split(";").shift();
}

$(document).ready(function() {
    console.log("Color: " + getCookie("color"));
    $(".changeColor").css("background-color", getCookie("color"));
});

const arr = ["black", "green", "blue", "red", "#17a2b8"]

function count(param) {
    let currentCount = 0;
    return function() {
        if (currentCount >= param.length) {
            currentCount = 0;
        }
        return currentCount++;
    }
    ;
}

const counter = count(arr);
$(document).ready(function() {
    $(".buttonChangeColor").bind('click', myFun);

    function myFun(e) {
        let currentColor = arr[counter()];
        $(".changeColor").css("background-color", currentColor);
        document.cookie = "color=" + currentColor;
    }

    $("body").css("display", "block");
})
