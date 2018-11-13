<template lang="html">
  <div class="flex-start bg-gray layout width-100 align-items-stretch">
    <div class="layout-left bg-dark" :class="[!menuShrink?'menuUnshrink':'menuShrink']">
      <component is="ShrinkableMenu"
      :menu-list="menuList"
      :open-names="openedSubmenuArr"
      :shrink="menuShrink"
    >

    <div slot="top" class="logo-con padding-rl-10 padding-tb-10 flex-center bg-dark">
      <img class="link-img" v-show="!menuShrink"  src="data:image/jpeg;base64,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" key="max-logo" />
      <img style="width:60px;height:60px;" class="border-r-5" v-show="menuShrink" src="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAFsAAABbCAYAAAAcNvmZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAnhJREFUeNrs3U9LFGEcwPGf7ebaYWGhCBLCPQaRbNFd9w2YHrwF5dGTBtG1vIpit45l9AJ8BbmetQi6qCdB2EMprH/AXFzrN/qgo+2Ms+Mz0+P2/cLDoM4M8uHh2XkOy4gQEV2qjjgXPZiqDeqhT0dJR9GM/6GKjpqOBR1z318W1hLBVuCCHl7reK6jwDw9wZ9Q9Io1bIUeN9AgB6MPKXotNraZzTNmNlN4HnRZwb+1jG2g5826TBbAr4VcOAN0yx1NUJ2opcjYZo1m6YgP/j4Stu+pg+JXUsc3UWY2Tx12GjMTNxSb5cPecjIYiG12hsxqez0Lm9l9+FitPwybRz3L6WrRH4RdhCe5wP6H2AQ22AS2u2Wt3m3068XnbNwQmS8eH329KnfJk/udks91OAXUO711hWf2rT2RgdUzv/KQnz7KOQfdHstIriHSvevDvs6aTWCDTWCDDTa1Mfbm6aZm+WfDSZyVHw2HsT/3RDtv6Y7Ifubkx09f6lLdPnQKemf/t0xWfjm8XV+5KVLNi+TrwefUM39t1T3o4Y+7cu92puklA7rp8XaZUWejDaRlvY8H7i720ZToPB4xZtLi+kHTvz2+m7VyHz4g+YAksMEmsMEGm8AGm8AGm8AGG2wCG2wCG2ywCWywCWywCWywwSawwSawwQabwAabwAabwE637FX4J5fWD+RdxHOrW4dgXybv21+ufgOMZQRsAhvstmoN7JSg/W9pAjvZ5lhG0msW7HSqnH85ENjJ9YKnkZSgm73yCmz7fVDotzxnpwM9wqYmnaVjhB1kwk8dOh4GLR3+sljF3oJ7G5bZsJdtXoRdxrG1LTgR/RFgAEIioEX14WSDAAAAAElFTkSuQmCC" key="min-logo" />
    </div>
    </component>

    </div>
    <div class="layout-right">
      <LayoutHeader></LayoutHeader>
      <div class="padding-rl-10">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import ShrinkableMenu from './shrinkableMenu/index'
import LayoutHeader from './layout-header';
import {mapGetters} from 'vuex';
export default {
  components:{ShrinkableMenu,LayoutHeader},
  data:function(){
    return {
      theme:'dark',
      menuList:[
        {
          title:'首页',
          icon:'ios-analytics',
          uri:'_admin_home',
          children:[
            {
              title:'概览',
              icon:'md-cube',
              uri:'_admin_home',
            }
          ]
        },{
          title:'商品',
          icon:'ios-flower',
          uri:'_admin_goods',
          children:[
            {
              title:'商品列表',
              icon:'ios-flower',
              uri:'_admin_goods',
            },{
              title:'商品分类',
              icon:'ios-bookmark',
              uri:'_admin_goods',
            }
          ]
        },{
          title:'订单',
          icon:'md-appstore',
          uri:'_admin_orders',
          children:[
            {
              title:'订单列表',
              icon:'md-appstore',
              uri:'_admin_orders',
            },{
              title:'发货明细',
              icon:'logo-dropbox',
              uri:'_admin_orders',
            }
          ]
        },{
          title:'会员',
          icon:'ios-people',
          uri:'_admin_members',
          children:[
            {
              title:'会员列表',
              icon:'md-appstore',
              uri:'_admin_members',
            },{
              title:'会员等级',
              icon:'logo-dropbox',
              uri:'_admin_members',
            }
          ]
        },{
          title:'设置',
          icon:'ios-settings',
          uri:'_admin_setting',
          children:[
            {
              title:'用户',
              icon:'md-appstore',
              uri:'_admin_setting',
            },{
              title:'权限',
              icon:'logo-dropbox',
              uri:'_admin_setting',
            }
          ]
        }
      ],
      openedSubmenuArr:[]
    }
  },
  computed:{
    ...mapGetters(['menuShrink'])
  }
}
</script>

<style lang="css">

.layout-right{
  flex:80;
}
.layout{
  min-height: 100%;
}
.menuShrink{
  flex:0 0 80px;
}
.layout-left{
  transition: flex .3s;
}
.menuUnshrink{
  flex:0 0 240px;
}
</style>
