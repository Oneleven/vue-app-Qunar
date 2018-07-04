<template>
  <div class="header">
    <div class="header-left ">
      <svg class="icon icon-fanhui" aria-hidden="true">
        <use xlink:href="#icon-arrow-left-copy"></use>
      </svg>
    </div>
 
    <div class="header-input">
      <svg class="icon icon-search" aria-hidden="true">
        <use xlink:href="#icon-sousuo"></use>
      </svg>
      <input type="text" placeholder="输入城市/景点/游玩主题"> </div>
    <router-link to="/city">
      <div class="header-right">{{ this.city }}
        <svg class="icon icon-jiantou" aria-hidden="true">
         <use xlink:href="#icon-jiantou"></use>
       </svg>
      </div>
    </router-link>
  </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: "HomeHeader",
  // props:{
  //   city:String
  // }
  computed:{
    ...mapState(['city'])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- 1rem = html font-size = 50px -->
<style scoped lang="stylus">
@import '../assets/styles/global.styl'
@import '../assets/styles/mixin.styl'
input::-webkit-input-placeholder { /* WebKit browsers */  
  color: #D0D0D0;  
}  

.header 
  display: flex;
  line-height: 0.86rem;
  background-color: $bgColor;
  color: #FFFFFF;

  .header-left 
    width: 0.64rem
    display: flex
    justify-content center 
    align-items center
    .icon-fanhui
      font-size :.4rem

  .header-input 
    flex: 1;
    height: 0.64rem;
    line-height: 0.64rem;
    margin-top: 0.12rem;
    margin-left: 0.2rem;
    background-color: #FFFFFF;
    border-radius: 0.1rem;
    color: #E5E7EA;
    padding-left 0.2rem
    input
      padding-left .1rem
      line-height  0.6rem
      width 80%
      font-size  .28rem
  
  .header-right 
    padding-left .1rem
    min-width: 1.24rem;
    text-align: center;
    color: #FFFFFF;
    .icon-jiantou
      font-size: .24rem
      margin-left:-0.04rem
      color: #FFFFFF


.icon 
  iconfontStyle()
</style>
