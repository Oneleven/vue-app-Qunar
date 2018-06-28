<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from '../components/Header'
import HomeSwiper from '../components/Swiper'

export default {
  name: 'home',
  components:{
    HomeHeader,
    HomeSwiper
  }
}
</script>

