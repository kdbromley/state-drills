import React from 'react';

class Bomb extends React.Component {
    state = { count: 0 }

    componentDidMount() {
       this.interval = setInterval(() => {
           this.setState({
               count: this.state.count + 1
           })
       }, 1500)
    }

    render() {
        let tickTock;
        if (this.state.count >= 8) {
            tickTock = 'boom'
            clearInterval(this.interval)
        } else if (this.state.count % 2 === 0) {
           tickTock = 'tick'
        } else {
            tickTock = 'tock'
        }
        return (
            <div>
                <p>{tickTock}
                </p>
            </div>
        )
    }
}

export default Bomb;