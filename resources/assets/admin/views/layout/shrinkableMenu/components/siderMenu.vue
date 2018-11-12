<style lang="scss">
</style>

<template>
    <Menu ref="sideMenu" :active-name="$route.name" :theme="menuTheme" width="auto" @on-select="changeMenu">
      <template v-for="(item,index) in menuList">
          <MenuItem v-if="!item.children.length" :name="item.uri" :key="index">
              <Icon :color="iconColor" :type="item.icon" :size="iconSize" :key="'menuicon' + item.uri"></Icon>
              <span class="layout-text" :key="'title' + item.uri">{{item.title}}</span>
          </MenuItem>
          <Submenu :name="item.uri" v-else>
              <template slot="title">
                  <Icon :color="iconColor" :type="item.icon" :size="iconSize"></Icon>
                  <span >{{item.title}}</span>
              </template>
              <MenuItem v-for="(item1,index1) in item.children" :key="index+'-'+index1" :name="item1.uri">
                <Icon :color="iconColor" :type="item1.icon" :size="iconSize-4"></Icon>
                <span >{{item1.title}}</span>
              </MenuItem>
          </Submenu>
      </template>
    </Menu>
</template>

<script>
export default {
    name: 'sidebarMenu',
    props: {
        menuList: Array,
        iconSize: Number,
        menuTheme: {
            type: String,
            default: 'dark'
        },
        openNames: {
            type: Array
        },
        iconColor:{
          type: String,
          default:"#454552"
        }
    },
    methods: {
        changeMenu (active) {
            this.$emit('on-change', active);
        }
    },
    updated () {
        this.$nextTick(() => {
            if (this.$refs.sideMenu) {
                this.$refs.sideMenu.updateOpened();
            }
        });
    }

};
</script>
