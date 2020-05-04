<template>
    <div>
       <div class="container">
          <div class="title public">
              猜你喜欢
          </div>
          <div v-for="(item,index) in recommondList" :key="index" class="main public">
              <div class="left">
                  <img class="img-pic" :src="item.imgUrl" alt="">
              </div>
              <div class="right">
                  <p class="desc-title">
                      {{item.descTitle}}
                  </p>
                  <p class="desc-tips">
                      {{item.descTips}}
                  </p>
                  <p class="desc-price">
                      <span class="strong">11</span>
                      <span class="strong-color">元</span>
                      <span class="strong-sell">已售77230</span>
                  </p>
              </div>
          </div>
       </div>
    </div>
</template>

<script>
    export default {
        name:"HomeRecommond",
        props:{
          recommondList:Array
        }
    }
</script>

<style lang="stylus" scoped>
.container
  width:100%
  .title
    font-size: 0.34rem
    padding-bottom:.2rem
  .public
    padding:.28rem .28rem
    border-bottom:1px solid #ddd8ce
  .main
    overflow:hidden
    position:relative
    .left
      float:left
      .img-pic
        width:1.8rem
        height:1.64rem 
    .right
      float:left
      margin-left:.2rem  
      .desc-title
        padding-top:.1rem
        margin-bottom:.12rem
        font-size:.3rem
        font-weight:400
        color:#333  
      .desc-tips
        font-size:.24rem
        height:.68rem 
        margin-bottom:.16rem 
        color:#666
        text-overflow:ellipsis
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      .desc-price
        width: 100%;
        color: #666;
        .strong
          font-size: .36rem;
          color: #F60;
        .strong-color
          font-size: .24rem;
          color: #F60;  
        .strong-sell
          position:absolute
          bottom:.2rem
          right:.2rem  
          font-size:.24rem;
</style>