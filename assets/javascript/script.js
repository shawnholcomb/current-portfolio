$(document).ready(function () {
    // Trigger open /close on mobile
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

    $('.down-arrow').on("click", function() {
        $('.down-arrow').hide();
        $('.up-arrow').show();
    });
    $('.up-arrow').on("click", function() {
        $('.up-arrow').hide();
        $('.down-arrow').show();
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
});