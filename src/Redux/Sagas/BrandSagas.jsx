import {put,takeEvery} from "redux-saga/effects"
import { CREATE_BRAND,CREATE_BRAND_RED,GET_BRAND,GET_BRAND_RED,UPDATE_BRAND,UPDATE_BRAND_RED,DELETE_BRAND,DELETE_BRAND_RED } from "../Constant"
import { createRecord,getRecord,deleteRecord } from "./Services/index"
// import { createMultipartRecord,getRecord,deleteRecord, updateMultipartRecord, } from "./Services/index"

function* createSaga(action){                                          //Worker Saga
    let response = yield createRecord("Brand",action.payload)   // if data has no file field
    // let response = yield createMultipartRecord("Brand",action.payload)   // if data has at least 1 file field
     yield put({type:CREATE_BRAND_RED,payload:response})
}
function* getSaga(action){                                          //Worker Saga
    let response = yield getRecord("Brand",action.payload)   
     yield put({type:GET_BRAND_RED,payload:response})
}
function* updateSaga(action){
    yield updateRecord("Brand",action.payload)
    yield updateMultipartRecord("Brand",action.payload)
    yield put({type:UPDATE_BRAND_RED,payload:action.payload})

    //in case of real backend
    //  let response = yield updateRecord("Brand",action.payload)
//    let response = yield updateMultipartRecord("Brand",action.payload)
    // yield put({UPDATE_BRAND_RED,payload:action.response})

}
function* deleteSaga(action){                                          //Worker Saga
     yield deleteRecord("Brand",action.payload)   
     yield put({type:DELETE_BRAND_RED,payload:action.payload})
}

export default function* MaincategorySagas(){
    yield takeEvery(CREATE_BRAND,createRecord)             //Watcher Saga
    yield takeEvery(GET_BRAND,getSaga)                   //Watcher Saga
    yield takeEvery(UPDATE_BRAND,updateSaga)                   //Watcher Saga
    yield takeEvery(DELETE_BRAND,deleteSaga)                   //Watcher Saga
}
