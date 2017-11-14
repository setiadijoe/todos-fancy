import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:3000'
})

Vue.use(Vuex)

const state = {
  todo_list: []
}

const mutations = {
  setAllTodos (state, payload) {
    console.log('sudah masuk mutation :', payload)
    state.todo_list = payload
  }
}

const actions = {
  getAllTodos ({commit}) {
    console.log('====================================')
    console.log('masuk sini kagak?')
    console.log('====================================')
    var config = {
      headers: {
        token: localStorage.getItem('token')
      }
    }
    http.get('/todos', config)
    .then(response => {
      console.log('Data yang diperoleh :', response.data)
      commit('setAllTodos', response.data)
    })
    .catch(err => {
      console.log('ini error lho')
      console.error(err)
    })
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
