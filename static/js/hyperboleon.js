$(function() {
    $("#pics > .artItem, #drawings > .artItem").each(function() {
        $(this).css("background-image", "url('art/small/" + $(this).attr("id") + "')")
            .css("background-size", "200%");
    });
    $("#projects > * > .artItem").each(function() {
        $(this).css("background-image", "url('projects/" + $(this).attr("id") + "')")
            .css("background-size", "200%");
    });n
    /*$("#whatYear").keyup(function(e) {
        if(e.which === 13) { //enter
            var year = $(this).val();
            if(year < 2000) {
                $("#stack").css("font-family", "'Comic Sans MS'");
                $("body").css("background-color","lawngreen");
                $("#header").empty()
                    .append($("<marquee scrolldelay='10' truespeed='1'>HYPERBOLEON</marquee>"));
            } else {
                $("#stack, body").attr("style", "");
                $("#header").html("HYPERBOLEON");
            }
        }
        });*/
    $(window).resize(function() {
        if($("#nav").height() < (5 * 150)) {
            $(".navBackItem").css("height", "135px")
                .css("width", "135px");
        } else {
            $(".navBackItem").css("height", "150px")
                .css("width", "150px");
        }
        var header = $("#header");
        if(header.outerWidth() < 700) {
            header.css("font-size", (header.outerWidth() / 11.6) + "pt");
        } else {
            header.css("font-size", "60pt");
        }
    });
    $(window).resize();
    $("#aboutNav").click();
});
