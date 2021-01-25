import { takeEvery, put, call } from 'redux-saga/effects'
import axios from "axios";
import { showLoader, hideLoader } from "../actions/appActions";
import { sagaFetchCards } from "../actions/cardActions";
import { SAGA_FETCH_CARDS } from '../types'

const getDataList = (params) => {
  const { offset, limit } = { ...params }
  return axios.get(`https://api.zapolskiy.moscow/v2/?action=card_list&offset=${offset}&limit=${limit}`)
  .then(res => res.data)
}

function* workerFetchCards(params) {
  yield put(showLoader())
  const data = yield call(getDataList, params)
  yield put(sagaFetchCards(data))
  yield put(hideLoader())
}

export function* watchFetchCards() {
  yield takeEvery(SAGA_FETCH_CARDS, workerFetchCards)
}