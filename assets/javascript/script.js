$('.drinkr-arrow').on('click', function () {
    $('#port-drinkr').slideToggle('slow');
});

$('.tp-arrow').on('click', function () {
    $('#port-tp').slideToggle('slow');
});

$('.nick-arrow').on('click', function () {
    $('#port-nick').slideToggle('slow');
});

$('.marvel-arrow').on('click', function () {
    $('#port-marvel').slideToggle('slow');
});

$('#down-arrow-drinkr').on("click", function () {
    $('#down-arrow-drinkr').hide();
    $('#up-arrow-drinkr').show();
});
$('#up-arrow-drinkr').on("click", function () {
    $('#up-arrow-drinkr').hide();
    $('#down-arrow-drinkr').show();
})
$('#down-arrow-tp').on("click", function () {
    $('#down-arrow-tp').hide();
    $('#up-arrow-tp').show();
});
$('#up-arrow-tp').on("click", function () {
    $('#up-arrow-tp').hide();
    $('#down-arrow-tp').show();
})
$('#down-arrow-nick').on("click", function () {
    $('#down-arrow-nick').hide();
    $('#up-arrow-nick').show();
});
$('#up-arrow-nick').on("click", function () {
    $('#up-arrow-nick').hide();
    $('#down-arrow-nick').show();
})
$('#down-arrow-marvel').on("click", function () {
    $('#down-arrow-marvel').hide();
    $('#up-arrow-marvel').show();
});
$('#up-arrow-marvel').on("click", function () {
    $('#up-arrow-marvel').hide();
    $('#down-arrow-marvel').show();
})

if ($(window).width() <= 1200) {
    window.onscroll = function () { myFunction() };

    var header = document.getElementById("iconHeader");
    var sticky = header.offsetTop;

    function myFunction() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }
}