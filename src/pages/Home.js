import React, { Component } from 'react';
import { AppConsumer } from '../AppContext';

class Home extends Component {
  render() {
    return (
      <AppConsumer>
        {context => (
          <div className="container">
            <div>
              <div className="fighter">
                <img src={context.state.firstFighterImage} />
                <h1>{context.state.firstFighter}</h1>
              </div>
              <h1>vs</h1>
              <div className="fighter">
                <img src={context.state.secondFighterImage} />
                <h1>{context.state.secondFighter}</h1>
              </div>
            </div>
            <div className="ordinary">
              <button onClick={context.test}>Test</button>
            </div>
            <div className="state space">
              <h3>Data that lives in the context</h3>
              <pre>{JSON.stringify(context, null, 4)}</pre>
            </div>
          </div>
        )}
      </AppConsumer>
    );
  }
}

export default Home;
