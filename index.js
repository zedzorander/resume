$(document).ready(function() {
    $("#hamburger").on("click", function() {
        $("i").toggle(function() {
            var menuWidth = $("#menu").width() == 500 ? "100px" : "500px";
            $("#menu").animate({ width: menuWidth });
            
        })
    })
})


