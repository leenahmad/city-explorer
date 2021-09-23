import React, { Component } from 'react';
import Movie from './movie';

class Movies extends Component{
    render(){
        return(
                <div>
                  <Movie
                       
                    
                   title = {this.props.movie.title} 
                   overview = {this.props.movie.overview}
                   vote_average = {this.props.movie.vote_average}
                   vote_count = {this.props.movie.vote_count}
                    poster_path = {this.props.movie.poster_path}
                   popularity = {this.props.movie.popularity}
                   release_date = {this.props.movie.release_date}
                

                   />

               


                </div>
               
        )
    }
}



export default Movies;
