export const loadPersonsValue = async (url) => {
	let replacedUrl = url.replace('http:/', 'https:/')
	try {
		const response = await fetch(replacedUrl)
		return await response.json()
	} catch (error) {
		return error
	}
}

export const searchPersons = (value) =>
	fetch(`https://swapi.dev/api/people/?search=${value}`)
		.then((res) => res.json())
		.catch((error) => error)
