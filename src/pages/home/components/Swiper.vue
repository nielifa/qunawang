<template>
<div class="wrapper">
<swiper ref="mySwiper" :options="swiperOptions">
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
        },
        swiperList:[{
          id:'0001',
          imgUrl:"//imgs.qunarzz.com/p/p70/1809/e7/4941057a6aae702.jpg_256x160_9fee6ccb.jpg"
        },{
          id:'0002',
          imgUrl:"//imgs.qunarzz.com/p/p66/201304/17/384810d022dd28f793835fbb.jpg_256x160_6a7ec251.jpg"
        }]
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