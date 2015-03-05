var dir = "img/impressions/";
var fileextension = ".jpg";
$.ajax({
    //This will retrieve the contents of the folder if the folder is configured as 'browsable'
    url: dir,
    success: function (data) {
        //Lsit all jpg file names in the page
        $(data).find("a:contains(" + fileextension + ")").each(function () {
            var filename = this.href.replace(window.location.host, "").replace("http:///", "");
            $(".carousel-inner").append($("<div class=\"item active\"><img src=" + dir + filename + "></img></div>"));
        });
    }
});