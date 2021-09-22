import React from "react";
import axios from "axios";
import Result from "./components/Result";
import Movie from "./components/Movie";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Card } from "react-bootstrap";
import Image from 'react-bootstrap/Image'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locationResult: {},
      weatherResult: [],
      movieResult: [],
      searchQuery: "",
      showLocInfo: false,
    };
  }

  getLocFun = async (e) => {
    e.preventDefault();
    console.log("inside getLocFun");

     await this.setState({
      searchQuery: e.target.city.value,
    })

    console.log("LEEN");

    let reqUrl = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.searchQuery}&format=json`;

    let locResult = await axios.get(reqUrl);
    console.log("aaaaaaaaaaa", locResult);
    console.log("bbbbbbbb", locResult.data);
    console.log("cccccccc", locResult.data[0]);

    this.setState({
      locationResult: locResult.data[0],

      showLocInfo: true,
    });

    this.gitWeather(this.state.searchQuery);
    this.gitMovies(this.state.searchQuery);
  };

  gitWeather = async (city) => {
    console.log("inside weather");
    let weatherURL = `${process.env.REACT_APP_LOCATIONIQ_SERVER}/Weather?city=${city}`;
    let weatherResult = await axios.get(weatherURL);
    console.log(weatherResult.data);
    this.setState({
      weatherResult: weatherResult.data,
    });
  };

  gitMovies = async (city) => {
    let movieURL = `${process.env.REACT_APP_LOCATIONIQ_SERVER}/Movies?city=${city}`;
    console.log(movieURL);
    let movieResult = await axios.get(movieURL);
    console.log(movieResult.data);
    this.setState({
      movieResult: movieResult.data,
    });
  };

  render() {
    return (
      <div>
        <Navbar bg="secondary" variant="pink" style = {{"textAlign" :"center"}}> 
          <Container>
           <Navbar.Brand> <h1>City Explorer app</h1></Navbar.Brand>
          </Container>
        </Navbar>
        {/* <button onClick={this.getLocFun}>Get Location</button> */}

        <Form onSubmit={this.getLocFun}>
          <Form.Control type="text" label="city name" />
          <Form.Control type="submit" value="get city info" />
        </Form>

        {this.state.showLocInfo && (
          <>
            <Card>
              <Card.Body style={{ teextAlign: "center" }}>
                <h4>City name: {this.state.searchQuery}</h4>
                <h4>latitude: {this.state.locationResult.lat}</h4>
                <h4>longitude: {this.state.locationResult.lon} </h4>
              </Card.Body>
              {/* 
            {this.state.weatherResult.map((data, i) => {
              return (
                // eslint-disable-next-line no-sequences
                <Result key={i} weather={data} />
              );
            })}

            {this.state.movieResult.map((movie, i) => {
              return (
              <Movie key={i} movie={movie} />
              );
            })} */}

              <Image src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.state.locationResult.lat},${this.state.locationResult.lon}&zoom=10`} alt="city"/>
            </Card>
          </>
        )}

        {this.state.weatherResult.map((data, i) => {
          return (
            // eslint-disable-next-line no-sequences
            <Result key={i} weather={data} />
          );
        })}

        {this.state.movieResult.map((movie, i) => {
          return <Movie key={i} movie={movie} />;
        })}
      </div>
    );
  }
}

export default App;
