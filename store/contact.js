// import axios from "~/plugins/axios"
// import axios from "axios";

const initialState = {
    test: 'text....contact'
  }
  
export const state = () => ({ ...initialState })

export const getters = {

}
export const actions = {
  async sendForm(_, params) {
    try {
      const res = await this.$axios.post('http://localhost:1337/api/contacts', params)
      if(res.status === 200) return Promise.resolve(res);
    } catch (err) {          
      return Promise.reject(err);
    }
  }
}