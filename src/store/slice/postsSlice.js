import {createSlice} from "@reduxjs/toolkit";

const name = "posts"

export const initialState = {
    posts : null,
    loading: false,
    error: null,
}

const postsSlice = createSlice({
    name,
    initialState,
    reducers: {
        postsRequest(state) {
            state.loading = true;
            state.error = null
        },
        postsSuccess(state, {payload: posts}) {
            state.loading = false;
            state.error = null;
            state.posts = posts;
        },
        postsFailure(state, action) {
          state.loading = false;
          state.error = action.payload
        }
    }
})

export default postsSlice