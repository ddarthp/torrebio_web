import axios from 'axios'

// initial state
const state = {
  bio: {}
}
// getters
const getters = {
}
// actions
const actions = {
  getBio ({ commit }, payload) {
    axios.post(`http://localhost:3000/api/torre/bio/`, payload)
      .then(response => {
        commit('setBio', response.data)
      })
      .catch(e => {
        this.errors.push(e)
      })
  }
}
// mutations
const mutations = {
  setBio (state, payload) {
    state.bio = payload
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
