<template>
    <div>
        <div class="wrapper">
            <swiper :options="swiperOption" >
                <swiper-slide v-for="item of swiperList" :key=item.id>
                    <img class="swiper-img"  :src=item.imgUrl>
                </swiper-slide>
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
    export default {
        name:'HomeSwiper',
        data(){
            return {
                swiperOption:{
                    pagination: '.swiper-pagination',
                    loop:true
                },
                swiperList:[{
                    id:'001',
                    imgUrl:'http://img1.qunarzz.com/piao/fusion/1806/fc/e47aa3e1c67bbc02.jpg_750x200_0f3eecf8.jpg'
                },{
                    id:'002',
                    imgUrl:'http://img1.qunarzz.com/piao/fusion/1806/32/40b97c969cbad702.jpg_750x200_61fee14d.jpg'
                },{
                    id:'003',
                    imgUrl:'http://img1.qunarzz.com/piao/fusion/1806/b4/a7bff39954e72002.jpg_750x200_9befc091.jpg'
                },{
                    id:'004',
                    imgUrl:'http://img1.qunarzz.com/piao/fusion/1806/3f/c765665b81e4ab02.jpg_750x200_bbda6721.jpg'
                }]
            }
        }
    }
</script>

<style scoped lang='stylus'>
        .wrapper >>> .swiper-pagination-bullet-active
            background:#fff
        .wrapper
            width:100%
            height:0
            overflow:hidden
            padding-bottom:26.66%
            background-color:#eee
          .swiper-img
             width 100%
</style>