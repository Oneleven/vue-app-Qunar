import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)



export default new Vuex.Store({
  state: {
    detail:{}
  },

  actions:{
    getInfo(ctx, val){
      ctx.commit('changeDetail',val)
    }
  },

  mutations:{
    changeDetail(state, val){
      state.detail = val
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
