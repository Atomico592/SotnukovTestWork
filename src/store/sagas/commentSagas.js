import {put, takeEvery} from "redux-saga/effects"
import axiosApi from "../../axiosApi";

import  {
    commentRequest,
    commentSuccess,
    commentFailure
} from "../actions/commentActions"


export function* fetchTodosSaga() {
    try {
        const {data} = yield axiosApi("/comment")
        if (data) {
            yield put(commentSuccess(data))
        }
    } catch (e) {
        yield put(commentFailure(e.message))
    }
}


const commentSagas = [
    takeEvery(commentRequest, fetchTodosSaga)
]

export default commentSagas