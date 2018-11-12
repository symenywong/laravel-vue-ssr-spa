<template lang="html">
  <div class="layout-header margin-b-10 width-100 flex-space-between bg-white padding-tb-10 padding-rl-20 border-1px-b">
    <div class="flex-start-center">
      <Button @click="toggleMenuShrink"><Icon size="24" type="md-menu" /></Button>
      <div class="margin-rl-10">
        <Icon size="24" type="md-home" />
      </div>
    </div>
    <div class="flex-start-center">
      <Icon size="24" class="margin-rl-10" type="md-expand" />
      <div class="flex-satrt-center">
        <Avatar src="https://file.iviewui.com/dist/a0e88e83800f138b94d2414621bd9704.png"></Avatar>
        <Icon size="24" type="md-arrow-dropdown" />
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  methods:{
    toggleMenuShrink:function(){
      this.$store.commit("toggleMenuShrink")
    }
  }
}
</script>

<style lang="css">
</style>
