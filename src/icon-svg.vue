<template>
    <div>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="iconName"></use>
      </svg>
    </div>
</template>

<script>
    export default {
        name:'iconfont',
        props:{
           iconclass:{
                type:String,
                required:true
           }
        },
        computed:{
            iconName(){
                return `#icon-${this.iconclass}`
            }
        }
    }
</script>

<style scoped>

</style>