const initialState = {
    test: 'text....index',
    errors: {}
  }
  
export const state = () => ({ ...initialState })

export const getters = {

}

export const mutations = {
    SET_ERRORS(state, payload) {
        state.errors = payload
    },
}
export const actions = {
    getLeads({ commit }, params) {
        commit('SET_ERRORS', params)
    }
}