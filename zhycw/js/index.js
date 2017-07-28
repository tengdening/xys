var main_module = $(".main_module");
var news_left = $(".news_left");
var banner_box = $(".banner_box");
var entrance=$(".entrance");
if (window.innerWidth <= 1000 && window.innerWidth >= 768) {
// || (document.body.clientWidth <= 1024 && document.body.clientWidth >= 768)
    if (main_module.height() > news_left.height()) {
        var cha = main_module.height() - news_left.height();
        banner_box.css("margin-top", "-" + (cha - 10) + "px");
    }else{
        banner_box.css("margin-top", "");
    }
    if(main_module.height() > (news_left.height()+banner_box.height())){
        console.log(news_left.height()+banner_box.height())
        console.log(main_module.height())
        var emtramceCha=main_module.height() - news_left.height()-banner_box.height();
        entrance.css("margin-top","-"+(emtramceCha-10)+"px");
    }else{
        entrance.css("margin-top","");
    }
}else{
    banner_box.css("margin-top", "");
}
$(window).resize(function() {
    if (window.innerWidth <= 1000 && window.innerWidth >= 768) {
    // || (document.body.clientWidth <= 1000 && document.body.clientWidth >= 768)
        if (main_module.height() > news_left.height()) {
            var cha = main_module.height() - news_left.height();
            banner_box.css("margin-top", "-" + (cha - 10) + "px");
        }else{
            banner_box.css("margin-top", "");
        }
    }else{
        banner_box.css("margin-top", "");
    }
    if(main_module.height() > (news_left.height()+banner_box.height())){
        var emtramceCha=main_module.height() - news_left.height()-banner_box.height();
        entrance.css("margin-top","-"+(emtramceCha-10)+"px");
    }else{
        entrance.css("margin-top","");
    }
});
