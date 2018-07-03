<template>
    <div>
        <div class="recommend-title">
            <svg class="icon" aria-hidden="true" >
                <use xlink:href="#icon-aixin"></use>
            </svg>
            <span>猜你喜欢</span>
        </div>
        <ul>
            <router-link class="item" v-for="item of list" 
                :key=item.id
                tag ="li"
                :to="'/detail' + item.id"> 
                <div class="item-left">
                    <img :src=item.imgUrl :alt=item.itemName />
                    <p>随买随用</p>
                </div>
                <div class="item-right">
                    <p>{{ item.itemName }}</p>
                    <div class="item-star">
                        <span class="star">{{ item.commentStar }}</span>
                        <span class="comment">{{ item.commentNum }}</span>
                    </div>
                    <div class="item-bottom">
                        <div class="item-price">
                            <span>¥</span>
                            <span>{{ item.price }}</span>
                            <span>起</span>
                        </div>
                        <div class="item-location">
                            <span>{{ item.location }}</span>
                        </div>
                    </div>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        name:'HomeRecommend',
        props:{
            list:Array
        }
    }
</script>

<style scoped lang="stylus">
 @import '../assets/styles/mixin.styl'

.icon 
  iconfontStyle()

.recommend-title
    line-height .94rem
    >span 
        font-size:.32rem
        margin-left .08rem
    >.icon
        margin-left .2rem 
        vertical-align top
        margin-top .25rem
        
.item
    height 100px
    display flex
    padding .2rem 0 .2rem .24rem
    border-bottom 1px solid #EFEFEF
    .item-left
        width 2rem
        position relative
        >img
            width 100%   
        >p
            position absolute 
            width 1.1rem
            color #fff
            background-color #FDA54E
            border-bottom-right-radius .3rem
            font-size .2rem
            line-height: .38rem
            top 0
            left 0
    .item-right
        flex 1
        margin-left .22rem
        >p
            font-size .32rem
            line-height .44rem
            margin-top .26rem
        >.item-star
            margin-top .14rem
            >.star 
                display inline-block
                width 1.2rem
                color #ffb436
                font-size: .24rem
                margin-right .3rem
            >.comment
                color: #616161;
                font-size: .24rem;
                line-height: .34rem
        .item-bottom
            display flex
            justify-content space-between
            align-items flex-end
            margin-top .22rem
            .item-price
                >span:nth-child(1)
                    font-size: .24rem;
                    line-height: .4rem
                    color #ff8300
                >span:nth-child(2)
                    font-size .4rem
                    color #ff8300
                >span:nth-child(3)
                    font-size: .24rem;
                    line-height: .4rem
                    color: #616161;
            .item-location
                font-size: .24rem;
                line-height: .4rem
                color: #616161;
                display inline-block
                width 1.2rem
                ellipsis()
</style>