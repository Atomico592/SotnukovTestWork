import {put, takeEvery} from "redux-saga/effects"

import  {
    postsRequest,
    postsSuccess,
    postsFailure
} from "../actions/postsActions"
import axiosApi from "../../axiosApi";


export function* fetchTodosSaga() {
    try {
        const {data} = yield axiosApi("/posts")
        if (data) {
            yield put(postsSuccess(data))
        }
    } catch (e) {
        yield put(postsFailure(e.message))
    }
}


const postsSagas = [
    takeEvery(postsRequest, fetchTodosSaga)
]

export default postsSagas