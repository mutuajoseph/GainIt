import axios from 'axios'

// const token = localStorage.getItem('duka-token')

const GAINIT_URL = axios.create({
    baseURL: 'http://127.0.0.1:8000'
})

export default GAINIT_URL;