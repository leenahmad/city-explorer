import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card'

class Movies extends Component{
    render(){
        return(
                <div>
                    <Card style = {{"textAlign" : "center"}}> 
                       <h3>Movie</h3>
                    <Card.Body>
                   <h4> title : {this.props.title} </h4>
                   <h4> overview : {this.props.overview} </h4>
                   <h4> vote_average : {this.props.vote_average}</h4>
                   <h4> vote_count : {this.props.vote_count}</h4>
                   <h4> poster_path : {this.props.poster_path}</h4>
                   <h4> popularity : {this.props.popularity}</h4>
                   <h4> release_date : {this.props.release_date}</h4>
                    </Card.Body>



                   </Card>



                </div>
               
        )
    }
}



export default Movies;
