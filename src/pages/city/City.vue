<template>
    <div>
       <Header />
       <Search />
    </div>
</template>

<script>
import Header from './components/Header'
import Search from './components/Search'
    export default {
        name:"City",
        components:{
           Header,
           Search
        }
    }
</script>

<style lang="stylus" scoped>

</style>