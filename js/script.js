$(function () {
    /*-----------------------------------------------------------------------
   ページのスクロール*/
    var loader = $('.loader-wrapper');

    //ページの読み込みが完了したらアニメーションを非表示
    $(window).on('load', function () {
        loader.fadeOut();
    });
    //ページの読み込みが完了してなくても4秒後にアニメーションを非表示にする
    setTimeout(function () {
        loader.fadeOut();
    }, 4000);


    /*-----------------------------------------------------------------------
    スライドメニュー*/
    var dis = 300;  //スライドメニューによる移動距離
    var device_width = $(window).width();
    var device_mobile = 900;
    var menu_close = 1;    //1のとき閉じた状態、-1のとき開いた状態

    $(window).resize(function () {
        //画面の大きさを変更した場合の処理
        if (window.matchMedia('(min-width:' + device_mobile + 'px)').matches) {
            //PC用
            $(".main-nav").css("left", "0");
            if (menu_close == 1) {
                //メニューが閉じているとき
                $(".main-nav").css("margin-left", "-300px");
            }
        }
        else {
            //スマホ用
            if (menu_close == 1) {
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
            $(".main-nav").animate({ "margin-left": "+=" + dis * menu_close + "px" }, 200);
            menu_close *= -1;
            $(this).toggleClass('active');
        }
        else {
            $(".main-nav").animate({ "margin-left": "+=" + device_width * menu_close + "px" }, 200);
            menu_close *= -1;
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

    /*-----------------------------------------------------------------------
   要素のフェードインのアニメーション*/
    $(window).on('load scroll',function (){
		$('.topic').each(function(){
			//ターゲットの位置を取得
			var target = $(this).offset().top;
			//スクロール量を取得
			var scroll = $(window).scrollTop();
			//ウィンドウの高さを取得
            var height = $(window).height();
            //フェードインしているかどうかの判定
            var isFeedin = false;

			//ターゲットまでスクロールするとフェードインする
			if ((scroll > target - height + 200) && (isFeedin==false)){
				//クラスを付与
                $(this).addClass('active');
                isFeedin = true;
            }

            //ターゲットを超えてスクロールするとフェードアウトする
            if ((scroll < target - height -200)||((scroll > target + 700)) && isFeedin){
                //クラスを外す
                console.log("topic");
                $(this).removeClass('active');
                isFeedin = false;
            }   
            
		});
    });
})
