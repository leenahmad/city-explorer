import React, { Component } from 'react';

class Result extends Component{
    render(){
        return(
                <div>
                   <h4> title : {this.props.movie.title} </h4>
                   <h4> overview : {this.props.movie.overview} </h4>
                   <h4> vote_average : {this.props.movie.vote_average}</h4>
                   <h4> vote_count : {this.props.movie.vote_count}</h4>
                   <h4> poster_path : {this.props.movie.poster_path}</h4>
                   <h4> popularity : {this.props.movie.popularity}</h4>
                   <h4> release_date : {this.props.movie.release_date}</h4>
                   
                </div>
        )
    }
}



export default Result;