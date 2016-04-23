import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import {App} from "./components/app";
import {homePageContainer} from "./components/home/home-page.container";

ReactDOM.render(
    <Router history={hashHistory}>
        <Route  path="/" component={App} >
            <IndexRoute component={homePageContainer}/>
        </Route>
    </Router>
    ,
    document.getElementById("root")
);
