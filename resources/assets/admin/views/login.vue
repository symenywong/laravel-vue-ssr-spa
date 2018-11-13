<template>
<div class="login relative flex-end" @keydown.enter="handleSubmit">
  <div class="login-bg">

  </div>
  <div class="login-con relative">
    <Card :bordered="false">
      <p slot="title">
        <Icon type="log-in"></Icon>欢迎登录
      </p>
      <div class="form-con padding-tb-10">
        <Form ref="loginForm" :model="form" :rules="rules">
          <FormItem prop="userName">
            <i-input v-model="form.userName" placeholder="请输入用户名">
            <span slot="prepend"><Icon :size="16" type="ios-person"></Icon></span>
            </i-input>
          </FormItem>
          <FormItem prop="password">
            <i-input type="password" v-model="form.password" placeholder="请输入密码">
            <span slot="prepend"><Icon :size="14" type="ios-lock"></Icon></span>
            </i-input>
          </FormItem>
          <FormItem>
            <Button @click.native="handleSubmit" :loading="isLoading" type="primary" long>{{isLoading ? '登录中...' : '登录'}}</Button>
          </FormItem>
        </Form>
        <p class="color-gray font-mini text-center">输入用户名和密码即可</p>
      </div>
    </Card>
  </div>
</div>
</template>

<script>
import Cookies from 'js-cookie';
import {mapGetters} from 'vuex';
export default {
  data() {
    return {
      form: {
        userName: '',
        password: ''
      },
      rules: {
        userName: [{
          required: true,
          message: '账号不能为空',
          trigger: 'blur'
        }],
        password: [{
          required: true,
          message: '密码不能为空',
          trigger: 'blur'
        }]
      },
      isLoading: false
    };
  },
  computed:{
    ...mapGetters(['redirectUrl'])
  },
  methods: {
    handleSubmit() {
      this.isLoading = true
      let vm=this;
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          let formData = {
            username: this.form.userName,
            password: this.form.password
          }
          vm.$router.push(vm.redirectUrl || '/admin/home');
          return;
          // 示例, 以下代码为 action 调用请求
          vm.$store.dispatch('loginRequest', formData).then(response => {
            this.isLoading = false
            vm.$router.push(vm.redirectUrl || '/admin/home');
          }).catch(error => {
            this.isLoading = false
          })

        }
      });
    }
  }
};
</script>
<style lang="scss">
.login {
    width: 100%;
    height: 100%;
    background: radial-gradient(ellipse at center, #261438 0%,#000300 100%);
    &-con {
        width: 310px;
        height: 290px;
        margin-right: 50px;
        z-index:10;
    }
}
.login-bg {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-size: cover;
    background-position: center;
    z-index:2;
}
</style>
