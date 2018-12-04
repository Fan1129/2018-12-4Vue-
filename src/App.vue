<template>
  <div id="app">
    <router-view></router-view>
    <FootGuide v-show="$route.meta.isShow"/>
  </div>
</template>

<script>
  import FootGuide from "./components/FootGuide/FootGuide"
export default {
  name: 'App',
  components:{
    FootGuide
  }
}
</script>

<style>

</style>
