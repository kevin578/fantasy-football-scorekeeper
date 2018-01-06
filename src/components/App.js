import React, { Component } from 'react';
import './../App.css';
import Table from './Table';
import 'react-table/react-table.css';
import teamList from './../teamList'; 
import { calculateQBpoints, calculateRBpoints, calculateWRpoints } from './../scoreCalculators'


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
    this.state.teams.forEach((player,index) => {
      
      const qbIndex = apiStats.findIndex((p) => {
        return p.name === player.qb.name
      })
      const rbIndex = apiStats.findIndex((p) => {
        return p.name === player.rb.name
      })
      const wrIndex = apiStats.findIndex((p) => {
        return p.name === player.wr.name
      })

      var stateCopy = Object.assign({}, this.state);
      stateCopy.teams = stateCopy.teams.slice();
      stateCopy.teams[index] = Object.assign({}, stateCopy.teams[index]);
      if (qbIndex !== -1) stateCopy.teams[index].qb.stats = apiStats[qbIndex].stats;
      if (rbIndex !== -1) stateCopy.teams[index].rb.stats = apiStats[rbIndex].stats;
      if (wrIndex !== -1) stateCopy.teams[index].wr.stats = apiStats[wrIndex].stats || {};
      stateCopy.teams[index].qb.points = calculateQBpoints(stateCopy.teams[index] || 0);
      stateCopy.teams[index].rb.points = calculateRBpoints(stateCopy.teams[index] || 0);
      stateCopy.teams[index].wr.points = calculateWRpoints(stateCopy.teams[index] || 0);
      stateCopy.teams[index].points = stateCopy.teams[index].qb.points + stateCopy.teams[index].rb.points + stateCopy.teams[index].wr.points
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
