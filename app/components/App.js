var React = require('react');//Es5
var Popular = require('./Popular'); //Es5

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends React.Component
{
    render()
    {
        return (
            <Router>
                <div className='container'>
                   <Route Path='/popular' component= {Popular} />
                </div>
            </Router>
        )
    }
}

module.exports = App;