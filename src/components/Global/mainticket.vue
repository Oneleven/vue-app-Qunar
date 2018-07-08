<template>
    <div class="recommend-wrapper">
        <div class="recommend-detail">
            <div class="detail-left">
                <p class="ticket-name">{{thirdValue.name}}</p>
                <p class="ticket-time"><img src="https://img1.qunarzz.com/piao/fusion/1804/25/792e9929973a9902.png" alt="clock">{{thirdValue.rule}}</p>
                <ul class="ticket-content">
                    <li v-for="(value,index) of thirdValue.label" :key="index"><span ref="spanlogo">
                        <!-- <img src="https://img1.qunarzz.com/piao/fusion/1804/b0/c3cf2897c74ecc02.png" alt="logo" v-if="showImg"> -->
                        {{value}}</span></li>
                    <!-- <li><span>无需换票</span></li>
                    <li><span>条件退</span></li> -->
                </ul>
                <ul class="ticket-rule">
                    <li v-for="(value,index) of thirdValue.attention" :key=index> {{ value }} </li>
                    <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-jiantou-copy"></use>
                    </svg>
                </ul>
            </div>
            <div class="detail-right">
                <p><span>¥</span> <span>{{thirdValue.price}}</span></p>
                <button>预定</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'mainticket',
        props:["thirdValue"],
        // data(){
        //     return {
        //         showImg:false
        //     }
        // },
        // mounted(){
        //     const text = this.$refs.spanlogo.innerText
        //     if(text.trim() === "自营"){
        //         this.showImg = true
        //     }
        // }
    }
</script>

<style scoped lang="stylus">
.recommend-wrapper
    // border-top .2rem solid #F5F5F5
    .recommend-detail
            border-bottom $bottom-line
            // min-height 1.24rem
            display flex
            justify-content space-between
            padding .2rem
            .detail-right
                display flex
                flex-direction column
                align-items center
                justify-content center
                p
                    height .4rem
                    color #ff9800
                    &>span:nth-child(1)
                        font-size: .24rem;
                    >span:nth-child(2)
                        margin-left: .04rem;
                        font-size: .4rem
                button 
                    color: #fff;
                    font-size: .28rem;
                    line-height: .6rem
                    border-radius: .08rem
                    background-image: linear-gradient(130deg,#ffab1e 37%,#ff8c12 100%)
                    width 1.6rem
            .detail-left
                display flex
                flex-direction column
                height 100%
                justify-content center
                .ticket-name
                    color: #616161
                    font-size: .3rem
                    padding-bottom .1rem
                .ticket-time 
                    height .32rem
                    color: #616161
                    font-size: .24rem
                    line-height: .32rem
                    display flex
                    align-items flex-start
                    img 
                        height .25rem
                        margin-right .04rem
                .ticket-content 
                    display flex
                    line-height .4rem
                    li 
                        height: .4rem
                        span 
                            border 1px solid #a5e4ec
                            color #00afc7
                            font-size: .2rem
                            margin-right .1rem 
                            padding 0 0.02rem
                            border-radius .05rem
                            img 
                                width .2rem
                .ticket-rule
                    display flex
                    line-height .4rem
                    margin-top .1rem
                    li 
                        color: #616161;
                        font-size: .24rem;
                        line-height: .34rem
                        margin-right .1rem 
                    .icon   
                        width .24rem
                        height .24rem
                        padding-top .03rem
                        margin-left -0.1rem
                        color: #616161
                        

        
</style>