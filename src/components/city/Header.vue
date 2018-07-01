<template>
    <div>
        <header>
            <div class="title">
                <p>城市选择</p>
                <router-link to="/">
                    <svg class="icon icon-fanhui" aria-hidden="true">
                        <use xlink:href="#icon-arrow-left-copy"></use>
                    </svg>
                </router-link>
            </div>
            <input type="text" class="search" placeholder="输入城市名或拼音"/>
        </header>
    </div>
</template>

<script>
    export default {
        name:'cityHeader'
    }
</script>

<style scoped lang="stylus">
@import '../../assets/styles/global.styl'
@import '../../assets/styles/mixin.styl'

header 
    height 1.46rem
    background-color $bgColor
    padding .1rem
    .title
        position relative
        p
        font-size: .32rem
        text-align: center
        color: #fff
        line-height .82rem
        svg  
            position absolute
            color:#fff
            left 0.14rem
            top .2rem
            width .4rem
            height .4rem
    .search
        box-sizing border-box
        width 100%
        line-height .64rem
        text-align center
        margin-right rem
        border-radius .06rem
        padding 0 .1rem

.icon 
  iconfontStyle()
</style>