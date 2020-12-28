import React from 'react';

class RouletteGun extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            chamber: null,
            spinningTheChamber: false
        }
        
    }
    
    handleTriggerPull = () => {
        this.setState({
            spinningTheChamber: true
        })
        setTimeout(() => {
            let number = Math.ceil(Math.random() * 8)
            this.setState({
            chamber: number,
            spinningTheChamber: false
        })    
        }, 2000)

        
        //update state chamber: gen't number and spinning: false
        
    }

    render() {
        let play;
        if (this.state.spinningTheChamber) {
            play = 'spinning the chamber and pulling the trigger! ...'
        } else if ( this.state.chamber === this.props.bulletInChamber) {
            play =  'BANG!!!'
        } else {
            play = `you're safe!`
        }
        
        return(
            <div>
                <p>
                    {play}
                </p>
                <button
                 onClick={this.handleTriggerPull}>
                    Pull the trigger!
                </button>
            </div>
        )
    }
}

export default RouletteGun;