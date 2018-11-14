<template lang="html">
  <div class="scroll-nav-side bg-white flex-col-space-between">
    <div class="view-wrapper content">
      <cube-scroll-nav
        :side="true"
        :data="data"
        :current="current"
        @change="changeHandler"
        @sticky-change="stickyChangeHandler">
        <ul class="prepend-header font-1x" slot="prepend">
          <li>11</li>
          <li>22</li>
          <li>333</li>
        </ul>
        <cube-scroll-nav-panel
          v-for="item in data"
          :key="item.name"
          :label="item.name"
          :title="item.name">
          <ul>
            <li v-for="food in item.foods">
              <div>
                <img class="border-r-10" :src="food.icon">
                <p class="line-ellispsis-1">{{food.name}}</p>
              </div>
            </li>
          </ul>
        </cube-scroll-nav-panel>
      </cube-scroll-nav>
    </div>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from '../components/x-tabbar';
import goodsData from '../datas/goods-list.json';
const goods = goodsData.goods

export default {
  data() {
    return {
      data: goods,
      current: goods[3].name
    }
  },
  components: {
    Tabbar
  },
  methods: {
    changeHandler(label) {
      console.log('changed to:', label)
    },
    stickyChangeHandler(current) {
      console.log('sticky-change', current)
    }
  }
}

</script>

<style lang="scss">
  .scroll-nav-side{
    .prepend-header{
      width: 90%;
      margin: 20px auto;
      text-align: center;
      line-height: 1.6;
      border-radius: 2px;
      box-shadow: 0 0 4px rgba(0, 0, 0, .2);
    }

    .cube-scroll-nav-main{
        background-color: #efeff4;
    }

    .cube-sticky-fixed{
      background-color: #efeff4;
    }

    .cube-scroll-nav-bar{
      width: 2.4rem;
      background-color: transparent;
    }

    .cube-scroll-nav-bar-item{
      padding: 15px;
    }

    .cube-scroll-nav-bar-item_active{
      background-color: #fff;
    }

    .cube-scroll-nav-panels{
        background-color: #fff;
    }

    .cube-scroll-nav-panel{
      img{
        width: 3.04rem;
        height: 3.04rem;
      }

      ul{
        overflow: hidden;
        font-size: 14px;
        line-height: 1.4;
        color: #666;
      }

      li{
        float: left;
        width: 50%;
        div{
          width: 3.04rem;
          margin: auto;
        }
      }
    }

    .cube-scroll-nav-panel-title{
      padding: 15px;
      font-size: 16px;
      background-color: #fff;
    }
  }


</style>
