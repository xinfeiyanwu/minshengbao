<template>
    <div 
        :class="classObj"
        :SidePageShow="SidePageShow" 
        v-show="show" 
        ref="SidePage">
        <!-- nav-bar -->
        <NavBar :isDetail="isDetail" :nav="nav" :style="{'position': 'relative'}">
            <template #left-nav>
                <span @click="close">&lt;<span class="close" v-if="isDetail">关闭</span></span>    
            </template>
            <template #default>
                {{nav.title}}
            </template>
            <template #right-nav>
                {{nav.rightWord}}
            </template>
        </NavBar>

        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import NavBar from '@/components/common/bar/NavBar'
import Vue from 'vue'
export default {
    name: "SidePage",
    components: {NavBar},
    props: {
        nav: {
            type: Object,
            default: () => {
                return {
                    title: '标题',
                    rightWord: '右边文字'
                }
            }
        },
        isDetail: {
            type: Boolean,
            default: false
        },
        SidePageShow: Boolean
    },
    data() {
        return {
            show: true,
            classObj: {
                SidePage: true,
                enter: true,
                hide: false
            }
        }
    },
    methods: {
        close () {
            Vue.set(this.classObj, 'enter', false);
            Vue.set(this.classObj, 'hide', true);
        }
    },
    watch: {
        SidePageShow: function (newval) {
            // 监控父级传来的SidePageShow，开始初始页面进入动画
            if(newval==true) {
                this.show = true;
                Vue.set(this.classObj, 'enter', true);
                Vue.set(this.classObj, 'hide', false);
            }
        }
    },
    mounted(){
        this.$refs.SidePage.addEventListener('webkitAnimationEnd',()=>{
            console.log('webkitAnimationEnd')
        })
        this.$refs.SidePage.addEventListener('animationend',(e)=>{
            let type = e.animationName.split('-')[0];
            if(type == 'hide') {
                this.show = false;
                this.$emit('resetShowHandle');
            }
            console.log('animationend')
        })
    }
}
</script>

<style lang="less" scoped>
.SidePage {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    .nav {
        .close {
            padding-left: 6px;
        }
    }
}
.enter {
    transform: translateX(100%);
    animation-name: enter;
    animation-duration: .5s;
    animation-fill-mode: forwards; 
    background-color: #ccc;

    @keyframes enter {
        from {
            transform: translateX(100%);
        }
        to {
            transform: translateX(0);
        }
    }
}
.hide {
    animation-name: hide;
    animation-duration: .5s;
    animation-fill-mode: forwards; 
    background-color: #ccc;

    @keyframes hide {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(100%);
        }
    }
}
</style>


