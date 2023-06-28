import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {deletePostsRequest, editPostsRequest, postsRequest} from "../../store/actions/postsActions";
import PostsCard from "../../components/PostsCard/PostsCard";
import {editUsersRequest, usersRequest} from "../../store/actions/usersActions";
import Select from "../../components/Select/Select";
import Modal from "../../components/UI/Modal/Modal";
import {Button, FormGroup, Paper, Typography} from "@mui/material";
import {commentRequest} from "../../store/actions/commentActions";
import Comments from "../../components/UI/Comments/Comments";
import { useHistory, useLocation } from "react-router-dom";
import Dial from "../../components/UI/SpeedDial/Dial";
import FormInput from "../../components/UI/Form/FormInput/FormInput";
import {inputChangeHandler} from "../../components/UI/Form/Handlers/Handlers";
import FormArea from "../../components/UI/Form/FormArea/FormArea";

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
    const [favorite, setFavorite] = useState(new Set());
    const [postsLimit, setPostsLimit]  = useState(numberOfPosts[0]);
    const [openEditModal, serOpenEditModal] = useState(false)
    const [editPost, setEditPost] = useState({title: "", body: ""})
    const [updateUser, setUpdateUser] = useState({name: ''})



    useEffect(() => {
        dispatch(usersRequest())
        if (match.search) {
            dispatch(postsRequest(match.search))
            setPostsLimit(Number(match.search.split("=")[1]))
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
        let updateThisPost = posts?.find(post => post.id === id);
        let user = users?.find(user => user.id === updateThisPost?.userId)
        setEditPost(prevState => ({
            ...prevState,
            userId: updateThisPost.userId ,
            id: updateThisPost.id,
            title: updateThisPost.title,
            body: updateThisPost.body
        }));
        setUpdateUser(prevState => ({
            ...prevState,
            id: user.id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            username: user.username,
            website: user.website,
            address: user.address,
            company: user.constructor
        }))
    };

    const submitForm = () => {
        dispatch(editPostsRequest(editPost))
        dispatch(editUsersRequest(updateUser))
    }


    const getComments = (id) => {
        dispatch(commentRequest(id))
        setOpenComments(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    }


    const getFavorite = (id) => {
        const checkedFavorite = new Set([favorite])
        if (checkedFavorite.has(id)) {
            checkedFavorite.delete(id);
        } else {
            checkedFavorite.add(id);
        }
        setFavorite(checkedFavorite)
    }


    const addStack = (id) => {
        const checked = new Set(checkedPosts);
        if (checked.has(id)) {
            checked.delete(id);
        } else {
            checked.add(id);
        }
        setCheckedPosts(checked);
    }

    const deleteOrToFavorite = name => {
        if (name === "Delete") {
            for (let i = 0; i < checkedPosts.size; i++) {
                dispatch(deletePostsRequest(Array.from(checkedPosts)[i]))
            }
        } else {
            for (let i = 0; i < checkedPosts.size; i++) {
                getFavorite(Array.from(checkedPosts)[i])
            }
        }
        }

    const getLimitPosts = limit => {
            history.push(`/posts?_limit=${limit}`)
    };

    return posts && (
        <div>
            {checkedPosts.size !== 0 ?
            (<div>
                <Dial
                    deleteOrToFavorite={deleteOrToFavorite}
                />
            </div>)
                : null}

                <div>
                    <Paper style={{marginBottom: "25px", width: "300px"}}>
                        Выберите количество постов на странице
                    </Paper>
                    <Paper style={{marginBottom: "25px", width: "200px"}}>
                        <Select  defaultValue={postsLimit} handleChange={e => getLimitPosts(e.target.value)} items={numberOfPosts} />
                    </Paper>
                </div>




            <FormGroup>
                {posts.map(post => {
                    let user = users?.find(user => user.id === post.userId)
                    return (
                        <div key={post.id}>
                            <PostsCard
                                key={post.id}
                                onDelete={() => { setOpen(true); setPost(post.id); }}
                                onEdit={() => {serOpenEditModal(true); onEdit(post.id)}}
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

            <Modal isOpen={openEditModal} setOpen={serOpenEditModal}>
                <form>
                    <div>
                        <Typography>
                            Имя
                        </Typography>
                        <FormInput
                            type="text"
                            name="name"
                            value={updateUser.name}
                            placeholder="Имя пользователя"
                            onChange={e => inputChangeHandler(e, setUpdateUser)}
                        />
                        <Typography>
                            Заголовок
                        </Typography>
                        <FormInput
                            type="text"
                            name="title"
                            value={editPost.title}
                            placeholder="Заголовок поста"
                            onChange={e => inputChangeHandler(e, setEditPost)}
                        />
                        <Typography>
                            Содержание
                        </Typography>
                        <FormArea
                            onChange={e => inputChangeHandler(e, setEditPost)}
                            name="body"
                            placeholder="Введите текст поста"
                            value={editPost.body}
                            cols={5}
                            rows={5}
                        />
                    </div>
                </form>
                <Button onClick={() => submitForm()}>Обновить пост</Button>
                <Button onClick={() => serOpenEditModal(false)}>Нет</Button>
            </Modal>


            <Modal isOpen={open} setOpen={setOpen}>
                <Typography>Удалить пост?</Typography>
                <Button onClick={() => onDelete(post)}>Да</Button>
                <Button onClick={() => setOpen(false)}>Нет</Button>
            </Modal>
        </div>
    );
};

export default Posts;