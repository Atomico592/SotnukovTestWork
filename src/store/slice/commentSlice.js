import {createSlice} from "@reduxjs/toolkit";

const name = "comment"

export const initialState = {
    comment : null,
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
        commentSuccess(state, {payload: comment}) {
            state.loading = false;
            state.error = null;
            state.comment = comment;
        },
        commentFailure(state, action) {
            state.loading = false;
            state.error = action.payload
        }
    }
})

export default commentSlice