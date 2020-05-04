<template>
<div class="wrapper">
<swiper ref="mySwiper" :options="swiperOptions" v-if="showSwiper">
    <swiper-slide v-for="item in swiperList" :key="item.id">
      <img class="swiper-img" :src="item.imgUrl" alt="">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</div>
</template>

<script>
export default {
  name: 'HomeSwiper',  
  data() {
      return {
        swiperOptions: {
          pagination:'.swiper-pagination',
          loop:true
          // Some Swiper option/callback...
        }
      }
    },
  props:{
    swiperList:Array
  },
  computed:{
    showSwiper(){
      return this.swiperList.length
    }
  }
}
</script>

<style scoped lang="stylus">
.wrapper >>> .swiper-pagination-bullet-active
 background:#fff

.swiper-img{
  width:100%;
  height:3rem
}
.wrapper{
  width:100%;
  height:0;
  padding-bottom:40%
}
</style>