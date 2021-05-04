import {
  AUTH,
  LOGOUT,
  REGISTER,
  SAGA_AUTH,
  SAGA_LOGOUT,
  SAGA_REGISTER,
} from '../types'

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

export function sagaRegister(data: {}) {
  return {
    type: REGISTER,
    payload: data,
  }
}

export function registerUser(
  firstName: string,
  lastName: string,
  email: string,
  password: string
) {
  return {
    type: SAGA_REGISTER,
    first_name: firstName,
    last_name: lastName,
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
