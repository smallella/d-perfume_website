$(document).ready(function () {
    $('.showmenu').click(function (e) { 
        e.preventDefault();
        $('.header ul').toggleClass('active');
    });
});