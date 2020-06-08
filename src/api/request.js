export const loadPersons = (page) =>
    fetch(`https://swapi.dev/api/people/?page=${page}`).then(res => res.json())

export const loadSpecies = (url) => {
    let replacedUrl = url.replace("http:/", "https:/");
    return fetch(replacedUrl).then(res => res.json())
}

export const searchPersons = (value) =>
    fetch(`https://swapi.dev/api/people/?search=${value}`).then(res => res.json())
