import {createSlice} from "@reduxjs/toolkit";

const name = "posts"

export const initialState = {
    posts : null,
    loading: false,
    error: null,
    deleteLoading : false,
    deleteError: null
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
        },
        deletePostsRequest(state) {
            state.deleteLoading = true;
            state.deleteError = null
        },
        deletePostsSuccess(state) {
            state.deleteLoading = false;
        },
        deletePostsFailure(state, action) {
            state.deleteLoading = false;
            state.deleteError = action.payload
        }
    }
})

export default postsSlice