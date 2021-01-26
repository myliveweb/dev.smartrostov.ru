import { takeEvery, put, call } from 'redux-saga/effects'
import getData from './sendRequest'
import { showLoader, hideLoader } from "../actions/appActions";
import { sagaFetchCards } from "../actions/cardActions";
import { SAGA_FETCH_CARDS } from '../types'

function* workerFetchCards(params) {
  yield put(showLoader())
  const postData = { ...params, action: 'card_list' }
  const data = yield call(getData, postData)
  yield put(sagaFetchCards(data))
  yield put(hideLoader())
}

export function* watchFetchCards() {
  yield takeEvery(SAGA_FETCH_CARDS, workerFetchCards)
}