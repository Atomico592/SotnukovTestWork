import { combineReducers } from 'redux'
import todosSlice from "./slice/todosSlice";
import albumsSlice from "./slice/albumsSlice";
import postsSlice from "./slice/postsSlice";
import photosSlice from "./slice/photosSlice";
import usersSlice from "./slice/usersSlice";

const rootReducer = combineReducers({
  todos: todosSlice.reducer,
  albums: albumsSlice.reducer,
  posts: postsSlice.reducer,
  photos: photosSlice.reducer,
  users: usersSlice.reducer,
  comments: usersSlice.reducer
})

export default rootReducer
