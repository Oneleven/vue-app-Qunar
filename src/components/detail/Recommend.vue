<template>
    <div class="recommend-wrapper" v-if="project">
        <h3>
             <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-dianzan"></use>
            </svg>
            去哪儿推荐
        </h3>
        <ticket :message="project"
                v-for="(item,index) of project.recommend" :key="index"
                :item="item"></ticket>
       
    </div>
</template>

<script>    
import ticket from '../Global/ticket'

    export default {
        name:'Recommend',
        components:{
            ticket
        },
        props:{
            sightname:Object
        },
        computed:{
            project(){
                var number = this.$route.params.id
                var obj = this.sightname[number]
                return obj
            }
        }
    }
</script>

<style scoped lang='stylus'>
$bottom-line=1px solid #F5F5F5

    .recommend-wrapper
        border-top .2rem solid #F5F5F5
        h3 
            display flex
            align-items center
            line-height .88rem
            font-size: .32rem;
            padding 0 .2rem
            color: #333
            border-bottom $bottom-line
            .icon
                width .36rem
                height .36rem
                fill #F97275
                padding-right .2rem
                       
</style>