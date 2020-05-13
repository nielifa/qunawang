<template>
    <div>
       <Header/>
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
import {mapState} from 'vuex'
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
                lastCity:"",
                swiperList:[],
                iconList:[],
                recommondList:[],
                weekendList:[]
            }
        },
        computed:{
            ...mapState(['city'])
        },
        methods:{
            getInfo(){
                axios.get("/mock/index.json?city="+this.city).then(res=>{
                    res=res.data
                    if(res.ret && res.data){
                        const data=res.data
                        this.swiperList=data.swiperList
                        this.iconList=data.iconList
                        this.recommondList=data.recommondList
                        this.weekendList=data.weekendList
                    }
                })
            }
        },
        mounted(){
            this.lastCity=this.city
            this.getInfo()
        },
        activated(){
            if(this.lastCity!==this.city){
                this.lastCity=this.city
                this.getInfo()
            }
        }
    }
</script>

<style scoped>

</style>