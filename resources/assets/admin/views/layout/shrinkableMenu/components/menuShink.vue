<style media="screen">
  .menuShink-button:hover{
    background-color: rgba(0,0,0,0.5);
  }
  .menuShink .ivu-dropdown-rel{
    width:100%;
  }
</style>
<template>
    <div class="menuShink">
      <template v-for="(item, index) in menuList">
        <Dropdown class="padding-tb-5 width-100 flex-center" transfer v-if="item.children.length> 1" placement="right-start" :key="index" @on-click="changeMenu">
            <div type="text" class="menuShink-button pointer flex-center padding-tb-7">
                <Icon :color="iconColor" :size="26" :type="item.icon"></Icon>
            </div>
            <DropdownMenu style="width: 160px;" slot="list">
                <!-- <DropdownItem :name="item.uri"><Icon :type="item.icon"></Icon><span style="padding-left:10px;">{{ item.title }}</span></DropdownItem> -->
                <template v-for="(child, i) in item.children">
                    <DropdownItem :name="child.uri" :key="i"><Icon :type="child.icon"></Icon><span style="padding-left:10px;">{{ child.title }}</span></DropdownItem>
                </template>
            </DropdownMenu>
        </Dropdown>
        <Dropdown class="padding-tb-5 width-100 flex-center" transfer v-if="!item.children.length||item.children.length==1" placement="right-start" @on-click="changeMenu">
            <div class="menuShink-button flex-center pointer padding-tb-7" @click="changeMenu(item.uri)" type="text">
                <Icon :size="26" :color="iconColor" :type="item.icon"></Icon>
            </div>
            <DropdownMenu style="width: 160px;" slot="list">
                <DropdownItem :name="item.uri" :key="'d' + index"><Icon :type="item.icon" color="#454552"></Icon><span style="padding-left:10px;">{{item.title }}</span></DropdownItem>
            </DropdownMenu>
        </Dropdown>
      </template>
    </div>
</template>
<script>
export default {
    name: 'sidebarMenuShrink',
    props: {
        menuList: {
            type: Array
        },
        iconColor:{
          type: String,
          default:"#454552"
        }
    },
    created:function(){
      console.log(this.menuList,11);
    },
    methods: {
        changeMenu (active) {
            this.$emit('on-change', active);
        },
        itemTitle (item) {
            if (typeof item.title === 'object') {
                return this.$t(item.title.i18n);
            } else {
                return item.title;
            }
        }
    }
};
</script>
