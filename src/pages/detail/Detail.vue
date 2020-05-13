<template>
  <div>
    <DetialBanner />
    <DetailHeader />
    <div class="content"></div>
  </div>
</template>

<script>
import DetialBanner from "./components/Banner";
import DetailHeader from "./components/Header";
export default {
  components: {
    DetialBanner,
    DetailHeader
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';

.content {
  height: 50rem;
}
</style>