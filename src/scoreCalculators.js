export const calculateQBpoints = (stats) => {
    //passing yards - 5
    //passing tds -6
    //rushing tds - 15
    //rushing yards - 14
    //fumble - 31
    //interception - 46
    let qbScore = parseInt(stats.qb.stats[5], 10) || 0; 
    qbScore += parseInt(stats.qb.stats[6], 10) * 60 || 0
    qbScore += parseInt(stats.qb.stats[15], 10) * 60 || 0
    qbScore += parseInt(stats.qb.stats[14], 10) * 2 || 0
    qbScore += parseInt(stats.qb.stats[31], 10) * -45 || 0
    qbScore += parseInt(stats.qb.stats[46], 10) * -45 || 0
   
    return qbScore
}

export const calculateRBpoints = (stats) => {
    //receiving tds - 22
    //rushing tds - 15
    //receiving yards - 21
    //rushing yards - 14
    //fumble - 31
    //return touchdowns - 28
    //recptions - 

    let rbScore = parseInt(stats.rb.stats[14], 10) * 2|| 0; //rushing yards
    rbScore += parseInt(stats.rb.stats[21], 10) * 2 || 0 //receiving yards
    rbScore += parseInt(stats.rb.stats[20], 10) * 2 || 0 //receptions
    rbScore += parseInt(stats.rb.stats[22], 10) * 60 || 0 //receiving touchdowns
    rbScore += parseInt(stats.rb.stats[15], 10) * 60 || 0 //rushing touchdowns
    rbScore += parseInt(stats.rb.stats[28], 10) * 60 || 0 //return touchdowns
    rbScore += parseInt(stats.rb.stats[31], 10) * -45 || 0 //fumbles

    return rbScore
}


export const calculateWRpoints = (stats) => {
    //receiving tds - 22
    //rushing tds - 15
    //receiving yards - 21
    //rushing yards - 14
    //fumble - 31
    //return touchdowns - 28
    //recptions - 

    let wrScore = parseInt(stats.wr.stats[14], 10) * 2|| 0; //rushing yards
    wrScore += parseInt(stats.wr.stats[21], 10) * 2 || 0 //receiving yards
    wrScore += parseInt(stats.wr.stats[20], 10) * 2 || 0 //receptions
    wrScore += parseInt(stats.wr.stats[22], 10) * 60 || 0 //receiving touchdowns
    wrScore += parseInt(stats.wr.stats[15], 10) * 60 || 0 //rushing touchdowns
    wrScore += parseInt(stats.wr.stats[28], 10) * 60 || 0 //return touchdowns
    wrScore += parseInt(stats.wr.stats[31], 10) * -45 || 0 //fumbles

    return wrScore
}