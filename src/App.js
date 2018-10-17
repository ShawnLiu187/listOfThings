import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import ListContainer from './components/ListContainer';

class App extends Component {
  constructor(){
    super()
    this.state = {players: [
        {id: 1, name: "Guo Ailun", position: "Point Guard"},
        {id: 2, name: "Yi Jianlian", position: "Power Foward"},
        {id: 3, name: "Yao Ming", position: "Center"}
    ]}
}

deletePlayer = (playerId) => {
  let newPlayers = this.state.players.filter((item) => {
      if(playerId != item.id){
          return true;
      }
  });
  this.setState({players: newPlayers});
}

addPlayer = (newPlayer) => {
  let newPlayers = this.state.players;
  newPlayers.push(newPlayer);
  this.setState({players: newPlayers});
}


  render() {
    return (
        <Fragment>
          <Header />
          <ListContainer players={this.state.players} addPlayer={this.addPlayer} deletePlayer={this.deletePlayer}/>
        </Fragment>
    );
  }
}

export default App;
