
$(function(){
    /*-----------------------------------------------------------------------
    メニュー
    画面幅が800pxより大きい時は,スライドメニュー
    */
    var dis = 300;  //スライドメニューによる移動距離
    var device_width = $(window).width();
    var device_mobile = 900;
    var menu_active = 1;    //1のとき閉じた状態、-1のとき開いた状態
    var width_PC = 1;  //1のときPC画面、-1のときモバイル画面

    $(window).resize(function(){
        //メニューが開いたままで画面の大きさを変更した場合の処理
        if(window.matchMedia('(min-width:'+ device_mobile +'px)').matches)
        {
            //PC用
            $(".main-nav").css("left", "0");
            if(menu_active==1){
                //メニューが閉じているとき
                $(".main-nav").css("margin-left", "-300px");
            }
        }
        else{
            //スマホ用
            if(menu_active==1)
            {
                //メニューが閉じているとき
                $(".main-nav").css("margin-left", "-100%");
            }
            else{
                //メニューが開いているとき
                $(".main-nav").css("left", "0");

            }
        }
        device_width = $(window).width();
    });


    //buttonをクリックで作動
    $(".menu-button").click(function(){
        /*スライドメニューの実装*/
        if(window.matchMedia('(min-width:'+ device_mobile +'px)').matches){
            $(".main-nav").animate({"margin-left": "+="+ dis*menu_active +"px"},200);
            menu_active *= -1;
            $(this).toggleClass('active');
            width_PC = 1;
        }
        else{
            $(".main-nav").animate({"margin-left": "+="+ device_width*menu_active +"px"},200);
            menu_active *= -1;
            $(this).toggleClass('active');
            width_PC = 0;
        }
    });


     /*-----------------------------------------------------------------------
    ページのスクロール(works)*/  
    $('#works-link a[href*="#"]').click(function () {
        var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
        var pos = $(elmHash).offset().top;  //idの上部の距離を取得
        $('body,html').animate({scrollTop: pos-65+"px"}, 1000); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
        return false;
      });


})
