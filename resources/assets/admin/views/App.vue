<template>
<div id="app" class="flex-start">
  <transition name="fade" mode="out-in">
    <router-view></router-view>
  </transition>
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
#app{
  height: 100%;
}
</style>
