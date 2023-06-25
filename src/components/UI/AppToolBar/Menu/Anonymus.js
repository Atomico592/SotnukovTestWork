import React from 'react';
import {Typography} from "@mui/material";
import {Link} from "react-router-dom";

const Anonymus = () => {
    return (
        <>
            <Typography component="div" sx={{ flexGrow: 0 }}>
                <Link to="/registration" className="button" style={{marginRight: "15px"}}>Registration</Link>
                <Link to="/login" className="button">Login</Link>
            </Typography>
        </>
    );
};

export default Anonymus;