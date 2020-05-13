<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img
        class="banner-img"
        src="https://imgs.qunarzz.com/sight/p0/1507/b0/b01d5fd6a14ad85f.img.jpg_710x360_22a35808.jpg"
        alt
      />
      <div class="banner-info">
        <div class="banner-title">还珠格格中漱芳斋取景地。</div>
        <div class="banner-number">
          <i class="iconfont banner-icon">&#xe627;</i>
          39
        </div>
      </div>
    </div>
    <CommonGallary :imgs="imgs" v-show="showGallary" @handleGallaryClose="handleGallaryClose" />
  </div>
</template>

<script>
import CommonGallary from "@/common/gallary/Gallary";
export default {
  name: "DetailBanner",
  data() {
    return {
      showGallary: false,
      imgs: [
        "https://imgs.qunarzz.com/sight/p0/1905/7c/7c822b8cf222bb76a3.img.jpg_1190x550_88b93bc3.jpg",
        "https://imgs.qunarzz.com/sight/p0/1905/5d/5dc13c7e0e84e887a3.img.jpg_1190x550_c1f5ae0d.jpg"
      ]
    };
  },
  methods: {
    handleBannerClick() {
      this.showGallary = true;
    },
    handleGallaryClose() {
      this.showGallary = false;
    }
  },
  components: {
    CommonGallary
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';

.banner {
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 50%;

  .banner-img {
    width: 100%;
  }

  .banner-info {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: 0.6rem;
    color: #fff;
    background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));

    .banner-title {
      flex: 1;
      font-size: 0.32rem;
      padding: 0 0.2rem;
    }

    .banner-number {
      margin-top: 0.14rem;
      padding: 0 0.4rem;
      height: 0.32rem;
      line-height: 0.32rem;
      font-size: 0.24rem;
      border-radius: 0.2rem;
      background: rgba(0, 0, 0, 0.8);

      .banner-icon {
        font-size: 0.24rem;
      }
    }
  }
}
</style>