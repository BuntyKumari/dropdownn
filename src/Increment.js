import React, { Component } from 'react'

export default class Increment extends Component {
constructor(){
    super();
        this.state = {
            number : 1,
            msg:"Message"
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
}

increment(){
    this.setState ({
        number: this.state.number + 1
    })
    if(this.state.number>=10){
        this.setState({
            msg:"Stop"
        })
    }
}
decrement(){
    this.setState ({
        number:this.state.number -1
    })
    if(this.state.number<=0){
        this.setState({
            msg:"Below 10"
        })
    }
}


    render() {
        return (
            <React.Fragment>   
                 <p style={{fontSize:40,marginTop:20,textAlign:"center"}}>{this.state.number}</p>
                 <p style={{fontSize:20,textAlign:"center"}}>{this.state.msg}</p>

            <div style={{display: "flex",justifyContent: "space-around"}}>               
                <button type="button" onClick={this.increment}>+</button>
                <button type="button" onClick={this.decrement}>-</button>
            </div>
            </React.Fragment>

        )
    }
}
