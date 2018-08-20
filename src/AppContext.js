import React from 'react';

export const AppContext = React.createContext('plant');

export class AppProvider extends React.Component {
  state = {
    test: 'test'
  };

  test() {
    console.log('Test is called')
  }

  render() {
    const value = {
      test: this.test,
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
