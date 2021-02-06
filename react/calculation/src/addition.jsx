import React from 'react';

class Addition extends React.Component{

    constructor(props){
            super(props);
            this.state={
                num1: Math.floor(Math.random()*10),
                num2: Math.floor(Math.random()*10),
                sum : 0
            }
    }
        
    calculator = (event) => {
        event.preventDefault();
        alert("You are submitting " + {sum:event.target.value});
        console.log(this.setState({sum:event.target.value}));
        if((this.state.num1 + this.state.num2) === this.setState({sum:event.target.value})) {
            console.log("sum");
            return <h1>Well Done!</h1>;
        }
        else{
            return <h1>Oops! Try another one.</h1>;
        }
        
    } 
    
    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        if (nam === "sum") {
            if (!Number(val)) {
              alert("Your sum must be a number");
            }else if((this.state.num1 + this.state.num2) === this.setState({sum:event.target.value})) {
                console.log("sum");
                return <h1>Well Done!</h1>;
            }
            else{
                return <h1>Oops! Try another one.</h1>;
            }
          }
        this.setState({[nam]: val});
    }

    render() {
        return(
            <form>
                <h1 className="title">Maths - Addition</h1>
                <h3 className="instruct">Add the following numbers and press 'Calculate' button to check your answer.</h3>
                <input type="text" name="num1" value={this.state.num1} className="num" readOnly/> <span className="plus-equal">+</span> 
                <input type="text" name="num2" value={this.state.num2} className="num" readOnly/> <span className="plus-equal">=</span> 
                <input type="text" onChange={this.myChangeHandler} name="sum" className="sum"/>
                <br/>
                <br/>
                <button onClick={this.calculator} type="submit" name="sum">Calculate</button>
                <button name="next">Next</button>
                
            </form>
        );
    }
}

export default Addition;