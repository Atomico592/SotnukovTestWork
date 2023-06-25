import React from 'react';
import AppToolBar from "../AppToolBar/AppToolBar";
import {Container} from "@mui/material";

const Layout = ({children}) => {
    return (
        <>
            {/*<AppToolBar/>*/}
            <Container maxWidth="1200px">
                {children}
            </Container>
        </>
    );
};

export default Layout;