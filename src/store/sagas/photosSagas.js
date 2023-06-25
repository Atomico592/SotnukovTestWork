import {put, takeEvery} from "redux-saga/effects"

import  {
    photosRequest,
    photosSuccess,
    photosFailure
} from "../actions/photosActions"
import axiosApi from "../../axiosApi";


export function* fetchTodosSaga() {
    try {
        const {data} = yield axiosApi("/photos")
        if (data) {
            yield put(photosSuccess(data))
        }
    } catch (e) {
        yield put(photosFailure(e.message))
    }
}


const photosSagas = [
    takeEvery(photosRequest, fetchTodosSaga)
]

export default photosSagas