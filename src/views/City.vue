<template>
    <div>
        <city-header @change="handleChange" :cities = "cities"></city-header>
        <city-list :cities = "cities" 
                   :hot="hotCities" 
                   :location="locations"
                    v-show="cityshow"></city-list>
    </div>
</template>

<script>
    import CityHeader from '../components/city/Header'
    import CityList from '../components/city/CityList'
    import axios from 'axios'

    export default {
        name:'City',
        components:{
            CityHeader,
            CityList
        },
        data(){
            return {
                 cities:{},
                 hotCities:[],
                 locations:[],
                 cityshow:true               
            }
        },
        methods:{
            getCityInfo(){
                axios.get('./static/city.json').then(
                    this.getCityInfoSucc
                )
            },
            getCityInfoSucc(res){
                var response = res.data
                if(response.success){
                    this.cities = response.data.cities
                    this.hotCities = response.data.hotCities
                    this.locations = response.data.locations
                }
            },
            handleChange(val){
                this.cityshow = val
            }
        },
        mounted(){
            this.getCityInfo()
        }
    }
</script>

<style scoped lang="stylus">

</style>