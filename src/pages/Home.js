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
                <img src={context.state.firstFighter.thumbnail} />
                <h1>
                  {context.state.firstFighter.first_name +
                    ' ' +
                    context.state.firstFighter.last_name}
                </h1>
                <p>{context.state.firstFighter.weight_class}</p>
              </div>
              <h1>vs</h1>
              <div className="fighter">
                <img src={context.state.secondFighter.thumbnail} />
                <h1>
                  {context.state.secondFighter.first_name +
                    ' ' +
                    context.state.secondFighter.last_name}
                </h1>
                <p>{context.state.secondFighter.weight_class}</p>
              </div>
            </div>
            <div className="ordinary">
              <button onClick={context.test}>Next fight</button>
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
