import {put,takeEvery} from "redux-saga/effects"
import {
  CREATE_SETTING,
  CREATE_SETTING_RED,
  GET_SETTING,
  GET_SETTING_RED,
  UPDATE_SETTING,
  UPDATE_SETTING_RED,
  DELETE_SETTING,
  DELETE_SETTING_RED
} from "../Services";

import {
  createRecord,
  getRecord,
  deleteRecord,
  updateMultipartRecord
} from "../Services";

// import { createMultipartRecord,getRecord,deleteRecord, updateMultipartRecord, } from "./Services/index"

function* createSaga(action){                                          //Worker Saga
    let response = yield createRecord("setting",action.payload)   // if data has no file field
    // let response = yield createMultipartRecord("Setting",action.payload)   // if data has at least 1 file field
     yield put({type:CREATE_SETTING_RED,payload:response})
}
function* getSaga(action){                                          //Worker Saga
    let response = yield getRecord("setting",action.payload)   
     yield put({type:GET_SETTING_RED,payload:response})
}
function* updateSaga(action){
    yield updateRecord("setting",action.payload)
    yield updateMultipartRecord("setting",action.payload)
    yield put({type:UPDATE_SETTING_RED,payload:action.payload})

    //in case of real backend
    //  let response = yield updateRecord("Setting",action.payload)
//    let response = yield updateMultipartRecord("Setting",action.payload)
    // yield put({UPDATE_SETTING_RED,payload:action.response})

}
function* deleteSaga(action){                                          //Worker Saga
     yield deleteRecord("setting",action.payload)   
     yield put({type:DELETE_SETTING_RED,payload:action.payload})
}

export default function* SettingSagas(){
    yield takeEvery(CREATE_SETTING,createRecord)             //Watcher Saga
    yield takeEvery(GET_SETTING,getSaga)                   //Watcher Saga
    yield takeEvery(UPDATE_SETTING,updateSaga)                   //Watcher Saga
    yield takeEvery(DELETE_SETTING,deleteSaga)                   //Watcher Saga
}
