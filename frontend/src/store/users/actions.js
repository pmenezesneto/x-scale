import Vue from 'vue'
import { Loading } from 'quasar'

const setUsers = ({ commit }) => {
  Loading.show({
    delay: 400
  })
  return new Promise((resolve, reject) => {
    Vue.prototype.$axios.get('http://localhost:9200/users/_search')
      .then((res) => {
        Loading.hide()
        console.log(res.data.hits.hits)
        commit('SET_USERS', res.data.hits.hits)
      })
      .catch((err) => {
        Loading.hide()
        console.error(err)
      })
  })
}

const setEditUser = ({ commit }, id) => {
  Loading.show({
    delay: 400
  })
  return new Promise((resolve, reject) => {
    Vue.prototype.$axios.get(`http://localhost:9200/users/_doc/${id}`)
      .then((res) => {
        Loading.hide()
        commit('SET_EDIT_USER', res.data)
      })
      .catch((err) => {
        Loading.hide()
        console.error(err)
      })
  })
}

const setUserEdited = ({ commit }, id, usuario) => {
  Loading.show({
    delay: 400
  })
  return new Promise((resolve, reject) => {
    console.log('esse é o valor que veio do usuario: ' + usuario)
    Vue.prototype.$axios.post(`http://localhost:9200/users/_update/${id}`)
      .then((res) => {
        Loading.hide()
        commit('SET_USER_EDITED', res.data)
      })
      .catch((err) => {
        Loading.hide()
        console.error(err)
      })
  })
}

const setNewCad = ({ commit }, usuario) => {
  Loading.show({
    delay: 400
  })
  return new Promise((resolve, reject) => {
    console.log('esse é o valor que veio do usuario:')
    console.log(usuario)
    Vue.prototype.$axios.post('http://localhost:9200/users/', usuario)
      .then((res) => {
        Loading.hide()
        commit('SET_NEW_CAD', res.data)
      })
      .catch((err) => {
        Loading.hide()
        console.error(err)
      })
  })
}

const setUserLogin = ({ commit }, login) => {
  Loading.show({
    delay: 400
  })
  return new Promise((resolve, reject) => {
    // console.log('esse é o valor que veio do usuario para login: ' + login)
    Vue.prototype.$axios.get(`http://localhost:9200/users/_search?q=email:"${login}"`)
      .then((res) => {
        Loading.hide()
        console.log(res.data)
        commit('SET_LOGIN', res.data.hits.hits)
      })
      .catch((err) => {
        Loading.hide()
        console.error(err)
      })
  })
}

export {
  setUsers,
  setEditUser,
  setUserEdited,
  setUserLogin,
  setNewCad
}
