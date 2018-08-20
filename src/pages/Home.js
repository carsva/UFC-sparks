import React, { Component } from 'react';
import { AppConsumer } from '../AppContext';

class Home extends Component {
  render() {
    return (
      <AppConsumer>
        {context => (
          <div className="container">
            <div className="fighter">
              <h1>Fighter1</h1> vs <h1>Fighter2</h1>
            </div>
            <div className="ordinary">
              <button onClick={context.test}>Test</button>
            </div>
          </div>
        )}
      </AppConsumer>
    );
  }
}

export default Home;
