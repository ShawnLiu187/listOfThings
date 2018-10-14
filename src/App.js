import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import ListContainer from './components/ListContainer';

class App extends Component {
  render() {
    return (
        <Fragment>
          <Header />
          <ListContainer />
        </Fragment>
    );
  }
}

export default App;
