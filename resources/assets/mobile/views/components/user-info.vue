<template>
    <div class="user-info">
        <div class="flex-start padding-rl-20">
            <div class="avatar-wrapper">
                <img @click="callLoginPopup(true)" class="avatar" :src="avatar" />
            </div>
            <div class="flex-item detail padding-l-20">{{ nickname }}</div>
            <div class="flex-item text-right">
                <router-link :to="{name: 'user'}" class="iconfont color-white font-2x">&#xe62f;</router-link>
            </div>
        </div>
        <div class="assets margin-t-30">
            <router-link :to="{name: item.url}" class="asset-item" v-for="(item, index) in assets" :key="index">
                <span class="num color-white">{{ item.num }}</span>
                <span class="text padding-t-20">{{ item.title }}</span>
            </router-link>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
    props: {
        nickname: {
            type: String,
            default: '无昵称'
        },
        avatar: {
            type: String,
            default: 'https://file.iviewui.com/dist/a0e88e83800f138b94d2414621bd9704.png'
        },
        property: {
            type: Array,
            default: () => {
                return [1, 2, 3, 4]
            }
        }
    },
    data() {
        return {
            assets: [
                {
                    num: 0,
                    title: '收藏夹',
                    url: 'user'
                },
                {
                    num: 0,
                    title: '关注店铺',
                    url: 'user'
                },
                {
                    num: 0,
                    title: '消费记录',
                    url: 'user'
                },
                {
                    num: 0,
                    title: '红包卡券',
                    url: 'user'
                }
            ]
        }
    },
    created() {
        for (let i = 0; i < this.property.length; i++) {
            this.assets[i].num = this.property[i];
        }
    },
    methods: {
        ...mapMutations(['callLoginPopup'])
    }
}
</script>

<style scoped>
    .user-info {
        padding: 50px 0px 20px 0px;
        background: linear-gradient(to right, #daac7c, #a67343);
        color: #fff;
    }
    .avatar-wrapper {
        border-radius: 50%;
    }
    .avatar {
        width: 1.6rem;
        height: 1.6rem;
        border-radius: 50%;
    }
    .detail {
        font-size: 20px;
    }

    .assets {
        display: flex;
    }
    .asset-item {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 14px;
    }
    .text {
        color: #fefefe;
    }
</style>
