import React from 'react';
var axios = require('axios');

export const AppContext = React.createContext('plant');

export class AppProvider extends React.Component {
  state = {
    test: 'test',
    firstFighter: {
      first_name: 'The first ',
      last_name: 'fighter',
    },
    secondFighter: {
      first_name: 'The second ',
      last_name: 'fighter',
    },
  };

  test = () => {
    // var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    //   targetUrl = 'http://ufc-data-api.ufc.com/api/v1/us/fighters';
    // fetch(proxyUrl + targetUrl)
    //   .then(blob => blob.json())
    //   .then(data => {
    //     console.log(data);
    //     document.querySelector('pre').innerHTML = JSON.stringify(data, null, 2);
    //     return data;
    //   })
    //   .catch(e => {
    //     console.log(e);
    //     return e;
    //   });

    axios.get('https://cors-anywhere.herokuapp.com/http://ufc-data-api.ufc.com/api/v1/us/fighters')
        .then( (response) => {
            var randomNumber = (Math.floor(Math.random() * response.data.length));
            var secondRandomNumber = (Math.floor(Math.random() * response.data.length));
            var fighters = response.data;
            var firstFighter = fighters[randomNumber]
            var secondFighter = fighters[secondRandomNumber]
            console.log(firstFighter)
            this.setState({
              firstFighter: firstFighter,
              secondFighter: secondFighter,
            });
        })
        .catch( (error) => {
            console.log(error);
        });
  };

  // ufc() {

  //   var fighters = axios.get('http://ufc-data-api.ufc.com/api/v1/us/fighters')

  //  .then(function (response) {
  //    var UFCfighters = response.data;

  //  })
  //  .catch(function (error) {
  //    // handle error
  //    console.log(error);
  //  })
  //  .then(function () {

  //  });
  //  }

  render() {
    const value = {
      test: this.test,
      ufc: this.ufc,
      state: {
        ...this.state,
      },
    };

    return (
      <AppContext.Provider value={value}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export const AppConsumer = AppContext.Consumer;
