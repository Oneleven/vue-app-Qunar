<template>
    <div>
        <div class="wrapper" v-if="datas">
            <div class="brief">
                <div class="score-container">
                    <div class="score-left">
                        <p class="score"><span>{{this.$store.getters.maindatas.singlePlay.score}}</span><span>分</span> <span> {{this.$store.getters.maindatas.singlePlay.desc}}</span></p>
                        <p class="content"> <span>{{this.$store.getters.maindatas.singlePlay.number}}条评论</span> <span>{{this.$store.getters.maindatas.singlePlay.guides}}条攻略</span></p>
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-jiantou-copy"></use>
                        </svg>
                    </div>
                    <div class="score-right">
                        <p class="brief-title"> 景点简介 </p>
                        <p class="content">开放时间、贴士</p>
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-jiantou-copy"></use>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="location">
                <svg class="icon-location" aria-hidden="true">
                            <use xlink:href="#icon-location"></use>
                </svg>
                <p>{{this.$store.getters.maindatas.singlePlay.location}}</p>
                <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-jiantou-copy"></use>
                </svg>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"Introduction",
        props:{
            sightname:Object
        },
        computed:{
            datas(){
                var number = this.$route.params.id
                var obj = this.sightname[number]
                return obj
            }
        }
    }
</script>

<style scoped lang='stylus'>

icon(){
    width .40rem
    height .40rem
    fill #9e9e9e
    top 50%
    margin -.1rem
    right .2rem
}

.wrapper
    height 2.24rem
    padding .1rem .2rem 0 .2rem
    position relative
    top .1rem
    border-radius: .1rem .1rem 0 0
    .brief 
    .location
        height 50%
        width 100%
        .score-container
            padding .1rem 0 .2rem 0
            display flex
            justify-content space-between
            .score-left
                width 100%
                height .82rem
                position relative              
                .score
                    height .5rem
                    color: #ff8300;
                    & span:nth-child(1)
                        font-size: .44rem
                    & span:nth-child(2)
                        font-size: .28rem
                    & span:nth-child(3)
                        font-size: .28rem
                        margin-right .2rem     
                .content 
                    height .32rem
                    span 
                        font-size: .24rem;
                        color: #9e9e9e;
                        line-height: .32rem;
                        margin-right: .2rem
                .icon   
                    position absolute
                    icon()
            .score-right
                position relative
                box-sizing border-box
                border-left 1px solid #EFEFEF
                width 100%
                height .82rem
                .brief-title
                    line-height .48rem
                    padding-left .3rem
                .content    
                    line-height .28rem
                    padding-left .3rem
                    color: #9e9e9e;
                    font-size: .24rem
                .icon   
                    position absolute
                    icon()
    .location
        display flex
        justify-content space-between
        align-items center
        .icon-location
            width .32rem
            height .32rem
            fill #9e9e9e
            padding .12rem
        p
            flex 1
            line-height: .36rem
            color: #212121
        .icon   
            padding .08rem
            icon()
</style>