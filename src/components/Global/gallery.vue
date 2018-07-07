<template>
    <div class="container" @click="handleGalleryClick">
        <div class="wrapper">
            <swiper  :options="swiperOption">
                <swiper-slide v-for="(item, index) of this.$store.getters.maindatas.singlePlay.pictures" :key=index>
                    <img class="swiper-img"  :src=item />
                </swiper-slide>
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
    export default {
        name:'Gallery',
        computed:{
            pictures(){
                return this.picturesList.pictures
            }
        },
        data(){
            return{
                swiperOption:{
                    pagination: '.swiper-pagination',
                    paginationType:'fraction',
                    observeParents:true,
                    observer:true
                },
                heihei:this.picturesList
            }
        },
        methods:{
            handleGalleryClick(){
                this.$emit('hidden')
            }
        }
    }
</script>

<style scoped lang='stylus'>
    .container >>>  .swiper-wrapper  //一定要穿透！！！
        display flex
        align-items center
    .container >>> .swiper-container
        overflow inherit 
    .container
        z-index 2
        background-color #212121
        position fixed 
        left 0
        right 0
        top 0
        bottom 0
        display flex
        align-items center
        .wrapper
            width 100%
            .swiper-pagination
                color #fff
                font-size: .24rem;
                line-height: .8rem
                bottom -1rem
            .swiper-img
                width 100%
</style>