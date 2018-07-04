<template>
<div>
    <div class= 'tickets-wrapper'>
        <h3>
            <span></span>成人票
        </h3>
        <div class="content">
            <p>上海玛雅海滩水公园成人全日票</p>
            <div class="price"> <span>¥</span> <span>209</span> <span>起</span></div>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-jiantou1-copy"></use>
            </svg>
        </div>
        <div class="content">
            <p>上海玛雅海滩水公园成人全日票</p>
            <div class="price"> <span>¥</span> <span>209</span> <span>起</span></div>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-jiantou1-copy"></use>
            </svg>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        name:'Tickets'
    }
</script>

<style scoped lang='stylus'>
    .tickets-wrapper
        height 2.74rem
        border-top .2rem solid #F5F5F5
        h3 
            line-height .88rem
            font-size: .32rem
            padding 0 .2rem
            display flex
            align-items center
            border-bottom 1px solid #F5F5F5
            span 
                background: url(//s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
                width: .36rem;
                height: .36rem;
                display inline-block
                background-size: .4rem 3rem
                padding-right .05rem
        .content
            position relative
            display flex
            height .96rem
            padding 0 .2rem
            align-items  center
            border-bottom 1px solid #F5F5F5
            p   
                flex 1
                padding .24rem 0
                color: #333;
                font-size: .3rem;
                line-height: .48rem
            .price
                margin-right .3rem
                &>span:nth-child(1)
                    color: #ff9800
                    font-size: .24rem;
                &>span:nth-child(2)
                    font-size .4rem
                    color: #ff9800
                &>span:nth-child(3)
                    color: #9e9e9e;
                    font-size: .24rem
            .icon
                position absolute
                width .24rem
                height .4rem
                right .2rem
                fill #9e9e9e
</style>