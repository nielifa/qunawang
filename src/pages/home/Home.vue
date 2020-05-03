<template>
    <div>
       <Header/>
       <Swiper/>
    </div>
</template>

<script>
import Header from './components/Header'
import Swiper from './components/Swiper'
    export default {
        name:"Home",
        components:{
            Header,
            Swiper
        }
    }
</script>

<style scoped>

</style>