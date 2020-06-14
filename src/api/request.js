import axios from 'axios'

export const loadPersonsValue = async (url) => {
	let replacedUrl = url.replace('http:/', 'https:/')
	const response = await axios.get(replacedUrl)
	return response.data
}

export const searchPersons = async (value) => {
	const response = await axios.get('https://swapi.dev/api/people/', {
		params: {
			search: value,
		},
	})
	return response.data
}
