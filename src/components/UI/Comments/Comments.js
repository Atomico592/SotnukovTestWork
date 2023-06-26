import React from 'react';
import {CardContent, Paper, Typography} from "@mui/material";

const Comments = ({user, email, text}) => {
    return (
        <Paper>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {user}
                </Typography>
                <Typography variant="h5" component="div">
                    {email}
                </Typography>
                <Typography variant="body2">
                    {text}
                </Typography>
            </CardContent>
        </Paper>
    );
};

export default Comments;