<template>
    <div v-if="project">
        <!-- 能够访问到嵌套的json数据 -->
        <div class="album" @click="handleShowClick">
            <img :src="project.pictures[0]"/>
            <!-- <router-link tag="div" class="return" to="/">
                <svg class="icon icon-fanhui fanhui" aria-hidden="true">
                    <use xlink:href="#icon-arrow-left-copy"></use>
                </svg>
            </router-link> -->
            <div class="wrapper">
                <!-- <p> {{project.name}} </p> -->
                     <p> {{this.$store.getters.maindatas.singlePlay.name}} </p>
                <div class="img-info">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-tupian"></use>
                    </svg>
                    <span>{{this.$store.getters.maindatas.singlePlay.pictures.length}}</span>
                </div>
            </div>
        </div>
        <gallery v-show="showGallery"
                 @hidden="galleryHidden"
                 :picturesList="this.project"
        ></gallery>
    </div>
</template>

<script>
import Gallery from '../Global/gallery'
// import fn from '../Global/computed'

    export default {
        name:'Album',
        props:{
            sightname:Object
        },
        computed:{
            project(){
                var number = this.$route.params.id
                var obj = this.sightname[number]
                return obj
            }
        },
        components:{
            Gallery
        },
        data(){
            return {
                showGallery: false,
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