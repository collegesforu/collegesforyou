/**
 * Created by Administrator on 3/19/14.
 */
var tb = new Toolbar();

/**
 * Custome function
 * data {name,  image, id, type, linkCreate}
 */

function createBlogVisual(data) {
    var blogVisualElement = $(document.createElement("div"));
    blogVisualElement.addClass("block-visual");

    var contentImageElement = $(document.createElement("div"));
    contentImageElement.addClass("content-image");

    var hrefElement = $(document.createElement("a"));
    hrefElement.attr({
        href : (data.linkCreate ? data.linkCreate : "#")
    });



    var imageElement = $(document.createElement("img"));
    imageElement.attr({
        src : data.image
    });

    hrefElement.append(imageElement);
    contentImageElement.append(hrefElement);
    blogVisualElement.append(contentImageElement);




    var contentBlogElement = $(document.createElement("div"));
    contentBlogElement.addClass("content-block");


    var contentBlogLeft = $(document.createElement("div"));
    contentBlogLeft.addClass("content-left");

    var visualNameElement = $(document.createElement("div"));
    visualNameElement.addClass("visual-name");

    var hrefElement2 = $(document.createElement("a"));
    hrefElement2.attr({
        href : (data.linkCreate ? data.linkCreate : "#")
    });
    hrefElement2.html(data.name);

    visualNameElement.append(hrefElement2);
    contentBlogLeft.append(visualNameElement);

   /* var visualCategoryElement = $(document.createElement("div"));
    visualCategoryElement.addClass("visual-category");

    var hrefElement3 = $(document.createElement("a"));
    hrefElement3.attr({
        href : "#"
    });
    hrefElement3.html("Infographic Category");

    visualCategoryElement.append(hrefElement3);
    contentBlogLeft.append(visualCategoryElement);*/
    contentBlogElement.append(contentBlogLeft);


    var contentBlogRightElement = $(document.createElement("div"));
    contentBlogRightElement.addClass("content-right");

    var visualShareElement = $(document.createElement("div"));
    visualShareElement.addClass("visual-share");

    var hrefElement4 = $(document.createElement("a"));
    hrefElement4.attr({
        dataid      : data.id,
        datatype      : data.type,
        datashare   : data.share,
        href        : '#'
    });
    hrefElement4.addClass("share");

    var imageElement2 = $(document.createElement("img"));
    /*var domain="http://192.168.1.89/easel_new/";*/
    imageElement2.attr({
        src : domain+"template/img/link-icon.png"
    });

    hrefElement4.append(imageElement2);

    var spanElement = $(document.createElement("span"));
    spanElement.html("SHARE");
    hrefElement4.append(spanElement);

    visualShareElement.append(hrefElement4);
    contentBlogRightElement.append(visualShareElement);
    contentBlogElement.append(contentBlogRightElement);

    blogVisualElement.append(contentBlogElement);


    return blogVisualElement;

}

function checkIE() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0)  {
        return true;
    }
    return false;
}

