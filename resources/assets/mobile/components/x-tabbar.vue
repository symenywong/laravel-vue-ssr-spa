<template lang="html">
<cube-tab-bar class="width-100 bg-white font-normal border-1px-t"
v-model="selectedLabelDefault"
@click="clickHandler"
@change="changeHandler">
    <cube-tab class="flex-col-center" v-for="(item, index) in tabs" :label="index" :key="item.name">
        <span slot="icon" class="iconfont padding-b-10 font-2x" v-html="item.icon"></span>
        <span class="font-mini">{{item.label}}</span>
    </cube-tab>
</cube-tab-bar>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
    name: 'x-tabbar',
    props: {
        communityIndex: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            selectedLabelDefault: 0,
            name: '',
            showIndex: -1,
            isEdit: true,
            hasStore: true,
            tabs: [{
              label: '首页',
              name:'indexView',
              icon: '&#xe6c5;',
              query:{}
            }, {
              label: '分类',
              icon: '&#xe778;',
              name:'catView',
              query:{}
            }, {
              label: '购物车',
              icon: '&#xe678;',
              name:'cartView',
              query:{}
            }, {
              label: '我的',
              icon: '&#xe600;',
              name:'userView',
              query:{}
            }]
        }
    },
    created() {
      this.init();
    },
    methods: {
        clickHandler (index) {
          let {name,query}=this.tabs[index];
          this.$router.push({name,query})
          this.selectedLabelDefault=index;
        },
        changeHandler (label) {
          // if you clicked different tab, this methods can be emitted
        },
        init:function(){
          let vm=this;
          this.name = this.$route.name;
          this.tabs.forEach((item,index)=>{
            if(item.name==this.name){
              vm.selectedLabelDefault=index;
            }
          })
        }
    }
}

</script>
