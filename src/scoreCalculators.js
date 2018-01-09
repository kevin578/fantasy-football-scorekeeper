const calculatePoints = (player, eid, games) => {
    const index = games.findIndex((element, index, array) => {
        return JSON.stringify(element).includes(eid)
    })
    let awayObject = {}
    let homeObject = {}
    if (eid) {
        const shortName = getShortName(player);
        let awayObject = games[index][eid].away.stats
        for (var key in awayObject.receiving) {
            console.log(awayObject.receiving[key].name)
        }
    }    

}

const getShortName = (name)=> {
    let fullName = name.split(" ");
    fullName[0] = fullName[0].slice(0, 1);
    fullName = fullName[0] + "." + fullName[1]


    console.log(fullName);
}

export default calculatePoints