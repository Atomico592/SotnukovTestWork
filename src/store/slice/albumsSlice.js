import {createSlice} from "@reduxjs/toolkit";

const name = "albums"

export const initialState = {
    albums : null,
    loading: false,
    error: null,
}

const albumsSlice = createSlice({
    name,
    initialState,
    reducers: {
        albumsRequest(state) {
            state.loading = true;
            state.error = null
        },
        albumsSuccess(state, {payload: albums}) {
            state.loading = false;
            state.error = null;
            state.albums = albums;
        },
        albumsFailure(state, action) {
            state.loading = false;
            state.error = action.payload
        }
    }
})

export default albumsSlice