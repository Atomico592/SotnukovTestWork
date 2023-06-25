import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import {AppBar, Box, createTheme, ThemeProvider, Toolbar, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import {useSelector} from "react-redux";
import Anonymus from "./Menu/Anonymus";
import UserMenu from "./Menu/UserMenu";
import "./AppToolBar.css";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#1976d2',
        },
    },
});

const AppToolBar = () => {
    const user = useSelector(state => state.users.user);
    return (
        <Box sx={{ flexGrow: 1, paddingBottom: "25px" }}>
            <ThemeProvider theme={darkTheme}>
            <AppBar position="static">
                <Toolbar>
                    <ToastContainer />
                    <Typography component="div" sx={{ flexGrow: 1 }}>
                        <Link to="/" className="button">Home</Link>
                    </Typography>
                    {user ? <UserMenu user={user}/> : <Anonymus/>}
                </Toolbar>
            </AppBar>
            </ThemeProvider>
        </Box>
    );
};

export default AppToolBar;