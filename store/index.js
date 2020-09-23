export const state = () => ({
  token: null
})

export const mutations = {
  setToken(s, token) {
    s.token = token
  },
  clearToken(s) {
    s.token = null
  }
}

export const actions = {
  nuxtServerInit() {
    console.log('nuxtServerInit');
  },
  login({commit}) {
    commit('setToken', 'truetoken')
  },
  logout({commit}) {
    commit('clearToken')
  }
}

export const getters = {
  hasToken: s => !!s.token
}
