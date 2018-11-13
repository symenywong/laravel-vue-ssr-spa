<template lang="html">
  <div class="layout-header margin-b-10 width-100 flex-space-between bg-white padding-tb-10 padding-rl-20 border-1px-b">
    <div class="flex-start-center">
      <Button @click="toggleMenuShrink"><Icon size="24" type="md-menu" /></Button>
      <div class="margin-rl-10">
        <Icon class="pointer" @click.native="$jump('_admin_home')" size="24" type="md-home" />
      </div>
    </div>
    <div class="flex-start-center">
      <FullScreen v-model="isFullscreen"></FullScreen>
      <Dropdown class="layout-header-dropdownMenu">
          <a href="javascript:void(0)">
            <Avatar src="https://file.iviewui.com/dist/a0e88e83800f138b94d2414621bd9704.png"></Avatar>
            <span>admin</span>
            <Icon size="24" type="md-arrow-dropdown" />
          </a>
          <DropdownMenu slot="list">
              <DropdownItem>admin</DropdownItem>
              <DropdownItem>修改密码</DropdownItem>
              <DropdownItem>更换头像</DropdownItem>
              <DropdownItem>
                <span @click="logout">退出登录</span>
              </DropdownItem>
          </DropdownMenu>
        </Dropdown>
    </div>
  </div>
</template>

<script>
import FullScreen from '../../components/full-screen'
import {mapGetters} from 'vuex';
export default {
  components:{FullScreen},
  data:function(){
    return {
      isFullscreen:false
    }
  },
  methods:{
    toggleMenuShrink:function(){
      this.$store.commit("toggleMenuShrink")
    },
    logout:function(){
      this.$router.push({name:'login'})
    }
  }
}
</script>

<style lang="css">
.layout-header-dropdownMenu{
  margin-right: 30px;
  margin-left: 20px;
}
</style>
