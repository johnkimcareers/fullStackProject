import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

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
    const request = axios.delete(removeUrl)
    return request.then(response => response.data)
}

export default { getAll, create, remove }