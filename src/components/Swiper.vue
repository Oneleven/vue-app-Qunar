<template>
    <div>
        <div class="wrapper">
            <swiper :options="swiperOption" v-if="showList">
                <swiper-slide v-for="item of list" :key=item.id>
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
        props:{
            list:Array
        },
        computed:{
            showList(){
                return this.list.length
            }
        },
        data(){
            return {
                swiperOption:{
                    pagination: '.swiper-pagination',
                    loop:true
                }
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