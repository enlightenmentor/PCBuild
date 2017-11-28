import axios from 'axios'

export default(token) => {
  return axios.create({
    // baseURL: 'https://pcb-api.herokuapp.com/'
    baseURL: 'http://localhost:8081/',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}