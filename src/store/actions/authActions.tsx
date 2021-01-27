import { AUTH, SAGA_AUTH } from '../types'

export function sagaAuth(data: {}) {
  return {
    type: AUTH,
    payload: data,
  }
}

export function authUser(email: string, password: string) {
  return {
    type: SAGA_AUTH,
    email: email,
    password: password,
  }
}
