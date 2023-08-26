import axios from 'axios'
const baseUrl = '/api/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = (person) => {
    const request = axios.post(baseUrl, person)
    return request.then(response => response.data)
}

const remove = (id) => {
    const removeUrl = `${baseUrl}/${id}`
    console.log(removeUrl)
    const request = axios.delete(removeUrl)
    return request.then(response => response.data)
}

const update = (person) => {
    const updateUrl = `${baseUrl}/${person.id}`
    const request = axios.put(updateUrl,person)
    return request.then(response => response.data)
}

export default { getAll, create, remove, update }