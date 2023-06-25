import {put, takeEvery} from "redux-saga/effects"

import  {
    usersRequest,
    usersSuccess,
    usersFailure
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


const usersSagas = [
    takeEvery(usersRequest, fetchTodosSaga)
]

export default usersSagas