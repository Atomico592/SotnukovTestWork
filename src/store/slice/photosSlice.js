import {createSlice} from "@reduxjs/toolkit";

const name = "photos"

export const initialState = {
    photos : null,
    loading: false,
    error: null,
}

const photosSlice = createSlice({
    name,
    initialState,
    reducers: {
        photosRequest(state) {
            state.loading = true;
            state.error = null
        },
        photosSuccess(state, {payload: photos}) {
            state.loading = false;
            state.error = null;
            state.photos = photos;
        },
        photosFailure(state, action) {
            state.loading = false;
            state.error = action.payload
        }
    }
})

export default photosSlice