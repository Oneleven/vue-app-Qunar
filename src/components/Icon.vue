<template>
    <div class="icons">
        <swiper :options="swiperOption">
            <swiper-slide class="icon-wrapper" v-for="(page,pageIndex) of pages" :key="pageIndex">
                <div class="icon" v-for="item of page" :key="item.id">
                     <div class="icon-img">
                        <img class="icon-img-content" :src="item.imgurl" />
                    </div>
                <p class="icon-desc">{{item.imgdes}}</p>
                </div>
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination">123</div>
        </swiper>
    </div>
</template>

<script>
    export default {
        name:'HomeIcons',
        computed:{
            pages(){
                const pages =[]
                this.iconList.forEach((item,index)=>{
                    const page = Math.floor(index/8)
                    if(!pages[page]){
                        pages[page]=[]
                    }
                    pages[page].push(item)
                })
                return pages
            }
        },
        data(){
            return {
                swiperOption:{
                    pagination: '.swiper-pagination'
                },
                iconList:[{
                    id:'0001',
                    imgurl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                    imgdes:'热门景点'
                },{
                    id:'0002',
                    imgurl:'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
                    imgdes:'一日游'
                },{
                    id:'0003',
                    imgurl:'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
                    imgdes:'必游榜单'
                },{
                    id:'0004',
                    imgurl:'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
                    imgdes:'动物植物'
                },{
                    id:'0005',
                    imgurl:'http://img1.qunarzz.com/piao/fusion/1803/6a/45f595250c73d102.png',
                    imgdes:'夏日玩水'
                },{
                    id:'0006',
                    imgurl:'http://img1.qunarzz.com/piao/fusion/1805/57/1e29afd06f881102.png',
                    imgdes:'普陀山'
                },{
                    id:'0007',
                    imgurl:'http://img1.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png',
                    imgdes:'上海欢乐谷'
                },{
                    id:'0008',
                    imgurl:'http://img1.qunarzz.com/piao/fusion/1804/ed/cf572be30fc32f02.png',
                    imgdes:'Q+精选'
                },{
                    id:'0009',
                    imgurl:'http://img1.qunarzz.com/piao/fusion/1803/de/f26be47a6bf02a02.png',
                    imgdes:'上海迪士尼'
                },{
                    id:'0010',
                    imgurl:'http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png',
                    imgdes:'全部游玩'
                },]
            }
        }
    }
</script>

<style scoped lang='stylus'>
    @import '../assets/styles/mixin.styl'
    .icons >>> swiper-container
        margin:0   
    .icons
        height 48vw
        padding-top 2.5vw
        // padding-bottom 1vw
        .icon-wrapper
            display flex
            flex-wrap wrap 
        .icon
            width 25vw
            height 22vw
            .icon-img 
                // padding-bottom:0.12rem
                height 60px
                width 100%
                display flex
                justify-content center
                align-items center
                .icon-img-content
                    width 1.1rem
            .icon-desc
                ellipsis()
                // 引用方法

        .swiper-pagination-bullets
            bottom 1px

        .swiper-container-horizontal
            height 100%
</style>