import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {deletePostsRequest, postsRequest} from "../../store/actions/postsActions";
import PostsCard from "../../components/PostsCard/PostsCard";
import {usersRequest} from "../../store/actions/usersActions";
import Select from "../../components/Select/Select";
import Modal from "../../components/UI/Modal/Modal";
import {Button, Paper, Typography} from "@mui/material";
import {commentRequest} from "../../store/actions/commentActions";
import Comments from "../../components/UI/Comments/Comments";


const Posts = () => {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts.posts)
    const users = useSelector(state => state.users.users)
    const deleteSuccess = useSelector(state => state.posts.deleteSuccess)
    const comments = useSelector(state => state.comments.comments)
    const numberOfPosts = [10, 20, 50, posts?.length]
    const [open, setOpen] = useState(false)
    const [openComments, setOpenComments] = useState(false)
    useEffect(() => {
        dispatch(postsRequest())
        dispatch(usersRequest())
    }, [dispatch])

    const onDelete =  (id) => {
        console.log(id)
       dispatch(deletePostsRequest(id))
        setOpen(false)
    }
    const onEdit = (id) => {
        console.log(id)
    }
    const getComments = (id) => {
        dispatch(commentRequest(id))
        setOpenComments(!openComments)
    }
    const getFavorite = (id) => {
        console.log(id)
    }
    const addStack = (id) => {
        console.log(id)
    }


    return posts && (
        <div>
        <Paper style={{margin: "25px"}}>
        <div>Количество постов на странице : <Select items={numberOfPosts} /></div>
        </Paper>

            {posts.map(post => {
                let user = users?.find(user => user.id === post.userId)
                return (
                    <div key={post.id}>
                        <PostsCard
                            onDelete={() =>  setOpen(true)}
                            onEdit={() => onEdit(post.id)}
                            getComments={() => getComments(post.id)}
                            getFavorite={() => getFavorite(post.id)}
                            addStack={() => addStack(post.id)}
                            title={post.title}
                            body={post.body}
                            user={user?.name}
                        />

                        <Modal isOpen={open} setOpen={setOpen}>
                            <Typography>Удалить пост?</Typography>
                            <Button onClick={() => onDelete(post.id)}>Да</Button>
                            <Button onClick={() => setOpen(false)}>Нет</Button>
                        </Modal>
                    </div>
                )
            })}



        </div>
    );
};

export default Posts;