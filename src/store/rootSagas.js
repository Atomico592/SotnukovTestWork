import {all} from "redux-saga/effects";
import todosSagas from "./sagas/todosSagas";
import albumsSagas from "./sagas/albumsSagas";
import postsSagas from "./sagas/postsSagas";
import historySagas from "./sagas/historySagas";
import history from "../history";

export default function* rootSagas() {
    yield all ([
        ...todosSagas,
        ...albumsSagas,
        ...postsSagas,
        ...historySagas(history)
    ]);
}