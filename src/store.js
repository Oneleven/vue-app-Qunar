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


export default new Vuex.Store({
  state: {
    detail:{},
    city:defaultCity
  },

  actions:{
    getInfo(ctx, val){
      ctx.commit('changeDetail',val)
    }
  },

  mutations:{
    changeDetail(state, val){
      state.detail = val
    },
      changeCity(state, city){
      state.city = city
      try{
        localStorage.city = city
      }catch(e){
        console.log(e)
      }   
    }
  },

  getters:{
    maindatas:(state)=>{
      const sign =  state.detail.mark
      const main = state.detail.value
      const singlePlay = main[sign]
      const ticketsRecommend = singlePlay.recommend  //推荐
      const ticketsObject = singlePlay.tickets

      const ticketsKind = Object.keys(singlePlay.tickets) //成人票

      const ticketsValue = Object.values(singlePlay.tickets)
      const ticketsNmae = Object.keys(ticketsValue) //全日成人票

      const ticketsContent = Object.values(ticketsValue)  //数组对象[{},{}]

      return {
        singlePlay,
        tickets:singlePlay.ticketsKind,
        ticketsKind,
        ticketsNmae,
        ticketsContent,
        ticketsRecommend,
        ticketsObject
      }
    }
  }
})
