import { all } from 'redux-saga/effects'
import { watchFetchCards } from './cardSaga'

export function* rootWatcher() {
  yield all([watchFetchCards(), ])
}