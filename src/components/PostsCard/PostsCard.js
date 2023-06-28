import React, {useState} from 'react';
import {Button, Card, CardActions, CardContent, Checkbox, Typography} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EditIcon from '@mui/icons-material/Edit';
import CommentIcon from '@mui/icons-material/Comment';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';


const PostsCard = ({title, body, user, onDelete, onEdit, getComments, getFavorite, addStack}) => {
    const [checked, setChecked] = useState(false);
    const [favoriteClicked, setFavoriteClicked] = useState(false);
    const [commentClicked, setCommentClicked] = useState(false)
    return (
        <div style={{marginBottom: "25px"}}>
            <Card sx={{ minWidth: 275, bgcolor: checked ? "#AFEEEE" : "white"  }} >
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {user}
                    </Typography>
                    <Typography variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2">
                        {body}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small"
                            onClick={() => {
                                getFavorite();
                                setFavoriteClicked(!favoriteClicked);
                            }}
                            color={favoriteClicked ? "error" : "primary"}>{<FavoriteIcon/>}</Button>
                    <Button size="small"
                            onClick={() => {
                                getComments();
                                setCommentClicked(!commentClicked);
                            }}
                            color={commentClicked ? "success" : "primary"} >{<CommentIcon/>}</Button>
                    <Button size="small" onClick={onEdit} >{<EditIcon/>}</Button>
                    <Button size="small" onClick={onDelete} color="secondary" >{<DeleteIcon/>}</Button>
                        <Checkbox
                            onClick={addStack}
                            onChange={() => setChecked(!checked)}
                            checked={checked}
                            icon={<BookmarkBorderIcon/>}
                            checkedIcon={<BookmarkIcon/>}
                        />
                </CardActions>
            </Card>
        </div>
    );
};

export default PostsCard;