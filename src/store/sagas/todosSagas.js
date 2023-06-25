import {put, takeEvery} from "redux-saga/effects"

import  {
    todosRequest,
    todosSuccess,
    todosFailure
} from "../actions/todosActions"
import axiosApi from "../../axiosApi";


export function* fetchTodosSaga() {
    try {
            const {data} = yield axiosApi("/todos")
        if (data) {
            yield put(todosSuccess(data))
        }
    } catch (e) {
        yield put(todosFailure(e.message))
    }
}


const todosSagas = [
    takeEvery(todosRequest, fetchTodosSaga)
]

export default todosSagas