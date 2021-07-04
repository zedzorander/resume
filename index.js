$(document).ready(function() {
    var menuTitle = $("#menuTitle")
    var links = $("#links")
    links.hide()
    var bars = $("#bars-lg")
    var times = $("#times-lg")
    times.hide()

    var barsSm = $("#bars-sm")
    var timesSm = $("#times-sm")
    timesSm.hide()
    var smallNav = $("#small-nav-menu")
    smallNav.hide()


    var toggle = false
    var toggleSm = false

    $("#hamburger-sm").on("click", function() {
        toggleSm = !toggleSm
        if(toggleSm) {
            barsSm.hide(600)
            setTimeout(function() { 
                timesSm.show(100)
                smallNav.show(100)
            }, 600)
        } else {
            timesSm.hide(600)
            smallNav.hide(600)
            setTimeout(function() {
                barsSm.show(100)
            }, 600)
        }
    })

    $("#hamburger-lg").on("click", function() {
        // Changes width of menu bar
        var menuWidth = $("#menu").width() == 700 ? "100px" : "700px";
        $("#menu").animate({ width: menuWidth });

        // TOGGLES HAMBURGER ICONS AND MENU ELEMENTS
        toggle = !toggle
        if(toggle) {
            bars.hide(600)
            menuTitle.hide(600)
            setTimeout(function() {
                times.show(100)
                links.show(100)
            }, 600)
        } else {
            times.hide(600)
            links.hide(600)
            setTimeout(function() {
                bars.show()
                menuTitle.show()
            }, 600)
        }
    })
})


