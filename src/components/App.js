import React, { Component } from 'react';
import './../App.css';
import Table from './Table';
import 'react-table/react-table.css';
import teamList from './../teamList'; 

class App extends Component {
  constructor() {
    super();
    this.state = teamList();
    this.getStats('Tom Brady');
  }

  getStats(p) {
    fetch('http://api.fantasy.nfl.com/v1/players/stats?statType=weekStats')
      .then((response) => {
        response.json().then((data) => {
          const index = data.players.findIndex((player) => {
            return player.name === p
          })
          this.setState(() => {
            return {
              teams[0].qb.stats: data.players[index].stats
            }
          })

        })
      })
    }  
  
  
  render() {
    return (
      <div className="App">
        <Table teams={this.state.teams} />
      </div>
    );
  }
}

export default App;
