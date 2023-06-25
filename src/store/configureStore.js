import {combineReducers} from "redux";
import createSagaMiddleware from "redux-saga";
import {loadFromLocalStorage} from "./localStorage";
import rootSagas from "./rootSagas";
import {configureStore} from "@reduxjs/toolkit";
import axiosApi from "../axiosApi";
import postsSlice from "./slice/postsSlice";
import albumsSlice from "./slice/albumsSlice";
import todosSlice from "./slice/todosSlice";

const rootReducer = combineReducers({
  posts: postsSlice.reducer,
  albums: albumsSlice.reducer,
  todos: todosSlice.reducer,
});

const persistedState = loadFromLocalStorage();
const sagaMiddleware = createSagaMiddleware();
const middleware = [
    sagaMiddleware
]
const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: true,
  preloadedState: persistedState,
});

sagaMiddleware.run(rootSagas);

axiosApi.interceptors.response.use(res => res, e => {
  if (!e.response.data) {
    e.response = {data: {global: 'No internet!'}};
  }

  throw e;
});

export default store;