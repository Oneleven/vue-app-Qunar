<template>
    <div>
        <div class="recommend-title">
            <svg class="icon" aria-hidden="true" >
                <use xlink:href="#icon-aixin"></use>
            </svg>
            <span>猜你喜欢</span>
        </div>
        <ul>
            <li class="item" v-for="item of itemList" :key=item.id> 
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
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name:'HomeRecommend',
        data(){
            return {
                itemList:[{
                    id:'0001',
                    imgUrl:'http://img1.qunarzz.com/sight/p0/1506/30/7a528fae12c17e6e29d5d13a9d9813ee.water.jpg_200x200_e7f0d0ad.jpg',
                    itemName:'上海玛雅海滩水公园',
                    commentStar:'★★★★★',
                    commentNum:'5079条评论',
                    price:'140',
                    location:'佘山国家公园'
                },{
                    id:'0002',
                    imgUrl:'http://img1.qunarzz.com/sight/p0/1803/1a/1aac2b1dd96b36ba3.water.jpg_200x200_8148509f.jpg',
                    itemName:'上海欢乐谷',
                    commentStar:'★★★★★',
                    commentNum:'27592条评论',
                    price:'94',
                    location:'松江区'
                },{
                    id:'0003',
                    imgUrl:'http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_200x200_2039e660.jpg',
                    itemName:'上海迪士尼乐园',
                    commentStar:'★★★★★',
                    commentNum:'162771条评论',
                    price:'69',
                    location:'浦东新区'
                },{
                    id:'0004',
                    imgUrl:'http://img1.qunarzz.com/sight/p0/1412/9f/fbff2a5302c0ce906ef9b64159730f89.water.jpg_200x200_87806940.jpg',
                    itemName:'上海海洋水族馆',
                    commentStar:'★★★★★',
                    commentNum:'12868条评论',
                    price:'103',
                    location:'浦东新区'
                },{
                    id:'0005',
                    imgUrl:'http://img1.qunarzz.com/sight/p0/1603/17/170481fb9caf500790.water.jpg_200x200_a32b9a92.jpg',
                    itemName:'上海野生动物园',
                    commentStar:'★★★★★',
                    commentNum:'33288条评论',
                    price:'64',
                    location:'浦东新区'
                },{
                    id:'0006',
                    imgUrl:'http://img1.qunarzz.com/sight/p0/1507/b3/b33a7caa457c0a52.img.jpg_200x200_fe73bd81.jpg',
                    itemName:'东方明珠空中旋转餐厅',
                    commentStar:'★★★★★',
                    commentNum:'834条评论',
                    price:'358',
                    location:'东方明珠'
                }]
            }
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