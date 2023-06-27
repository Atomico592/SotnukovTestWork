import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import {
    AppBar,
    Box,
    createTheme,
    ThemeProvider,
    Toolbar,
    Typography
} from "@mui/material";
import {Link} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import "./AppToolBar.scss";


const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#1976d2'
        },
    },
});

const AppToolBar = () => {
    return (
        <Box sx={{ flexGrow: 1, paddingBottom: "25px" }}>
            <ThemeProvider theme={darkTheme}>
            <AppBar position="static">
                <Toolbar>
                    <ToastContainer />
                    <Typography component="div" sx={{ flexGrow: 1 }}>
                        <Link to="/posts" className="button" >Посты</Link>
                        <Link to="/albums" className="button">Фото</Link>
                        <Link to="/todos" className="button">Задачи</Link>
                    </Typography>
                </Toolbar>
            </AppBar>
            </ThemeProvider>
        </Box>
    );
};

export default AppToolBar;
