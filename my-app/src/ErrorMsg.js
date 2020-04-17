import React from 'react'

class ErrorMsg extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className = 'error'>
                <img src = {this.props.src} className = 'errorImg' alt = ""/>
                <h3>{this.props.msg}</h3>
            </div>
        );
    }
}

export default ErrorMsg;