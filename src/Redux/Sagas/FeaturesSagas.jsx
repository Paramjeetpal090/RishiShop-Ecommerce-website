import {put,takeEvery} from "redux-saga/effects"
import { CREATE_FEATURES,CREATE_FEATURES_RED,GET_FEATURES,GET_FEATURES_RED,UPDATE_FEATURES,UPDATE_FEATURES_RED,DELETE_FEATURES,DELETE_FEATURES_RED } from "../Services"
import { createRecord,getRecord,deleteRecord } from "../Services"
// import { createMultipartRecord,getRecord,deleteRecord, updateMultipartRecord, } from "./Services/index"

function* createSaga(action){                                          //Worker Saga
    let response = yield createRecord("features",action.payload)   // if data has no file field
    // let response = yield createMultipartRecord("Features",action.payload)   // if data has at least 1 file field
     yield put({type:CREATE_FEATURES_RED,payload:response})
}
function* getSaga(action){                                          //Worker Saga
    let response = yield getRecord("features",action.payload)   
     yield put({type:GET_FEATURES_RED,payload:response})
}
function* updateSaga(action){
    yield updateRecord("features",action.payload)
    yield updateMultipartRecord("features",action.payload)
    yield put({type:UPDATE_FEATURES_RED,payload:action.payload})

    //in case of real backend
    //  let response = yield updateRecord("Features",action.payload)
//    let response = yield updateMultipartRecord("Features",action.payload)
    // yield put({UPDATE_FEATURES_RED,payload:action.response})

}
function* deleteSaga(action){                                          //Worker Saga
     yield deleteRecord("features",action.payload)   
     yield put({type:DELETE_FEATURES_RED,payload:action.payload})
}

export default function* MaincategorySagas(){
    yield takeEvery(CREATE_FEATURES,createRecord)             //Watcher Saga
    yield takeEvery(GET_FEATURES,getSaga)                   //Watcher Saga
    yield takeEvery(UPDATE_FEATURES,updateSaga)                   //Watcher Saga
    yield takeEvery(DELETE_FEATURES,deleteSaga)                   //Watcher Saga
}
