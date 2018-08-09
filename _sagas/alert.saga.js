import { take, put, call, fork, select, takeLatest, takeEvery } from 'redux-saga/effects'

import { alertConstants } from '../_constants';

// saga
function* updateAlert() {
    try {
        console.log("hey!");
       // yield call(updateTitleAPI, action.article.title);
        const message = "hello world!!!!!!!!!!!!!!!!!!!!!!!!!";
        yield put({ type: alertConstants.SUCCESS_RESPONSE, message });
        //yield fork(fetchArticles);
    } catch(err) {
        
    }
}

export function* watchAlertSuccess() {
    yield takeEvery(alertConstants.SUCCESS_REQUEST, updateAlert);
}

