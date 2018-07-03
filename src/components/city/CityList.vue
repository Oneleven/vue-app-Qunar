<template>
    <div>
        <section>
            <h2 class="title position">您的位置</h2>
            <nav class="current-location">
                <a> {{this.city}} </a>
            </nav>
        </section>
        <section>
            <h2 class="title">热门城市</h2>
            <ul class="hot-city-list content">
                <li v-for="item of hot" 
                    :key=item.id 
                    @click="handleCityClick(item.name)">
                    <a>{{ item.name }}</a>
                </li>
            </ul>
        </section>
        <section>
            <h2 class="title">字母排序</h2>
            <ul class="character-list">
                <li v-for="item of location" :key=item.letter>
                    <a :href=" '#' + item.url ">{{ item.letter }}</a>
                </li>
            </ul>
        </section>
        <section>
            <div v-for="(value,key,index) of cities" :key=key>
                <h2 class="title" :id='name[index]'>{{ key }}</h2>
                <ul class="content-list">
                    <li v-for="item of value" 
                        :key=item.id
                        @click="handleCityClick(item.name)">
                        <a>{{ item.name }}</a>
                    </li>
                </ul>
            </div>
        </section>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
    export default {
        name:'cityList',
        props:{
            cities:Object,
            hot:Array,
            location:Array
        },
        methods:{
            handleCityClick(city){
                // this.$store.dispatch('changeCity',city)
                // this.$store.commit('changeCity', city)
                this.changeCity(city)
                this.$router.push('/')
            },
            ...mapMutations(['changeCity'])
        },
        computed:{
            name(){
                const names = []
                for(let name of this.location){
                    names.push(name.url)
                }
                return names
            },
            ...mapState(['city'])
        }
    }
</script>

<style scoped lang='stylus'>
@import '../../assets/styles/global.styl'
@import '../../assets/styles/mixin.styl'

    .content
        background-color #E1E1E1
    .title
        font-size: .24rem
        line-height .72rem
        background-color #F5F5F5
        padding-left .3rem
    .position
        line-height .48rem
    .current-location
        line-height .9rem
        a
            display inline-block
            width 2rem
            margin-left .3rem
            line-height .44rem
            text-align center
            border 1px solid $bgColor
            color $bgColor
    .hot-city-list
        display flex
        flex-wrap wrap
        li
            box-sizing border-box
            line-height .9rem
            width calc(100%/3)
            background-color #ffffff
            border-bottom 1px solid #E1E1E1
            a
                display inline-block
                text-align center
                width 100%
                font-size .28rem
                color #212121
            &:nth-child(3n-1)
                border-left 1px solid #E1E1E1
                border-right 1px solid #E1E1E1

    .character-list
        display flex
        flex-wrap wrap
        padding .3rem 0
        li
            line-height .9rem
            width calc(100%/6)
            text-align center
            a
                font-size .28rem
                color #212121   

    .content-list
        display flex
        flex-wrap wrap
        li
            box-sizing border-box
            line-height .9rem
            width calc(100%/4)
            background-color #ffffff
            border-bottom 1px solid #E1E1E1
            a
                display inline-block
                text-align center
                width 100%
                font-size .28rem
                color #212121
            &:nth-child(4n-1) 
                border-right 1px solid #E1E1E1
            &:nth-child(4n-2)
                border-right 1px solid #E1E1E1
            &:nth-child(4n-3)
                border-right 1px solid #E1E1E1
</style>