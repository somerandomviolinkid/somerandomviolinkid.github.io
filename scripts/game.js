let money = 100000000000;
let resources = 1000000000000;
let refinedResources = 0;
let workers = 0;
let energy = 0;
let researchPoints = 0;
let planetsControlled = 1;
let solarPanels = 1;
let rocketFuel = 0;
//asteroid miners, fighters, battleships
let ships = [0, 0, 0];
let fleetPower = ships[1] + ships[2] * 120;

let asteroidMinerLevel = 0;
let asteroidMinerEfficiency = [10000, 25000, 75000, 200000];
let asteroidMinerEfficiencyMoneyCosts = [0, 15000000, 100000000, 400000000];
let asteroidMinerEfficiencyRefinedResourceCosts = [0, 250000, 1000000, 5000000];

let asteroidMinerSpaceLevel = 0;
let asteroidMinerSpace = [25, 50, 100, 250, 1000];
let asteroidMinerSpaceMoneyCosts = [0];
let asteroidMinerSpaceResourceCosts = [0];

let earthIndustryMulitplier = 1;

let workerLevel = 1;
const workerEfficiency = [0, 1, 2, 4, 10, 25, 75, 200, 500, 1000];
const workerEfficiencyCosts = [0, 0, 100, 500, 2500, 10000, 50000, 200000, 1000000, 5000000];

let workerHousingLevel = 1;
const workerHousingSpace = [0, 10, 15, 24, 36, 50, 75, 110, 150, 200, 360];
const workerHousingMoneyCosts = [0, 0, 20, 50, 125, 500, 2000, 10000, 40000, 100000, 250000];
const workerHousingResourceCosts = [0, 0, 50, 120, 250, 600, 2500, 15000, 100000, 300000, 1000000];

let researchCenterLevel = 1;
const researchCenterEfficiency = [0, 1, 5, 20, 75];
const researchCenterEfficiencyCosts = [0, 0, 10000, 50000, 200000];

let manualResourceLevel = 1;
const manualResourceEfficiency = [0, 1, 5, 20, 75, 200, 500, 2500, 10000];
const manualResourceEfficiencyCosts = [0, 0, 5, 100, 800, 5000, 25000, 200000, 1000000];

let factoryLevel = 1;
const factoryEfficiency = [0, 1, 5, 15, 40, 100];
const factoryEfficiencyMoneyCosts = [0, 0, 40000, 75000, 500000, 2500000];
const factoryEfficiencyResourceCosts = [0, 0, 100000, 400000, 2500000, 12000000];
let factoryToggle = false;

let solarPanelsUnlocked = false;
let solarPanelLevel = 1;
const solarPanelEfficiency = [0, 5, 12, 25, 75, 200, 500];
const solarPanelEfficiencyMoneyCosts = [0, 0, 75000, 180000, 800000, 2000000, 10000000];
const solarPanelEfficiencyRefinedResourceCosts = [0, 0, 500, 1200, 5000, 20000, 75000];
let solarPanelSpaceLevel = 1;
const solarPanelSpace = [0, 1, 2, 3, 5, 8, 12, 18, 25];
const solarPanelSpaceCosts = [0, 0, 12000, 40000, 150000, 800000, 2500000, 12000000, 50000000];

let spaceshipBuilt = false;
let spaceshipLaunched = false;

let resourceSellRate = 0.1;
let resourceSellUpgrades = [false, false, false, false];

let fuelRefineryLevel = 1;
const fuelRefineryEfficiency = [0, 2, 5, 12, 25];
const fuelRefineryEfficiencyMoneyCosts = [0, 0, 500000, 1800000, 5000000];
const fuelRefineryEfficiencyRefinedResourcesCost = [0, 0, 1000, 7500, 25000, 100000];
let refineryToggle = false;

let telescopeLevel = 1;
const telescopeEfficiency = [0, 100, 250, 750, 2000];
const telescopeEfficiencyMoneyCosts = [0, 0, 300000, 1200000, 5000000];
const telescopeEfficiencyRefinedResoucresCost = [0, 0, 1200, 5000, 25000];

//planets colonized
let planetsColonized = [false, false, false, false, false];

let industryUpgradesBought = [false, false];

//research center, factory, solarpanel, telescope, refinery, spaceport, orbital telescope, space station, shipyard, asteroid mining complex, dyson sphere
let buildingsBuilt = [false, false, false, false, false, false, false, false, false, false, false];
let buildingsUnlocked = [true, false, false, false, false, false, false, false, false, false, false];

document.getElementById("warning").style.visibility = "hidden";

function clearWarning() {
    document.getElementById("warning").style.visibility = "hidden";
}

function notEnoughStuff(resource) {
    //get more money dipshit
    document.getElementById("warning").style.visibility = "visible";
    document.getElementById("warning").innerHTML = "Not enough " + resource + "!";
    setTimeout(clearWarning, 2000);
}

function tick1() {
    money = roundNumber(money, 2);

    //updates numbers on page
    document.getElementById("moneyCount").innerHTML = "Money: " + formatNumber(money);
    document.getElementById("workerCount").innerHTML = "Workers: " + formatNumber(workers) + " / " + formatNumber(planetsControlled * workerHousingSpace[workerHousingLevel]);
    document.getElementById("resourceCount").innerHTML = "Resources: " + formatNumber(resources);
    document.getElementById("refinedResourceCount").innerHTML = "Refined resources: " + formatNumber(refinedResources);
    document.getElementById("energyCount").innerHTML = "Energy: " + formatNumber(energy);
    document.getElementById("researchPointCount").innerHTML = "Research points: " + formatNumber(researchPoints);
    document.getElementById("solarPanelCount").innerHTML = "Solar panels: " + formatNumber(solarPanels) + " / " + formatNumber(planetsControlled * solarPanelSpace[solarPanelSpaceLevel]);
    document.getElementById("rocketFuelCount").innerHTML = "Rocket fuel: " + formatNumber(rocketFuel);
    document.getElementById("planetsControlledCount").innerHTML = "Planets controlled: " + formatNumber(planetsControlled);
}

function updateShipyardNumbers() {
    //updates buttons and numbers on shipyard tab
    document.getElementById("asteroidMinerCount").innerHTML = "Asteroid miners: " + ships[0] + " / " + asteroidMinerSpace[asteroidMinerSpaceLevel];
    document.getElementById("fighterCount").innerHTML = "Fighters: " + ships[1];
    document.getElementById("battleshipCount").innerHTML = "Battleships: " + ships[2];
}

tick1();
updateShipyardNumbers();

function tick2() {
    //updates resource amounts every second
    resources += workers * workerEfficiency[workerLevel];
    resources += ships[0] * asteroidMinerEfficiency[asteroidMinerLevel];

    if (buildingsBuilt[0] === true) {
        researchPoints += researchCenterEfficiency[researchCenterLevel];
    }

    if (buildingsBuilt[2] === true) {
        energy += solarPanels * solarPanelEfficiency[solarPanelLevel];
    }

    if (buildingsBuilt[3] === true) {
        researchPoints += telescopeEfficiency[telescopeLevel];
    }

    if (buildingsBuilt[6] === true) {
        researchPoints += 15000;
    }

    if (factoryToggle && resources >= 2 * factoryEfficiency[factoryLevel]) {
        //refined resource toggle
        resources -= 2 * earthIndustryMulitplier * factoryEfficiency[factoryLevel];
        refinedResources += earthIndustryMulitplier * factoryEfficiency[factoryLevel];
    }

    if (refineryToggle && energy >= 5 * fuelRefineryEfficiency[fuelRefineryLevel] && resources >= 3 * fuelRefineryEfficiency[fuelRefineryLevel]) {
        //rocket fuel toggle
        energy -= 5 * earthIndustryMulitplier * fuelRefineryEfficiency[fuelRefineryLevel];
        resources -= 3 * earthIndustryMulitplier * fuelRefineryEfficiency[fuelRefineryLevel];
        rocketFuel += earthIndustryMulitplier * fuelRefineryEfficiency[fuelRefineryLevel];
    }
    tick1();
}

setInterval(tick2, 1000);

function manualResources() {
    //gives resources on click
    resources += manualResourceEfficiency[manualResourceLevel] * planetsControlled;
    tick1();
}

function upgradeManualResources() {
    //upgrades resource click
    if (money >= manualResourceEfficiencyCosts[manualResourceLevel + 1]) {
        manualResourceLevel++;
        money -= manualResourceEfficiencyCosts[manualResourceLevel];
        document.getElementById("upgradeResourceClickButton").innerHTML =
            "Your resource click level is " +
            manualResourceLevel +
            " and you get " +
            manualResourceEfficiency[manualResourceLevel] +
            " resources per click.<br>Next upgrade will give " +
            manualResourceEfficiency[manualResourceLevel + 1] +
            " resources per click.<br>Upgrade resource click cost " +
            manualResourceEfficiencyCosts[manualResourceLevel + 1] +
            " money.";
        tick1();
    } else {
        notEnoughStuff("money");
    }

    if (manualResourceLevel === 7) {
        //hides button at max level
        document.getElementById("upgradeResourceClickButton").style.display = "none";
    }

    tick1();
}

if (manualResourceLevel === 7) {
    //hides button at max level
    document.getElementById("upgradeResourceClickButton").style.display = "none";
}

function sellResources(percent) {
    //sells part of resources
    money += resources * (percent / 100) * resourceSellRate;
    let roundedMoney = money.toFixed(2);
    money = Number(roundedMoney);

    resources -= resources * (percent / 100);
    let roundedResources = resources.toFixed(1);
    resources = Number(roundedResources);
    tick1();
}

function purchaseWorkers(amount) {
    //puchases workers from buttons
    if (money < 10 * amount) {
        notEnoughStuff("money");
    }

    if (workers + amount > planetsControlled * workerHousingSpace[workerHousingLevel]) {
        notEnoughStuff("space");
    }

    if (money >= 10 * amount && workers + amount <= planetsControlled * workerHousingSpace[workerHousingLevel]) {
        money -= amount * 10;
        let roundedMoney = money.toFixed(2);
        money = Number(roundedMoney);

        workers += amount;
        tick1();
    }
}

function purchaseMaxWorkers() {
    if (money < 10) {
        notEnoughStuff("money");
    }

    if (workers === planetsControlled * workerHousingSpace[workerHousingLevel]) {
        notEnoughStuff("space");
    }

    //buys max workers
    while (money >= 10 && workers < planetsControlled * workerHousingSpace[workerHousingLevel]) {
        money -= 10;
        let roundedMoney = money.toFixed(2);
        money = Number(roundedMoney);

        workers++;
    }

    tick1();
}

function upgradeWorkers() {
    //upgrades workers
    if (money >= workerEfficiencyCosts[workerLevel + 1]) {
        money -= workerEfficiencyCosts[workerLevel + 1];
        workerLevel++;
        updateButtons();
    } else {
        notEnoughStuff("money");
    }

    //hides button once workers are at maximum level
    if (workerLevel === 7) {
        document.getElementById("upgradeWorkerButton").style.display = "none";
    }
}

function upgradeWorkerHousing() {
    if (money < workerHousingMoneyCosts[workerHousingLevel + 1]) {
        notEnoughStuff("money");
    }
    if (resources < workerHousingResourceCosts[workerHousingLevel + 1]) {
        notEnoughStuff("resources");
    }
    if (money >= workerHousingMoneyCosts[workerHousingLevel + 1] && resources >= workerHousingResourceCosts[workerHousingLevel + 1]) {
        money -= workerHousingMoneyCosts[workerHousingLevel + 1];
        resources -= workerHousingResourceCosts[workerHousingLevel + 1];
        workerHousingLevel++;

        updateButtons();
    }
    //upgrades worker housing
    if (workerHousingLevel === 8) {
        document.getElementById("upgradeWorkerHousingButton").style.display = "none";
    }
}

function upgradeResearchCenter() {
    //upgrades research center
    if (money < researchCenterEfficiencyCosts[researchCenterLevel + 1]) {
        notEnoughStuff("money");
    } else {
        money -= researchCenterEfficiencyCosts[researchCenterLevel + 1];
        researchCenterLevel++;
        updateButtons();
    }

    //hides button once research center is maxxed
    if (researchCenterLevel === 4) {
        document.getElementById("upgradeResearchCenterButton").style.display = "none";
    }
}

function upgradeFactory() {
    //upgrades solar panels
    if (money < factoryEfficiencyMoneyCosts[factoryLevel + 1]) {
        notEnoughStuff("money");
    }
    if (resources < factoryEfficiencyResourceCosts[factoryLevel + 1]) {
        notEnoughStuff("resources");
    }
    if (money >= factoryEfficiencyMoneyCosts[factoryLevel + 1] && resources >= factoryEfficiencyResourceCosts[factoryLevel + 1]) {
        money -= factoryEfficiencyMoneyCosts[factoryLevel + 1];
        resources -= factoryEfficiencyResourceCosts[factoryLevel + 1];

        factoryLevel++;
        updateButtons();

        tick1();
    }

    if (factoryLevel === 5) {
        document.getElementById("upgradeFactoryButton").style.display = "none";
    }
}

function buildSolarPanel() {
    if (money < 20000) {
        notEnoughStuff("money");
    } else if (refinedResources < 100) {
        notEnoughStuff("refined resources");
    } else if (solarPanels === solarPanelSpace[solarPanelSpaceLevel] * planetsControlled) {
        notEnoughStuff("space");
    } else {
        money -= 20000;
        refinedResources -= 100;
        solarPanels++;

        tick1();
    }
}

function upgradeSolarPanels() {
    //upgrades solar panels
    if (money < solarPanelEfficiencyMoneyCosts[solarPanelLevel + 1]) {
        notEnoughStuff("money");
    } else if (refinedResources < solarPanelEfficiencyRefinedResourceCosts[solarPanelLevel + 1]) {
        notEnoughStuff("refined resources");
    } else {
        money -= solarPanelEfficiencyMoneyCosts[solarPanelLevel + 1];
        refinedResources -= solarPanelEfficiencyRefinedResourceCosts[solarPanelLevel + 1];
        solarPanelLevel++;

        updateButtons();

        tick1();
    }

    if (solarPanelLevel === 5) {
        document.getElementById("upgradeSolarPanelButton").style.display = "none";
    }
}

function upgradeSolarPanelSpace() {
    //upgrades solar panel space
    if (resources < solarPanelSpaceCosts[solarPanelSpaceLevel + 1]) {
        notEnoughStuff("resources");
    } else {
        resources -= solarPanelSpaceCosts[solarPanelSpaceLevel + 1];
        solarPanelSpaceLevel++;
        updateButtons();
        tick1();
    }

    if (solarPanelSpaceLevel === 8) {
        document.getElementById("upgradeSolarPanelSpaceButton").style.display = "none";
    }
}

function upgradeTelescope() {
    //upgrades telescope
    if (money < telescopeEfficiencyMoneyCosts[telescopeLevel + 1]) {
        notEnoughStuff("money");
    } else if (refinedResources < telescopeEfficiencyRefinedResoucresCost[telescopeLevel + 1]) {
        notEnoughStuff("refined resources");
    } else {
        money -= telescopeEfficiencyMoneyCosts[telescopeLevel + 1];
        refinedResources -= telescopeEfficiencyRefinedResoucresCost[telescopeLevel + 1];
        telescopeLevel++;

        updateButtons();
        tick1();
    }

    if (telescopeLevel === 4) {
        document.getElementById("upgradeTelescopeButton").style.display = "none";
    }
}

function upgradeFuelRefinery() {
    //upgrades refinery
    if (money < fuelRefineryEfficiencyMoneyCosts[fuelRefineryLevel + 1]) {
        notEnoughStuff("money");
    } else if (refinedResources < fuelRefineryEfficiencyRefinedResourcesCost[fuelRefineryLevel + 1]) {
        notEnoughStuff("refined resources");
    } else {
        money -= fuelRefineryEfficiencyMoneyCosts[fuelRefineryLevel + 1];
        refinedResources -= fuelRefineryEfficiencyRefinedResourcesCost[fuelRefineryLevel + 1];
        fuelRefineryLevel++;

        updateButtons();
        tick1();
    }

    if (fuelRefineryLevel === 4) {
        document.getElementById("upgradeRefineryButton").style.display = "none";
    }
}

function toggleFactory() {
    if (factoryToggle === false) {
        factoryToggle = true;
        document.getElementById("toggleFactoryButton").innerHTML = "Factory power: On<br>Uses 2 resources to make 1 refined resource.";
    } else {
        factoryToggle = false;
        document.getElementById("toggleFactoryButton").innerHTML = "Factory power: Off<br>Uses 2 resources to make 1 refined resource.";
    }
}

document.getElementById("toggleFactoryButton").innerHTML = "Factory power: Off<br>Uses 2 resources to make 1 refined resource.";

function toggleRefinery() {
    //toggles refinery

    if (refineryToggle === false) {
        refineryToggle = true;
        document.getElementById("toggleRefineryButton").innerHTML = "Refinery power: On<br>Uses 5 resources and 3 energy to make 2 rocket fuel.";
    } else {
        refineryToggle = false;
        document.getElementById("toggleRefineryButton").innerHTML = "Refinery power: Off<br>Uses 5 resources and 3 energy to make 2 rocket fuel.";
    }
}

document.getElementById("toggleRefineryButton").innerHTML = "Refinery power: Off<br>Uses 5 resources and 3 energy to make 2 rocket fuel.";

function constructSpaceship() {
    //construct spaceship
    if (money < 10000000) {
        notEnoughStuff("money");
    }
    if (refinedResources < 20000) {
        notEnoughStuff("refined resources");
    }
    if (money >= 10000000 && refinedResources >= 20000) {
        spaceshipBuilt = true;
        money -= 10000000;
        refinedResources -= 20000;
        document.getElementById("launchSpaceshipButton").style.display = "inline";
        document.getElementById("constructSpaceshipButton").style.display = "none";
    }
}

function launchSpaceship() {
    if (rocketFuel < 500) {
        notEnoughStuff("fuel");
    } else {
        rocketFuel -= 500;
        spaceshipLaunched = true;

        //launches spaceship that wins the beginning
        alert("Congrats! You beat the beginning. there's still stuff lol but be wary of nonfunctional elements and bugs beyond this point - jerry the inflatable elephant");

        document.getElementById("systemOverviewTab").style.display = "inline";
        document.getElementById("launchSpaceshipButton").style.display = "none";

        document.getElementById("industryUpgrade1Button").style.display = "inline";
    }
}

function colonizePlanet(cost, buttonID, planetNumber) {
    //colonizes planets

    if (rocketFuel < cost) {
        notEnoughStuff("fuel");
    } else {
        rocketFuel -= cost;
        document.getElementById(buttonID).style.display = "none";
        planetsControlled++;
        planetsColonized[planetNumber] = true;

        tick1();
    }
}

function raiseResourcePrices(cost, raiseAmount, buttonID, nextButtonID, upgradeNumber) {
    //raises sell rate of resources
    if (researchPoints < cost) {
        notEnoughStuff("research");
    } else {
        researchPoints -= cost;
        resourceSellRate += raiseAmount;
        document.getElementById(buttonID).style.display = "none";

        if (nextButtonID != "raiseResourcePrices5Button") {
            document.getElementById(nextButtonID).style.display = "inline";
        }

        resourceSellUpgrades[upgradeNumber] = true;
        tick1;
    }
}

function buildBuilding(cost1, cost2, cost3, cost4, buildingNumber, buttonID, unlock1, unlock2, unlock3, unlock4, unlock5, unlock6) {
    //builds buildings
    if (money < cost1) {
        notEnoughStuff("money");
    }
    if (resources < cost2) {
        notEnoughStuff("resources");
    }
    if (refinedResources < cost3) {
        notEnoughStuff("refined resources");
    }
    if (rocketFuel < cost4) {
        notEnoughStuff("fuel");
    }
    if (money >= cost1 && resources >= cost2 && refinedResources >= cost3 && rocketFuel >= cost4) {
        money -= cost1;
        resources -= cost2;
        refinedResources -= cost3;
        rocketFuel -= cost4;
        tick1();

        document.getElementById(buttonID).style.display = "none";
        document.getElementById(unlock1).style.display = "inline";
        if (unlock2 !== undefined) {
            document.getElementById(unlock2).style.display = "inline";
        }

        if (unlock3 !== undefined) {
            document.getElementById(unlock3).style.display = "inline";
        }
        if (unlock4 !== undefined) {
            document.getElementById(unlock4).style.display = "inline";
        }
        if (unlock5 !== undefined) {
            document.getElementById(unlock5).style.display = "inline";
        }

        if (unlock6 !== undefined) {
            document.getElementById(unlock6).style.display = "block";
        }
        updateButtons();

        buildingsBuilt[buildingNumber] = true;
    }
}

function unlockBuilding(cost, buildingNumber, buttonID, unlock) {
    if (researchPoints < cost) {
        notEnoughStuff("research");
    } else {
        researchPoints -= cost;
        buildingsUnlocked[buildingNumber] = true;

        document.getElementById(unlock).style.display = "inline";

        document.getElementById(buttonID).style.display = "none";

        tick1();
    }
}

function upgradeEarthIndustry(buttonID, cost1, cost2, multiplier, upgradeNumber, unlock) {
    //multiplies output of factory and refinery
    if (money < cost1) {
        notEnoughStuff("money");
    }
    if (researchPoints < cost2) {
        notEnoughStuff("research");
    }
    if (money >= cost1 && researchPoints >= cost2) {
        money -= cost1;
        researchPoints -= cost2;
        earthIndustryMulitplier *= multiplier;
        tick1();

        industryUpgradesBought[upgradeNumber] = true;

        document.getElementById(buttonID).style.display = "none";
        if (unlock !== undefined) {
            document.getElementById(unlock).style.display = "inline";
        }
    }
}

function researchRecycling() {
    //need less resources to make refined resources
}

function researchChemicalRefinement() {
    //need less resources to make fuel
}

function buildShip(cost1, cost2, cost3, shipNumber) {
    //builds spaceships
    if (money < cost1) {
        notEnoughStuff("money");
    } else if (refinedResources < cost2) {
        notEnoughStuff("refined resources");
    } else if (solarPanels < cost3) {
        notEnoughStuff("solar panels");
    } else {
        money -= cost1;
        refinedResources -= cost2;
        solarPanels -= cost3;
        tick1();
        updateShipyardNumbers();
        ships[shipNumber]++;
    }
}

function upgradeAsteroidMiners() {}

function upgradeAsteroidMinersSpace() {}

function upgradeFighters() {}

function upgradeBattleships() {}
