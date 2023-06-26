import { combineReducers } from 'redux'
import todosSlice from "./slice/todosSlice";
import albumsSlice from "./slice/albumsSlice";
import postsSlice from "./slice/postsSlice";
import photosSlice from "./slice/photosSlice";
import usersSlice from "./slice/usersSlice";
import commentSlice from "./slice/commentSlice";

const rootReducer = combineReducers({
  todos: todosSlice.reducer,
  albums: albumsSlice.reducer,
  posts: postsSlice.reducer,
  photos: photosSlice.reducer,
  users: usersSlice.reducer,
  comments: commentSlice.reducer
})

export default rootReducer
