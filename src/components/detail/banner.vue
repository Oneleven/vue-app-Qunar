<template>
    <div class='container'>
        <router-link tag="div" 
                     class="return" 
                     v-show="showIcon"
                     to="/">
            <svg class="icon icon-fanhui fanhui" aria-hidden="true">
                <use xlink:href="#icon-arrow-left-copy"></use>
            </svg>
        </router-link>
        <div class="header" 
             v-show="!showIcon"
             :style="opactiy">
            <router-link tag="div" 
                         class="header-left"
                         to="/">
                <svg class="icon icon-fanhui" aria-hidden="true">
                    <use xlink:href="#icon-arrow-left-copy"></use>
                </svg>
            </router-link>
            <p v-if="project">{{project.name}}</p>
        </div>
    </div>
</template>

<script>
export default {
  name: "Banner",
  props:{
    sightname:Object
  },
  computed:{
      project(){
                var number = this.$route.params.id
                var obj = this.sightname[number]
                return obj
            }
        },
  data(){
      return{
          showIcon:true,
          opactiy:{
              opactiy:0
          }
      }
  },
  methods:{
      handleScroll(){
          const top = document.documentElement.scrollTop
          if(top > 0.1){
              this.opactiy = {opacity:top/160}
              this.showIcon = false
          }else{
              this.showIcon = true
          }
      }
  },
  activated(){
      window.addEventListener('scroll',this.handleScroll)
  },
  deactivated(){
      window.removeEventListener('scroll',this.handleScroll)
  }
};
</script>

<style scoped lang='stylus'>
@import '../../assets/styles/global.styl'
@import '../../assets/styles/mixin.styl'

.container 
    position relative
    // z-index 1
.return {
    width: 0.72rem;
    height: 0.72rem;
    position: fixed;
    left: 0.1rem;
    top: 0.1rem;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    .fanhui {
        width: 0.54rem;
        height: 0.54rem;
        fill: #ffffff;
        display: flex;
        padding-right: 0.05rem;
    }
}

.header 
  display: flex;
  line-height: 0.86rem;
  background-color: $bgColor;
  position fixed
  top 0
  width 100%
  color #ffffff

  .header-left 
    width: 0.9rem
    display: flex
    justify-content center 
    align-items center
    .icon-fanhui
       width: 0.60rem;
       height: 0.60rem;

  p
    flex:1
    margin-right .9rem
    font-size: .32rem;
    text-align: center

.icon 
  iconfontStyle()
</style>