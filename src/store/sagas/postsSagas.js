import {put, takeEvery} from "redux-saga/effects"

import {
    postsRequest,
    postsSuccess,
    postsFailure,
    deletePostsSuccess,
    deletePostsFailure,
    deletePostsRequest,
    editPostsRequest,
    editPostSuccess,
    editPostFailure
} from "../actions/postsActions"
import axiosApi from "../../axiosApi";
import {ToastAlert} from "../../components/UI/ToastAlert/ToastAlert";
import {initialState} from "../slice/postsSlice";



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

export function* deletePostsSaga({payload: id}) {
    try {
        console.log(id)
        yield axiosApi.delete(`/posts/${id}`)
        yield put(deletePostsSuccess())
        yield ToastAlert({
            icon: 'success',
            title: 'Удалено',
        })
    }  catch (e) {
        yield put(deletePostsFailure(e.message))
    }
}

export function* editPostsSaga(id) {
    try {
        yield axiosApi.put(`/posts/${id}`)
        yield put(editPostSuccess())
        yield ToastAlert({
            icon: 'success',
            title: 'Отредактировано',
        })
    }  catch (e) {
        yield put(editPostFailure(e.message))
    }
}

const postsSagas = [
    takeEvery(postsRequest, fetchPostsSaga),
    takeEvery(deletePostsRequest, deletePostsSaga),
    takeEvery(editPostsRequest,editPostsSaga)
]

export default postsSagas