import React, { Component } from 'react';

class Counter extends Component {

    state = {
        value: this.props.value
    };

    handleIncrement = product => {
        this.setState({value: this.state.value + 1});
    };

    render() { 
        
        return (
            <div> 
                <span className= {this.getBadgeClasses()}>{this.formatCount()}</span> 
                <button onClick={() => this.handleIncrement(this.product)} className= "btn btn-secondary btn-sm">Increament</button>
            </div> 
            );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const {value} = this.state;
        return value === 0 ? "Zero" : value;
    }
}
 
export default Counter;