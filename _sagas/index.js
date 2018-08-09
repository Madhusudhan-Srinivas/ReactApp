import { all } from 'redux-saga/effects'
import { watchAlertSuccess } from './alert.saga';

export default function* rootSaga() {
    yield all([
        watchAlertSuccess()
    ])
  }