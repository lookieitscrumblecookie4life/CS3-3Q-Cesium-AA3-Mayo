function monstersCalc() {
    let initialPopulation = prompt('Enter the initial population: ');
    let rateGrowth = prompt('Enter the rate of growth: ');
    let timeHours = prompt('Enter the time in hours: ');

    let s = parseFloat(initialPopulation) * Math.pow(Math.E, (parseFloat(rateGrowth) * parseFloat(timeHours)));
    let finalPopulation = Math.round(s);

    let monsterLocation = prompt('Enter the location of the monster: ');
    let monsterName = prompt('Enter the name of the monster: ');

    let monsterInfos = monsterLocation.concat(' ', monsterName).toUpperCase;

    document.getElementById('monstersCalc').innerHTML = 'After ' + timeHours + ' hours, the population of ' + monsterInfos + ' has increased to ' + finalPopulation + '!';
}

