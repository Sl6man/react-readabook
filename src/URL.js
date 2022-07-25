import axios from "axios"

const URL = axios.create({
    baseURL: 'http://localhost:3001/'
})

export default URL

