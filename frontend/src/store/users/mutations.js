// export function someMutation (/* state */) {

// const { default: state } = require("../module-example/state");

// }
const SET_USERS = (state, dados) => {
  state.listusers = dados
}

const SET_EDIT_USER = (state, dados) => {
  state.user = dados
}
const SET_USER_EDITED = (state, dados) => {
  state.user = dados
}

const SET_NEW_CAD = (state, dados) => {
  state.statusNewCad = dados.length
  state.cadastroNew = dados
}

const SET_LOGIN = (state, dados) => {
  state.statusLogin = dados.length
  state.loginInformations = dados
}

export {
  SET_USERS,
  SET_EDIT_USER,
  SET_USER_EDITED,
  SET_LOGIN,
  SET_NEW_CAD
}
