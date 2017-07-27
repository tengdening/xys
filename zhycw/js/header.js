(function nav_btn_click(){
    var nav_btn=$(".nav_btn");
    var flag=true;
    nav_btn.click(function(){
        if(flag){
            flag=false;
            $(".nav_btn i:first-child").attr("class","active");
            $(".nav_btn i:last-child").attr("class","active");
            $(".nav_son_box").css("display","block");
        }else{
            $(".nav_btn i:first-child").attr("class","");
            $(".nav_btn i:last-child").attr("class","");
            $(".nav_son_box").css("display","none");
            flag=true;
        }
    });
    var nav_box_li=$(".nav_box li");
    nav_box_li.click(function(){
        $(".nav_son_box").css("display","block");
        $(".nav_btn i:first-child").attr("class","active");
        $(".nav_btn i:last-child").attr("class","active");
        flag=false;
    });
    var nav_two_li=$(".nav_two li");
    nav_two_li.click(function(){
        $(".nav_son_box").css("display","none");
        $(".nav_btn i:first-child").attr("class","");
        $(".nav_btn i:last-child").attr("class","");
        flag=true;
    });
    var nav_two_qx=$(".nav_two_qx");
    nav_two_qx.click(function(){
        $(".nav_son_box").css("display","none");
        $(".nav_btn i:first-child").attr("class","");
        $(".nav_btn i:last-child").attr("class","");
        flag=true;
    })
})();