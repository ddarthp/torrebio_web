import axios from 'axios'
import router from '../../router'

// initial state
const state = {
  bio: {},
  access_token: null
}
// getters
const getters = {
}
// actions
const actions = {
  getBio ({ commit }, payload) {
    axios.post(`http://localhost:3000/api/torre/bio/`, payload.body)
      .then(response => {
        if (response.data.code) {
          router.push('/')
        }
        if (payload.access_token) {
          axios.post(`http://localhost:3000/api/linkedin/person/me`, {
            access_token: payload.access_token
          })
            .then(res => {
              let bio = response.data
              bio['linkedin'] = res.data
              commit('setBio', bio)
            })
            .catch(err => {
              this.errors.push(err)
            })
        } else {
          commit('setBio', response.data)
        }
      })
      .catch(e => {
        this.errors.push(e)
      })
  },
  getToken ({commit, dispatch}, payload) {
    let qs = payload.qs
    var vars = qs.split('&')
    let state = null
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=')
      if (decodeURIComponent(pair[0]) === 'state') {
        state = decodeURIComponent(pair[1])
      }
    }
    let request = `http://localhost:3000/api/linkedin/access_token?${qs}`
    axios.get(request)
      .then(response => {
        commit('setToken', response.data.access_token)
        dispatch('getBio', {
          access_token: response.data.access_token,
          body: {
            torreId: state
          }
        })
        router.push(`/profile/${state}`)
      })
      .catch(e => {
        console.log(e)
      })
  }
}
// mutations
const mutations = {
  setBio (state, payload) {
    state.bio = payload
  },
  setToken (state, payload) {
    state.access_token = payload
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
