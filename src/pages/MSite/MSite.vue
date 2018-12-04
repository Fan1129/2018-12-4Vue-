<template>
    <section class="msite">
      <!--首页头部-->
      <header class="header">
        <div class="header-top">
          <a href="javascript:;" class="logo"></a>
          <input type="text" class="search" placeholder="              搜索商品，共19914款好物">
          <span class="iconfont icon-sousuo"></span>
          <div class="login">登录</div>
        </div>

        <div class="header-wrap">
            <ul class="list">
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
          <span class="iconfont icon-iconfontjiantou"></span>
        </div>
      </header>
      <!--轮播图-->
      <nav class="msite-nav">
        <div class="swiper-container">
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
    </section>
</template>

<script>
  import "swiper/dist/css/swiper.min.css"
  import Swiper from "swiper"
    export default {
        name: "m-site",
      mounted(){
          this.plany()
      },
      methods:{
          plany(){
            this.$nextTick(()=>{//界面已经更新显示了
              var swiper = new Swiper('.swiper-container', {
                spaceBetween: 30,
                centeredSlides: true,
                autoplay: {
                  delay: 2500,
                  disableOnInteraction: false,
                },
                pagination: {
                  el: '.swiper-pagination',
                  clickable: true,
                },
              });
            })

          }


      },

    }
</script>

<style scoped lang="stylus">
  .msite
    width 100%
    position fixed
    z-index 100
    left 0
    top 0
    .header
      background-color #fff
      .header-top
        width 6.9rem
        height 0.55rem
        position: relative
        display flex
        align-items center
        padding 0.21rem 0.4rem
        .logo
          display inline-block
          width 1.38rem
          height 0.39rem
          background-image url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png")
          background-size 100% 100%
          margin-right 0.2rem
          margin-top 0.1rem
          float left
          background-position center
          line-height 0.39rem
        .search
          float left
          color #666
          width 4.44rem
          height 0.56rem
          background-color #ededed
          font-size 0.18rem
        .iconfont
          font-size 0.32rem
          position: absolute
          top 0.32rem
          left 2.4rem
        .login
          float left
          width: 0.6rem
          font-size 0.18rem
          height 0.5rem
          line-height 0.5rem
          text-align center
          color #b4282b
          border 0.01rem solid #b4282b
          margin-left 0.2rem
          border-radius 0.1rem

      .header-wrap
        z-index 100
        position: relative
        .list
          display flex
          font-size 0.32rem
          white-space nowrap
          width 6.5rem
          .item
            float left
            width 1.2rem
            height 0.6rem
            margin-left 0.4rem
            line-height 0.6rem
            &:focus
              color #b4282b
        .iconfont
          display inline-block
          width 1.333rem
          height 0.6rem
          font-size 0.32rem
          position: absolute
          right 0
          top 0
          text-align center
          line-height 0.6rem
          background-color #fff

    .msite-nav
      width 100%
      height 4rem
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            width 100%
            height 100%
            img
              width 100%
              height 100%
</style>
