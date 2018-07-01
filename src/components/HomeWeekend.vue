<template>
    <div class="weekend">
        <h2>周末去哪儿</h2>
        <ul>
            <li class='weekend-list' v-for="item of weekendList" :key=item.id>
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
        data(){
            return {
                weekendList:[{
                    id:'0001',
                    imgUrl:'http://img1.qunarzz.com/sight/source/1505/7d/df6ff468331c43.jpg_r_640x214_1f3783d0.jpg',
                    weekendTitle:'上海必游TOP10',
                    weekendDesc:'中西合璧，现代和传统各有各的精彩'
                },{
                    id:'0002',
                    imgUrl:'http://img1.qunarzz.com/sight/source/1603/ad/69b0fc5f48ad5f.jpg_r_640x214_b0fd5c7b.jpg',
                    weekendTitle:'亲子时光TOP10',
                    weekendDesc:'走进自然或玩转乐园，感知大千世界'
                },{
                    id:'0003',
                    imgUrl:'http://img1.qunarzz.com/sight/source/1511/1d/fe098e8cfec117.jpg_r_640x214_a9be292a.jpg',
                    weekendTitle:'上海城市观光',
                    weekendDesc:'来这里寻找你所认识的上海'
                },{
                    id:'0004',
                    imgUrl:'http://img1.qunarzz.com/sight/source/1505/7b/2a6b0ce087f0e5.jpg_r_640x214_5c76b115.jpg',
                    weekendTitle:'情迷博物馆',
                    weekendDesc:'穿梭时光岁月寻找答案'
                },]
            }
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