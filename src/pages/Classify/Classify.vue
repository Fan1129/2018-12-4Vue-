<template>
    <div class="classify">
        <!--头部-->
      <header class="header">
          <div class="search">
            <span class="iconfont icon-sousuo"></span>
            <span class="text">搜索商品，共19864款好物</span>
          </div>
      </header>
      <div class="wrap">
        <div class="left">
          <ul class="list">
            <li class="item">
              12.12专区
            </li>
            <li class="item">
              冬季专区
            </li>
            <li class="item">
              爆款专区
            </li>
            <li class="item">
             新品专区
            </li>
            <li class="item">
              居家
            </li>
            <li class="item">
              鞋包配饰
            </li>
            <li class="item">
              服装
            </li>
            <li class="item">
              电器
            </li>
            <li class="item">
              洗护
            </li>
            <li class="item">
              饮食
            </li>
            <li class="item">
              餐厨
            </li>
            <li class="item">
              婴童
            </li>
            <li class="item">
             文体
            </li>
          </ul>
        </div>
         <div class="right">
           <ul class="clearfix list">
             <img class="icon" src="http://yanxuan.nosdn.127.net/52855d9a0c1f738f26ac125913af0012.jpg?imageView&thumbnail=0x196&quality=75" alt="">
             <li class="item">
               <img class="icon" src="http://yanxuan.nosdn.127.net/39c1c32ca2301ced934e35db33150637.png?imageView&quality=85&thumbnail=144x144" alt="">
               <span>三石福利价</span>
             </li>
             <li class="item">
               <img class="icon" src="http://yanxuan.nosdn.127.net/39c1c32ca2301ced934e35db33150637.png?imageView&quality=85&thumbnail=144x144" alt="">
               <span>三石福利价</span>
             </li>
             <li class="item">
               <img class="icon" src="http://yanxuan.nosdn.127.net/39c1c32ca2301ced934e35db33150637.png?imageView&quality=85&thumbnail=144x144" alt="">
               <span>三石福利价</span>
             </li>
             <li class="item">
               <img class="icon" src="http://yanxuan.nosdn.127.net/39c1c32ca2301ced934e35db33150637.png?imageView&quality=85&thumbnail=144x144" alt="">
               <span>三石福利价</span>
             </li>
             <li class="item">
               <img class="icon" src="http://yanxuan.nosdn.127.net/39c1c32ca2301ced934e35db33150637.png?imageView&quality=85&thumbnail=144x144" alt="">
               <span>三石福利价</span>
             </li>
             <li class="item">
             <img class="icon" src="http://yanxuan.nosdn.127.net/39c1c32ca2301ced934e35db33150637.png?imageView&quality=85&thumbnail=144x144" alt="">
             <span>三石福利价</span>
           </li>
             <li class="item">
               <img class="icon" src="http://yanxuan.nosdn.127.net/39c1c32ca2301ced934e35db33150637.png?imageView&quality=85&thumbnail=144x144" alt="">
               <span>三石福利价</span>
             </li>
             <li class="item">
               <img class="icon" src="http://yanxuan.nosdn.127.net/39c1c32ca2301ced934e35db33150637.png?imageView&quality=85&thumbnail=144x144" alt="">
               <span>三石福利价</span>
             </li>
             <li class="item">
               <img class="icon" src="http://yanxuan.nosdn.127.net/39c1c32ca2301ced934e35db33150637.png?imageView&quality=85&thumbnail=144x144" alt="">
               <span>三石福利价</span>
             </li>
             <li class="item">
               <img class="icon" src="http://yanxuan.nosdn.127.net/39c1c32ca2301ced934e35db33150637.png?imageView&quality=85&thumbnail=144x144" alt="">
               <span>三石福利价</span>
             </li>
             <li class="item">
               <img class="icon" src="http://yanxuan.nosdn.127.net/39c1c32ca2301ced934e35db33150637.png?imageView&quality=85&thumbnail=144x144" alt="">
               <span>三石福利价</span>
             </li>
             <li class="item">
               <img class="icon" src="http://yanxuan.nosdn.127.net/39c1c32ca2301ced934e35db33150637.png?imageView&quality=85&thumbnail=144x144" alt="">
               <span>三石福利价</span>
             </li>
             <li class="item">
               <img class="icon" src="http://yanxuan.nosdn.127.net/39c1c32ca2301ced934e35db33150637.png?imageView&quality=85&thumbnail=144x144" alt="">
               <span>三石福利价</span>
             </li>
           </ul>
         </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "classify"
    }
</script>

<style scoped lang="stylus">
  @import "../../common/stylus/mixins.styl"
  .classify
    width 100%
    .header
      width 100%
      height 0.85rem
      display flex
      position fixed!important
      z-index 1000
      left 0
      top 0
      background-color #fff
      text-align center
      line-height 0.56rem
      bottom-border-1px(#b5b5b5)
      .search
        width 6.9rem
        height 0.56rem
        align-items center
        margin 0.1rem 0.3rem 0.3rem 0.3rem
        color #666
        background-color #ededed
        border-radius 0.1rem
        span
          font-size 0.2rem
        .iconfont
          display inline-block
          padding-right 0.1rem
          font-size 0.3rem

    .wrap
      display: flex
      padding-top: 0.92rem
      padding-bottom: 46px
      width: 100%
      background: #fff;
      .left
        float left
        width 1.62rem
        right-border-1px(#b5b5b5)
        .list
          background-color #fff
          text-align center
          line-height 0.6rem
          .item
            margin-top 0.5rem
            font-size 0.3rem
      .right
        float left
        width 5.28rem
        margin  0.3rem 0.3rem 0.2rem 0.3rem
        .list
          width 100%
          background-color #fff
          text-align center
          .icon
            width 5.28rem
            height 1,92rem
            padding-bottom 0.32rem
          .item
            width 33.333%
            height 2.16rem
            float left
            /*margin-right 0.32rem*/
            img
              width 1.44rem
              height 1.44rem
            span
              display block
              width 1.44rem
              font-size 0.24rem
              text-align center
              line-height 0.40rem

</style>
