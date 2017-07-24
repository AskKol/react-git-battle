import React from 'react';
import PropTypes from 'prop-types';

function PlayerInput(props) {
    return (
        <div></div>
        )
}

PlayerInput.propTypes= {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired
}

class Battle extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            playerOneName: '',
            playerTwoName: '',
            playerOneImage: null,
            playerTwoImage:null
        }
    }
    handleSubmit (id, username){
        this.setState(()=>
        {
            var newState = {};
            newState[id + 'Name'] = username;
            newState[id + 'Image'] = 'https://github.com/' + username + '.png?size=200';
            return newState;
        })
    }
    

    render() {
        var playerOneName = this.state.playerOneName;
        var playerTwoName = this.state.playerTwoName;

        return (
            <div>
                <div className='row'>
                    {!playerOneName && <PlayerInput
                        id='playerOne'
                        label='Player One'
                        onSubmit={()=> this.handleSubmit('playerOne',playerOneName)}
                    />}

                    {!playertwoName && <PlayerInput
                    id='playerTwo'
                        label='Player Two'
                        onSubmit={()=> this.handleSubmit('playerTwo',playerTwoName)}/>}}
                </div>
        </div>
        )
    }

}
export default Battle;