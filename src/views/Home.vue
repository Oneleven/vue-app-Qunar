<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from '../components/Header'
import HomeSwiper from '../components/Swiper'
import HomeIcons from '../components/Icon'

export default {
  name: 'home',
  components:{
    HomeHeader,
    HomeSwiper,
    HomeIcons
  }
}
</script>

