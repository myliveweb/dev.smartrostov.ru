import { all } from 'redux-saga/effects'
import { watchFetchCards } from './cardSaga'
import { watchAuth, watchLogout } from './authSaga'

export function* rootWatcher() {
  yield all([watchFetchCards(), watchAuth(), watchLogout(),])
}