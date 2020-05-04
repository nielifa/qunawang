<template>
    <div class="header">
       城市选择
       <router-link to="/">
       <div><i class="iconfont header-back">&#xe624;</i></div>
       </router-link>
    </div>
</template>

<script>
    export default {
        name:"cityHeader"
    }
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
.header
  position:relative
  height: 0.86rem
  line-height:.86rem
  overflow:hidden
  text-align:center
  color:#fff
  background:$bgColor
  font-size:.32rem
  .header-back
    position:absolute
    top:0
    left:0
    width:.64rem
    text-align:center
    font-size:.4rem
    color:#fff
</style>