<template lang="html">
  <div class="">
    <slot name="top"></slot>
    <SiderMenu
      :menuList="menuList"
      :iconColor="iconColor"
      v-show="!shrink"
      :iconSize="iconSize"
      @on-change="handleChange"
    ></SiderMenu>
    <MenuShink
      :menuList="menuList"
      :iconColor="iconColor"
      v-show="shrink"
      :iconSize="iconSize"
      @on-change="handleChange"
    ></MenuShink>
  </div>
</template>

<script>
import MenuShink from './components/menuShink';
import SiderMenu from './components/siderMenu';
// import {oneOf} from '../../../../utils'
export default {
  components:{
    MenuShink,
    SiderMenu
  },
  data:function(){
    return {
      iconSize:20,
      iconColor:"#f7f7f7"
    }
  },
  methods:{
    handleChange:function(name){
      let willpush = true;

      if (this.beforePush !== undefined) {
          if (!this.beforePush(name)) {
              willpush = false;
          }
      }

      if (willpush) {
          this.$router.push({
              name: name
          });
      }
      this.$emit('on-change', name);
    }
  },
  props:{
    menuList: {
        type: Array,
        required: true
    },
    shrink:{
      type: Boolean,
      default: false
    },
    openNames:{
      type: Array,
      required: true
    },
    beforePush: {
      type: Function
    },
    menuTheme: {
        type: String,
        default: 'dark',
        // validator (val) {
        //     return oneOf(val, ['dark', 'light']);
        // }
    },
  }
}
</script>

<style lang="css">
</style>
