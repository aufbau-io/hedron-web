// import api from '../../api/BackEnd';
// import {router} from '../../main';

const state = {
  page: "hedron"
}

const getters = {
  page: (state) => state.page
}

const actions = {
  setPage ({ commit }, value) {
    commit("setPage", value)
  }
}

const mutations = {
  setPage (state, value) {
    state.page = value
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
