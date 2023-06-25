import {put, takeEvery} from "redux-saga/effects"

import {
    postsRequest,
    postsSuccess,
    postsFailure, deletePostsSuccess, deletePostsFailure, deletePostsRequest
} from "../actions/postsActions"
import axiosApi from "../../axiosApi";


export function* fetchPostsSaga() {
    try {
        const {data} = yield axiosApi("/posts")
        if (data) {
            yield put(postsSuccess(data))
        }
    } catch (e) {
        yield put(postsFailure(e.message))
    }
}

export function* deletePostsSaga(id) {
    try {
        yield axiosApi.delete(`/posts/${id}`)
        yield put(deletePostsSuccess())
    }  catch (e) {
        yield put(deletePostsFailure(e.message))
    }
}

const postsSagas = [
    takeEvery(postsRequest, fetchPostsSaga),
    takeEvery(deletePostsRequest, fetchPostsSaga)
]

export default postsSagas