export const state = () => ({
  users: []
})

export const mutations = {
  setUsers(state, users) {
    state.users = users
  }
}

export const actions = {
  async fetchUsers({commit}) {
    const users = await this.$axios.$get('https://jsonplaceholder.typicode.com/users?_limit=5')
    commit('setUsers', users)
  }
}

export const getters = {
  users: s => s.users
}