/**
 * @author youjingyu
 * @fileOverview api request class
 * @date 2019-02-24
 */

import axios from 'axios'
import config from './config'

class Api {
  constructor () {
    this.server = config.server
  }
  /**
   * @desc http get
   * @param string path - url path
   * @param object params - query object
   * @return Promise<any>
   */
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
  /**
   * @desc http put
   * @param string path - url path
   * @param object data - data to be submitted
   * @return Promise<any>
   */
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
  /**
   * @desc get all agents
   * @return Promise<any>
   */
  getAgents () {
    return this.get('/agents')
  }
  /**
   * @desc update agent data
   * @param string id - agent id
   * @param object data - agent data
   * @return Promise<any>
   */
  putAgent (id, data) {
    return this.put(`/agents/${id}`, data)
  }
}

export default new Api()
