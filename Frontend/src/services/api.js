import axios from "axios"

const rawBaseUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000"
const baseURL = rawBaseUrl.replace(/\/+$/, "")

const api = axios.create({
    baseURL,
    withCredentials: true
})

export default api
