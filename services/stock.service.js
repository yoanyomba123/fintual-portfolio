import axios from 'axios'
import { API_URL } from '../utils/constants'

const baseURL = `${API_URL}/real_assets`;
const axiosInstance = axios.create({ baseURL })

export default {
  getInfo: (stockId) => {
    // console.log('fetch stock ' + stockId)
    return axiosInstance.get(`/${stockId}`).then(res => res.data.data)
  },
  getHistory: (stockId, params) => {
    // console.log('fetch stock ' + stockId + 'history')
    return axiosInstance.get(`/${stockId}/days`, { params }).then(res => res.data.data)
  },
};