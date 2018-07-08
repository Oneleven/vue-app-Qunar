<template>
<div id='text' v-if="project">
    <div class='tickets-wrapper' v-for="(value,key,index) of this.$store.getters.maindatas.ticketsObject" :key=index>
        <h3>
            <span></span>{{key}}
        </h3>
        <div v-for="(mainValue, mainKey, mainIndex) of value"
             :key=mainIndex
             @click="showDetailTickets($event)">
            <div class="content">
                <p>{{mainKey}}</p>
                <div class="price"> <span>¥</span> <span>{{ mainValue[0].price }}</span> <span>起</span></div>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-jiantou1-copy"></use>
                </svg>
            </div>
            <ticket v-for ="(thirdValue,thirdIndex) of mainValue" :key="thirdIndex"
                    :thirdValue="thirdValue"
                    class="ticket"></ticket>
        </div>
    </div>
</div>
</template>

<script>
import ticket from '../Global/mainticket'
import siblings from '../Global/findSibling'

    export default {
        name:'Tickets',
        props:{
            sightname:Object
        },
        components:{
            ticket
        },
        // data(){
        //     return {
        //         showit: false
        //     }
        // },
        computed:{
            project(){
                var number = this.$route.params.id
                var obj = this.sightname[number]
                return obj
            }
        },
        methods:{
            showDetailTickets(e){
                const current = e.currentTarget
                const tickets = current.getElementsByClassName('ticket')
                for(let dom of tickets){
                    if(dom.style.display==='block'){
                        dom.style.display = 'none'
                    }else{
                        dom.style.display = 'block'
                    }  
                }

                const icons = current.getElementsByClassName('icon')
                for(let dom of icons){
                    if(dom.style.transform ==='rotate(180deg)'){
                        dom.style.transform = 'rotate(0deg)'
                    }else{
                        dom.style.transform = 'rotate(180deg)'
                    }  
                }
               
                // if(a.getAttribute('display') === "none"){
                //     a.removeAttribute('display')
                // }else{
                //     a.setAttribute('dispaly','none')
                // }
                
                // this.showit = !this.showit
            }
        }
    }
</script>

<style scoped lang='stylus'>
#text
    height 80rem
    .tickets-wrapper
        // height 2.74rem
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
            min-height .96rem
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
                transform rotate(0deg)
        .ticket 
            display none
            border-top 1px solid #dadada
            background-color #F5F5F5
            margin-top -1px 
</style>