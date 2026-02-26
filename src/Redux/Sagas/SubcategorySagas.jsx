import {put,takeEvery} from "redux-saga/effects"
import { CREATE_SUBCATEGORY,CREATE_SUBCATEGORY_RED,GET_SUBCATEGORY,GET_SUBCATEGORY_RED,UPDATE_SUBCATEGORY,UPDATE_SUBCATEGORY_RED,DELETE_SUBCATEGORY,DELETE_SUBCATEGORY_RED } from "../Constant"
import { createRecord,getRecord,deleteRecord } from "./Services/index"
// import { createMultipartRecord,getRecord,deleteRecord, updateMultipartRecord, } from "./Services/index"

function* createSaga(action){                                          //Worker Saga
    let response = yield createRecord("subcategory",action.payload)   // if data has no file field
    // let response = yield createMultipartRecord("Subcategory",action.payload)   // if data has at least 1 file field
     yield put({type:CREATE_SUBCATEGORY_RED,payload:response})
}
function* getSaga(action){                                          //Worker Saga
    let response = yield getRecord("subcategory",action.payload)   
     yield put({type:GET_SUBCATEGORY_RED,payload:response})
}
function* updateSaga(action){
    yield updateRecord("subcategory",action.payload)
    yield updateMultipartRecord("subcategory",action.payload)
    yield put({type:UPDATE_SUBCATEGORY_RED,payload:action.payload})

    //in case of real backend
    //  let response = yield updateRecord("Subcategory",action.payload)
//    let response = yield updateMultipartRecord("Subcategory",action.payload)
    // yield put({UPDATE_SUBCATEGORY_RED,payload:action.response})

}
function* deleteSaga(action){                                          //Worker Saga
     yield deleteRecord("subcategory",action.payload)   
     yield put({type:DELETE_SUBCATEGORY_RED,payload:action.payload})
}

export default function* MaincategorySagas(){
    yield takeEvery(CREATE_SUBCATEGORY,createRecord)             //Watcher Saga
    yield takeEvery(GET_SUBCATEGORY,getSaga)                   //Watcher Saga
    yield takeEvery(UPDATE_SUBCATEGORY,updateSaga)                   //Watcher Saga
    yield takeEvery(DELETE_SUBCATEGORY,deleteSaga)                   //Watcher Saga
}
