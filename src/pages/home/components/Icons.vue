<template>
    <div class="icons">
       <swiper :options="swiperOptions">
          <swiper-slide v-for="(page,index) in pages" :key="index">
          <div class="icon" v-for="item in page" :key="item.id">
          <div class="icon-img">
          <img class="icon-img-content" :src="item.imgUrl" alt="">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
          </div>
          </swiper-slide>
       </swiper>
    </div>
</template>

<script>
    export default {
        name:"HomeIcons",
        props:{
           iconList:Array
        },
        data(){
           return {
              swiperOptions:{
                 autoplay:false
              }
            }
        },
        computed:{
           pages(){
              const pages=[]
              this.iconList.forEach((item,index)=>{
                 const page=Math.floor(index/8)
                 if(!pages[page]){
                     pages[page]=[]
                 }
                 pages[page].push(item)
              })
              return pages
           }
        }
    }
</script>

<style scoped lang="stylus">
@import '~@/assets/styles/varibles.styl'
@import '~@/assets/styles/mixins.styl'
.icons >>> .swiper-container
   height:0
   padding-bottom:50%
.icon
   position:relative
   overflow:hidden
   height:0
   width:25%
   float:left
   padding-bottom:25%
   .icon-img
     position:absolute
     top:0
     left:0
     right:0
     bottom 0.44rem
     box-sizing:border-box
     padding:.1rem
     .icon-img-content
       display:block
       margin:0 auto
       height:100%
    .icon-desc
      position:absolute
      left:0
      right:0
      bottom:0
      line-height:.44rem
      height:.44rem
      color:$darkTextColor 
      text-align:center 
      ellipsis()
</style>