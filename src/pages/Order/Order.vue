<template>
    <div class="order">
      <header class="header">
        <div class="header-top">
          <h3 class="title">
            购物车
          </h3>
          <div class="right">
            <span>领劵</span>
          </div>
        </div>
      </header>
      <div class="content">
        <div class="commit">
          <ul class="list">
            <li class="item">
              <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/servicePolicy-1d7541974f.png" alt="">
              <span class="text">30天无忧退货</span>
            </li>
            <li class="item">
              <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/servicePolicy-1d7541974f.png" alt="">
              <span class="text">48小时快速退款</span>
            </li>
            <li class="item">
              <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/servicePolicy-1d7541974f.png" alt="">
              <span class="text">满88元免包邮</span>
            </li>
          </ul>
        </div>
        <div class="content-wrap">
          <img class="icon" src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png" alt="">
          <p>去添加点什么吧</p>
          <div class="login">登录</div>
        </div>
      </div>

    </div>
</template>

<script>
    export default {
        name: "order"
    }
</script>

<style scoped lang="stylus">
  .order
    width 100%
    .header
      width 100%
      position fixed
      z-index 100
      left 0
      top 0
      background-color #fff
      .header-top
        height 0.9rem
        align-items center
        padding 0 0.4rem
        background-color #fff;
        border-bottom .01rem solid #d9d9d9;
        line-height 0.9rem
        text-align center
        .title
          display inline
          font-size 0.36rem
        .right
          float right
          span
            display inline-block
            font-size 0.3rem
            color #b4282b
    .content
      background-color #f3f5f7
      padding-bottom 4rem
      .commit
        padding-top 0.9rem
        .list
          width 100%
          height 0.72rem
          line-height 0.72rem
          align-items center
          color #666
          display flex
          justify-content space-around
          .item
            font-size 0.24rem
            img
              width 0.14rem
              height 0.14rem
            .text
              font-size 0.24rem




      .content-wrap
        background-color #f3f5f7
        text-align center
        .icon
          display: inline-block;
          vertical-align: middle;
          width: 2.5rem;
          height: 2.55rem;
          padding-top 3.3rem
          margin-bottom: .10667rem;
        p
          margin-top -0.3rem
          margin-bottom: .4rem
          line-height: 1;
          font-size: .28rem;
          color: #999
        .login
          width 4.8rem
          height 0.92rem
          font-size 0.3rem;
          line-height: 0.9rem;
          color: #fff;
          background-color: #b4282d;
          border-radius: .04rem
          margin 0 auto
</style>
