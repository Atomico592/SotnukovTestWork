import {put, takeEvery} from "redux-saga/effects"

import  {
    albumsRequest,
    albumsSuccess,
    albumsFailure
} from "../actions/albumsActions"
import axiosApi from "../../axiosApi";


export function* fetchTodosSaga() {
    try {
        const {data} = yield axiosApi("/albums")
        if (data) {
            yield put(albumsSuccess(data))
        }
    } catch (e) {
        yield put(albumsFailure(e.message))
    }
}


const albumsSagas = [
    takeEvery(albumsRequest, fetchTodosSaga)
]

export default albumsSagas