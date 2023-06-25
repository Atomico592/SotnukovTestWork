import {createSlice} from "@reduxjs/toolkit";

const name = "todos"

export const initialState = {
    todos : null,
    loading: false,
    error: null,
}

const todosSlice = createSlice({
    name,
    initialState,
    reducers: {
        todosRequest(state) {
            state.loading = true;
            state.error = null
        },
        todosSuccess(state, {payload: todos}) {
            state.loading = false;
            state.error = null;
            state.todos = todos;
        },
        todosFailure(state, action) {
            state.loading = false;
            state.error = action.payload
        }
    }
})

export default todosSlice