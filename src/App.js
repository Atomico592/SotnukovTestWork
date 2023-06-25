import React, {useEffect} from 'react';
import {Switch, Route} from "react-router-dom";
import Layout from "./components/UI/Layout/Layout";

import ToDos from "./container/ToDoS/ToDos";
import Albums from "./container/Albums/Albums";
import Posts from "./container/Posts/Posts";

const App = () => {

    return (
        <Layout>
            <Switch>
                <Route path="/posts" exact component={Posts}/>
                <Route path="/albums" component={Albums}/>
                <Route path="/todos" component={ToDos}/>
            </Switch>
         </Layout>
    );
};

export default App;