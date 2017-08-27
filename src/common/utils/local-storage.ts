import { log } from './logger'

export const storage = {
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch (e) {
      log('localStorage', e)
    }
  },

  get(key) {
    try {
      return JSON.parse(localStorage.getItem(key))
    } catch (e) {
      log('localStorage', e)
    }
  },

  remove(key) {
    localStorage.removeItem(key)
  },

  clear() {
    localStorage.clear()
  },
}
