export const loadPersonsValue = async (url) => {
	let replacedUrl = url.replace('http:/', 'https:/')
	const response = await fetch(replacedUrl)
	return await response.json()
}

export const searchPersons = (value) =>
	fetch(`https://swapi.dev/api/people/?search=${value}`).then((res) =>
		res.json()
	)
