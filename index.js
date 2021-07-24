/*
Author: Cole Phares
Creation Date: June 26, 2021
Last Modified: July 24, 2021
Description: JavaScript/jQuery for my portfolio website
*/

$(document).ready(function() {
    var menuTitle = $("#menu-title")
    var links = $("#links")
    links.hide()
    var bars = $("#bars-lg")
    var times = $("#times-lg")
    times.hide()

    var barsMed = $("#bars-med")
    var timesMed = $("#times-med")
    timesMed.hide()
    var mediumNav = $("#med-nav-menu")
    mediumNav.hide()

    var toggle = false
    var toggleMed = false

    $("#hamburger-med").on("click", function() {
        toggleMed = !toggleMed
        if(toggleMed) {
            barsMed.hide(600)
            setTimeout(function() { 
                timesMed.show(100)
                mediumNav.show(100)
            }, 600)
        } else {
            timesMed.hide(600)
            mediumNav.hide(600)
            setTimeout(function() {
                barsMed.show(100)
            }, 600)
        }
    })

    $("#hamburger-lg").on("click", function() {
        // Changes width of menu bar
        var menuWidth = $("#menu").width() == 500 ? "100px" : "500px";
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


