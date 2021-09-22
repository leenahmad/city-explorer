import React, { Component } from 'react';
import  Card  from 'react-bootstrap/Card';

class Result extends Component{
    render(){
        return(
                <div>
                    <Card style = {{"textAlign" : "center"}} >
                        <Card.Body>
                      <p>Date : {this.props.weather.date} </p>
                      <p>description :{this.props.weather.description} </p>
                
                      </Card.Body>
                
                
                </Card>
                
                
                
                
                </div>
        )
    }
}


export default Result;

