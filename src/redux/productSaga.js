import { put, takeEvery } from 'redux-saga/effects';
import { PRODUCT_LIST, SET_PRODUCT_LIST } from './constant';

function* getProducts() {
    let ApiData = yield fetch('https://jsonplaceholder.typicode.com/todos/1');
    ApiData = yield ApiData.json()
    console.log("API through Saga ", ApiData);
    yield put({type : SET_PRODUCT_LIST,ApiData});
}

export default function* productSaga() {
    yield takeEvery(PRODUCT_LIST, getProducts);
}