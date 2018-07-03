import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let defaultCity = '上海'
try{
  if(localStorage.city){
    defaultCity = localStorage.city
  }
}catch(e){
  console.log(e)
}
//使用localStorage最好用try...catch包裹起来


export default new Vuex.Store({
  state: {
    city:defaultCity   //state存放的是公用的数据
  },
  mutations:{
    changeCity(state, city){
      state.city = city
      try{
        localStorage.city = city
      }catch(e){
        console.log(e)
      }
      
    }
  }

  // mutations: {
  //   changeCityName(state, city){
  //     state.city = city
  //   }
  // },
  // actions: {
  //   changeCity(ctx, city){
  //     ctx.commit('changeCityName', city)
  //   }
  // }
})
