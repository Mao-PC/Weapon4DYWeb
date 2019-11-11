import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';
import Login from './hcc/Login';

class App extends Component {
    render() {
        return <Login />;
        //     return (
        //         <Router>
        //     <Link to='/'>root</Link> <br />
        //     <Link to='/hello'>hello</Link> <br />
        //     <Link to='/todolist'>todolist</Link>
        //     <div>
        //       <Route path='/'  exact render={() => {
        //         return <div>root page</div>
        //       }} />
        //       <Route path='/hello' render={() => {
        //         return <div>hello world</div>
        //       }} />
        //       <Route path='/todolist' component={TodoList} />
        //     </div>
        //   </Router>
        //     )
    }
}

export default App;
