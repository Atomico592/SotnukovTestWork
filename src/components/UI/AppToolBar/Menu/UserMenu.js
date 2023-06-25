import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {logoutUser} from "../../../../store/actions/usersActions";
import {Avatar} from "@mui/material";
import defaultAvatar from "../../../../assets/avatar.png"

const UserMenu = ({user}) => {
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    let cardImage = defaultAvatar;
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    if (user.avatarImage) {
        if (user.avatarImage.match(/http/) || user.avatarImage.match(/https/)) {
        cardImage = user.avatarImage;
        } else {
            cardImage = 'http://localhost:8000/uploads/' + user.avatarImage;
        }

    }

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                style={{color: "inherit"}}
            >
                <Avatar alt={user.displayName} src={cardImage} style={{marginRight: "15px"}}/>
                Hello, {user.displayName}!
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {user.role === "user" ?
                    <div>
                    <MenuItem onClick={handleClose} component={Link} to="/track_history">Track history</MenuItem>
                    <MenuItem onClick={handleClose} component={Link} to="/add_artist">Add new artist</MenuItem>
                    <MenuItem onClick={handleClose} component={Link} to="/add_album">Add new album</MenuItem>
                    <MenuItem onClick={handleClose} component={Link} to="/add_track">Add new track</MenuItem>
                    </div>
                    : null
                    }
                {user.role === "admin" ?
                    <MenuItem onClick={handleClose} component={Link} to="/moderation_page">Moderation Page</MenuItem>
                : null
                }

                <MenuItem onClick={() => dispatch(logoutUser())}>Logout</MenuItem>
            </Menu>
        </div>
    );
};

export default UserMenu;