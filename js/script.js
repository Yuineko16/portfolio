$(function () {
    /*-----------------------------------------------------------------------
   ページのスクロール*/
    var loader = $('.loader-wrapper');

    //ページの読み込みが完了したらアニメーションを非表示
    $(window).on('load', function () {
        loader.fadeOut();
    });
    //ページの読み込みが完了してなくても3秒後にアニメーションを非表示にする
    setTimeout(function () {
        loader.fadeOut();
    }, 3000);


    /*-----------------------------------------------------------------------
    スライドメニュー*/
    var dis = 300;  //スライドメニューによる移動距離
    var device_width = $(window).width();
    var device_mobile = 900;
    var menu_active = 1;    //1のとき閉じた状態、-1のとき開いた状態

    $(window).resize(function () {
        //画面の大きさを変更した場合の処理
        if (window.matchMedia('(min-width:' + device_mobile + 'px)').matches) {
            //PC用
            $(".main-nav").css("left", "0");
            if (menu_active == 1) {
                //メニューが閉じているとき
                $(".main-nav").css("margin-left", "-300px");
            }
        }
        else {
            //スマホ用
            if (menu_active == 1) {
                //メニューが閉じているとき
                $(".main-nav").css("margin-left", "-100%");
            }
            else {
                //メニューが開いているとき
                $(".main-nav").css("left", "0");
            }
        }
        device_width = $(window).width();
    });

    //buttonをクリックで作動
    $(".menu-button").click(function () {
        /*スライドメニューの実装(画面幅によってメニューの表示を変更する)*/
        if (window.matchMedia('(min-width:' + device_mobile + 'px)').matches) {
            $(".main-nav").animate({ "margin-left": "+=" + dis * menu_active + "px" }, 200);
            menu_active *= -1;
            $(this).toggleClass('active');
        }
        else {
            $(".main-nav").animate({ "margin-left": "+=" + device_width * menu_active + "px" }, 200);
            menu_active *= -1;
            $(this).toggleClass('active');
        }
    });


    /*-----------------------------------------------------------------------
   ページのスクロール*/
    $('#link a[href*="#"]').click(function () {
        var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
        var pos = $(elmHash).offset().top;  //idの上部の距離を取得

        //取得した位置にスクロール(画面幅によってスクロール位置を変更する)
        if (window.matchMedia('(min-width:' + device_mobile + 'px)').matches) {
            $('body,html').animate({ scrollTop: pos - 65 + "px" }, 1000);
        }
        else {
            $('body,html').animate({ scrollTop: pos - 10 + "px" }, 1000);
        }
        return false;
    });
})
