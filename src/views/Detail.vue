<template>
    <div>
        <detail-album :sightname="sightname" ></detail-album>     
        <detail-introduction :sightname="sightname"></detail-introduction>
        <detail-recommend :sightname="sightname"></detail-recommend>
        <detail-tickets :sightname="sightname"></detail-tickets>
        <detail-banner :sightname="sightname" ></detail-banner>
    </div>
</template>

<script>
import DetailBanner from '../components/detail/Banner'
import DetailAlbum from '../components/detail/Album'
import DetailIntroduction from '../components/detail/Introduction'
import DetailTickets from '../components/detail/Tickets'
import DetailRecommend from '../components/detail/Recommend'
import axios from 'axios'

    export default {
        name:'Detail',
        components:{
            DetailBanner,
            DetailIntroduction,
            DetailAlbum,
            DetailTickets,
            DetailRecommend
        },
        data(){
            return{
                sightname:{},
                lastlocation:[]
            }
        },
        methods:{
            getDetailInfo(){
                axios.get('/detail.json',{
                    params:{
                        id:this.$route.params.id
                    }
                }).then(this.getDetailSucc)
            },
            getDetailSucc(val){
                const data = val.data
                if(data.success){
                    const value = data.data.sightname
                    const mark = this.$route.params.id
                    this.sightname = value
                    this.$store.dispatch('getInfo',{value,mark})
                }
            }
        },
        mounted(){
            this.lastlocation.push(this.$route.params.id)
            this.getDetailInfo()
        },
        activated(){
            if(this.lastlocation.indexOf(this.$route.params.id) === -1){
                this.getDetailInfo()
                this.lastlocation.push(this.$route.params.id)
            }
        }
    }
</script>

<style scoped lang='stylus'>
   
</style>