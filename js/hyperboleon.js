var hyperboleon = {
    $header: $("header"),
    $footer: $("footer"),
    $title: $("#title"),
    $titles: $("#titles"), //rename me
    $contents: $("#content"), //rename me
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
        self.$title.css("font-size", $(this).width() < 900 ?
                        $(this).width() / 11.25 + "pt" : "80pt");
    });

    this.activeContent = this.sectionContents.about;
    this.activeTitle = this.sectionTitles.about;
    this.sectionCtrls["about"].click();
    
    $(window).resize();
};
