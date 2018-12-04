<template>
  <footer class="footer_guide border-1px">
    <a href="javascript:;" class="guide_item" @click="goto('/msite')" :class="{on:$route.path ===('/msite')}">
      <span class="item_icon">
        <i class="iconfont icon-shouye"></i>
      </span>
      <span>首页</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goto('/classify')" :class="{on:$route.path ===('/classify')}">
      <span class="item_icon">
        <i class="iconfont icon-leimupinleifenleileibie"></i>
      </span>
      <span>分类</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goto('/discover')" :class="{on:$route.path ===('/discover')}">
      <span class="item_icon">
        <i class="iconfont icon-faxian"></i>
      </span>
      <span>发现</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goto('/order')" :class="{on:$route.path ===('/order')}">
      <span class="item_icon">
        <i class="iconfont icon-gouwuche"></i>
      </span>
      <span>购物车</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goto('/profile')" :class="{on:$route.path ===('/profile')}">
      <span class="item_icon">
        <i class="iconfont icon-geren10"></i>
      </span>
      <span>个人</span>
    </a>
  </footer>
</template>

<script>
  export default {
    name: "foot-guide",
    methods:{
      goto(path){
        this.$router.replace(path)
      }
    }
  }
</script>

<style scoped lang="stylus">
  @import "../../common/stylus/mixins.styl"
  .footer_guide  //footer
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 0.85rem
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 0.05rem
      color #999999
      &.on
        color #E43929
      span
        font-size 0.32rem
        margin-top 0.02rem
        margin-bottom 0.02rem
        .iconfont
          font-size 0.32rem
</style>
