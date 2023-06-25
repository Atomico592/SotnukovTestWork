import {put, takeEvery} from "redux-saga/effects"
import axiosApi from "../../axiosApi";

import  {
    albumsRequest,
    albumsSuccess,
    albumsFailure
} from "../actions/albumsActions"


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