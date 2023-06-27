import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {deletePostsRequest, postsRequest} from "../../store/actions/postsActions";
import PostsCard from "../../components/PostsCard/PostsCard";
import {usersRequest} from "../../store/actions/usersActions";
import Select from "../../components/Select/Select";
import Modal from "../../components/UI/Modal/Modal";
import {Button, FormGroup, Paper, SpeedDial, SpeedDialAction, SpeedDialIcon, Typography} from "@mui/material";
import {commentRequest} from "../../store/actions/commentActions";
import Comments from "../../components/UI/Comments/Comments";
import { useHistory, useLocation } from "react-router-dom";

import Dial from "../../components/UI/SpeedDial/Dial";




const Posts = () => {
    const history = useHistory()
    const match = useLocation();
    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts.posts)
    const users = useSelector(state => state.users.users)
    const comments = useSelector(state => state.comments.comments)
    const numberOfPosts = [100, 10, 20, 50]
    const [post, setPost] = useState(null)
    const [open, setOpen] = useState(false)
    const [openComments, setOpenComments] = useState({})
    const [checkedPosts, setCheckedPosts] = useState(new Set());
    const checked = new Set([])
    const checkedFavorite = new Set([])
    const [postsLimit, setPostsLimit]  = useState(numberOfPosts[0]);
    const [favorite, setFavorite] = useState(new Set());



    useEffect(() => {
        dispatch(usersRequest())
        setPostsLimit(+match.search.split('=')[1]);
        if (match.search) {
            dispatch(postsRequest(match.search))
            setPostsLimit(Number(+match.search.split("=")[1]))
        } else {
            dispatch(postsRequest())
        }
    }, [dispatch, match.search])


    const onDelete =  (id) => {
       dispatch(deletePostsRequest(id))
        setOpen(false)
        setPost(null)
    }


    const onEdit = (id) => {
        console.log(id)
    }


    const getComments = (id) => {
        dispatch(commentRequest(id))
        setOpenComments(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    }


    const getFavorite = (id) => {
        if (checkedFavorite.has(id)) {
            checkedFavorite.delete(id);
        } else {
            checkedFavorite.add(id);
        }
        setFavorite([...favorite, ...checkedFavorite]);
    }


    const addStack = (id) => {
        if (checked.has(id)) {
            checked.delete(id);
        } else {
            checked.add(id);
        }
        setCheckedPosts([...checkedPosts, ...checked]);
    }

    const deleteOrToFavorite = name => {
        if (name === "Delete") {
            for (let i = 0; i < checkedPosts.length; i++) {
                dispatch(deletePostsRequest(checkedPosts[i]))
            }
            }
        }


    const getLimitPosts = limit => {
            history.push(`/posts?_limit=${limit}`)
    };

    console.log(favorite)
    return posts && (

        <div>
            {checkedPosts.size !== 0 ?
            (<div>
                <Dial
                    deleteOrToFavorite={deleteOrToFavorite}
                />
            </div>)
                : null}


        <Paper style={{margin: "25px"}}>
        <div>Количество постов на странице : <Select  defaultValue={postsLimit} handleChange={e => getLimitPosts(e.target.value)} items={numberOfPosts} /></div>
        </Paper>
            <FormGroup>
                {posts.map(post => {
                    let user = users?.find(user => user.id === post.userId)
                    return (
                        <div key={post.id}>
                            <PostsCard
                                key={post.id}
                                onDelete={() => { setOpen(true); setPost(post.id); }}
                                onEdit={() => onEdit(post.id)}
                                getComments={() => getComments(post.id)}
                                getFavorite={() => getFavorite(post.id)}
                                addStack={() => addStack(post.id)}
                                title={post.title}
                                body={post.body}
                                user={user?.name}
                            />
                            {openComments[post.id] && comments?.map(comment => {
                                if (comment.postId === post.id) {
                                    return (
                                        <Comments
                                            key={comment.id}
                                            user={comment.name}
                                            email={comment.email}
                                            text={comment.body}
                                        />
                                    );
                                }
                                return null;
                            })}
                        </div>
                    )
                })}
            </FormGroup>



            <Modal isOpen={open} setOpen={setOpen}>
                <Typography>Удалить пост?</Typography>
                <Button onClick={() => onDelete(post)}>Да</Button>
                <Button onClick={() => setOpen(false)}>Нет</Button>
            </Modal>
        </div>
    );
};

export default Posts;