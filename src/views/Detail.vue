<template>
    <div>
        <detail-album></detail-album>
        
        <detail-introduction></detail-introduction>
        <detail-tickets></detail-tickets>
        <detail-banner></detail-banner>
    </div>
</template>

<script>
import DetailBanner from '../components/detail/Banner'
import DetailAlbum from '../components/detail/Album'
import DetailIntroduction from '../components/detail/Introduction'
import DetailTickets from '../components/detail/Tickets'
    export default {
        name:'Detail',
        components:{
            DetailBanner,
            DetailIntroduction,
            DetailAlbum,
            DetailTickets
        }
    }
</script>

<style scoped lang='stylus'>
   
</style>