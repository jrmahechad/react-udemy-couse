import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://react-udemy-course-22900.firebaseio.com/'
})

export default instance;