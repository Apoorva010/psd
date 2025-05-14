function showmenu() {
    const nav = document.querySelector('.navbar-nav'); // the menu you want to toggle
    const icon = document.querySelector('.menu-mob i'); // the hamburger icon

    nav.classList.toggle('active'); // toggle menu visibility

    if (nav.classList.contains('active')) {
        icon.classList.replace('fa-bars', 'fa-xmark'); // change to close icon
    } else {
        icon.classList.replace('fa-xmark', 'fa-bars'); // change back to menu icon
    }
}
