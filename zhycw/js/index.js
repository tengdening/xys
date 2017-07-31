var two_li = $(".two_li");
var one_li = $(".one_li");
var three_li = $(".three_li");
if (window.innerWidth <= 1000 && window.innerWidth >= 768) {
    if (two_li.height() > one_li.height()) {
        var cha = two_li.height() - one_li.height();
        three_li.css("margin-top", "-" +cha + "px");
    }else{
        three_li.css("margin-top", "");
    }

}else{
    three_li.css("margin-top", "");
}

