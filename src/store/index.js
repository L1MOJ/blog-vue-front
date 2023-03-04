import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

/** 状态定义 */
export const state = {
  baseURL:'http://localhost:7777/'
}

export default new Vuex.Store({
    state,
})
