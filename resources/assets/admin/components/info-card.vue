<template>
  <Card :shadow="shadow" class="info-card-wrapper" :padding="0">
    <div class="content-con">
      <div class="left-area" :style="{background: color, width: leftWidth}">
        <common-icon class="icon" :type="icon" :size="iconSize" color="#fff"/>
      </div>
      <div class="right-area" :style="{width: rightWidth}">
        <div>
          <slot></slot>
        </div>
      </div>
    </div>
  </Card>
</template>

<script>
import CommonIcon from './common-icon'
export default {
  name: 'InforCard',
  components: {
    CommonIcon
  },
  props: {
    left: {
      type: Number,
      default: 36
    },
    color: {
      type: String,
      default: '#2d8cf0'
    },
    icon: {
      type: String,
      default: ''
    },
    iconSize: {
      type: Number,
      default: 20
    },
    shadow: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    leftWidth () {
      return `${this.left}%`
    },
    rightWidth () {
      return `${100 - this.left}%`
    }
  }
}
</script>

<style lang="scss">
.common{
  float: left;
  height: 100%;
  display: table;
  text-align: center;
}
.size{
  width: 100%;
  height: 100%;
}
.middle-center{
  display: table-cell;
  vertical-align: middle;
}
.info-card-wrapper{
  width: 100%;
  height: 100%;
  overflow: hidden;
  .ivu-card-body{
    width: 100%;
    height: 100%;
  }
  .content-con{
    width: 100%;
    height: 100%;
    position: relative;
    .left-area{
      float: left;
      height: 100%;
      display: table;
      text-align: center;
      & > .icon{
        display: table-cell;
        vertical-align: middle;
      }
    }
    .right-area{
      float: left;
      height: 100%;
      display: table;
      text-align: center;
      & > div{
        display: table-cell;
        vertical-align: middle;
      }
    }
  }
}
</style>
