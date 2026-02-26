import {put,takeEvery} from "redux-saga/effects"

import {
  CREATE_FAQ,
  CREATE_FAQ_RED,
  GET_FAQ,
  GET_FAQ_RED,
  UPDATE_FAQ,
  UPDATE_FAQ_RED,
  DELETE_FAQ,
  DELETE_FAQ_RED
} from "../Services";

import {
  createRecord,
  getRecord,
  deleteRecord,
  updateMultipartRecord
} from "../Services";

// import { createMultipartRecord,getRecord,deleteRecord, updateMultipartRecord, } from "./Services/index"

function* createSaga(action){                                          //Worker Saga
    let response = yield createRecord ("Faq",action.payload)   // if data has no file field
    // let response = yield createMultipartRecord("Faq",action.payload)   // if data has at least 1 file field
     yield put({type:CREATE_FAQ_RED,payload:response})
}
function* getSaga(action){                                          //Worker Saga
    let response = yield getRecord("Faq",action.payload)   
     yield put({type:GET_FAQ_RED,payload:response})
}
function* updateSaga(action){
    yield updateRecord("Faq",action.payload)
    yield updateMultipartRecord("Faq",action.payload)
    yield put({type:UPDATE_FAQ_RED,payload:action.payload})

    //in case of real backend
    //  let response = yield updateRecord("Faq",action.payload)
//    let response = yield updateMultipartRecord("Faq",action.payload)
    // yield put({UPDATE_FAQ_RED,payload:action.response})

}
function* deleteSaga(action){                                          //Worker Saga
     yield deleteRecord("Faq",action.payload)   
     yield put({type:DELETE_FAQ_RED,payload:action.payload})
}

export default function* MaincategorySagas(){
    yield takeEvery(CREATE_FAQ,createRecord)             //Watcher Saga
    yield takeEvery(GET_FAQ,getSaga)                   //Watcher Saga
    yield takeEvery(UPDATE_FAQ,updateSaga)                   //Watcher Saga
    yield takeEvery(DELETE_FAQ,deleteSaga)                   //Watcher Saga
}
