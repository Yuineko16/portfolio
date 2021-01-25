
$(function(){
    /*-----------------------------------------------------------------------
    メニュー
    画面幅が800pxより大きい時は,スライドメニュー
    */

    var dis = 300;  //スライドメニューによる移動距離
    var devith_mobile = 800;

    $(window).resize(function(){
        var device_width = $(window).width();
    });


    //buttonをクリックで作動
    $(".menu-button").click(function(){

        if(window.matchMedia('(min-width: 800px)').matches){
            /*スライドメニューの実装*/
            $(".main-content").animate({"margin-left": "+="+dis+"px"},200);
            $(".main-word").animate({"margin-left": "+="+dis*3+"px"},200);
            $(".main-nav").animate({"margin-left": "+="+dis+"px"},200);
            dis *= -1;
            $(this).toggleClass('active');
        }
        else{
        //グローバルナビゲーションの実装

            $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
            $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
              
            $("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
                  $(".menu-button").removeClass('active');//ボタンの activeクラスを除去し
                  $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
              });

        }
        
    });

     /*-----------------------------------------------------------------------
    読み込み画面の非表示*/  
    window.onload = ()=>{
        const loader = document.getElementById('loader');
        loader.classList.add('loaded');
    }

     /*-----------------------------------------------------------------------
    ページのスクロール(works)*/  
    $('#works-link a[href*="#"]').click(function () {
        var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
        var pos = $(elmHash).offset().top;  //idの上部の距離を取得
        $('body,html').animate({scrollTop: pos-60+"px"}, 1000); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
        return false;
      });


})