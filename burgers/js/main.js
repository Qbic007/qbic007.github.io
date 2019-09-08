$(document).ready(function () {
    var closeHamburgerMenu = $('#closeHamburgerMenu');

    closeHamburgerMenu.on('click', function () {
        $(this).parents('#hamburgerMenu').hide();
    });

    var hamburgerMenuLink = $('hamburgerMenuLink');

    hamburgerMenuLink.on('click', function () {
        $(this).parents('body').find('#hamburgerMenu').show();
        return false;
    });
});