import React, { Component } from 'react';
import { AppConsumer } from '../AppContext';
import axios from 'axios';



class Home extends Component {

  ufc() {
   axios.get('http://ufc-data-api.ufc.com/api/v1/us/fighters')
  .then(function (response) {
    var fighters = response.data;
    return(fighters);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
  }

  

  render() {
    
    return (
      <AppConsumer>
        {context => (
          <div className="container">
            <div className="fighter">
              <h1>Fighter1</h1> vs <h1>Fighter2</h1>
            </div>
            <div className="ordinary">
              <button onClick={this.ufc}>Test</button>
            </div>
          </div>
        )}
      </AppConsumer>
    );
  }
}

export default Home;
