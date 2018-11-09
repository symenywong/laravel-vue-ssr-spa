<template>
<div id="mall-app" class="flex-start width-100">
  <keep-alive>
    <router-view v-if="$route.meta.keepAlive" class="full-page"></router-view>
  </keep-alive>
  <router-view class="full-page" v-if="!$route.meta.keepAlive"></router-view>
</div>
</template>

<script>
export default {
  name: 'App',
  components: {

  },
  created() {
    
  }
}
</script>
<style>
#app-home{
  height: 100%;
}
</style>

