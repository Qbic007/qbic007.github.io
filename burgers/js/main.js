$(document).ready(function () {
    let closeHamburgerMenu = $('#closeHamburgerMenu');
    closeHamburgerMenu.on('click', function () {
        $('#hamburgerMenu').hide();
    });

    let hamburgerMenuLink = $('#hamburgerMenuLink');
    hamburgerMenuLink.on('click', function () {
        $('#hamburgerMenu').show();
    });
    
    let ingredientsCloseIcon = $('#ingredientsCloseIcon');
    ingredientsCloseIcon.on('click', function () {
        $('#ingredients').hide();
    });
    
    let compound = $('#compound');
    compound.on('click', function () {
        $('#ingredients').show();
    });
});