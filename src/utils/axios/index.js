import axios from 'axios'

const $api = axios.create({
	baseURL: 'http://localhost:8000',
	withCredentials: true
})

// $api.interceptors.request.use(config => {
// 	config.headers.Authorization = window.localStorage.getItem('token')
// 	return config
// })

export default $api
