const calculatePoints = (player, eid, games) => {
    const index = games.findIndex((element, index, array) => {
        
        return JSON.stringify(element).includes(eid)
    })

    if (eid && index != -1) {
        const shortName = getShortName(player);
        let awayObject = games[index][eid].away.stats
        let homeObject = games[index][eid].home.stats
        const homePoints = getPoints(homeObject, shortName);
        const awayPoints = getPoints(awayObject, shortName);
        return homePoints + awayPoints;
    } 
    else {
        return 0;
    }

}

const getPoints = (game, player)=> {
    let points = 0;
    
    for (var key in game.passing) {
        if (game.passing[key].name === player) {
            points += game.passing[key].yds;
            points += game.passing[key].tds * 60;
            points += game.passing[key].ints * -45;
        }
    }

    for (key in game.rushing) {
        if (game.rushing[key].name === player) {
            points += game.rushing[key].yds * 2;
            points += game.rushing[key].tds * 60;  
        }
    }
    
    for (key in game.receiving) {
        if (game.receiving[key].name === player) {
            points += game.receiving[key].rec * 2;
            points += game.receiving[key].yds * 2;
            points += game.receiving[key].tds * 60;
        }
    }

    for (key in game.kickret) {
        if (game.kickret[key].name === player) {
            points += game.kickret[key].tds * 60
        }
    }

    for (key in game.puntret) {
        if (game.puntret[key].name === player) {
            points += game.puntret[key].tds * 60
        }
    }

    for (key in game.fumbles) {
        if (game.fumbles[key].name === player) {
           points += game.fumbles[key].tot * -45
        }
    }
    if (points > 0 && !isNaN(points)) {
        return points;
    } 
    else {
        return 0;
    }

}

const getShortName = (name) => {
    if (name == "Julio Jones") return "Ju.Jones";

    let fullName = name.split(" ");
    fullName[0] = fullName[0].slice(0, 1);
    fullName = fullName[0] + "." + fullName[1]
    return fullName;
}

export default calculatePoints