
import React, { Component } from 'react';

class Result extends Component{
    render(){
        return(
                <div>
                      <p>Date : {this.props.weather.date} </p>
                      <p>description :{this.props.weather.description} </p>
                </div>
        )
    }
}


export default Result;

