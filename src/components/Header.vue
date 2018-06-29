<template>
  <div class="header">
    <div class="header-left ">
      <svg class="icon icon-fanhui" aria-hidden="true">
        <use xlink:href="#icon-fanhui"></use>
      </svg>
    </div>
 
    <div class="header-input">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-sousuo"></use>
      </svg>
      输入城市/景点/游玩主题</div>
    <div class="header-right">城市
      <svg class="icon icon-jiantou" aria-hidden="true">
        <use xlink:href="#icon-jiantou"></use>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeHeader"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- 1rem = html font-size = 50px -->
<style scoped lang="stylus">
@import '../assets/styles/global.styl'
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
  
  .header-right 
    width: 1.24rem;
    text-align: center;
    .icon-jiantou
      font-size: .24rem
      margin-left:-0.04rem


.icon 
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
</style>
