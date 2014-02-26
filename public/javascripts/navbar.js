
$(document).ready(function () {
    $('nav ul li').removeClass('active');
    var page = window.location.pathname;
    $('a[href="' + page + '"]').parent().addClass('active');

});
