import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

// let defaultCity = '上海'
// try{
//   if(localStorage.city){
//     defaultCity = localStorage.city
//   }
// }catch(e){
//   console.log(e)
// }
//使用localStorage最好用try...catch包裹起来


export default new Vuex.Store({
  state,
  mutations

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
