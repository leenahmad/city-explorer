import React from "react";
import axios from "axios";
import Result from './components/Result';
import Movie from './components/Movie';
// import Button from "react-bootstrap/Button";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locationResult: {},
      searchQuery: "",
      weatherResult: [],
      showLocInfo: false,
      movies:[]
     
    };
  }

  gitWeather = async(city) =>{
    let weatherURL = `${process.env.WEATHER_API_KEY}/weather?searchQuert=${city}`
    let weatherResult = await axios.get(weatherURL)
    console.log(weatherResult.data)
    this.setState({
      weatherResult : weatherResult.data
    })
  }

  gitMovies = async (city) =>{
    let movieURL = `${process.env.MOVIE_API_KEY}/movie?searchQuert2=${city}`
    let movieResult = await axios.get(movieURL)
    console.log(movieResult.data)
    this.setState({movieResult : movieResult.data})
    // try{
    //   const movie = await axios.get(`${process.env.MOVIE_API_KEY}/movie`,{params : {searchQuery : city}});
    //   this.setState({
    //     movies :  movie.data
    //   })
    //  }
    // catch(ERROR){
    //   this.setState({
    //     ERROR: true
    //   })
    // }
  }

  getLocFun = async (e) => {
    e.preventDefault();
    console.log("inside getLocFun");

    // let cityName = e.target.city.value;
    await this.setState({
      searchQuery: e.target.city.value,
    });

    console.log("key", process.env.REACT_APP_LOCATIONIQ_KEY);

    let reqUrl = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.searchQuery}&format=json`;

    let locResult = await axios.get(reqUrl);
    // console.log('aaaaaaaaaaa', locResult);
    // console.log('bbbbbbbb', locResult.data);
    // console.log('cccccccc', locResult.data[0]);`

    this.setState({
      locationResult: locResult.data[0],
      showLocInfo: true,
    });

    this.gitWeather(this.state.searchQuery)
  };




  render() {
    return (
      <div>
        <h3>City Explorer app</h3>
        {/* <button onClick={this.getLocFun}>Get Location</button> */}
        <form onSubmit={this.getLocFun} {...this.gitWeather} 
        {...this.gitMovies}>
          <input type="text" name="city" />
          <input type="submit" value="get city info" />
        </form>

        {this.state.showLocInfo && (
          <>
            <h4>City name: {this.state.searchQuery}</h4>
            <h4>latitude: {this.state.locationResult.lat}</h4>
            <h4>longitude: {this.state.locationResult.lon} </h4>
            
           
              {this.state.weatherResult.map ( (data,i) =>{
                return(
                  // eslint-disable-next-line no-sequences
                  <Result key = {i} weather = {data} 
                  />
                )
              })}
            
            {this.state.movies.map((movie, i) => {
              return(
                <Movie key = {i} movie={movie}/>
              )
            })}
            
            <img
              src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.state.locationResult.lat},${this.state.locationResult.lon}&zoom=10`}
              alt="city"
            />
            
          </>
        )}
      </div>
    );
  }
}

export default App;
