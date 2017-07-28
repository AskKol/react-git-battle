import React from 'react';
import PropTypes from 'prop-types';

let styles = {
    content: {
        textAlign: 'center',
        fontSize: '35px'
    }
};

class Loading extends React.Component
{
    constructor(props) {
        super(props);

        this.state = {
            text: this.props.text
        };

        //this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount(){
        let stoppper = this.props.text + '...';
        this.interval = window.setInterval(() => {
            if (this.state.text === stoppper) {
                this.setState(() => {
                    return ({
                        text: this.props.text
                    });
                });
            } else {
                this.setState((prevState) => {
                    return ({
                        text: prevState.text + '.'
                    });
                });
            }
        },this.props.speed)
    }

    componentWillUnmount() {
         window.clearInterval(this.interval);
    }

    render() {
        return (

            <p style={styles.content}>
                {this.state.text}
            </p>
            );
    }
}


Loading.defaultProps= {
    text: 'Loading',
    speed:  300

}

Loading.propTypes= {
    text: PropTypes.string.isRequired,
    speed:PropTypes.number.isRequired

}
export default Loading;