import React from 'react'
import './Style.css';

   
class Counter extends React.Component {
   
    render() {
        return(
            <div>
                <center><b><h1><Button text = "Hello Guys, Have a great day"> </Button></h1></b></center>
            </div>
        )
    }
}
  
class Button extends React.Component{
    state = {
        textflag: false,
    }
       
    ToggleButton() {
        this.setState(
            {textflag : !this.state.textflag}
        );
    }
   
    render() {
        return(
            <div class='Block'>

            <div>
                <button onClick={() => this.ToggleButton()}>
                  { this.state.textflag === false ? "Day":"Night" }
                </button><br></br>
                {!this.state.textflag && this.props.text}
            </div>
            </div>
        )
    }
}
  
export default Counter;