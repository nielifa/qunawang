<template>
    <div>
       <div class="title public">周末去哪儿</div>
       <ul class="container">
           <li class="main" v-for="(item,index) in weekendList" :key="index">
               <img class="img-pic" :src="item.imgUrl" alt="">
               <p class="desc_1">{{item.desc_1}}</p>
               <p class="desc_2">{{item.desc_2}}</p>
           </li>
       </ul>
    </div>
</template>

<script>
    export default {
        name:"HomeWeekend",
        props:{
            weekendList:Array
        }
    }
</script>

<style lang="stylus" scoped>
.title
  font-size: 0.34rem
  padding-bottom:.2rem
  background:#eee
.public
  padding:.28rem .28rem
  border-bottom:1px solid #ddd8ce
.container
  width:100% 
  .main
    .img-pic
      width:100%
    .desc_1
      padding:.3rem .2rem .2rem .1rem 
      font-weight:bold 
    .desc_2
      padding:0rem .1rem .1rem .1rem  
</style>