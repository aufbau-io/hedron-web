// import api from '../../api/BackEnd';
// import {router} from '../../main';

const state = {
  page: "hedron",
  showMain: false
}

const getters = {
  page: (state) => state.page,
  showMain: (state) => state.showMain
}

const actions = {
  setPage ({ commit }, value) {
    commit("setPage", value)
  },
  setShowMain ({ commit }, value) {
    commit("setShowMain", value)
  }
}

const mutations = {
  setPage (state, value) {
    state.page = value
  },
  setShowMain (state, value) {
    state.showMain = value
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
