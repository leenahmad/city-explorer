import React, { Component } from 'react';

class Result extends Component{
    render(){
        return(
                <div>
                      <p>Date : {this.props.leen.data} </p>
                      <p>description :{this.props.leen.description} </p>
                </div>
        )
    }
}

export default Result;