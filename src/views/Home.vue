<template>
  <div>
    <home-header :city="city"></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from '../components/Header'
import HomeSwiper from '../components/Swiper'
import HomeIcons from '../components/Icon'
import HomeRecommend from '../components/Recommend'
import HomeWeekend from '../components/HomeWeekend'
import axios from 'axios'

export default {
  name: 'home',
  components:{
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data(){
    return {
      city:'',
      swiperList:[],
      iconList:[],
      recommendList:[],
      weekendList:[]
    }
  },
  methods:{
    getHomeInfo(){
      axios.get('/index.json').then(
        this.getHomeInfoSucc
      )
    },
    getHomeInfoSucc(res){
      var res = res.data
      if(res.success){
        this.city = res.data.city
        this.swiperList = res.data.swiperList
        this.iconList = res.data.iconList
        this.recommendList = res.data.recommendList
        this.weekendList = res.data.weekendList
      }
    }
  },
  mounted(){
    this.getHomeInfo()
  }
}
</script>

