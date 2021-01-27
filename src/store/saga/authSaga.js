import { takeEvery, put, call } from 'redux-saga/effects'
import getData from './sendRequest'
import { showLoader, hideLoader } from "../actions/appActions";
import { sagaAuth } from "../actions/authActions";
import { SAGA_AUTH } from '../types'

function* workerAuth(params) {
  yield put(showLoader())
  const postData = { ...params, action: 'auth', method: 'auth' }
  const data = yield call(getData, postData)
  yield put(sagaAuth(data))
  yield put(hideLoader())
}

export function* watchAuth() {
  yield takeEvery(SAGA_AUTH, workerAuth)
}