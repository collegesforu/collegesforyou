/**
 * Created by Administrator on 3/19/14.
 */

var Toolbar = Class.extend({
    init : function() {
        this.addEvent();
    },
    addEvent : function() {
        var tb = this;

        $('.share').click(function() {
            _gaq.push(['_trackEvent', 'Share Dialog', 'Open','Open Share' ]);
            tb.showModal(this);
            return false;
        });
        $('#myTab a').click(function (e) {
            e.preventDefault()
            $(this).tab('show')
        });
        $('#video').click(function() {
            $("#modalvideo").modal("show");
            return false;
        });
        /*$('.icon-embed-link').click(function() {
            $("#myVisualThumbnailEmbed").show();
            return false;
        });*/
        $('.contact-form').click(function() {
            $("#modalcontact").modal("show");
            return false;
        });
        $('.sendcontact').click(function(){
            var email=$('#email').val();
            var name=$('#name').val();
            var subject=$('#subject').val();
            var message=$('#message').val();
            tb.sendcontact(email,name,subject,message);
            return false;

        });
        $('#sendidea').click(function(){
            var email_idea=$('#email_idea').val();
            var describe=$('#describe').val();
            var idea=$('#idea').val();

            tb.sendidea(email_idea,describe,idea);
            return false;

        });
        $('#delete').click(function() {

            var easelname=$("#easelname").val();
            var easeluser=$("#easeluser").val();
            var easellink=$("#easellink").val();
            tb.deleteVisual(easelname,easeluser,easellink);
            return false;


        });
        $('.shareoption').click(function(){
            var id=$('#idshare').val();
            var ispublic=$(this).val();
            console.log(ispublic);
            tb.setShare(id,ispublic);
            return true;

        });

    },

    setShare:function(id,ispublic){
        var data={
            id:id,
            ispublic:ispublic
        }

        $.ajax({

            type: "POST",
            url: document.location+"index/shareOption/",
            dataType: "text",
            data: data,
            success:function (data) {
                console.log(data);
                //window.location.reload(true);



            }
        });

    },
    sendcontact:function(email,name,subject,message){
        var data={
            email:email,
            name:name,
            subject:subject,
            message:message
        }
        $.ajax({
            type:"POST",

            url: document.location+"index/sendContact/",
            dataType: "json",
            data: data,
            success:function (data) {


             $('#result').html(data.msg);
             $("#modalcontact").modal("hide");

            }
        });
    },
    sendidea:function(email_idea,describe,idea){
        var data={
            email_idea:email_idea,
            describe:describe,
            idea:idea
        }
        $.ajax({
            type:"POST",

            url: document.location+"index/sendIdea/",
            dataType: "json",
            data: data,
            success:function (data) {


                $('#result').html(data.msg);
                $("#modalcontact").modal("hide");

            }
        });
    },
    deleteVisual : function( easelname,easeluser,easellink){
        var data={
            easelname:easelname,
            easeluser:easeluser,
            easellink:easellink
        };
        $.ajax({
            type: "POST",
            url: document.location+"index/deleteVisual/",
            dataType: "text",
            data: data,
            success:function (data) {
                window.location.reload(true);

            }
        });
    },

    showModal : function(element){
        /*var domain='http://192.168.1.89/easel_new/';*/

        $('#myVisualThumbnailEmbed').hide();
        $('#btn_delete').show();
        var height=$(window).height();
        var top=(height*5)/100;
        var header=top+20;
        var max=height-top-header-130;
        $('.content-left').css('max-height',max+'px');
        $('.modal-body').css('max-height',max+'px');
        var id = $(element).attr("dataid");
        var type=$(element).attr("datatype");
        var share=$(element).attr("datashare");
        var data = {
            id : id,
            type : type
        };
        var url= domain+"index/gettheme/";
            $.ajax({
                type: "GET",
                url:url,
                dataType: "text",
                data: data,
                success:function (data) {

                    var JSONArray = $.parseJSON(data);

                    var easel=JSONArray[0]['easel'];
                    var userid=JSONArray[0]['userid'];
                    var canvasname=JSONArray[0]['canvasname'];
                    /*var hight_res=JSONArray[0]['hight_res'];*/
                    if(userid=='easel.ly'||userid=='songs'){
                        var visual=easel+'full.png';
                        var download=easel+'easelly_visual.png';
                        /*var download_hight_res=easel+'easelly_visual_height-res.jpg';*/
                        /*var download_pdf=easel+'easelly_visual.pdf';*/
                        var web=domain+'index/webLink?link='+easel+'&type=pub';
                        var browser=domain+'index/viewBrowser?link='+easel+'&type=pub';
                        var title=JSONArray[0]['canvasname'];
                        var title1=JSONArray[0]['canvasname'];
                        /*var embed_link='<a href="'+visual+'"/><img src="'+visual+'" alt="undefined title="easel.ly" /></a><br /><a href="http://easel.ly" style="text-align:left;" align="left">easel.ly</a>';*/
                        var embed_link=domain+'index/embedLink?link='+easel+'&type=pub&canvasname='+title1;
                       /* var update_hight=document.location+"create?id="+easel+"&key=pub";*/
                        title=title.substr(0,25);

                    }
                    else{
                        var visual=easel+'/image.jpg';
                        var download=easel+'/easelly_visual.jpg';
                       /* var download_hight_res=easel+'/easelly_visual_height-res.jpg';*/
                      /*  var download_pdf=easel+'/easelly_visual.pdf';*/
                        var web=domain+'index/webLink?link='+easel+'&type=pri';
                        var browser=domain+'index/viewBrowser?link='+easel+'&type=pri';
                        var title=JSONArray[0]['canvasname'];
                        title=title.substr(0,25);
                        var easelname=canvasname;
                        var easeluser=userid;
                        var easellink=easel;
                       /* var embed_link='<a href="'+visual+'"/><img src="'+web+'" alt="'+canvasname+' title="easel.ly" /></a><br /><a href="http://easel.ly" style="text-align:left;" align="left">easel.ly</a>';*/
                        var embed_link=domain+'index/embedLink?link='+easel+'&type=pri&canvasname='+easelname;
                        /*var update_hight=document.location+"create?id="+easel+"&key=pri";*/
                        var public =JSONArray[0]['isPublic'];


                    }

                if((type=='pub')||((type=='pri')&& (JSONArray[0]['isPublic']==1)&&(share==1))){
                    $('#btn_delete').hide();
                  /*  $('#pdf').hide();*/
                    $('#ispublic').hide();
                    //$('#hight_res_link').hide();
                }
                if((type=='pri')&&(share==0)){
                    $('#ispublic').show();
                   /* $('#pdf').show();*/
                    //$('#hight_res_link').show();
                }
                /*if(hight_res==0){
                    $('#hight_res_link').hide();





                    $('#update_hight_res_link').show();
                }
                if(hight_res==1){
                    $('#hight_res_link').show();
                    $('#update_hight_res_link').hide();
                }*/
                if(public==0){

                    $('#radPrivate').prop("checked", true);
                }
                if(public==1){

                    $('#radPublic').prop("checked", true);
                }
                $('#VisualThumbnail img').attr('src',visual);
                $('#download_link').attr('href',download);
                /*$('#pdf_link').attr('href',download_pdf);*/
                /*$('#hight_res_link').attr('onclick',"window.location.href="+"'"+download_hight_res+"'");
                $('#update_hight_res_link').attr('onclick',"window.location.href="+"'"+update_hight+"'");*/
                $('#browser_link').attr('href',browser);
                $('#web_link').attr('href',web);
                $('#embeb_link').attr('href',embed_link);

                    $('#btn-facebook').attr('share-url',browser);
                    $('#btn-facebook').attr('share-img-url',visual);
                    $('#btn-twitter').attr('share-url',browser);
                    $('#btn-pinterest').attr('share-url',browser);
                    $('#btn-pinterest').attr('share-img-url',visual);

                /*$("#title span").text(title);*/
                $("#idshare").attr('value',id);
                $('#easelname').attr('value',easelname);
                $('#easeluser').attr('value',easeluser);
                $('#easellink').attr('value',easellink);

                $("#myVisualThumbnailEmbed").html(embed_link);


                },
                error:function (a,b,c) {
                    alert(a+b+c);
                }
       });


        $("#myModal").modal("show");



    }


});
