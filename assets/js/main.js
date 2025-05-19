function clickBurger() {
    let el = $("#nav-dropdown");
    if (el.css('display') == 'none') {
        el.css('display', 'flex');
    }
    else {
        el.css('display', 'none');
    }
}

$(window).on("resize", function (e) {
    if ($(window).innerWidth() > 600) {
        let el = $("#nav-dropdown");
        el.css('display', 'none');
    }
})

function closeDropdown() {
    let el = $("#nav-dropdown");
    el.css('display', 'none');
}