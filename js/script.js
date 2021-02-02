@charset "UTF-8";
@font-face {
	font-family: 'Haettenschweiler';
	src: url(../fonts/HATTEN.TTF);
}
@font-face {
	font-family: 'Agency FB';
	src: url(../fonts/AGENCYR.TTF);
}
@font-face{
  font-family: 'Noto Sans JP M';
  src: url(../fonts/NotoSansJP-Medium.otf);
}
@font-face{
  font-family: 'Noto Sans JP L';
  src: url(../fonts/NotoSansJP-Light.otf);
}

body{
  font-family: "Noto Sans JP L",sans-serif;
  line-height: 1.7;
  color: #000
}
a{
	color: #000;
  text-decoration: none;
}

p{
  font-size: 18px;
}

li{
  list-style-type: none;
}

h2{
  font-family: "Agency FB";
  text-transform: uppercase;  /*すべての文字を大文字にする*/
  font-size: 60px;
  text-align: center;
  margin-bottom: 0;
}

h3{
  font-family: "Noto Sans JP M";
  font-size: 22px;
}

strong{
  font-family: "Noto Sans JP M";
  background: linear-gradient(transparent 85%, #ccc 80%);
}


/*読み込み画面(参考サイト：https://projects.lukehaas.me/css-loaders/)
-------------------------------------------------------------------------------*/
.loader,
.loader:before,
.loader:after {
  background: #fff;
  -webkit-animation: load1 1s infinite ease-in-out;
  animation: load1 1s infinite ease-in-out;
  width: 1em;
  height: 4em;
}
.loader {
  color: #fff;
  text-indent: -9999em;
  margin: 88px auto;
  position: relative;
  font-size: 11px;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}
.loader:before,
.loader:after {
  position: absolute;
  top: 0;
  content: '';
}
.loader:before {
  left: -1.5em;
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}
.loader:after {
  left: 1.5em;
}

.loader-wrapper{
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #000;
  top :0;
  left: 0;
  z-index: 9999;
}

@-webkit-keyframes load1 {
  0%,
  80%,
  100% {
    box-shadow: 0 0;
    height: 4em;
  }
  40% {
    box-shadow: 0 -2em;
    height: 5em;
  }
}
@keyframes load1 {
  0%,
  80%,
  100% {
    box-shadow: 0 0;
    height: 4em;
  }
  40% {
    box-shadow: 0 -2em;
    height: 5em;
  }
}



/*スライドメニュー
-------------------------------------------------------------------------------*/
.main-nav{
  background: #000;
  position: fixed;
  top: 60px;
  bottom: 0;
  width: 300px;
  margin-left: -300px;
  padding-top: 40px;
  text-transform: uppercase;
  z-index: 999;
  opacity: 0.9;
}

.main-nav a{
  color: #fff;
  font-family: "Agency FB";
  font-size: 40px;
  margin-left: 40px;
  margin-top: 30px;
}

/*ハンバーガーメニュー
-------------------------------------------------------------------------------*/
/*ボタン外側*/
.menu-buttonPos{
  z-index: 1000;
  margin-top: 5px;
  margin-right: 5px;
}

.menu-button{
	position: relative;
	background:#000;
	cursor: pointer;
  width: 50px;
  height: 50px;
  border-radius: 5px;
}

/*ボタン内側*/
.menu-button span{
  display: inline-block;
  transition: all .4s;  /*アニメーションの設定*/
  position: absolute;
  left: 14px;
  height: 3px;
  border-radius: 2px;
	background: #fff;
  width: 45%;
}

.menu-button span:nth-of-type(1) {
	top:15px;	
}

.menu-button span:nth-of-type(2) {
	top:23px;
}

.menu-button span:nth-of-type(3) {
	top:31px;
}

/*activeクラスが付与されると1・3番目の要素が2番目の要素と同じ位置になり一本線に変化*/
.menu-button.active span:nth-of-type(1) ,
.menu-button.active span:nth-of-type(3){
  top: 23px;
}


/*header
-------------------------------------------------------------------------------*/
.logo{
  width:60px;
  margin-left: 45px;
  position: absolute;
  top: 0;
  left: 0;
}

header{
  position: fixed;
  width: 100%;
}

.page-header{
  display: flex;
  justify-content: flex-end;
  background-color: #000;
  height: 60px;
  z-index: 99;
}

.header-nav{
  display:flex;               /*メニューを横並びに表示*/
  text-transform: uppercase;  /*すべての文字を大文字にする*/
  margin-right: 30px;
  list-style: none;           /*リストの先頭のマーカーを無くす*/
}

.header-nav li{
  margin-left:36px;
}

.header-nav a{
  color: #fff;
  font-family: "Agency FB";
  font-size: 35px;
  margin-left: 20px;
}


/*footer
-------------------------------------------------------------------------------*/
.page-footer{
  height: 50px;
  width: 100%;
  background: #000;
  text-align: center;
  padding-top: 10px;
}

.page-footer p{
  font-family: 'Philosopher',serif;
  color: #fff;
  font-size: 0.875rem;
}


/*メイン画像
-------------------------------------------------------------------------------*/
.main{
  height: 130px;
}

.main-pic{
  height: 300px;
}

#home .main-pic{
  background-image: url(../images/home.png),linear-gradient(#ff006f,#f7c6bd);
  background-blend-mode: hard-light;
}
#works .main-pic{
  background-image: url(../images/works.png),linear-gradient(#1479b3,#83ffea);
  background-blend-mode: hard-light;
}
#blog .main-pic{
  background-image: url(../images/blog.png),linear-gradient(#e77000,#fdfacc);
  background-blend-mode: hard-light;
}
#contact .main-pic{
  background-image: url(../images/blog.png),linear-gradient(#1bca47,#92c8dd);
  background-blend-mode: hard-light;
}

.main-word{
  font-family: 'Haettenschweiler';
  text-transform: uppercase;  /*すべての文字を大文字にする*/
  font-size: 180px;
  text-align: right;
  margin-right: 20px;
  letter-spacing: 0.3rem;
}


/*各ページ共通のもの
-------------------------------------------------------------------------------*/
.index{
	width: 450px;
	margin: 0 auto 120px;
  padding: 30px 0;
  border-top: 6px solid #000;
  border-bottom: 6px solid #000;
}
.index li{
  font-size: 60px;
  font-family: "Agency FB";
  text-transform: uppercase;  /*すべての文字を大文字にする*/
  font-weight: bold;
  text-align: center;
}

/*リンク選択時に線が伸びる描写*/
.main-nav li a,
.header-nav li a,
.index li a{
  position: relative;
}

.main-nav li a::after,
.header-nav li a::after,
.index li a::after{
  content: '';
  position: absolute;   /*hover時アニメーションの基点*/
  left: -20%;
  top: 50%;

  /*線のスタイル*/
  width: 140%;
  height: 3px;
  background: #fff;

  /*アニメーションの設定*/
  transition: all .1s;
  transform: scale(0,1); /*x方向に0, y方向に1*/
  transform-origin: center top; /*上部中央を基点に*/
}

.index li a::after{
  /*線のスタイル*/
  height: 4px;
  background: #000;
}

.main-nav li a:hover::after,
.header-nav li a:hover::after,
.index li a:hover::after {
    transform: scale(1, 1);/*X方向にスケール拡大*/
}


.topic{
  margin-top: 40px;
  margin-bottom: 150px;

  /*ここからフェードインアニメーションの記述*/
  opacity: 0;         
  visibility: hidden;
	transition: 1.5s;
  transform: translateY(60px);
}

.topic-title{
  font-size: 85px;
}

.topic.active{
	opacity: 1;
	visibility: visible;
  transform: translateY(0);
  /*ここまでフェードインアニメーションの記述*/
}


#home .topic a{
  color: #ff006f;
}
#works .topic a{
  color: #12a9c4;
}
#blog .main-content a{
  color: #6a6a6a;
}
#blog .main-content a:hover{
  color: #e77000;
}



.blank{
  height: 150px;
}

.main-content{
  z-index: 0;
}


/*ホーム
-------------------------------------------------------------------------------*/
.plofile{
  display: flex;  /*flexboxの指定*/
  justify-content: center;
  align-items: center;
  margin-top: 30px;
}

.icon{
  height: 250px;
	border-radius: 50%;
}

.plofile-name{
  font-family: 'Noto Sans JP M';
  font-size: 30px;
  font-weight: bold;
  margin-right: 20px;
}
.plofile-body{
  font-size: 15px;
  margin-left: 50px;
}
.plofile-myinfo{
  display: flex;  /*flexboxの指定*/
  margin-bottom: 10px;
  justify-content: flex-start;
  align-items: center;
}

.top-content{
  text-align: center;
  margin: 0 auto;
  z-index: 0;
}

/*ワークス
-------------------------------------------------------------------------------*/
.img-works{
  border: 5px solid #000; 
  border-radius: 1.5%;
}
.img-works-gr{
  text-align: center;
  margin: 20px auto 30px;
}
.works-content{
  text-align: center;
  width: 900px;
  margin: 0 auto;
}

.works-title{
  text-align: left;
  padding-left: 50px;
}

.img-web01{
  width: 650px;
}
.img-web02{
  width: 180px;
}
.img-game01{
  width: 830px;
}

.game-content{

}

.game-wrapper{
  text-align: center;
}

.game-info{
  margin: 0 auto;
  width: 875px;
  text-align: left;
}


.game01{
  width: 875px;
  height: 500px;
  border: 6px solid #000;
  border-radius: 1.5%;
}


/*ブログ
-------------------------------------------------------------------------------*/
.blog-contents{
	display: flex;
	justify-content: space-between;
  margin-left: 20px;
}

article{
  width: 75%;
  margin-bottom: 50px;
}

.post-info{
	position: relative;
	padding-top: 10px;
	margin-bottom: 30px;
	padding: 10px 0;
	border-top: 2px solid #000;
  border-bottom: 2px solid #000;
}
.post-title a{
  display: block;
}


.post-date{
  font-family: "Noto Sans JP M";
	margin-left: 20px;

	background: #000;
	color: #fff;
	width: 80px;
	height: 80px;
	font-size: 18px;
	text-align: center;

	position: absolute;
	top: 0;
	padding-top: 10px;
}

.post-date span{
	font-size: 18px;
	border-top: 2.5px #fff dashed;
	display: block;
	width: 60%;
	margin: 0 auto;
}

.post-title,
.post-cat{
	margin-left: 110px;
}

.post-image-wrapper{
  text-align: center;
  margin: 20px 0;
}

.post-body{
  margin-top: 10px;
}

.post-body p{
  font-size: 20px;
}

.post-image{
  width: 92%;
}

.post-footer{
  margin-top: 60px;
}

footer .post-cat{
  text-align: right;
  margin-bottom: 20px;
}

.post-page{
  border-top: #000 1px solid;
  border-bottom: #000 2.5px solid;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.post-next,
.post-prev{
  background-color: #fff;
  width: 50%;
  display: block;
}
.post-next{
   padding-left: 40px;
}
.post-prev{
  text-align: right;
  padding-right: 40px;
}

.column-line{
  height: 60px;
  width: 1px;
  background-color: #000;
}


aside{
  font-size: larger;
  width: 20%;
  padding-right: 10px;
  margin-bottom: 50px;
}

aside h3{
  background-color: #000;
  border-radius: 2%;
  color: #fff;
  margin-bottom: 15px;
  padding: 10px 0 10px 10px;
}

.category li{
  margin: 5px 0;
  padding-left: 10px;
  border-bottom: #000 1px solid;
}



/*メディアクエリ
-------------------------------------------------------------------------------*/
/*スマホ・タブレット用配置*/
@media screen and (max-width: 900px){

  p{
    font-size: 14px;
  }
  h2{
    font-size: 40px;
  }

  .topic{
    margin-top: 20px;
    margin-bottom: 80px;
  }
  .index{
    padding: 40px 0;
    width: 200px;
    border-top: 5px solid #000;
    border-bottom: 5px solid #000;
  }

  .index li{
    margin : -20%;
  }


  .index li a{
    font-size: 45px;
  }

  .topic-title{
    font-size: 60px;
  }


  /*HEADER------------------------------------*/
  header{
    position: static;
  }

  .logo{
    position: static;
    margin-top: 10px;
    width: 50px;
    margin-left: 20px;
  }
  .header-nav{
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }
  .header-nav a{
    font-size: 30px;
  }
  .header-nav li{
    margin: 0 15px 20px;
  }
  .page-header{
    flex-direction: column; /*flexboxで縦並びに*/
    justify-content: center;
    align-items: center;
    padding-top: 40px;
    margin: 0;
    height: 150px;
  }

  .menu-buttonPos{
    position: fixed;
    top: 10px;
    right: 15px;
  }


  /*menu-----------------------------------------*/
  .main-nav{
    top: 0;    
    width: 100%;
    margin-left: -100%;
    padding-top: 200px;
  }
  
  .main-nav a{
    font-size: 50px;
    margin-left: 60px;
    margin-top: 30px;
  }  

  
  /*main-----------------------------------------*/
  .main{
    height: 50px;
  }
  .main-pic{
    height: 120px;
    width: 100%;
  }
  #home .main-pic{
    background-image: url(../images/home_mobile.png),linear-gradient(#ff006f,#f7c6bd);
    background-blend-mode: hard-light;
  }
  #works .main-pic{
    background-image: url(../images/works_mobile.png),linear-gradient(#1479b3,#83ffea);
    background-blend-mode: hard-light;
  }
  #blog .main-pic{
    background-image: url(../images/blog_mobile.png),linear-gradient(#e77000,#fdfacc);
    background-blend-mode: hard-light;
  }
  .main-word{
    font-size: 80px;
    margin-right: 10px;
    letter-spacing: -0.02rem;
  }
  

  /*plofile----------------------------------------*/
  .plofile{
    flex-direction: column;
    margin-top: 10px;
  }

  .icon{
    height: 150px;
    margin-bottom: 10px;
  }

  .plofile-name{
    font-size: 25px;
    font-weight: bold;
    margin-right: 0;
    margin-bottom: 10px;
  }
  .plofile-body{
    margin-left: 0;
    text-align: center;
  }
  .plofile-myinfo{
      flex-direction: column;
  }
  

  /*works-----------------------------------------*/
  .works-content{
    text-align: center;
    width: 95%;
  }

  .works-title{
    
    padding-left: 15px;
  }

  .img-works-gr{
    text-align: center;
    margin: 10px auto 20px;
  }

  .img-works{
    width: 85%;
  }

  .img-web01{
    width: 70%;
  }
  .img-web02{
    width: 25%;
  }
 

  .game-info{
    width: 90%;
  }

  .game01{
    width: 450px;
    height: 260px;
 }

  /*blog-----------------------------------------*/
  .blog-contents{
    flex-direction: column;
    margin: 0 auto;
    padding: 0;
    width: 95%;
  }

  article{
  width: 100%;
  }

  aside{
  width: 100%;
  padding-right: 0;
  }

  .post-date{  
    width: 70px;
    height: 70px;
    font-size: 17px;  

    padding-top: 5px;
    margin-left: 10px;
  }
  
  .post-date span{
    font-size: 17px;
    border-top: 2px #fff dashed;
  }

  .post-content p{
    font-size: 14px;
  }
}
