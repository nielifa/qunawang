<template>
    <div class="header">
       <div class="header-left">
           <i class="back-icon iconfont">&#xe624;</i>
       </div>
       <div class="header-input"><i class="iconfont">&#xe632;</i>输入搜索目的地</div>
          <div class="header-right" @click="tiaozhuan">
              {{city}}
              <i class="iconfont arrow-icon">&#xe6e5;</i>
          </div>
    </div>
</template>

<script>
    export default {
        name:"HomeHeader",
        props:{
            city:String
        },
        methods:{
            tiaozhuan(){
                this.$router.push("/city")
            }
        }
    }
</script>

<style scoped lang="stylus">
@import '~@/assets/styles/varibles.styl'
.header{
    display:flex
    line-height:0.86rem
    background:$bgColor
    color:#fff
}
.header-left{
    width:0.64rem
    float:left
}
.back-icon{
    display:block
    text-align:center
    font-size:0.4rem
}
.header-right{
    width:1.24rem
    float:right  
    text-align:center
    color:#fff
}  
.arrow-icon{
    font-size:0.24rem
}     
.header-input{
    flex:1
    background:#fff
    border-radius:0.1rem
    margin-top:0.12rem
    margin-left:0.2rem
    padding-left:0.2rem
    line-height:0.64rem
    height:0.64rem
    color:#ccc
}
</style>