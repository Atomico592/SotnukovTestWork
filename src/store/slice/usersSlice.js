import {createSlice} from "@reduxjs/toolkit";

const name = "users"

export const initialState = {
    users : null,
    loading: false,
    error: null,
}

const usersSlice = createSlice({
    name,
    initialState,
    reducers: {
        usersRequest(state) {
            state.loading = true;
            state.error = null
        },
        usersSuccess(state, {payload: users}) {
            state.loading = false;
            state.error = null;
            state.users = users;
        },
        usersFailure(state, action) {
            state.loading = false;
            state.error = action.payload
        },
        editUsersRequest(state) {
            state.loading = true;
            state.error = null
        },
        editUsersSuccess(state, {payload: data}) {
            state.loading = false;
            state.error = null;
            let index = state.users.findIndex(user => user.id === data.id)
            state.user[index] = data
        },
        editUsersFailure(state, action) {
            state.loading = false;
            state.error = action.payload
        }


    }
})

export default usersSlice