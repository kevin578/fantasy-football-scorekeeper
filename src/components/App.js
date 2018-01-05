import React, { Component } from 'react';
import './../App.css';
import Table from './Table';
import 'react-table/react-table.css';
import teamList from './../teamList'; 

class App extends Component {
  constructor() {
    super();
    this.state = teamList();
    this.getStats();
  }

  getStats() {
    this.state.teams.forEach((p) => {
      fetch('http://api.fantasy.nfl.com/v1/players/stats?statType=weekStats')
        .then((response) => {
          response.json().then((data) => {
            this.distributeStats(data.players)
          })
        })

    })
  }
  
  distributeStats(apiStats) {
    this.state.teams.forEach((player) => {
      const qbIndex = apiStats.findIndex((p) => {
        return p.name === player.qb.name
      })
      var stateCopy = Object.assign({}, this.state);
      stateCopy.teams = stateCopy.teams.slice();
      stateCopy.teams[0] = Object.assign({}, stateCopy.teams[0]);
      stateCopy.teams[0].qb.stats = apiStats[qbIndex].stats;
      this.setState(stateCopy)
    });
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
