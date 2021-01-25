import {
  SHOW_LOADER,
  HIDE_LOADER,
  SHOW_SIGN_IN,
  HIDE_SIGN_IN,
  HIDE_SIGN_UP,
  SHOW_SIGN_UP,
} from '../types'

export function showLoader() {
  return {
    type: SHOW_LOADER,
  }
}

export function hideLoader() {
  return {
    type: HIDE_LOADER,
  }
}

export function showSignIn() {
  return {
    type: SHOW_SIGN_IN,
  }
}

export function hideSignIn() {
  return {
    type: HIDE_SIGN_IN,
  }
}

export function showSignUp() {
  return {
    type: SHOW_SIGN_UP,
  }
}

export function hideSignUp() {
  return {
    type: HIDE_SIGN_UP,
  }
}
