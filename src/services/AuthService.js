import $api from '../utils/axios'

export default class AuthService {
	static async uploadImageForUser(image) {
		return $api.post(`/uploads`, image)
	}
}
