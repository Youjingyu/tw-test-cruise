import axios from 'axios'
import config from './config'

class Api {
  constructor () {
    this.server = config.server
  }
  get (path, params) {
    return new Promise((resolve, reject) => {
      axios.get(`${this.server}${path}`, { params }).then((res) => {
        if (res.status === 200) {
          resolve(res.data)
        } else {
          reject(new Error(res.statusText || 'request error'))
        }
      }).catch((err) => {
        reject(err)
      })
    })
  }
  put (path, data) {
    return new Promise((resolve, reject) => {
      axios.put(`${this.server}${path}`, data).then((res) => {
        if (res.status === 200) {
          resolve(res.data)
        } else {
          reject(new Error(res.statusText || 'request error'))
        }
      }).catch((err) => {
        reject(err)
      })
    })
  }
  getAgents () {
    return this.get('/agents')
  }
  putAgent (id, data) {
    return this.put(`/agents/${id}`, data)
  }
}

export default new Api()
