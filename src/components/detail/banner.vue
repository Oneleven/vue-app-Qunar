<template>
    <div>
        <div class="album" @click="handleShowClick">
            <img src="//img1.qunarzz.com/sight/p0/1506/30/7a528fae12c17e6e29d5d13a9d9813ee.water.jpg_600x330_866232e3.jpg" alt=""/>
            <!-- <router-link tag="div" class="return" to="/">
                <svg class="icon icon-fanhui fanhui" aria-hidden="true">
                    <use xlink:href="#icon-arrow-left-copy"></use>
                </svg>
            </router-link> -->
            <div class="wrapper">
                <p>上海玛雅海滩水公园</p>
                <div class="img-info">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-tupian"></use>
                    </svg>
                    <span>32</span>
                </div>
            </div>
        </div>
        <gallery :imgs="imgs" 
                 v-show="showGallery"
                 @hidden="galleryHidden"
        ></gallery>
    </div>
</template>

<script>
import Gallery from '../Global/gallery'
    export default {
        name:'Detail',
        components:{
            Gallery
        },
        data(){
            return {
                showGallery: false,
                imgs:['http://img1.qunarzz.com/sight/p0/1506/30/7a528fae12c17e6e29d5d13a9d9813ee.water.jpg_r_800x800_47582402.jpg'
                    ,'http://img1.qunarzz.com/sight/p0/1506/dd/7659217cc529114eba75b42ace21ca4a.water.jpg_r_800x800_9456bcaa.jpg']
            }
        },
        methods:{
            handleShowClick(){
                this.showGallery = true
            },
            galleryHidden(){
                this.showGallery = false
            }
        }
    }
</script>

<style scoped lang='stylus'>
    .album
        height 4.12rem
        position relative
        img 
            width 100%
        // .return
        //     width .72rem
        //     height .72rem
        //     position absolute 
        //     left .1rem
        //     top .1rem
        //     background-color rgba(0,0,0,0.70)
        //     border-radius 50%
        //     display flex
        //     justify-content center
        //     align-items center
        //     .fanhui
        //         width .54rem
        //         height .54rem
        //         fill #ffffff
        //         display flex
        //         padding-right .05rem
        .wrapper
            width 100%
            position absolute 
            bottom 0
            left 0
            display flex
            justify-content space-between
            box-sizing border-box
            padding 0 .2rem .2rem .2rem
            background-image linear-gradient(top, rgba(0,0,0,0),rgba(0,0,0,0.8))
            p
                line-height: .4rem;
                color: #fff;
                font-size: .36rem;
                text-shadow: 0 1px 2px rgba(0,0,0,0.70)
            .img-info          
                font-size: .24rem;
                color: #fff;
                line-height: .4rem;
                width 1.2rem
                display flex
                align-items center
                justify-content center
                border-radius .2rem
                background-color rgba(0,0,0,.5)
                .icon 
                    width .24rem
                    height .24rem
                    fill white
                    padding-right .1rem
        
            
</style>