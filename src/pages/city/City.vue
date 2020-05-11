<template>
    <div>
       <Header />
       <Search />
       <List :cities="cities" :hot="hotCities"/>
       <Alphabet :cities="cities"/>
    </div>
</template>

<script>
import axios from 'axios'
import Header from './components/Header'
import Search from './components/Search'
import List from './components/List'
import Alphabet from './components/Alphabet'
    export default {
        name:"City",
        components:{
           Header,
           Search,
           List,
           Alphabet
        },
        data(){
            return {
                cities:{},
                hotCities:[]
            }
        },
        methods:{
            getCityInfo(){
                axios.get('/mock/city.json')
                .then(this.handleGetCityInfoSucc)
            },
            handleGetCityInfoSucc(res){
                res=res.data
                if(res.ret && res.data){
                    const data = res.data
                    this.cities = data.cities
                    this.hotCities = data.hotCities
                }
            }
        },
        mounted(){
            this.getCityInfo()
        }
    }
</script>

<style lang="stylus" scoped>

</style>