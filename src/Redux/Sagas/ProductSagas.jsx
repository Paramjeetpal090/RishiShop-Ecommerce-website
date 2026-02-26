import {put,takeEvery} from "redux-saga/effects"
import { CREATE_PRODUCT,CREATE_PRODUCT_RED,GET_PRODUCT,GET_PRODUCT_RED,UPDATE_PRODUCT,UPDATE_PRODUCT_RED,DELETE_PRODUCT,DELETE_PRODUCT_RED } from "../Constant"
import { createRecord,getRecord,deleteRecord } from "./Services/index"
// import { createMultipartRecord,getRecord,deleteRecord, updateMultipartRecord, } from "./Services/index"

function* createSaga(action){                                          //Worker Saga
    let response = yield createRecord("product",action.payload)   // if data has no file field
    // let response = yield createMultipartRecord("Product",action.payload)   // if data has at least 1 file field
     yield put({type:CREATE_PRODUCT_RED,payload:response})
}
function* getSaga(action){                                          //Worker Saga
    let response = yield getRecord("product",action.payload)   
     yield put({type:GET_PRODUCT_RED,payload:response})
}
function* updateSaga(action){
    yield updateRecord("product",action.payload)
    yield updateMultipartRecord("product",action.payload)
    yield put({type:UPDATE_PRODUCT_RED,payload:action.payload})

    //in case of real backend
    //  let response = yield updateRecord("Product",action.payload)
//    let response = yield updateMultipartRecord("Product",action.payload)
    // yield put({UPDATE_PRODUCT_RED,payload:action.response})

}
function* deleteSaga(action){                                          //Worker Saga
     yield deleteRecord("product",action.payload)   
     yield put({type:DELETE_PRODUCT_RED,payload:action.payload})
}

export default function* ProductSagas(){
    yield takeEvery(CREATE_PRODUCT,createRecord)             //Watcher Saga
    yield takeEvery(GET_PRODUCT,getSaga)                   //Watcher Saga
    yield takeEvery(UPDATE_PRODUCT,updateSaga)                   //Watcher Saga
    yield takeEvery(DELETE_PRODUCT,deleteSaga)                   //Watcher Saga
}
