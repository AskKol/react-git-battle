
var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = require('prop-types');
require('./index.css');
var App = require('./components/App');

//A component is concerned about 3 things
//state
//lifecycle events
// UI



class Badge extends React.Component
{
    render()
    {
        return (
            <div>
                <div><App /></div>
                <img
                    src={this.props.img}
                    alt='Avatar'
                    style={{ width: 100, height: 100 }} />
                <h1>Name: {this.props.name}</h1>
                <h3>Username: {this.props.username}</h3>
            </div>
        )
    }
}


Badge.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,

}




ReactDOM.render
    (


      <App />, document.getElementById('app')
    );