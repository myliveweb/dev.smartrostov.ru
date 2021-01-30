import { all } from 'redux-saga/effects'
import { watchFetchCards } from './cardSaga'
import { watchAuth, watchLogout, watchRegister } from './authSaga'

export function* rootWatcher() {
  yield all([watchFetchCards(), watchAuth(), watchLogout(), watchRegister(), ])
}