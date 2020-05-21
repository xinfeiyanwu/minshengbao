<template>
    <div class="FirstShade" v-if="isShow">
        <img :src="img" alt="FirstShade">
        <div class="downTime" @click="hideFirstShade" v-text="downTime+'秒'"></div>
    </div>
</template>
<script>
import FirstShade from '@/api/FirstShade/FirstShade.js'
import {mapState} from 'vuex'
import { setInterval,clearInterval } from 'timers';
export default {
    name: 'FirstShade',
    data(){
        return {
            downTime: 3,
            img: require('@/assets/img/FirstShade/FirstShade.jpg'),
            timer: null,
        }
    },
    methods: {
        hideFirstShade(){
            this.$router.replace('/Home');
            this.$store.commit('hideFirstShade');
            clearInterval(this.timer);
        }
    },
    created(){
        // FirstShade().then(res => {
        //     this.img = res;
        //     console.log(res)
        // })
    },
    mounted(){
        this.timer = setInterval(() => {
            if(this.downTime==0) {
                this.$router.replace('/Home')
                clearInterval(this.timer);
                this.$store.commit('hideFirstShade');
                return ;
            }
            this.downTime--;
        },1000)
    },
    computed: {
        ...mapState({
            isShow: (state) => state.FirstShade.isShow
        })
    }
}
</script>

<style lang="less" scoped>
.FirstShade{
    position: relative;
    height: 100vh;
    width: 100vw;
    z-index: 9999;
    .downTime{
        position: absolute;
        right: 10px;
        top: 40px;
        color: #fff;
        padding: 2px 20px;
        border: 1px solid #fff;
        border-radius: 8px;
    }
}
</style>


