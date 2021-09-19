import React from 'react';
import axios from 'axios';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      locationResult: {},
      searchQuery: '',
      showLocInfo: false
    }
  }

  getLocFun = async (e) => {
    e.preventDefault();
    console.log('inside getLocFun')

    // let cityName = e.target.city.value;
    await this.setState({
      searchQuery: e.target.city.value
    })

    console.log('key',process.env.REACT_APP_LOCATIONIQ_KEY);
    
    let reqUrl = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.searchQuery}&format=json`;

    let locResult = await axios.get(reqUrl);
    // console.log('aaaaaaaaaaa', locResult);
    // console.log('bbbbbbbb', locResult.data);
    // console.log('cccccccc', locResult.data[0]);`


    this.setState({
      locationResult: locResult.data[0],
      showLocInfo: true
    })


  }


  render() {
    return (
      <div>
        <h3>City Explorer app</h3>
        {/* <button onClick={this.getLocFun}>Get Location</button> */}
        <form onSubmit={this.getLocFun} >
          <input type="text" name='city' />
          <input type="submit" value='get city info'/>
        </form>
       

        {this.state.showLocInfo &&
          <>
            <h4>City name: {this.state.searchQuery}</h4>
            <h4>latitude: {this.state.locationResult.lat}</h4>
            <h4>longitude: {this.state.locationResult.lon} </h4 >

            <img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.state.locationResult.lat},${this.state.locationResult.lon}&zoom=10`} alt="city" />

          </>
        }

           

      </div>
    )
  }
}

export default App;
