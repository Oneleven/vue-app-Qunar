<template>
    <div class="wrapper">
        <header>
            <div class="title">
                <p>城市选择</p>
                <router-link to="/">
                    <svg class="icon icon-fanhui" aria-hidden="true">
                        <use xlink:href="#icon-arrow-left-copy"></use>
                    </svg>
                </router-link>
            </div>
            <input type="text" class="search" v-model="keyword" placeholder="输入城市名或拼音"/>
        </header>
        <div class="search-content" v-show="keyword">
                <ul>
                    <li class="search-item" 
                        v-for="item of list" 
                        :key="item.id"
                        @click="handleCityClick(item.name)">{{item.name}}</li>
                    <li class="search-item" v-show="!list.length">没有找到匹配的城市&gt;.&lt;! </li>
                </ul>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
    export default {
        name:'cityHeader',
        props:{
           cities: Object
        },
        data(){
            return {
                keyword:'',
                list:[],
                timer:null,  //截流，定义一个xxms的计时器
                showCity:111
            }
        },
        methods:{
            handleCityClick(city){
                // this.$store.dispatch('changeCity',city)
                // this.$store.commit('changeCity', city)
                this.changeCity(city)
                this.$router.push('/')  //也可以在页面中使用router-link标签来实现路由跳转
                this.keyword = ''
            },
            ...mapMutations(['changeCity'])
        },
        watch:{
            keyword(){
                // this.showCity = false
                const keyword = this.keyword.trim()
                if(this.timer){
                    clearTimeout(this.timer)
                }
                if(!keyword){
                    this.list = []
                    this.showCity = true
                }else{
                    this.showCity = false
                }

                this.$emit('change',this.showCity)
                this.timer = setTimeout(()=>{
                    const result = []
                    for(let i in this.cities){
                        this.cities[i].forEach((value)=>{
                            if( value.spell.indexOf(keyword)>-1 || value.name.indexOf(keyword)>-1 ){
                                result.push(value)
                            }
                        })
                    }
                    this.list = result
                },20)
            }
        }
    }
</script>

<style scoped lang="stylus">
@import '../../assets/styles/global.styl'
@import '../../assets/styles/mixin.styl'

.wrapper
    position relative
.search-content
    right 0
    left 0
    bottom 0
    position absolute 
    background-color #eeeeee
    height calc(100vh - 1.66rem)
    top 1.66rem
    .search-item
        line-height .62rem
        padding-left .2rem
        color #616161
        background-color #ffffff
        border-bottom 1px solid #E1E1E1
header 
    height 1.46rem
    background-color $bgColor
    padding .1rem
    .title
        position relative
        p
        font-size: .32rem
        text-align: center
        color: #fff
        line-height .82rem
        svg  
            position absolute
            color:#fff
            left 0.14rem
            top .2rem
            width .4rem
            height .4rem
    .search
        box-sizing border-box
        width 100%
        line-height .64rem
        text-align center
        margin-right rem
        border-radius .06rem
        padding 0 .2rem

.icon 
  iconfontStyle()
</style>