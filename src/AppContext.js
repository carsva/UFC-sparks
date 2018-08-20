import React from 'react';
var axios = require('axios')

export const AppContext = React.createContext('plant');

export class AppProvider extends React.Component {
  state = {
    test: 'test',
    fighters: {},
    firstFighter: "",
    secondFighter: "",
    firstFighterImage: "",
    secondFighterImage: "",
  };

    test = () => {
      axios.get('http://ufc-data-api.ufc.com/api/v1/us/fighters')
          .then( (response) => {
              var randomNumber = (Math.floor(Math.random() * response.data.length));
              var secondRandomNumber = (Math.floor(Math.random() * response.data.length));
              var fighters = response.data;
              var firstFighter = fighters[randomNumber]
              var secondFighter = fighters[secondRandomNumber]
              console.log(firstFighter)
              this.setState({
                firstFighter: firstFighter.first_name + " " + firstFighter.last_name,
                secondFighter: secondFighter.first_name + " " + secondFighter.last_name,
                firstFighterImage: firstFighter.thumbnail,
                secondFighterImage: secondFighter.thumbnail
              });
          })
          .catch( (error) => {
              console.log(error);
          });
  }
  

  
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
