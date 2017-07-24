var React = require('react');//Es5
import Popular from './Popular'; //Es5
import
{
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';

import Nav from './Nav';
import Home from './Home';
import Battle from './Battle';


class App extends React.Component
{
    render()
    {
        return (
            <Router>
                <div className='container'>

                    <Nav />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/battle' component={Battle} />
                        <Route path='/popular' component={Popular} />
                        <Route render={function ()
                        {
                            return(<h3>Not found!</h3>)
                        }
                        }/>

                    </Switch>

                </div>
            </Router>
                )
    }
}

module.exports = App;