<template>
    <div class="weekend">
        <h2>周末去哪儿</h2>
        <ul>
            <li class='weekend-list' v-for="item of list" :key=item.id>
                <img :src=item.imgUrl :alt=item.weekendTitle />
                <div class="weekend-desc">
                    <h3>{{ item.weekendTitle }}</h3>
                    <p>{{ item.weekendDesc }}</p>
                </div>
            </li>
        </ul>
        
    </div>
</template>

<script>
    export default {
        name:'weekend',
        props:{
            list:Array
        }
    }
</script>

<style scoped lang='stylus'>
@import '../assets/styles/mixin.styl'
.weekend
    background-color #F5F5F5
    h2
        line-height .8rem
        padding-left .26rem
.weekend-list
    padding-bottom .1rem
    background-color #F5F5F5
    img 
        width 100%
    .weekend-desc
        background-color #FFFFFF
        padding .14rem .2rem .2rem .2rem
        h3 
            font-size: .28rem
            line-height: .48rem
            ellipsis()
            text-align left
        p
            padding-right 1.4rem
            font-size: .24rem;
            line-height: .42rem;
            color #616161
            ellipsis()
            text-align left
</style>