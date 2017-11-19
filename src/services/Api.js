import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: 'https://pcb-api.herokuapp.com/'
  })
}