var hyperboleon = {
    $header: $("header"),
    $footer: $("footer"),
    $title: $("#title"),
    $titles: $("#titles"), //rename me
    $contents: $("#content"), //rename me
    $subtitle: $("#subtitle"),
    $contact: $("#contact"),
    $contactList: $("#contactList"),
    $sectionList: $("#sectionList"),

    sections: ["about", "projects", "art", "else"],
    sectionCtrls: {},
    sectionTitles: {},
    sectionContents: {}
};

hyperboleon.setup = function () {
    var self = this;

    this.sections.forEach(function(section) {
        self.sectionCtrls[section] = $("<a href='#' class='section notLink'>")
            .css("background-image", "url('img/" + section + ".jpg')")
            .text(section);
        self.sectionTitles[section] = $("<div>").text(section.toUpperCase());
        self.sectionContents[section] = $("<div>");
    });

    this.sectionTitles.about
        .attr("id", "aboutTitle")
        .css("background-image", "url('img/me.jpg')");

    this.sectionCtrls.projects
        .css("background-image", "url('img/projects.png')");

    $.each(this.sectionCtrls, function () {
        self.$sectionList.append(this);
    });

    this.$contact.click(function () {
        $(this).children().toggleClass("hidden");
        self.$contactList.slideToggle();
    });

    $.each(this.sectionCtrls, function(name, section) {
        $(this).click(function () {
            self.activeContent.detach();
            self.activeTitle.detach();
            self.activeContent = self.sectionContents[name];
            self.activeTitle = self.sectionTitles[name];
            if(!self.activeContent.loaded) {
                self.activeContent.load(name + ".html");
                self.activeContent.loaded = true;
            }
            self.$titles.append(self.activeTitle);
            self.$contents.append(self.activeContent);
        });
    });

    $(window).resize(function () {
        var width = $(this).width();
        
        if(width < 900) {
            if(width < 700) {
                self.$subtitle.addClass("hidden");
            } else {
                self.$subtitle.removeClass("hidden");
            }
            self.$header.css("margin-left", "-" + width / 2 + "px");
            self.$title.css("font-size", width / 11.25 + "pt");
            self.$contactList.css("right", "0px");
            self.$sectionList.addClass("mobile").removeClass("normal");
        } else {
            if(width < 1200) {
                self.$sectionList.addClass("mobile").removeClass("normal");
            } else {
                self.$sectionList.addClass("normal").removeClass("mobile");
                self.$sectionList
                    .css("left", (width - 900) / 2 - self.$sectionList.width());
            }
            self.$header.css("margin-left", "-450px");
            self.$title.css("font-size", "80pt");
            self.$contactList.css("right", (width - 900) / 2);
        }
        
        $("#shadow").css("left", (width - $("#shadow").width()) / 2);
    });

    $("body")[0].addEventListener ("overflowchanged", function() {
        var width = $(window).width();

        $("#shadow").css("left", (width - $("#shadow").width()) / 2);
        self.$contactList.css("right", (width - 900) / 2);
        self.$sectionList.css("left", (width - 900) / 2 - self.$sectionList.width());
    }, false);

    this.activeContent = this.sectionContents.about;
    this.activeTitle = this.sectionTitles.about;
    this.sectionCtrls["about"].click();
        
    $(window).resize();
};
