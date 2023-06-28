import {put, takeEvery} from "redux-saga/effects"

import {
    usersRequest,
    usersSuccess,
    usersFailure, editUsersSuccess, editUsersFailure, editUsersRequest
} from "../actions/usersActions"
import axiosApi from "../../axiosApi";


export function* fetchTodosSaga() {
    try {
        const {data} = yield axiosApi("/users")
        if (data) {
            yield put(usersSuccess(data))
        }
    } catch (e) {
        yield put(usersFailure(e.message))
    }
}

export function* editUsersSaga({payload : data}) {
    try {
        yield axiosApi.put(`/users/${data.id}`, data)
        yield put(editUsersSuccess(data))
    }  catch (e) {
        yield put(editUsersFailure(e.message))
    }
}


const usersSagas = [
    takeEvery(usersRequest, fetchTodosSaga),
    takeEvery(editUsersRequest, editUsersSaga)
]

export default usersSagas