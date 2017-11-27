import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

// baseURL: 'http://35.197.128.71'
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
  },
  addNewTodo (state, payload) {
    console.log('data baru dimasukkin :', payload)
    state.todo_list.push(payload)
  },
  setStatus (state, payload) {
    console.log('data lama diupdate :', payload)
    let idx = state.todo_list.findIndex(arr => { return arr._id === payload._id })
    state.todo_list[idx] = payload
  },
  setRemoveData (state, payload) {
    console.log('data yang diremove :', payload)
    let idx = state.todo_list.findIndex(arr => { return arr._id === payload._id })
    state.todo_list.splice(idx, 1)
  }
}

const actions = {
  getAllTodos ({commit}) {
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
  },
  writeNewTodo ({commit}, newTodo) {
    var config = {
      headers: {
        token: localStorage.getItem('token')
      }
    }
    http.post('/todos', newTodo, config)
    .then(({data}) => {
      console.log('Todos yang ditambahkan :', data)
      commit('addNewTodo', data.newTodo)
      newTodo.todo_name = ''
    })
    .catch(err => {
      console.log('data gak berhasil masuk')
      console.log(err)
    })
  },
  finishTask ({commit}, status) {
    var config = {
      headers: {
        token: localStorage.getItem('token')
      }
    }
    status.isfinished = !status.isfinished
    status.updatedAt = new Date().toISOString()
    http.put(`/todos/${status._id}`, status, config)
    .then(({data}) => {
      console.log('Data sudah diupdate belum ?', data)
      commit('setStatus', data)
    })
    .catch(err => {
      console.log('Data tidak berubah')
      console.log(err)
    })
  },
  removeTask ({commit}, task) {
    var config = {
      headers: {
        token: localStorage.getItem('token')
      }
    }
    http.delete(`/todos/${task._id}`, config)
    .then(({data}) => {
      console.log('data yang diremove :', data.deletedTodo)
      commit('setRemoveData', data.deletedTodo)
    })
    .catch(err => {
      console.log('Data tidak terupdate')
      console.log(err)
    })
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
