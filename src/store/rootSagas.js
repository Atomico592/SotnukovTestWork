import {all} from "redux-saga/effects";
import todosSagas from "./sagas/todosSagas";
import albumsSagas from "./sagas/albumsSagas";
import postsSagas from "./sagas/postsSagas";
import photosSagas from "./sagas/photosSagas";
import commentSagas from "./sagas/commentSagas";
import usersSagas from "./sagas/usersSagas";

export default function* rootSagas() {
    yield all ([
        ...todosSagas,
        ...albumsSagas,
        ...postsSagas,
        ...photosSagas,
        ...commentSagas,
        ...usersSagas,
    ]);
}