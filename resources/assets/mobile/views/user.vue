<template>
    <div class="flex-col-start">
        <div class="gradient padding-tb-30 padding-rl-20" :style="{opacity: opacity}">
            <span class="flex-item"></span>
            <span class="flex-item text-center font-1x">{{ nickname }}</span>
            <router-link :to="{name: 'user'}" class="flex-item text-right color-white" style="font-size: 14px;">设置</router-link>
        </div>
        <cube-scroll class="userView" @scroll="scroll" :scrollEvents="['scroll']">
          <user-info :nickname="nickname"></user-info>
            <div class="wrapper border-r-10 margin-rl-20 margin-tb-20">
                <div class="flex-space-between padding-rl-30 padding-tb-20 font-normal border-1px-b">
                    <span>我的订单</span>
                    <router-link :to="{name: 'user'}">查看全部订单 <span class="iconfont color-gray">&#xe6da;</span></router-link>
                </div>
                <div class="flex-start padding-tb-30">
                    <router-link :to="{name: item.url, query:{type: item.type}}" class="flex-item flex-col-start-center" v-for="item in orders" :key="item.type">
                        <div class="relative">
                            <span class="iconfont order-icon" v-html="item.icon"></span>
                            <badge v-if="item.num" class="posit" :num="item.num"></badge>
                        </div>
                        <span class="padding-t-20">{{ item.title }}</span>
                    </router-link>
                </div>
            </div>
            <div class="wrapper border-r-10 margin-rl-20 margin-tb-20">
                <div class="padding-rl-20 padding-tb-20 font-normal border-1px-b">
                    其他
                </div>
                <div class="flex-start flex-wrap">
                    <router-link :to="{name: item.url}" class="other-item padding-tb-20 flex-col-center" v-for="(item, index) in others" :key="index">
                        <span class="iconfont font-4x" v-html="item.icon" :style="{color: item.color}"></span>
                        <span class="padding-t-20">{{ item.title }}</span>
                    </router-link>
                </div>
            </div>
        </cube-scroll>
        <x-tabbar></x-tabbar>
    </div>
</template>

<script>
import UserInfo from './components/user-info'
import XTabbar from '../components/x-tabbar';
import Badge from '../components/badge';
import { mapMutations, mapActions } from 'vuex';
export default {
    data() {
        return {
            opacity: 0,
            nickname: '',
            orders: [
                {
                    icon: '&#xe60f;',
                    title: '待付款',
                    num: 0,
                    url: 'user',
                    type: 1
                },
                {
                    icon: '&#xe6c6;',
                    title: '待发货',
                    num: 5,
                    url: 'user',
                    type: 2
                },
                {
                    icon: '&#xe69d;',
                    title: '待收货',
                    num: 0,
                    url: 'user',
                    type: 3
                },
                {
                    icon: '&#xe652;',
                    title: '已收货',
                    num: 12,
                    url: 'user',
                    type: 4
                },
                {
                    icon: '&#xe644;',
                    title: '退款/售后',
                    num: 0,
                    url: 'user',
                    type: 5
                }
            ],
            others: [
                {
                    title: '个人设置',
                    url: 'user',
                    color: '#ff7043',
                    icon: '&#xe6cf'
                },
                {
                    title: '收货地址',
                    url: 'user',
                    color: '#ff7043',
                    icon: '&#xe605;'
                },
                {
                    title: '关注用户',
                    url: 'user',
                    color: '#ff7043',
                    icon: '&#xe6ec;'
                },
                {
                    title: '推广服务',
                    url: 'user',
                    color: '#ff7043',
                    icon: '&#xe721;'
                },
                {
                    title: '售后流程',
                    url: 'user',
                    color: '#ff7043',
                    icon: '&#xe633;'
                },
                {
                    title: '帮助服务',
                    url: 'user',
                    color: '#ff7043',
                    icon: '&#xe624;'
                },
                {
                    title: '系统设置',
                    url: 'user',
                    color: '#ff7043',
                    icon: '&#xe651;'
                },
                {
                    title: '积分明细',
                    url: 'user',
                    color: '#ff7043',
                    icon: '&#xe66d;'
                }
            ]
        }
    },
    components: {
        XTabbar,Badge,UserInfo
    },
    created() {

    },
    methods: {
        scroll(coord) {
            let y = coord.y;
            if (y >= -5) {
                this.opacity = 0;
            } else if (y < -5 && y >= -10) {
                this.opacity = 0.2;
            } else if (y < -10 && y >= -20) {
                this.opacity = 0.4;
            } else if (y < -20 && y >= -30) {
                this.opacity = 0.6;
            } else if (y < -30 && y >= -40) {
                this.opacity = 0.8;
            } else if (y < -50) {
                this.opacity = 1;
            }
        }
    }
}
</script>

<style scoped>
    .userView {
        flex: 1;
        width: 100%;
        background: #f1f1f1;
    }
    .gradient {
        z-index: 3;
        position: fixed;
        top: 0;
        display: flex;
        width: 100%;
        align-items: center;
        color: #fff;
        background: linear-gradient(to right, #daac7c, #a67343);
    }

    .wrapper {
        background: #fff;
    }
    .order-icon {
        color: #ff7043;
        font-size: 28px;
    }
    .posit {
        position: absolute;
        top: -.2rem;
        right: -.21rem;
    }

    .other-item {
        width: 25%;
        flex: 0 0 25%;
    }
</style>
