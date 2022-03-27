const initialState = {
  errors: []
}
  
export const state = () => ({ ...initialState })

export const getters = {
  validationField: (state) => (field) => {
    if (!field) return null
    if (state.errors.length > 0) {
      const findError = state.errors.find((row) => row.path[0] === field)
  
      if (!findError) {
        return null
      }
      return findError.message
    }
  },
}

export const mutations = {
  SET_ERRORS(state, payload) {
    state.errors = payload
  },
}
export const actions = {
  setErrors({ commit }, params) {
    commit('SET_ERRORS', params)
  }
}