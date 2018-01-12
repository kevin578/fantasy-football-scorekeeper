import React, { Component } from 'react';
import './../App.css';
import Table from './Table';
import 'react-table/react-table.css';
import teamList from './../teamList'; 
import calculatePoints from './../calculatePoints'


class App extends Component {
  constructor() {
    super();
    this.state = teamList();
    this.getGames();
  }


  getGames() {
    const gameResults = this.state.games.map((e)=> {
      return fetch(`http://www.nfl.com/liveupdate/game-center/${e}/${e}_gtd.json`)
        .then((response) => {
          return response.json().then((data) => {
            return data
          })
        })
    })
    Promise.all(gameResults).then((results) => {
      this.setState(() => ({ games: results }))
      this.iterateThroughTeams();
    })
  }

  iterateThroughTeams() {
    this.state.teams.forEach((t,index) => {
      this.iterateThroughTeamWeeks(t, index)
      
    })
  }
  
  iterateThroughTeamWeeks(week, team){
    week.stats.forEach((p, index) => { 
      if (p.qb.name && p.rb.name && p.wr.name) {
        let stateCopy = { ...this.state };
        const qbPoints = calculatePoints(p.qb.name, p.qb.eid, this.state.games);
        const rbPoints = calculatePoints(p.rb.name, p.rb.eid, this.state.games);
        const wrPoints = calculatePoints(p.wr.name, p.wr.eid, this.state.games);
  
        stateCopy.teams[team].stats[index].qb.points = qbPoints;
        stateCopy.teams[team].stats[index].rb.points = rbPoints;
        stateCopy.teams[team].stats[index].wr.points = wrPoints;
        stateCopy.teams[team].stats[index].points = qbPoints + rbPoints + wrPoints;
        stateCopy.teams[team].points += stateCopy.teams[team].stats[index].points
        console.log(stateCopy)
        this.setState(stateCopy)
      }



 
  })
  }

  
  render() {
    return (
      <div className="App">
        <Table team={this.state}/> 
      </div>
    );
  }
}

export default App;
<Table team={this.state}/>  