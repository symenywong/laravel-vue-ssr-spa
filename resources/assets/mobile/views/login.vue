<template>
  <div class="login flex-col-space-between">
    <cube-button @click="showDialog">show dialog</cube-button>
    <XTabbar></XTabbar>
  </div>
</template>
<script>
import XTabbar from '../components/x-tabbar';
export default {
  name:'login',
  components:{XTabbar},
  data:function(){
    return {
      
    }
  },
  methods:{
    showDialog() {
        this.$createDialog({
          type: 'alert',
          title: 'Alert',
          content: 'dialog content'
        }).show()
      }
  }
}
</script>

