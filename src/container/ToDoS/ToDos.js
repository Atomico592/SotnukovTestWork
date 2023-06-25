import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {todosRequest} from "../../store/actions/todosActions";

const ToDos = () => {
    const dispatch = useDispatch()
    const todos = useSelector(state => state.todos.todos)
    console.log(todos)
    useEffect(() => {
    dispatch(todosRequest())

    }, [])
    return (
        <div>
    todos
        </div>
    );
};

export default ToDos;