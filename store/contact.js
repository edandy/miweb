const api = process.env.NUXT_ENV_STRAPI_ENDPOINT
const initialState = {}
  
export const state = () => ({ ...initialState })

export const getters = {

}
export const actions = {
  async sendForm(_, params) {
    try {
      const res = await this.$axios.post(api + '/api/contacts', params)
      if(res.status === 200) return Promise.resolve(res);
    } catch (err) {          
      return Promise.reject(err);
    }
  }
}