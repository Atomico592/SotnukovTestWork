import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {deletePostsRequest, postsRequest} from "../../store/actions/postsActions";
import PostsCard from "../../components/PostsCard/PostsCard";
import {usersRequest} from "../../store/actions/usersActions";
import Select from "../../components/Select/Select";
import {nanoid} from "nanoid";

const Posts = () => {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts.posts)
    const users = useSelector(state => state.users.users)
    const numberOfPosts = [10, 20, 50, posts?.length]
    useEffect(() => {
        dispatch(postsRequest())
        dispatch(usersRequest())
    }, [dispatch])

    const onDelete = (id) => {
        dispatch(deletePostsRequest(id))
    }

    const onEdit = (id) => {
        console.log(id)
    }
    const getComments = (id) => {
        console.log(id)
    }
    const getFavorite = (id) => {
        console.log(id)
    }
    const addStack = (id) => {
        console.log(id)
    }

    return posts && (
        <div>
            <div>Количество постов на странице : <Select items={numberOfPosts}/></div>
            {posts.map(post => {
                let user = users?.find(user => user.id === post.userId)
                return (
                        <PostsCard
                            onDelete={() => onDelete(post.id)}
                            onEdit={() => onEdit(post.id)}
                            getComments={() => getComments(post.id)}
                            getFavorite={() => getFavorite(post.id)}
                            addStack={() => addStack(post.id)}
                            key={nanoid()}
                            title={post.title}
                            body={post.body}
                            user={user?.name}
                        />
                )
            })}
        </div>
    );
};

export default Posts;