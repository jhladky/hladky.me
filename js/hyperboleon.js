var hyperboleon = {
    $header: $("header"),
    $footer: $("footer"),
    $title: $("#title"),
    $subtitle: $("#subtitle"),
    $contact: $("#contact"),
    $contactList: $("#contactList"),
    $sectionList: $("#sectionList"),
    $sectionCtrls: $("#sectionList").children(),
    sectionTitles: {
        "about": $("#aboutTitle"),
        "projects": $("#projectsTitle"),
        "art": $("#artTitle"),
        "else": $("#elseTitle")
    },
    sections: {
        "about": $("#about"),
        "projects": $("#projects"),
        "art": $("#art"),
        "else": $("#else")
    }
};

hyperboleon.setup = function () {
    var self = this;

    $(window).resize(function () {
        var width = $(this).width();

        if(width < 900) {
            if(width < 650) {
                self.$subtitle.addClass("hidden");
            } else {
                self.$subtitle.removeClass("hidden");
            }
            self.$header.add(self.$footer).css("margin-left", "-" + width / 2 + "px");
            self.$title.css("font-size", width / 11.25 + "pt");
            self.$contactList.css("right", "0px");
            self.$sectionList.addClass("mobile").removeClass("normal");
        } else {
            if(width < 1200) {
                self.$sectionList.addClass("mobile").removeClass("normal");
            } else {
                self.$sectionList.addClass("normal").removeClass("mobile");
                self.$sectionList.css("left", (width - 900) / 2 - self.$sectionList.width());
            }
            self.$header.add(self.$footer).css("margin-left", "-450px");
            self.$title.css("font-size", "80pt");
            self.$contactList.css("right", (width - 900) / 2)
        }
        $("#shadow").css("left", (width - $("#shadow").width()) / 2);
    });
    
    $("body")[0].addEventListener ("overflowchanged", function() {
        var width = $(window).width();
        
        $("#shadow").css("left", (width - $("#shadow").width()) / 2);
        self.$contactList.css("right", (width - 900) / 2);
        self.$sectionList.css("left", (width - 900) / 2 - self.$sectionList.width());
    }, false);
    
        
    this.$contact.click(function () {
        $(this).children().filter("i").toggleClass("hidden");
        self.$contactList.slideToggle();
    });

    this.$sectionCtrls.each(function () {
        var $this = $(this);
        $this.click(function () {
            var $section = self.sections[$this.attr("section")];
            var $sectionTitle = self.sectionTitles[$this.attr("section")];
            
            self.active.addClass("hidden");
            self.activeTitle.addClass("hidden");
            $section.removeClass("hidden");
            $sectionTitle.removeClass("hidden");
            self.active = $section;
            self.activeTitle = $sectionTitle;
        });
    });
    
    this.active = this.sections.about;
    this.activeTitle = this.sectionTitles.about;
    this.$sectionCtrls
        .filter(function () { return $(this).attr("section") == "about" })
        .click();
    $(window).resize();
};
