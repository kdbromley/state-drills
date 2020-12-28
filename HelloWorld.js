import React from 'react';

class HelloWorld extends React.Component {
    state =  { who: 'world' }

    handleButtonClick = (e) => {
        this.setState({
            who: e.target.value
        })
    }
    render() {
        return(
            <div>
                <p>Hello, {this.state.who}</p>
                <button 
                 value='friend'
                 onClick={this.handleButtonClick} >
                 Friend
                </button>
                <button 
                 value='world'
                 onClick={this.handleButtonClick} >
                 World
                </button>
                <button 
                 value='react'
                 onClick={this.handleButtonClick} >
                 React
                </button>
            </div>
        )
    }
}

export default HelloWorld;