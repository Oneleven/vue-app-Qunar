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
        props:{
            list:Array
        },
        computed:{
            pages(){
                const pages =[]
                this.list.forEach((item,index)=>{
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
                }
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