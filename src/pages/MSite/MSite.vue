<template>
    <section class="msite">
      <!--首页头部-->
      <header class="header">
        <div class="header-top">
          <a href="javascript:;" class="logo"></a>
          <div class="search">
            <span class="iconfont icon-sousuo1"></span>
            <span class="text">搜索商品，共19914款好物</span>
          </div>
          <div class="login">登录</div>
        </div>


        <div class="header-wrap ">
          <div class="nav" id="nav">
            <ul class="navList list">
              <li class="item">推荐</li>
              <li class="item">居家</li>
              <li class="item">鞋包配饰</li>
              <li class="item">服装</li>
              <li class="item">电器</li>
              <li class="item">洗护</li>
              <li class="item">饮食</li>
              <li class="item">餐厨</li>
              <li class="item">婴童</li>
              <li class="item">文体</li>
            </ul>
          </div>

          <span class="iconfont icon-iconfontjiantou"></span>
        </div>
      </header>
      <!--轮播图-->
      <nav class="msite-nav">
        <div class="nav-swiper swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="https://yanxuan.nosdn.127.net/947479ba62a2ef4bababc8690cef0a80.jpg" alt="">
            </div>
            <div class="swiper-slide">
              <img src="https://yanxuan.nosdn.127.net/fda101d5e6beeb56d0ff8245139ff30b.jpg?imageView&quality=75&thumbnail=750x0" alt="">
            </div>
            <div class="swiper-slide">
              <img src="https://yanxuan.nosdn.127.net/941552e8196cf9e6151611713e4026e6.jpg?watermark&type=1&gravity=northwest&dx=0&dy=0&image=YTRhMmIzYmI1Y2I1YTc4ZGM5MmE3Nzk2NzAwYTFiNjgucG5n|imageView&quality=75&thumbnail=750x0" alt="">
            </div>
            <div class="swiper-slide">
              <img src="https://yanxuan.nosdn.127.net/5a2289149a59ca24ef2256674542e4cb.jpg?imageView&quality=75&thumbnail=750x0" alt="">
            </div>
            <div class="swiper-slide">
              <img src="https://yanxuan.nosdn.127.net/850c005113e5becbfd98d797b8a2101a.jpg?imageView&quality=75&thumbnail=750x0" alt="">
            </div>
          </div>

          <div class="swiper-pagination"></div>

        </div>
      </nav>
      <!--承诺-->
      <div class="commit">
        <ul class="list">
          <li class="item">
            <span class="iconfont icon-dui"></span>
             <span class="text">网易自营品牌</span>
          </li>
          <li class="item">
            <span class="iconfont icon-dui"></span>
            <span class="text">30天无忧退货</span>
          </li>
          <li class="item">
            <span class="iconfont icon-dui"></span>
            <span class="text">48小时快速退款</span>
          </li>
        </ul>
      </div>
      <!--分类-->
      <div class="classify">
        <ul class="clearfix list">
          <li>
            <img src="./images/1.png" alt="">
            <span>居家</span>
          </li>
          <li>
            <img src="./images/2.png" alt="">
            <span>鞋包配饰</span>
          </li>
          <li>
            <img src="./images/3.png" alt="">
            <span>服装</span>
          </li>
          <li>
            <img src="./images/4.png" alt="">
            <span>电器</span>
          </li>
          <li>
            <img src="./images/5.png" alt="">
            <span>婴童</span>
          </li>
          <li>
            <img src="./images/6.png" alt="">
            <span>饮食</span>
          </li>
          <li>
            <img src="./images/7.png" alt="">
            <span>洗护</span>
          </li>
          <li>
            <img src="./images/8.png" alt="">
            <span>餐厨</span>
          </li>
          <li>
            <img src="./images/9.png" alt="">
            <span>文体</span>
          </li>
          <li>
            <img src="./images/10.png" alt="">
            <span>超级会员</span>
          </li>
        </ul>
      </div>

      <!--内容-->
      <div class="wrap">
        <!--新人专享-->
        <div class="newbie indexFloor">
          <div class="headertext">
            <span>—</span>
            <span>新人专享礼</span>
            <span>—</span>
          </div>
          <div class="clearfix content">
            <div class="left">
              <span class="text">新人专享礼包</span>
              <img class="icon" src="./images/content/1.png" alt="">
            </div>
            <div class="right">
              <div class="up">
                <div class="cnt">
                  <p class="title">福利社</p>
                  <p class="name">今日特价</p>
                </div>
                <img  class="icon" src="./images/content/2.png" alt="">
                <div class="money">
                  <p class="sale-price">￥379</p>
                  <p class="original-price">￥400</p>
                </div>
              </div>
              <div class="down">
                <div class="cnt">
                  <p class="title">新人拼团</p>
                  <p class="name">1元起包邮</p>
                </div>
                <img class="icon" src="./images/content/3.png" alt="">
                <div class="money">
                  <p class="sale-price">￥1</p>
                  <p class="original-price">￥9</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--品牌-->
        <div class="brand indexFloor">
          <div class="headername">
            <span>品牌制造商直供</span>
            <span class="gd">更多</span>
            <span class="iconfont icon-jiantouyou"></span>
          </div>
          <ul class="list clearfix">
            <li class="item">
              <img class="icon" src="http://yanxuan.nosdn.127.net/e550a44d2a7a68ed38e6cfd380e514aa.png?imageView&thumbnail=343y260&enlarge=1" alt="">
              <div class="content">
                <h4>海外制造商</h4>
                <span>9.9元起</span>
                <span class="new">上新</span>
              </div>
            </li>
            <li class="item">
              <img class="icon" src="http://yanxuan.nosdn.127.net/e550a44d2a7a68ed38e6cfd380e514aa.png?imageView&thumbnail=343y260&enlarge=1" alt="">
              <div class="content">
                <h4>海外制造商</h4>
                <span>9.9元起</span>
              </div>
            </li>
            <li class="item">
              <img class="icon" src="http://yanxuan.nosdn.127.net/e550a44d2a7a68ed38e6cfd380e514aa.png?imageView&thumbnail=343y260&enlarge=1" alt="">
              <div class="content">
                <h4>海外制造商</h4>
                <span>9.9元起</span>
              </div>
            </li>
            <li class="item">
              <img class="icon" src="http://yanxuan.nosdn.127.net/e550a44d2a7a68ed38e6cfd380e514aa.png?imageView&thumbnail=343y260&enlarge=1" alt="">
              <div class="content">
                <h4>海外制造商</h4>
                <span>9.9元起</span>
              </div>
            </li>
          </ul>
        </div>
        <!--热销-->
        <div class="hotsell indexFloor">
          <div class="headername">
            <span>类目热销榜</span>
          </div>
          <ul class="list1 clearfix">
            <li class="item">
              <div class="content">
                <span class="xx"></span>
                <span>服装榜</span>
              </div>
              <img class="icon" src="http://yanxuan.nosdn.127.net/77b7e8586397dc27613e6c5c6da7a85a.png?imageView&quality=65&thumbnail=200x200" alt="">
            </li>
            <li class="item">
              <div class="content">
                <span class="xx"></span>
                <span >服装榜</span>
              </div>
              <img class="icon" src="http://yanxuan.nosdn.127.net/97719f5e6bbca639cdab6b50591c0689.png?imageView&quality=65&thumbnail=200x200" alt="">
            </li>
          </ul>
          <ul class="list2 clearfix">
            <li class="item">
              <div class="content">
                <span >服装榜</span>
              </div>
              <img class="icon" src="http://yanxuan.nosdn.127.net/dec2804e83f36f6cc2ad7b28d49b8aff.png?imageView&quality=65&thumbnail=200x200" alt="">
            </li>
            <li class="item">
              <div class="content">
                <span >服装榜</span>
              </div>
              <img class="icon" src="http://yanxuan.nosdn.127.net/dec2804e83f36f6cc2ad7b28d49b8aff.png?imageView&quality=65&thumbnail=200x200" alt="">
            </li>
            <li class="item">
              <div class="content">
                <span >服装榜</span>
              </div>
              <img class="icon" src="http://yanxuan.nosdn.127.net/dec2804e83f36f6cc2ad7b28d49b8aff.png?imageView&quality=65&thumbnail=200x200" alt="">
            </li>
            <li class="item">
              <div class="content">
                <span >服装榜</span>
              </div>
              <img class="icon" src="http://yanxuan.nosdn.127.net/dec2804e83f36f6cc2ad7b28d49b8aff.png?imageView&quality=65&thumbnail=200x200" alt="">
            </li>
            <li class="item">
              <div class="content">
                <span >服装榜</span>
              </div>
              <img class="icon" src="http://yanxuan.nosdn.127.net/dec2804e83f36f6cc2ad7b28d49b8aff.png?imageView&quality=65&thumbnail=200x200" alt="">
            </li>
            <li class="item">
              <div class="content">
                <span >服装榜</span>
              </div>
              <img class="icon" src="http://yanxuan.nosdn.127.net/dec2804e83f36f6cc2ad7b28d49b8aff.png?imageView&quality=65&thumbnail=200x200" alt="">
            </li>
            <li class="item">
              <div class="content">
                <span >服装榜</span>
              </div>
              <img class="icon" src="http://yanxuan.nosdn.127.net/dec2804e83f36f6cc2ad7b28d49b8aff.png?imageView&quality=65&thumbnail=200x200" alt="">
            </li>
            <li class="item">
              <div class="content">
                <span >服装榜</span>
              </div>
              <img class="icon" src="http://yanxuan.nosdn.127.net/dec2804e83f36f6cc2ad7b28d49b8aff.png?imageView&quality=65&thumbnail=200x200" alt="">
            </li>
          </ul>
        </div>
        <!--人气-->
        <div class="popularity indexFloor">
          <div class="headername">
            <span>人气推荐</span>
            <span class="gd">更多</span>
            <span class="iconfont icon-jiantouyou"></span>
          </div>
          <div class="popularity-one">
            <img class="icon" src="http://yanxuan.nosdn.127.net/06e5818658707bc182acabe92cae3d34.png?imageView&quality=65&thumbnail=280x280" alt="">
            <div class="content">
              <span class="iconfont icon-wodeyouhuijuan"></span>
              <div class="name">30包 谷风一木软抽面巾纸囤货装</div>
              <div class="desc">环保取材，安全天然更亲肤</div>
              <div class="money">￥75</div>
            </div>

          </div>
          <ul class="list clearfix">
            <li class="item">
              <img class="icon" src="http://yanxuan.nosdn.127.net/fb53b989d34b32366f138b5e563ccd0a.png?imageView&quality=65&thumbnail=330x330" alt="">
              <span class="titile">升级款95%白鹅绒秋冬加厚...</span>
              <span class="money">￥1028</span>
              <div class="activity">
                <span>明星日</span>
              </div>
            </li>
            <li class="item">
              <img class="icon" src="http://yanxuan.nosdn.127.net/4bd683266bdb366de0e28128ea6690bc.png?imageView&quality=65&thumbnail=330x330" alt="">
              <span class="titile">男式天鹅绒保暖牛仔裤</span>
              <span class="money">￥169</span>
              <div class="activity">
                <span>三石福利价</span>
              </div>
            </li>
            <li class="item">
              <img class="icon" src="http://yanxuan.nosdn.127.net/77b7e8586397dc27613e6c5c6da7a85a.png?imageView&quality=65&thumbnail=330x330" alt="">
              <span class="titile">男式轻薄无缝羽绒服</span>
              <span class="money">￥252</span>
              <div class="activity">
                <span>明星日</span>
              </div>
            </li>
          </ul>
        </div>
        <!--限时-->
        <div class="limit indexFloor">
          <div class="headername">
            <span>限时购</span>
            <span class="gd">更多</span>
            <span class="iconfont icon-jiantouyou"></span>
          </div>
          <ul class="list clearfix">
            <li class="item">
              <img class="icon" src="http://yanxuan.nosdn.127.net/59620279f1819daae4430fb3e2f6384f.png" alt="">
              <span class="sale-price">￥352</span>
              <span class="original-price">469</span>
            </li>
            <li class="item">
              <img class="icon" src="http://yanxuan.nosdn.127.net/59620279f1819daae4430fb3e2f6384f.png" alt="">
              <span class="sale-price">￥352</span>
              <span class="original-price">469</span>
            </li>
            <li class="item">
              <img class="icon" src="http://yanxuan.nosdn.127.net/59620279f1819daae4430fb3e2f6384f.png" alt="">
              <span class="sale-price">￥352</span>
              <span class="original-price">469</span>
            </li>
            <li class="item">
              <img class="icon" src="http://yanxuan.nosdn.127.net/59620279f1819daae4430fb3e2f6384f.png" alt="">
              <span class="sale-price">￥352</span>
              <span class="original-price">469</span>
            </li>
            <li class="item">
              <img class="icon" src="http://yanxuan.nosdn.127.net/59620279f1819daae4430fb3e2f6384f.png" alt="">
              <span class="sale-price">￥352</span>
              <span class="original-price">469</span>
            </li>
            <li class="item">
              <img class="icon" src="http://yanxuan.nosdn.127.net/59620279f1819daae4430fb3e2f6384f.png" alt="">
              <span class="sale-price">￥352</span>
              <span class="original-price">469</span>
            </li>
          </ul>
        </div>
        <!--新品-->
        <div class="new-product indexFloor">
          <div class="headername">
            <span>新品首发</span>
            <span class="gd">更多</span>
            <span class="iconfont icon-jiantouyou"></span>
          </div>
          <ul class="list clearfix">
            <li class="item">
              <img class="icon" src="http://yanxuan.nosdn.127.net/593ebddb97e6395592de3c9130ccf60a.png?imageView&quality=65&thumbnail=330x330" alt="">
              <span class="titile">20寸 磨砂PC膜拉链登机....</span>
              <span class="money">￥188</span>
              <div class="activity">
                <span>开天辟地价</span>
              </div>
            </li>
            <li class="item">
              <img class="icon" src="http://yanxuan.nosdn.127.net/593ebddb97e6395592de3c9130ccf60a.png?imageView&quality=65&thumbnail=330x330" alt="">
              <span class="titile">20寸 磨砂PC膜拉链登机....</span>
              <span class="money">￥188</span>
              <div class="activity">
                <span>开天辟地价</span>
              </div>
            </li>
            <li class="item">
              <img class="icon" src="http://yanxuan.nosdn.127.net/593ebddb97e6395592de3c9130ccf60a.png?imageView&quality=65&thumbnail=330x330" alt="">
              <span class="titile">20寸 磨砂PC膜拉链登机....</span>
              <span class="money">￥188</span>
              <div class="activity">
                <span>开天辟地价</span>
              </div>
            </li>
            <li class="item">
              <img class="icon" src="http://yanxuan.nosdn.127.net/593ebddb97e6395592de3c9130ccf60a.png?imageView&quality=65&thumbnail=330x330" alt="">
              <span class="titile">20寸 磨砂PC膜拉链登机....</span>
              <span class="money">￥188</span>
              <div class="activity">
                <span>开天辟地价</span>
              </div>
            </li>
            <li class="item">
            <img class="icon" src="http://yanxuan.nosdn.127.net/593ebddb97e6395592de3c9130ccf60a.png?imageView&quality=65&thumbnail=330x330" alt="">
            <span class="titile">20寸 磨砂PC膜拉链登机....</span>
            <span class="money">￥188</span>
              <div class="activity">
                <span>开天辟地价</span>
              </div>
          </li>
            <li class="item">
            <img class="icon" src="http://yanxuan.nosdn.127.net/593ebddb97e6395592de3c9130ccf60a.png?imageView&quality=65&thumbnail=330x330" alt="">
            <span class="titile">20寸 磨砂PC膜拉链登机....</span>
            <span class="money">￥188</span>
              <div class="activity">
                <span>开天辟地价</span>
              </div>
          </li>
          </ul>
        </div>
        <!--榜单-->
        <div class="hot-sale indexFloor">
          <div class="sale">
            <img class="icon" src="https://yanxuan.nosdn.127.net/806d68797aaf63ace9639b20c01feb45.jpg?imageView&thumbnail=750x0&quality=75" alt="">
          </div>
          <div class="hot-sale-swiper swiper-container">
            <ul class="list clearfix swiper-wrapper">
              <li class="item swiper-slide">
                <img class="icon" src="http://yanxuan.nosdn.127.net/6689051d92c7e1053f83331859bf025e.png?imageView&quality=65&thumbnail=330x330" alt="">
                <span class="title">白果炖鸡汤 280克*3杯</span>
                <div class="money">
                  <span class="sale-price">￥32</span>
                  <span class="original-price"></span>
                </div>
                <div class="discount">
                  <span>明星日</span>
                  <span>明星日</span>
                </div>
              </li>
              <li class="item swiper-slide">
                <img class="icon" src="http://yanxuan.nosdn.127.net/de5b98ae57f2c21c8f3880ae770001ef.png?imageView&quality=65&thumbnail=330x330" alt="">
                <span class="title">香辣鸭脖 168克</span>
                <div class="money">
                  <span class="sale-price">￥12</span>
                  <span class="original-price">18</span>
                </div>
                <div class="discount">
                  <span>明星日</span>
                  <span>明星日</span>
                </div>
              </li>
              <li class="item swiper-slide">
                <img class="icon" src="http://yanxuan.nosdn.127.net/97719f5e6bbca639cdab6b50591c0689.png?imageView&quality=65&thumbnail=330x330" alt="">
                <span class="title">大牌特调 严选椒香鲜辣小龙虾1KG/盒</span>
                <div class="money">
                  <span class="sale-price">￥29.9</span>
                  <span class="original-price">￥98</span>
                </div>
                <div class="discount">
                  <span>明星日</span>
                  <span>明星日</span>
                </div>
              </li>
              <li class="item swiper-slide">
                <img class="icon" src="http://yanxuan.nosdn.127.net/97719f5e6bbca639cdab6b50591c0689.png?imageView&quality=65&thumbnail=330x330" alt="">
                <span class="title">北海道风味大虾面 61克*6杯</span>
                <div class="money">
                  <span class="sale-price">￥35</span>
                  <span class="original-price">￥38.5</span>
                </div>
                <div class="discount">
                  <span>明星日</span>
                  <span>明星日</span>
                </div>
              </li>
              <li class="item swiper-slide">
                <img class="icon" src="http://yanxuan.nosdn.127.net/88c630ddfad4c98201b08956f528ce4d.png?imageView&quality=65&thumbnail=330x330" alt="">
                <span class="title">奇亚籽谷物脆水果燕麦片 800克</span>
                <div class="money">
                  <span class="sale-price">￥43.9</span>
                  <span class="original-price">￥52</span>
                </div>
                <div class="discount">
                  <span>明星日</span>
                  <span>明星日</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <span class="goToTop iconfont icon-jiantou"></span>
      <div class="bottom">
        <div class="content">
            <div class="bd" >
             <span class="app">下载APP</span>
              <span class="pc">电脑版</span>
            </div>
            <p class="copyright" >
              <span>网易公司版权所有 © 1997-</span>
              <span>2018</span>
              <br>
              <span>食品经营许可证：JY13301080111719</span>
            </p>
        </div>
      </div>
    </section>
</template>

<script>
  import "swiper/dist/css/swiper.min.css"
  import Swiper from "swiper"
  import Bscroll from "better-scroll"
    export default {
        name: "m-site",
      mounted(){
          this.navSwiper();
          this.hotSaleSwiper();
          new Bscroll('#nav', {
            scrollX:true,
            scrollY:false,
            click: true
          })
      },
      methods:{
        navSwiper(){
            this.$nextTick(()=>{//界面已经更新显示了
              var swiper = new Swiper('.nav-swiper', {
                loop:true,
                autoplay: {
                  delay: 2500,
                },
                pagination: {
                  el: '.swiper-pagination',
                  clickable: true,
                },
              });
            })
          },
        hotSaleSwiper(){
          this.$nextTick(()=>{//界面已经更新显示了
            var swiper = new Swiper('.hot-sale-swiper', {
              slidesPerView: "auto",
              freeMode: true,
              pagination: {
                el: '.swiper-pagination',
                clickable: true,
              },
            });
          })
        },

      },



    }
</script>

<style scoped lang="stylus">
  @import "../../common/stylus/mixins.styl"
  .msite
    width 100%
    .header
      position fixed
      z-index 100
      width: 100%
      left 0
      top 0
      background-color #fff
      .header-top
        /*width 6.9rem*/
        height 0.55rem
        /*display flex*/
        align-items center
        padding 0.2rem 0.4rem
        .logo
          display inline-block
          width 1.38rem
          height 0.39rem
          background-image url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png")
          background-size 100% 100%
          margin-right 0.2rem
          padding-top 0.1rem
          float left
          background-position center
          line-height 0.39rem
        .search
          display inline
          float left
          color #666
          /*width 4.44rem*/
          height 0.56rem
          background-color #ededed
          text-align center
          line-height 0.56rem
          border-radius 0.2rem
          padding-left 0.5rem
          padding-right 0.4rem
          span
            font-size 0.2rem
          .iconfont
            display inline-block
            padding-right 0.1rem
            font-size 0.3rem

        .login
          float left
          width: 0.6rem
          font-size 0.18rem
          height 0.5rem
          line-height 0.5rem
          text-align center
          color #b4282b
          border 0.01rem solid #b4282b
          margin-left 0.255rem
          border-radius 0.1rem
      .header-wrap
        width 100%
        position: relative
        overflow hidden
        height 0.6rem
        .nav
          width 6.5rem
          overflow hidden
          height 0.6rem

          .list
            display inline-block
            white-space nowrap
            margin-right 1.6rem
            .item
              display inline-block
              font-size 0.32rem
              /*float left*/
              /*width 1.2rem*/
              height 0.6rem
              margin-left 0.4rem
              line-height 0.6rem
        .iconfont
          z-index 100
          display inline-block
          width 1rem
          height 0.6rem
          font-size 0.32rem
          position: absolute
          right 0
          top 0
          text-align center
          line-height 0.6rem
          background-color #fff


          //轮播图
    .msite-nav
      padding-top  1.57rem
      width 100%
      height 4rem
      overflow hidden
      img
        width 100%

      //承诺
    .commit
      background-color antiquewhite
      .list
        width 100%
        height 0.72rem
        line-height 0.72rem
        text-align center
        color #B4282D
        display flex
        justify-content space-around
        .item
          font-size 0.2rem
          .iconfont
            font-size 0.2rem
          .text
            font-size 0.2rem




    /*分类*/
    .classify
      background-color antiquewhite
      width 100%
      height 3.6rem
      .list
        width 100%
        padding-top 0.2rem
        text-align center
        li
          padding-left 0.35rem
          padding-bottom 0.2rem
          float left
          img
            width 1.1rem
            height 1.1rem
          span
            display block
            width 1.1rem
            font-size 0.24rem
            text-align center

    /*内容*/
    .wrap
      width 100%
      background-color #f3f5f7
      .indexFloor
        margin-top 0.2rem
      //新人
      .newbie
        background-color #fff
        color #333
        padding-left 0.21rem
        padding-bottom 0.26rem
        .headertext
          padding-top 0.1rem
          line-height 0.5rem
          text-align center
          span
            font-size 0.4rem
            padding-right 0.2rem
        .content
          color #333
          .left
            background-color antiquewhite
            float left
            width 3.43rem
            height 4.5rem
            margin-right 0.2rem
            .text
              display inline-block
              padding-top 0.3rem
              padding-left 0.3rem
              font-size 0.38rem
            .icon
              display inline-block
              width 2.28rem
              height 2.29rem
              margin 0.4rem 0.575rem
          .right
            float right
            width 3.43rem
            height 4.5rem
            padding-right 0.21rem
            .up
              background-color antiquewhite
              width 100%
              height 2.15rem
              margin-bottom 0.2rem
              .cnt
                padding-top 0.3rem
                padding-left 0.3rem
                .title
                  font-size 0.38rem
                  line-height 0.38rem
                .name
                  margin-top 0.1rem
                  color #7F7F7F
                  font-size 0.26rem
                  line-height 0.26rem

              .icon
                float right
                width 2rem
                height 2rem
                margin-top -0.9rem
              .money
                width 0.9rem
                height 0.9rem
                border-radius 50%
                background-color #F59524
                opacity 0.8
                line-height 0.4rem
                text-align center
                color #fff
                float right
                margin-top -0.9rem
                margin-right -1.7rem
                .sale-price
                  font-size 0.26em
                .original-price
                  text-decoration line-through

            .down
              width 100%
              height 2.15rem
              background-color beige
              .cnt
                padding-top 0.3rem
                padding-left 0.3rem
                font-size 0.38rem
                .title
                  font-size 0.38rem
                .name
                  width 1.4rem
                  height 0.32rem
                  font-size 0.26rem
                  line-height 0.32rem
                  text-align center
                  border-radius 0.04rem
                  margin-top 0.1rem
                  background-color rgba(5,15,25,0.3)
                  color #fff


              .icon
                float right
                width 2.28rem
                height 2.29rem
                margin-top -0.9rem
              .money
                width 0.9rem
                height 0.9rem
                border-radius 50%
                background-color #F59524
                opacity 0.8
                line-height 0.4rem
                text-align center
                color #fff
                float right
                margin-top -0.9rem
                margin-right -2rem
                .sale-price
                  font-size 0.26em
                .original-price
                  text-decoration line-through
      //品牌
      .brand
        background-color #fff
        color #333
        padding-bottom 0.26rem
        padding-left 0.21rem
        .headername
          padding-top 0.1rem
          line-height 0.99rem
          padding-right 0.21rem
          span
            font-size 0.4rem
          .gd
            font-size 0.36rem
            float right
            margin-right 0.6rem
          .iconfont
            font-size 0.36rem
            float right
            margin-right -1.2rem
        .list
          background-color #fff
          .item
            position relative
            float left
            width 3.43rem
            margin-right 0.21rem
            margin-bottom 0.1rem
            .icon
              width 3.43rem
              height 2.6rem
            .content
              width 100%
              text-align center
              position absolute
              top 0
              left 0
              padding-top 0.15rem
              line-height 0.4rem
              h4
                font-size 0.30rem
              span
                font-size 0.20rem
              .new
                background-color #CBB693
                color #fff
                display inline-block
                width .6rem
                height .4rem
                border-radius 0.05rem

      /*热销*/
      .hotsell
        background-color #fff
        color #333
        padding-left 0.22rem
        padding-bottom 0.26rem
        .headername
          padding-top 0.1rem
          line-height 0.99rem
          span
            font-size 0.4rem
        .list1
          background-color #fff
          .item
            position relative
            background-color #EBEFF6
            float left
            width 3.4rem
            margin-right 0.22rem
            margin-bottom 0.1rem
            .content
              position absolute
              top 0
              left 0
              margin-top 0.44rem
              padding-left 0.2rem
              span
                font-size 0.3rem
              .xx
                content ''
                position absolute
                bottom -.21333rem
                width .64rem
                height .05333rem
                background #333
            .icon
              float right
              width 2rem
              height 2rem
        .list2
          background-color #fff
          .item
            background-color #EBEFF6
            float left
            width 1.65rem
            height 1.8rem
            margin-right 0.14rem
            margin-bottom 0.1rem
            text-align center
            .content
              margin-top 0.13rem
              text-align center
              padding-bottom 0.05rem
              span
                font-size 0.26rem
            .icon
              width 1.2rem
              height 1.2rem
      /*人气*/
      .popularity
        background-color #fff
        color #333
        padding-bottom 0.26rem
        .headername
          padding-top 0.1rem
          line-height 0.99rem
          padding-right 0.2rem
          margin-left 0.2rem
          span
            font-size 0.4rem
          .gd
            font-size 0.36rem
            float right
            margin-right 0.6rem
          .iconfont
            font-size 0.36rem
            float right
            margin-right -1.2rem
        .popularity-one
          background-color #FEF0DF
          width 6.9rem
          height 2.8rem
          margin-bottom 0.2rem
          padding-right 0.2rem
          margin-left 0.2rem
          .icon
            width 2.8rem
            height 2.8rem
            padding-right 0.15rem
          .content
            float right
            padding-right 2rem
            width 1.75rem
            padding-top 0.6rem
            .iconfont
              font-size 0.4rem
              color #b4282d
            .name
              font-size .3rem
              line-height 0.3rem
              width 3.5rem
              overflow hidden
              text-overflow ellipsis
              white-space nowrap
            .desc
              font-size .26rem
              line-height 0.3rem
              color #7f7f7f
              width 3.5rem
              overflow hidden
              text-overflow ellipsis
              white-space nowrap
            .money
              line-height 0.3rem
              font-size 0.3rem
              color #b4282d


        .list
          padding-left 0
          width 100%
          height 3.51rem
          .item
            float left
            width 2.1rem
            height 3.38rem
            padding-left 0.29rem
            /*margin-right 0.333rem*/
            .icon
              background-color #d7d7d7
              width 2.16rem
              height 2.16rem
              margin-bottom 0.1rem
            .title
              margin-top 0.1rem
              font-size 0.26rem
              line-height 0.3rem
            .money
              font-size 0.26rem
              color #b4282d
              line-height 0.3rem
            .activity
              margin-top 0.2rem
              margin-bottom 0.2rem
              color #fff
              font-size 0.2rem
              border-radius 0.02rem
              line-height 0.22rem
              span
                padding 0.05rem 0.16rem
                background-color #f48f18


      /*限时*/
      .limit
        background-color #fff
        color #333
        padding-bottom 0.26rem
        .headername
          padding-top 0.1rem
          line-height 0.99rem
          padding-right 0.2rem
          margin-left 0.29rem
          span
            font-size 0.4rem
          .gd
            font-size 0.36rem
            float right
            margin-right 0.6rem
          .iconfont
            font-size 0.36rem
            float right
            margin-right -1.2rem
        .list
          padding-left 0
          width 100%
          .item
            float left
            width 2.1rem
            padding-left 0.29rem
            .icon
              background-color #d7d7d7
              width 2.16rem
              height 2.16rem
              margin-bottom 0.1rem
            .sale-price
              margin-top 0.1rem
              font-size 0.26rem
              line-height 0.3rem
              color #b4282d
              padding-right 0.2rem
            .original-price
              font-size 0.26rem
              text-decoration line-through
              line-height 0.3rem
      /*新品*/
      .new-product
        background-color #fff
        color #333
        padding-bottom 0.26rem
        .headername
          padding-top 0.1rem
          line-height 0.99rem
          padding-right 0.2rem
          margin-left 0.29rem
          span
            font-size 0.4rem
          .gd
            font-size 0.36rem
            float right
            margin-right 0.6rem
          .iconfont
            font-size 0.36rem
            float right
            margin-right -1.2rem
        .list
          padding-left 0
          width 100%
          .item
            float left
            width 2.1rem
            padding-left 0.29rem
            .icon
              background-color #d7d7d7
              width 2.16rem
              height 2.16rem
              margin-bottom 0.1rem
            .title
              margin-top 0.1rem
              font-size 0.26rem
              line-height 0.3rem
            .money
              font-size 0.26rem
              color #b4282d
              line-height 0.3rem
            .activity
              margin-top 0.2rem
              margin-bottom 0.2rem
              color #fff
              font-size 0.2rem
              border-radius 0.02rem
              line-height 0.22rem
              span
                padding 0.05rem 0.16rem
                background-color #f48f18


      //榜单
      .hot-sale
        background-color #fff
        color #333
        padding-bottom 0.26rem
        .sale
          margin-bottom 0.2rem
          img
            width 100%
            height 3.7rem
        .list
          padding-left 0
          width 100%
          margin-left 0.2rem
          .item
            float left
            width 2rem
            padding-right 0.4rem
            .icon
              background-color #f4f4f4
              width 2.16rem
              height 2.16rem
              margin-bottom 0.1rem
            .title
              display inline-block
              width 2.16rem
              padding-left: 0;
              font-size: .24rem;
              margin-top: 0;
              line-height: .28rem;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              white-space: normal;
            .money
              font-size 0.26rem
              color #b4282d
              line-height 0.3rem
              .sale-price
                margin-top 0.1rem
                font-size 0.26rem
                line-height 0.3rem
                color #b4282d
                padding-right 0.2rem
              .original-price
                font-size 0.26rem
                text-decoration line-through
                line-height 0.3rem
            .discount
              background-color #fff
              font-size 0.2rem
              color #B4282D
              line-height 0.2rem
              text-align center
              margin-top 0.15rem
              padding 0.05rem 0.16rem
              span
                border 0.01rem solid #b4282b
                border-radius 0.02rem


    /*锚点*/
    .goToTop
      display inline-block
      position: fixed;
      right: .30667rem;
      bottom: 1.6rem;
      z-index: 2;
      vertical-align: middle;
      width: 1.1rem;
      height: 1.1rem;
      border-radius 50%
      background-color #fff
      font-size 0.3rem
      text-align center
      line-height 1.1rem
    /*底部*/
    .bottom
      width 100%
      height 2.43rem
      background-color #262626

      .content
        height 1.62rem
        padding 0.54rem 0.2rem 0.8rem 0.2rem
        text-align center
        .bd
          color #fff
          span
            display inline-block
            font-size 0.3rem
            width 1.7rem
            height 0.6rem
            border 0.02rem solid #999
            line-height 0.6rem
          .app
            margin-right 0.6rem
        .copyright
          font-size 0.3rem
          color #999
          margin-top 0.2rem
          line-height 0.3rem
</style>

