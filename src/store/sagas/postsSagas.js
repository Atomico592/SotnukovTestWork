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

export function* fetchPostsSaga({payload: limit}) {
    try {

            const {data} = yield axiosApi(limit ? `posts${limit}` : `/posts`)
        if (data) {
            yield put(postsSuccess(data))
        }
    } catch (e) {
        yield put(postsFailure(e.message))
    }
}

export function* deletePostsSaga({payload: id}) {
    try {
        yield axiosApi.delete(`/posts/${id}`)
        yield put(deletePostsSuccess(id))
        yield ToastAlert({
            icon: 'success',
            title: 'Удалено',
        })
    }  catch (e) {
        yield put(deletePostsFailure(e.message))
    }
}

export function* editPostsSaga({payload : data}) {

    console.log(data)
    try {
        yield axiosApi.put(`/posts/${data.id}`, data)
        yield put(editPostSuccess(data))
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