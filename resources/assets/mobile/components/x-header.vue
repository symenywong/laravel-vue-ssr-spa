<template lang="html">
  <div class="x-header bg-white relative font-1x width-100 text-center">
    <div v-show="showBack" class="padding-rl-10 color-warning header-back">
      <i class="cubeic-back"></i>
    </div>
    {{title}}
  </div>
</template>

<script>
export default {
  name:'x-header',
  data:function(){
    return {

    }
  },
  props:{
    title:{
      type:String,
      default:'标题'
    },
    showBack:{
      type:Boolean,
      default:false
    }
  }
}
</script>

<style lang="css">
.x-header{
  height:1.33rem;
  line-height: 1.33rem;
  box-shadow: 0 0 .13rem #ccc;
}
.header-back{
  position: absolute;
  left:.27rem;
  height: 1.33rem;
  line-height: 1.33rem;
}
</style>
