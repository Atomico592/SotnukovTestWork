import {createSlice} from "@reduxjs/toolkit";

const name = "comment"

export const initialState = {
    comments : null,
    loading: false,
    error: null,
}

const commentSlice = createSlice({
    name,
    initialState,
    reducers: {
        commentRequest(state) {
            state.loading = true;
            state.error = null
        },
        commentSuccess(state, {payload: comments}) {
            state.loading = false;
            state.error = null;
            state.comments = comments;
        },
        commentFailure(state, action) {
            state.loading = false;
            state.error = action.payload
        }
    }
})

export default commentSlice