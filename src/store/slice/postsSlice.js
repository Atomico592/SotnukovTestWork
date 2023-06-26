import {createSlice} from "@reduxjs/toolkit";

const name = "posts"

export const initialState = {
    posts : null,
    loading: false,
    error: null,
    deleteLoading : false,
    deleteError: null,
    editLoading : false,
    editError : null
}

const postsSlice = createSlice({
    name,
    initialState,
    reducers: {
        //get
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
        //delete
        deletePostsRequest(state) {
            state.deleteLoading = true;
            state.deleteError = null
        },
        deletePostsSuccess(state) {
            state.deleteLoading = false;
            state.deleteSuccess = true;
        },
        deletePostsFailure(state, action) {
            state.deleteLoading = false;
            state.deleteError = action.payload
        },
        ClearDeletePosts(state) {
            state.deleteSuccess = false;
        },
        //edit
        editPostsRequest(state) {
            state.editLoading = true;
            state.editError = null
        },
        editPostSuccess(state) {
            state.editLoading = false;
            state.editError = null;
        },
        editPostFailure(state, action) {
          state.editLoading = false;
          state.editError = action.payload
        }

    }
})

export default postsSlice