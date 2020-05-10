import {API_URL} from '../constants'
import { setup } from 'axios-cache-adapter'

export const api = setup({
    // `axios` options
    baseURL: API_URL,

    // `axios-cache-adapter` options
    cache: {
        maxAge: 15 * 60 * 1000
    }
})

export default api