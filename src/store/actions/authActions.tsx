import { AUTH, LOGOUT, SAGA_AUTH, SAGA_LOGOUT } from '../types'

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

export function sagaLogout(data: {}) {
  return {
    type: LOGOUT,
    payload: data,
  }
}

export function logoutUser(id: number, token: string) {
  return {
    type: SAGA_LOGOUT,
    id: id,
    token: token,
  }
}
