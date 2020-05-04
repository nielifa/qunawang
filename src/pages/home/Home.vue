<template>
    <div>
       <Header :city="city"/>
       <Swiper :swiperList="swiperList"/>
       <Icons :iconList="iconList"/>
       <Recommond :recommondList="recommondList"/>
       <Weekend :weekendList="weekendList"/>
    </div>
</template>

<script>
import Header from './components/Header'
import Swiper from './components/Swiper'
import Icons from './components/Icons'
import Recommond from './components/Recommond'
import Weekend from './components/Weekend'
import axios from 'axios'
    export default {
        name:"Home",
        components:{
            Header,
            Swiper,
            Icons,
            Recommond,
            Weekend
        },
        data(){
            return {
                city:"",
                swiperList:[],
                iconList:[],
                recommondList:[],
                weekendList:[]
            }
        },
        methods:{
            getInfo(){
                axios.get("/mock/index.json").then(res=>{
                    res=res.data
                    if(res.ret && res.data){
                        const data=res.data
                        this.city=data.city
                        this.swiperList=data.swiperList
                        this.iconList=data.iconList
                        this.recommondList=data.recommondList
                        this.weekendList=data.weekendList
                    }
                })
            }
        },
        mounted(){
            this.getInfo()
        }
    }
</script>

<style scoped>

</style>