import {put, takeEvery} from "redux-saga/effects"
import axiosApi from "../../axiosApi";

import  {
    commentRequest,
    commentSuccess,
    commentFailure
} from "../actions/commentActions"


export function* fetchCommentsSaga({payload : id}) {
    try {
        const {data} = yield axiosApi(`/comments?postId=${id}`)
        if (data) {
            yield put(commentSuccess(data))
        }
    } catch (e) {
        yield put(commentFailure(e.message))
    }
}


const commentSagas = [
    takeEvery(commentRequest, fetchCommentsSaga)
]

export default commentSagas