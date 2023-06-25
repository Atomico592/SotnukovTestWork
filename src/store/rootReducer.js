import { combineReducers } from 'redux'
import todosSlice from "./slice/todosSlice";
import albumsSlice from "./slice/albumsSlice";
import postsSlice from "./slice/postsSlice";

const rootReducer = combineReducers({
  todos: todosSlice.reducer,
  albums: albumsSlice.reducer,
  posts: postsSlice.reducer,
})

export default rootReducer
