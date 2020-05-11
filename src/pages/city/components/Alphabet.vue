<template>
    <div>
       <ul class="list">
           <li class="item"
            v-for="item in letters"
            :key="item" 
            :ref="item"
            @touchstart="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd"
            @click="handleLetterClick"
            >{{item}}</li>
       </ul>
    </div>
</template>

<script>
    export default {
        name:"CityAlphabet",
        props:{
            cities:Object
        },
        computed:{
           letters(){
               const letters=[]
               for(let i in this.cities){
                   letters.push(i)
               }
               return letters
           } 
        },
        data(){
            return {
                touchStatus:false,
                startY:0
            }
        },
        updated(){
            this.startY=this.$refs['A'][0].offsetTop
        },
        methods:{
            handleLetterClick(e){
               this.$emit('change',e.target.innerText)
            },
            handleTouchStart(){
               this.touchStatus=true
            },
            handleTouchMove(e){
               if(this.touchStatus){
                    const touchY=e.touches[0].clientY-79//手指距离头部底部的距离
                    const index=Math.floor((touchY-this.startY)/20)//先算出手指到A的距离，20是字母所在盒子的高度，算出手指所在的是26个字母中的第几个
                    if(index>=0 && index<this.letters.length){
                       this.$emit('change',this.letters[index])
                    }
               }
            },
            handleTouchEnd(){
               this.touchStatus=false
            }
        }
    }
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
.list
  display:flex
  flex-direction:column  
  justify-content:center
  position:absolute
  right:0
  top:1.58rem
  bottom:0
  width:.4rem
  .item
    line-height:.4rem
    text-align:center 
    color:$bgColor
</style>