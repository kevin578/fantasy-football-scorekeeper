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
    this.state.teams.forEach((t) => {
      this.iterateThroughTeamWeeks(t)
    })
  }
  
  iterateThroughTeamWeeks(week){
    week.stats.forEach((p) => { 
      let points = 0;
      points += calculatePoints(p.qb.name, p.qb.eid, this.state.games); 
      points += calculatePoints(p.rb.name, p.rb.eid, this.state.games);
      points += calculatePoints(p.wr.name, p.wr.eid, this.state.games);
      if (points > 0 && !isNaN(points)) {
        console.log(`${week.name}: ${points}`)
      }  
  })
  }
  
  distributeStats(data) {
    console.log(data)
  }
  
  
  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
