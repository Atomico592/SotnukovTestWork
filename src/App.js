import React from 'react';
import {Switch, Route} from "react-router-dom";
import Layout from "./components/UI/Layout/Layout";
import Register from "./containers/Register/Register";
import Login from "./containers/Login/Login";
import EventsWrapper from "./containers/EventsWrapper/EventsWrapper";

const App = () => {
    return (
        <Layout>
            <Switch>
                <Route path="/posts" exact component={EventsWrapper}/>
                <Route path="/albums" component={Register}/>
                <Route path="/todos" component={Login}/>
            </Switch>
        </Layout>
    );
};

export default App;