<template>
    <div>
       <Header/>
       <Swiper/>
       <Icons/>
    </div>
</template>

<script>
import Header from './components/Header'
import Swiper from './components/Swiper'
import Icons from './components/Icons'
    export default {
        name:"Home",
        components:{
            Header,
            Swiper,
            Icons
        }
    }
</script>

<style scoped>

</style>