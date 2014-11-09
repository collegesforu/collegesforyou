function popitup(a) {
    newwindow = window.open(a, "name", "height=500,width=750");
    window.focus && newwindow.focus();
    return !1
}
function share_facebook() {
    u = location.href;
    t = document.title;

    url = "http://www.facebook.com/share.php?u=" + encodeURIComponent(u) + "&t=" + encodeURIComponent(t);
    popitup(url);


}
function share_twitter() {
    u = location.href;
    t = document.title;
    url="http://twitter.com/home?status=" + encodeURIComponent(u);
    popitup(url);
}

$(document).ready(function(){

    $(".share-fb").click(function(e){
        e.preventDefault();

        share_facebook();
    });
    $(".share-tw").click(function(e){
        e.preventDefault();
        share_twitter();
    });
    $('#embed_link').click(function(){
        /*$('#myModal').modal('show');*/

        if($("#content-embed").is(":visible")) {
            $("#content-embed").hide();
        } else {
            $("#content-embed").show();
        }

    });

});


