var dir = "img/impressions/";
var fileextension = ".jpg";
$.ajax({
    url: dir,
    success: function (data) {
        $(data).find("a:contains(" + fileextension + ")").each(function () {
            var filename = this.href.replace(window.location.host, "").replace("http:///", "");
            $(".carousel-inner").append($("<div class=\"item active\"><img src=" + dir + filename + "></img></div>"));
        });
    }
});