import React, { Component } from 'react';
import "./Relogio.css";

class Relogio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataHora: new Date(),
            dataHora2: new Date()
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.atualizarRelogio(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    atualizarRelogio() {
        this.setState({
            dataHora: new Date(),
            dataHora2: new Date()
        });
    }

    render() {
        const { dataHora } = this.state;
        const { dataHora2 } = this.state;
        return (
            <div>
                <p id='none'>{dataHora.toLocaleTimeString()}</p>
                <p id='block'>{dataHora2.toLocaleTimeString()}</p>
            </div>
        );
    }
}

export default Relogio;