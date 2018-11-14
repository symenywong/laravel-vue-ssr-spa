<template>
  <div class="index bg-gray flex-col-space-between">
    <div class="content">
      <cube-slide ref="slide" class="width-100 slide" :data="items" @change="changePage">
        <cube-slide-item class="link-img" v-for="(item, index) in items" :key="index" @click.native="clickHandler(item, index)">
          <a :href="item.url">
            <img :src="item.image">
          </a>
        </cube-slide-item>
      </cube-slide>
      <div class="bg-white margin-t-20">
        <p class="padding-tb-20 font-1x padding-rl-20">品牌制造商直供</p>
        <div class="padding-rl-20 flex-start flex-wrap">
            <a href="#"  class="width-50 block text-center padding-b-10" :class="[index%2?'padding-l-5':'padding-r-5']" v-for="(item,index) in manufacturersSupplying" :key="index">
              <div :style="{backgroundImage:`url(${item.url})`}" class="manufacturersSupplying-cover">
                <p class="padding-t-20 font-bold">{{item.title}}</p>
                <p class="padding-tb-20">{{item.sub}}</p>
              </div>
            </a>
        </div>
      </div>
      <div class="bg-white margin-t-20">
        <p class="padding-tb-20 font-1x padding-rl-20">人气明星</p>
        <div class="padding-rl-20 flex-start-center align-items-stretch">
            <div class="link-img width-40">
              <img src="http://yanxuan.nosdn.127.net/fb53b989d34b32366f138b5e563ccd0a.png?imageView&quality=65&thumbnail=280x280" alt="">
            </div>
            <div style="background-color:#FEF0E0"  class="flex-col-center-start font-normal padding-l-20 width-60">
              <p class="line-ellispsis-1 line-height-normal">升级款95%白鹅绒秋冬加厚羽绒被</p>
              <p class="margin-tb-10 line-ellispsis-1">热销5万+条，一条被子过冬</p>
              <p class="color-danger">¥919</p>
            </div>
        </div>
      </div>
      <div class="bg-white margin-t-20">
        <p class="padding-tb-20 font-1x padding-rl-20">限时购</p>
        <div class="padding-rl-20 flex-start flex-wrap">
          <div class="flex-col-center width-col-3" v-for="(item,index) in flashSale" :key="index">
            <div class="link-img width-90 width-40">
              <img :src="item.url" alt="">
            </div>
            <p class="padding-tb-20"><span class="color-danger">¥{{item.price}}</span> <span class="color-gray padding-rl-10 line-through">¥{{item.mktPrice}}</span>  </p>
          </div>

        </div>
      </div>
    </div>
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
      items: [
        {
          url: 'http://www.didichuxing.com/',
          image: 'https://yanxuan.nosdn.127.net/4cebd7dc1891c37c1f535ecbed3371ab.jpg?watermark&type=1&gravity=northwest&dx=0&dy=0&image=NTEzMWYxYjExNjZjMjI5ZDBjMDIzMWM5M2NlNGZjOTcucG5n|imageView&quality=75&thumbnail=750x0'
        },
        {
          url: 'http://www.didichuxing.com/',
          image: 'https://yanxuan.nosdn.127.net/81fbc9d8ceec947f6e2ddc4cbb38997c.jpg?imageView&quality=75&thumbnail=750x0'
        },
        {
          url: 'http://www.didichuxing.com/',
          image: 'https://yanxuan.nosdn.127.net/f57770958238533fb1aa8516d69f7780.jpg?watermark&type=1&gravity=northwest&dx=0&dy=0&image=NTEzMWYxYjExNjZjMjI5ZDBjMDIzMWM5M2NlNGZjOTcucG5n|imageView&quality=75&thumbnail=750x0'
        },
      ],
      manufacturersSupplying:[
        {
          title:'海外制造商',
          sub:'9.9元起',
          url:'http://yanxuan.nosdn.127.net/802ff06dd3ef161db046eeb8db6cb4be.jpg?imageView&thumbnail=343y260&enlarge=1'
        },{
          title:'CK制造商',
          sub:'25元起',
          url:'http://yanxuan.nosdn.127.net/c1e97be1b9730360c9c228b6a6448bca.png?imageView&thumbnail=343y260&enlarge=1'
        },{
          title:'新秀丽制造商',
          sub:'34.9元起',
          url:'http://yanxuan.nosdn.127.net/e550a44d2a7a68ed38e6cfd380e514aa.png?imageView&thumbnail=343y260&enlarge=1'
        },{
          title:'MUJI 制造商',
          sub:'35元起',
          url:'http://yanxuan.nosdn.127.net/053ecfefd033a9acd2cb95483e14fcb6.jpg?imageView&thumbnail=343y260&enlarge=1'
        }
      ],
      flashSale:[
        {
          price:'223.2',
          mktPrice:'279',
          url:'http://yanxuan.nosdn.127.net/22b91371b63d59b5d98d8015e93d8203.png'
        },
        {
          price:'76.8',
          mktPrice:'98',
          url:'http://yanxuan.nosdn.127.net/afefef84a592743d93b85b8d11bbc707.png'
        },
        {
          price:'164.5',
          mktPrice:'299',
          url:'http://yanxuan.nosdn.127.net/9af5cfd5c45404c0b6af9e743a2c93d4.png'
        },
        {
          price:'199.2',
          mktPrice:'249',
          url:'http://yanxuan.nosdn.127.net/4435ea3bbdabb4862c8502725ffeb5e6.png'
        },
        {
          price:'28.8',
          mktPrice:'36',
          url:'http://yanxuan.nosdn.127.net/ddea7a964aa32e3262d836ed8a05a134.png'
        },
        {
          price:'499.5',
          mktPrice:'999',
          url:'http://yanxuan.nosdn.127.net/1fa79e032e4945e24bcf449c35a67d38.png'
        }
      ]
    }
  },
  methods:{
    changePage(current) {
      console.log('当前轮播图序号为:' + current)
    },
    clickHandler(item, index) {
      console.log(item, index)
    }
  }
}
</script>
<style media="screen">
  .slide{
    height: 4.93rem;
  }
  .manufacturersSupplying-cover{
    height: 3.47rem;
    background-size: contain;
  }
  .padding-l-5{
    padding-left: .07rem
  }
  .padding-r-5{
    padding-right: .07rem
  }
</style>
