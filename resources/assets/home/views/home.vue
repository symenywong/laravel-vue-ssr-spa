<template>
    <div class="padding-rl-10 home-page">
        <div class="flex-center">
          <svg class="margin-r-20" xmlns="http://www.w3.org/2000/svg" width="84.1" height="57.6" viewBox="0 0 84.1 57.6"><path fill="#FB503B" d="M83.8 26.9c-.6-.6-8.3-10.3-9.6-11.9-1.4-1.6-2-1.3-2.9-1.2s-10.6 1.8-11.7 1.9c-1.1.2-1.8.6-1.1 1.6.6.9 7 9.9 8.4 12l-25.5 6.1L21.2 1.5c-.8-1.2-1-1.6-2.8-1.5C16.6.1 2.5 1.3 1.5 1.3c-1 .1-2.1.5-1.1 2.9S17.4 41 17.8 42c.4 1 1.6 2.6 4.3 2 2.8-.7 12.4-3.2 17.7-4.6 2.8 5 8.4 15.2 9.5 16.7 1.4 2 2.4 1.6 4.5 1 1.7-.5 26.2-9.3 27.3-9.8 1.1-.5 1.8-.8 1-1.9-.6-.8-7-9.5-10.4-14 2.3-.6 10.6-2.8 11.5-3.1 1-.3 1.2-.8.6-1.4zm-46.3 9.5c-.3.1-14.6 3.5-15.3 3.7-.8.2-.8.1-.8-.2-.2-.3-17-35.1-17.3-35.5-.2-.4-.2-.8 0-.8S17.6 2.4 18 2.4c.5 0 .4.1.6.4 0 0 18.7 32.3 19 32.8.4.5.2.7-.1.8zm40.2 7.5c.2.4.5.6-.3.8-.7.3-24.1 8.2-24.6 8.4-.5.2-.8.3-1.4-.6s-8.2-14-8.2-14L68.1 32c.6-.2.8-.3 1.2.3.4.7 8.2 11.3 8.4 11.6zm1.6-17.6c-.6.1-9.7 2.4-9.7 2.4l-7.5-10.2c-.2-.3-.4-.6.1-.7.5-.1 9-1.6 9.4-1.7.4-.1.7-.2 1.2.5.5.6 6.9 8.8 7.2 9.1.3.3-.1.5-.7.6z"></path></svg>
          <img style="width:70px;height:70px;" class="hero-logo margin-l-20" src="https://vuejs.org//images/logo.png" alt="vue logo">
        </div>
        <p class="text-center margin-t-10 font-normal">
          <a class="color-gray" href="https://github.com/symenywong/laravel-vue-ssr-spa.git" target="_blank">
            <svg class="margin-rl-10" aria-labelledby="simpleicons-github-dark-icon" width="24" lang="" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title id="simpleicons-github-icon" lang="en">GitHub Dark icon</title><path fill="#7F8C8D" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>
          </a>
        </p>
        <h1 class="text-center margin-tb-10 home-title">SSR with Laravel & Vue </h1>
        <section class="text-center font-normal line-height-2">
            <p>
                This is a quick demo app project for server side rendering Vue with Laravel. To see more about the docs below this, besides ,
                this also has an SPA font-end dev demo inside!
            </p>
            <p>
                We're using vue-router for this page so each package type has its own permalink, and will be prerendered
                on the server if visited directly.
            </p>
        </section>
        <section class="text-center font-normal margin-tb-10 line-height-2">
            <p>
                这是一个基于 Laravel+Vue的SSR基础 demo 工程框架, 具体文档请前往如下链接查看. 不止于此, 我们同样内置了前后端分离的 SPA 框架方案!
            </p>
            <p>
                同样的, 我们使用了一些优秀的 Vue 插件, 比如 Vue-Router , Vuex 以及 axios, 这些将提供更好的开发体验和更优雅数据交互方案!
            </p>
        </section>
        <div class="margin-tb-10 font-1x flex-center">
            <a class="margin-rl-20" href="/list">列表-> a链接跳转</a>
            <a class="margin-rl-20" href="/page">文章-> a链接跳转</a>
            <router-link class="margin-rl-20" :to="{ name: 'list' }">列表-> router-link跳转</router-link>
            <router-link class="margin-rl-20" :to="{ name: 'page' }">文章-> router-link跳转</router-link>
        </div>
        <div class="margin-tb-10 bg-gray border-r-5 padding-10">
          <p v-for="(item,index) in server">{{index}}:{{item}}</p>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        server() {
            return this.$store.state.packages;
        },
    },
};
</script>
<style>
.home-page{
  margin-top: 80px;
}
</style>
