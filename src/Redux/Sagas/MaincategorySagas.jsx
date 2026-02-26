import {put,takeEvery} from "redux-saga/effects"
import { CREATE_MAINCATEGORY,CREATE_MAINCATEGORY_RED,GET_MAINCATEGORY,GET_MAINCATEGORY_RED,UPDATE_MAINCATEGORY,UPDATE_MAINCATEGORY_RED,DELETE_MAINCATEGORY,DELETE_MAINCATEGORY_RED } from "../Services"
import { createRecord,getRecord,deleteRecord } from "../Services"
// import { createMultipartRecord,getRecord,deleteRecord, updateMultipartRecord, } from "./Services/index"

function* createSaga(action){                                          //Worker Saga
    let response = yield createRecord("maincategory",action.payload)   // if data has no file field
    // let response = yield createMultipartRecord("maincategory",action.payload)   // if data has at least 1 file field
     yield put({type:CREATE_MAINCATEGORY_RED,payload:response})
}
function* getSaga(action){                                          //Worker Saga
    let response = yield getRecord("maincategory",action.payload)   
     yield put({type:GET_MAINCATEGORY_RED,payload:response})
}
function* updateSaga(action){
    yield updateRecord("maincategory",action.payload)
    yield updateMultipartRecord("maincategory",action.payload)
    yield put({type:UPDATE_MAINCATEGORY_RED,payload:action.payload})

    //in case of real backend
    //  let response = yield updateRecord("maincategory",action.payload)
//    let response = yield updateMultipartRecord("maincategory",action.payload)
    // yield put({UPDATE_MAINCATEGORY_RED,payload:action.response})

}
function* deleteSaga(action){                                          //Worker Saga
     yield deleteRecord("maincategory",action.payload)   
     yield put({type:DELETE_MAINCATEGORY_RED,payload:action.payload})
}

export default function* MaincategorySagas(){
    yield takeEvery(CREATE_MAINCATEGORY,createRecord)             //Watcher Saga
    yield takeEvery(GET_MAINCATEGORY,getSaga)                   //Watcher Saga
    yield takeEvery(UPDATE_MAINCATEGORY,updateSaga)                   //Watcher Saga
    yield takeEvery(DELETE_MAINCATEGORY,deleteSaga)                   //Watcher Saga
}
