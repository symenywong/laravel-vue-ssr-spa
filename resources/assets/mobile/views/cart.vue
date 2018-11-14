<template lang="html">
  <div class="flex-col-space-between bg-gray">
    <XHeader title="购物车"></XHeader>
    <div class="content margin-t-10">
      <cube-scroll>
        <cube-swipe>
          <transition-group name="swipe" tag="ul">
            <li class="swipe-item-wrapper bg-white border-1px-b" v-for="(data,index) in swipeData" :key="data.item.id">
              <cube-swipe-item
                  ref="swipeItem"
                  :btns="data.btns"
                  :index="index"
                  @btn-click="onBtnClick">
                <div @click="onItemClick(data.item, index)" class="item-inner padding-tb-10 padding-rl-10 flex-start-center">
                  <div class="cart-item-cover link-img border-r-10">
                    <img :src="data.item.imgurl">
                  </div>
                  <div class="text padding-l-20">
                    <h2 class="item-name font-normal" v-html="data.item.name"></h2>
                    <p class="item-desc padding-tb-20" v-html="data.item.desc"></p>
                    <p><span class="color-danger">¥9999.88</span> <span class="line-through color-gray">¥12999</span>  </p>
                  </div>
                </div>
              </cube-swipe-item>
            </li>
          </transition-group>
        </cube-swipe>
      </cube-scroll>
    </div>
    <div class="width-100">
      <div class="flex-space-between bg-white">
        <div class="width-60 padding-l-20">
          总价:<span class="color-danger font-2x">¥1999.00</span>
        </div>
        <div class="width-40">
          <cube-button>提交</cube-button>
        </div>
      </div>
      <XTabbar></XTabbar>
    </div>

  </div>
</template>

<script>
import XHeader from '../components/x-header'
import XTabbar from '../components/x-tabbar';
export default {
  components:{XTabbar,XHeader},
  data:function(){
    return {
      swipeData: [
        {
          item: {
            id: '3646653877',
            name: '网易智造太空舱按摩大师椅',
            desc: '网易智造按摩椅销售冠军',
            imgurl: 'http://yanxuan.nosdn.127.net/06660b0fb198be6ef2d110e74059a22b.png'
          },
          btns: [
            {
              action: 'delete',
              text: '删除',
              color: '#ff3a32'
            }
          ]
        },
        {
          item: {
            id: '1789676645',
            name: '网易智造太空舱按摩大师椅',
            desc: '网易智造按摩椅销售冠军',
            imgurl: 'http://yanxuan.nosdn.127.net/3942af358f8d2664df11edb3e20bb2ec.png'
          },
          btns: [
            {
              action: 'delete',
              text: '删除',
              color: '#ff3a32'
            }
          ]
        },
        {
          item: {
            id: '3649034125',
            name: '网易智造太空舱按摩大师椅',
            desc: '网易智造按摩椅销售冠军',
            imgurl: 'http://yanxuan.nosdn.127.net/64659ab260cfb66eb1afb0fdda48d573.png'
          },
          btns: [
            {
              action: 'delete',
              text: '删除',
              color: '#ff3a32'
            }
          ]
        },
      ]
    }
  },
  methods: {
    onItemClick(item) {
      console.log('click item:', item)
    },
    onBtnClick(btn, index) {
      if (btn.action === 'delete') {
        this.$createActionSheet({
          title: '确认要删除吗',
          active: 0,
          data: [
            {content: '删除'}
          ],
          onSelect: () => {
            this.swipeData.splice(index, 1)
          }
        }).show()
      } else {
        this.$refs.swipeItem[index].shrink()
      }
    }
  }
}
</script>

<style lang="css">
.cart-item-cover{
  width: 2.13rem;
  height: 2.13rem;
}
</style>
