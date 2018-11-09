<template>
    <div class="padding-rl-10">
        <h1>SSR with Laravel & Vue </h1>
        <section class="text-xl mb-12">
            <p>
                This is a quick demo app for server side rendering Vue with Laravel. Below is a list of our open source packages, which our client-side app has
                divided by type.
            </p>
            <p>
                We're using vue-router for this page so each package type has its own permalink, and will be prerendered
                on the server if visited directly.
            </p>
        </section>
        <div class="margin-tb-10 color-success">{{ types }}</div>
        <router-link class="font-1x color-blue" :to="{name:'login'}">登陆跳转测试</router-link>
    </div>
</template>

<script>
export default {
    computed: {
        types() {
            return this.$store.state.packages;
        },
    },
};
</script>