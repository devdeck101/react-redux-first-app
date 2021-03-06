import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import Home from './container/Home'
import Releases from './container/Releases';
import Sprints from './container/Sprints';
import Backlog from './container/Backlog';
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

ReactDOM.render(
    <Router history={hashHistory}>
        <Route exact path="/" component={App} >
            <IndexRoute component={Home} />
            <Route path="/releases" component={Releases}/>
            <Route path="/backlog" component={Backlog} />
            <Route path="/sprints" component={Sprints} />
        </Route>
    </Router>
    , document.getElementById('root'));
registerServiceWorker();
