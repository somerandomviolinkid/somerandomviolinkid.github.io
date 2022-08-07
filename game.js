let money = 0;
let resources = 0;
let refinedResources = 0;
let workers = 0;
let energy = 0;
let researchPoints = 0;
let planetsControlled = 1;
let solarPanels = 0;
let rocketFuel = 0;

let asteroidMiners = 0;
let asteroidMinerSpaceLevel = 0;
let asteroidMinerLevel = 0;

let workerLevel = 0;
const workerEfficiency = [1, 2, 4, 10, 25, 75, 200, 500, 1000]
const workerEfficiencyCosts = [0, 100, 500, 2500, 10000, 50000, 200000, 1000000, 5000000]

let workerHousingLevel = 0;
const workerHousingSpace = [10, 15, 24, 36, 50, 75, 110, 150, 200, 360]
const workerHousingMoneyCosts = [0, 20, 50, 125, 500, 2000, 10000, 40000, 100000, 250000]
const workerHousingResourceCosts = [0, 50, 120, 250, 600, 2500, 15000, 100000, 300000, 1000000]

let researchCenterUnlocked = false;
let researchCenterLevel = 0;
const researchCenterEfficiency = [0, 1, 5, 20, 75]
const researchCenterEfficiencyCosts = [0, 0, 10000, 50000, 200000]

let manualResourceLevel = 0;
const manualResourceEfficiency = [1, 5, 20, 75, 200, 500, 2500, 10000]
const manualResourceEfficiencyCosts = [0, 5, 100, 800, 5000, 25000, 200000, 1000000]

let factoryUnlocked = false;
let factoryLevel = 0;
const factoryEfficiency = [0, 1, 5, 15, 40, 100];
const factoryEfficiencyMoneyCosts = [0, 0, 40000, 75000, 500000, 2500000]
const factoryEfficiencyResourceCosts = [0, 0, 100000, 400000, 2500000, 12000000]
let factoryToggle = false;

let spaceportUnlocked = false;
let spaceportBuilt = false;

let solarPanelsUnlocked = false;
let solarPanelLevel = 0;
const solarPanelEfficiency = [0, 5, 12, 25, 75, 200, 500]
const solarPanelEfficiencyMoneyCosts = [0, 0, 75000, 180000, 800000, 2000000, 10000000]
const solarPanelEfficiencyRefinedResourceCosts = [0, 0, 500, 1200, 5000, 20000, 75000]
let solarPanelSpaceLevel = 0;
const solarPanelSpace = [1, 2, 3, 5, 8, 12, 18, 25]
const solarPanelSpaceCosts = [0, 12000, 40000, 150000, 800000, 2500000, 12000000, 50000000]

let spaceshipBuilt = false;
let spaceshipLaunched = false;

let resourceSellRate = 0.1;
let resourceSellUpgrades = [false, false, false, false]

let fuelRefineryUnlocked = false;
let fuelRefineryBuilt = false;
let fuelRefineryLevel = 0;
const fuelRefineryEfficiency = [0, 2, 5, 12, 25]
const fuelRefineryEfficiencyMoneyCosts = [0, 0, 500000, 1800000, 5000000]
const fuelRefineryEfficiencyRefinedResourcesCost = [0, 0, 1000, 7500, 25000, 100000]
let refineryToggle = false;

let telescopeUnlocked = false;
let telescopeBuilt = false;
let telescopeLevel = 0;
const telescopeEfficiency = [0, 100, 250, 750, 2000]
const telescopeEfficiencyMoneyCosts = [0, 0, 300000, 1200000, 5000000]
const telescopeEfficiencyRefinedResoucresCost = [0, 0, 1200, 5000, 25000]

let planetsColonized = [false, false, false, false, false]

function saveData() {

    //saves stuff
    window.localStorage.setItem("saveKey", JSON.stringify({
        money,
        resources,
        refinedResources,
        workers,
        energy,
        researchPoints,
        planetsControlled,
        solarPanels,
        workerLevel,
        workerHousingLevel,
        researchCenterUnlocked,
        researchCenterLevel,
        manualResourceLevel,
        factoryUnlocked,
        factoryLevel,
        spaceportUnlocked,
        spaceportBuilt,
        solarPanelsUnlocked,
        solarPanelLevel,
        solarPanelSpaceLevel,
        spaceshipBuilt,
        rocketFuel,
        resourceSellRate,
        resourceSellUpgrades,
        fuelRefineryUnlocked,
        fuelRefineryBuilt,
        fuelRefineryLevel,
        telescopeUnlocked,
        telescopeBuilt,
        telescopeLevel,
        planetsColonized,
        spaceshipLaunched

    }))
    console.log(window.localStorage);

}

setInterval(saveData, 5000);

function loadData() {

    //loads stuff
    const saveString = localStorage.getItem("saveKey");
    if (!saveString) return;
    const save = JSON.parse(saveString);

    money = save.money;
    resources = save.resources;
    refinedResources = save.refinedResources;
    workers = save.workers;
    energy = save.energy;
    researchPoints = save.researchPoints;
    planetsControlled = save.planetsControlled;
    solarPanels = save.solarPanels;
    workerLevel = save.workerLevel;
    workerHousingLevel = save.workerHousingLevel;
    researchCenterUnlocked = save.researchCenterUnlocked;
    researchCenterLevel = save.researchCenterLevel;
    manualResourceLevel = save.manualResourceLevel;
    factoryUnlocked = save.factoryUnlocked;
    factoryLevel = save.factoryLevel;
    spaceportUnlocked = save.spaceportUnlocked;
    spaceportBuilt = save.spaceportBuilt;
    solarPanelsUnlocked = save.solarPanelsUnlocked;
    solarPanelLevel = save.solarPanelLevel;
    solarPanelSpaceLevel = save.solarPanelSpaceLevel;
    spaceshipBuilt = save.spaceshipBuilt;
    rocketFuel = save.rocketFuel;
    resourceSellRate = save.resourceSellRate;
    resourceSellUpgrades = save.resourceSellUpgrades;
    fuelRefineryUnlocked = save.fuelRefineryUnlocked;
    fuelRefineryBuilt = save.fuelRefineryBuilt;
    fuelRefineryLevel = save.fuelRefineryLevel;
    telescopeUnlocked = save.telescopeUnlocked;
    telescopeBuilt = save.telescopeBuilt;
    telescopeLevel = save.telescopeLevel;
    planetsColonized = save.planetsColonized;
    spaceshipLaunched = save.spaceshipLaunched;

    tick1();

}

loadData();

function resetData() {
    //do this if your workers go on strike
    localStorage.clear();
    location.reload();
}

function notEnoughMoney() {

    //get more money dipshit
    alert("You don't have enough money!");

}

function notEnoughFuel() {

    //get more fuel dipshit
    alert("You don't have enough fuel!");

}

function notEnoughResources() {

    //get more resources dipshit
    alert("You don't have enough resources!");

}

function notEnoughRefinedResources() {

    //get more refined resources dipshit
    alert("You don't have enough refined resources!");

}

function notEnoughEnergy() {

    //get more energy dipshit
    alert("You don't have enough energy!");

}

function notEnoughResearch() {

    //get more research dipshit
    alert("You don't have enough research points!");

}


function tick1() {

    let roundedMoney = money.toFixed(2);
    money = Number(roundedMoney);

    //updates numbers on page
    document.getElementById("moneyCount").innerHTML = "Money: " + money.toLocaleString();
    document.getElementById("workerCount").innerHTML = "Workers: " + workers.toLocaleString() + " / " + (planetsControlled * workerHousingSpace[workerHousingLevel]).toLocaleString();
    document.getElementById("resourceCount").innerHTML = "Resources: " + resources.toLocaleString();
    document.getElementById("refinedResourceCount").innerHTML = "Refined resources: " + refinedResources.toLocaleString();
    document.getElementById("energyCount").innerHTML = "Energy: " + energy.toLocaleString();
    document.getElementById("researchPointCount").innerHTML = "Research points: " + researchPoints.toLocaleString();
    document.getElementById("solarPanelCount").innerHTML = "Solar panels: " + solarPanels.toLocaleString() + " / " + (planetsControlled * solarPanelSpace[solarPanelSpaceLevel]).toLocaleString();
    document.getElementById("rocketFuelCount").innerHTML = "Rocket fuel: " + rocketFuel.toLocaleString();
    document.getElementById("planetsControlledCount").innerHTML = "Planets controlled: " + planetsControlled.toLocaleString();


}

tick1();

function tick2() {

    //updates resource amounts
    resources += (workers * (workerEfficiency[workerLevel]));

    researchPoints += (researchCenterEfficiency[researchCenterLevel]);

    if (telescopeBuilt === true) {
        researchPoints += telescopeEfficiency[telescopeLevel];
    }

    energy += (solarPanels * solarPanelEfficiency[solarPanelLevel]);

    if (factoryToggle && resources >= 2 * (factoryEfficiency[factoryLevel])) {
        //refined resource toggle
        resources -= 2 * (factoryEfficiency[factoryLevel]);
        refinedResources += factoryEfficiency[factoryLevel];

    }

    if (refineryToggle && energy >= 5 * (fuelRefineryEfficiency[fuelRefineryLevel]) && resources >= 3 * (fuelRefineryEfficiency[fuelRefineryLevel])) {
        //rocket fuel toggle
        energy -= 5 * (fuelRefineryEfficiency[fuelRefineryLevel]);
        resources -= 3 * (fuelRefineryEfficiency[fuelRefineryLevel]);
        rocketFuel += (fuelRefineryEfficiency[fuelRefineryLevel]);
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
        document.getElementById("upgradeResourceClickButton").innerHTML = "Your resource click level is " + (manualResourceLevel + 1) + " and you get " + manualResourceEfficiency[manualResourceLevel] + " resources per click.<br>Next upgrade will give " + manualResourceEfficiency[manualResourceLevel + 1] + " resources per click.<br>Upgrade resource click cost " + manualResourceEfficiencyCosts[manualResourceLevel + 1] + " money.";
        tick1();

    } else {
        notEnoughMoney();
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
    if (money < (10 * amount)) {
        notEnoughMoney();
    }

    if ((workers + amount) > (planetsControlled * workerHousingSpace[workerHousingLevel])) {
        alert("You need to buy more housing for your workers.");
    }

    if ((money >= 10 * amount) && (workers + amount) <= (planetsControlled * workerHousingSpace[workerHousingLevel])) {

        money -= amount * 10;
        let roundedMoney = money.toFixed(2);
        money = Number(roundedMoney);

        workers += amount;
        tick1();

    }

}

function purchaseMaxWorkers() {

    if (money < 10) {
        notEnoughMoney();
    }

    if (workers === (planetsControlled * workerHousingSpace[workerHousingLevel])) {
        alert("You need to buy more housing for your workers.");
    }

    //buys max workers
    while (money >= 10 && workers < (planetsControlled * workerHousingSpace[workerHousingLevel])) {

        money -= 10;
        let roundedMoney = money.toFixed(2);
        money = Number(roundedMoney);

        workers++;

    }

    tick1();

}

document.getElementById("upgradeResourceClickButton").innerHTML = "Your resource click level is " + (manualResourceLevel + 1) + " and you get " + manualResourceEfficiency[manualResourceLevel] + " resources per click.<br>Next upgrade will give " + manualResourceEfficiency[manualResourceLevel + 1] + " resources per click.<br>Upgrade resource click cost " + manualResourceEfficiencyCosts[manualResourceLevel + 1] + " money.";
document.getElementById("upgradeWorkerButton").innerHTML = "Your workers are level " + (workerLevel + 1) + " and each worker produces " + workerEfficiency[workerLevel] + " resources per second.<br>Next upgrade will make workers produce " + workerEfficiency[workerLevel + 1] + " resources per second.<br>Upgrade worker cost " + workerEfficiencyCosts[workerLevel + 1] + " money.";
document.getElementById("upgradeResearchCenterButton").innerHTML = "Your research center is level " + researchCenterLevel + " and you get " + researchCenterEfficiency[researchCenterLevel] + " research points every second.<br>Next upgrade will make the research center produce " + researchCenterEfficiency[researchCenterLevel + 1] + " research points per second.<br>Upgrade research center " + researchCenterEfficiencyCosts[researchCenterLevel + 1] + " money.";
document.getElementById("upgradeWorkerHousingButton").innerHTML = "Your worker housing level is " + (workerHousingLevel + 1) + ".<br>Next upgrade will make worker housing house " + workerHousingSpace[workerHousingLevel + 1] + " workers.<br>Upgrade worker housing cost " + workerHousingMoneyCosts[workerHousingLevel + 1] + " money and " + workerHousingResourceCosts[workerHousingLevel + 1] + " resources.";

document.getElementById("upgradeSolarPanelButton").innerHTML = "Your solar panel level is " + solarPanelLevel + ".<br>Next upgrade will make solar panels produce " + solarPanelEfficiency[solarPanelLevel] + " energy per second.<br>Upgrade solar panels cost " + solarPanelEfficiencyMoneyCosts[solarPanelLevel + 1] + " money and " + solarPanelEfficiencyRefinedResourceCosts[solarPanelLevel + 1] + " refined resources.";
document.getElementById("upgradeSolarPanelSpaceButton").innerHTML = "Your solar panel space level is " + (solarPanelSpaceLevel + 1) + " .<br>Next upgrade will make you have " + solarPanelSpace[solarPanelSpaceLevel + 1] + " solar panel space.<br>Upgrade solar panels space costs " + solarPanelSpaceCosts[solarPanelLevel + 1] + " resources.";

document.getElementById("upgradeFactoryButton").innerHTML = "Your factory level is " + factoryLevel + ".<br>Next upgrade will make factory produce " + factoryEfficiency[factoryLevel + 1] + " refined resources per second.<br>Upgrade factory cost " + factoryEfficiencyMoneyCosts[factoryLevel + 1] + " money and " + factoryEfficiencyResourceCosts[factoryLevel + 1] + " resources.";

document.getElementById("upgradeRefineryButton").innerHTML = "Your refinery level is " + fuelRefineryLevel + ".<br>Next upgrade will make refinery produce " + fuelRefineryEfficiency[fuelRefineryLevel + 1] + " rocket fuel per second.<br>Upgrade refinery cost " + fuelRefineryEfficiencyMoneyCosts[fuelRefineryLevel + 1] + " money and " + fuelRefineryEfficiencyRefinedResourcesCost[fuelRefineryLevel + 1] + " refined resources.";

document.getElementById("upgradeTelescopeButton").innerHTML = "Your telescope level is " + telescopeLevel + ".<br>Next upgrade will make stelescope produce " + telescopeEfficiency[telescopeLevel + 1] + " research points per second.<br>Upgrade telescope cost " + telescopeEfficiencyRefinedResoucresCost[telescopeLevel + 1] + " money and " + telescopeEfficiencyRefinedResoucresCost[telescopeLevel + 1] + " refined resources.";
document.getElementById("toggleFactoryButton").innerHTML = "Factory power: Off";

if (researchCenterUnlocked === false) {
    document.getElementById("buildResearchCenterButton").style.display = "inline";
    document.getElementById("upgradeResearchCenterButton").style.display = "none";
    document.getElementById("researchPointCount").style.display = "none";
    document.getElementById("researchTitle").style.display = "none";
    document.getElementById("researchTitleBreak").style.display = "none";
    document.getElementById("unlockFactory").style.display = "none";
    document.getElementById("raiseResourcePrices1Button").style.display = "none";
    document.getElementById("raiseResourcePrices2Button").style.display = "none";
    document.getElementById("raiseResourcePrices3Button").style.display = "none";
    document.getElementById("raiseResourcePrices4Button").style.display = "none";
} else {
    document.getElementById("buildResearchCenterButton").style.display = "none";
    document.getElementById("researchPointCount").style.display = "inline";
    document.getElementById("researchTitle").style.display = "inline";
    document.getElementById("researchTitleBreak").style.display = "inline";
}

if (factoryUnlocked === false) {
    document.getElementById("buildFactoryButton").style.display = "none";
    document.getElementById("upgradeFactoryButton").style.display = "none";
}
if (factoryUnlocked === true) {
    document.getElementById("unlockFactory").style.display = "none";
}

if (factoryLevel === 0) {
    document.getElementById("unlockSolarPanels").style.display = "none";
    document.getElementById("refinedResourceCount").style.display = "none";
    document.getElementById("FactoryTab").style.display = "none";
}

if (factoryLevel > 0) {
    document.getElementById("unlockFactory").style.display = "none";
    document.getElementById("buildFactoryButton").style.display = "none";

}

const collection = document.getElementsByClassName("solarpanelupgradesheader");
for (let i = 0; i < collection.length; i++) {
    collection[i].style.display = "none";
}

if (solarPanelsUnlocked === false) {
    document.getElementById("buildSolarPanelButton").style.display = "none";
    document.getElementById("energyCount").style.display = "none";
    document.getElementById("solarPanelCount").style.display = "none";
}

if (solarPanels === 0) {
    document.getElementById("buildMoreSolarPanels").style.display = "none";
    document.getElementById("upgradeSolarPanelButton").style.display = "none";
    document.getElementById("upgradeSolarPanelSpaceButton").style.display = "none";
    document.getElementById("unlockTelescope").style.display = "none";
}

if (solarPanels > 0) {
    document.getElementById("unlockSolarPanels").style.display = "none";
    document.getElementById("buildSolarPanelButton").style.display = "none";
    document.getElementById("unlockTelescope").style.display = "inline";
    const collection = document.getElementsByClassName("solarpanelupgradesheader");
    for (let i = 0; i < collection.length; i++) {
        collection[i].style.display = "inline";
    }
}

if (spaceportUnlocked === false) {
    document.getElementById("unlockSpacePort").style.display = "none";
    document.getElementById("buildSpaceportButton").style.display = "none";
    document.getElementById("SpaceportTab").style.display = "none";
}

if (spaceshipLaunched === true) {
    document.getElementById("launchSpaceshipButton").style.display = "none";
    document.getElementById("constructSpaceshipButton").style.display = "none";
}

if (spaceshipLaunched === false) {
    document.getElementById("systemOverviewTab").style.display = "none";
}

if (spaceshipBuilt === true) {
    document.getElementById("constructSpaceshipButton").style.display = "none";
}

if (telescopeUnlocked === false) {
    document.getElementById("buildTelescope").style.display = "none";
    document.getElementById("unlockFuelRefinery").style.display = "none";
}

if (telescopeUnlocked === true) {
    document.getElementById("unlockTelescope").style.display = "none";
}

if (telescopeBuilt === true) {
    document.getElementById("buildTelescope").style.display = "none";
}

if (fuelRefineryUnlocked === false) {
    document.getElementById("buildFuelRefinery").style.display = "none";
    document.getElementById("unlockSpacePort").style.display = "none";
}

if (fuelRefineryUnlocked === true) {
    document.getElementById("unlockFuelRefinery").style.display = "none";
}

if (fuelRefineryBuilt === true) {
    document.getElementById("buildFuelRefinery").style.display = "none";
    document.getElementById("unlockSpacePort").style.display = "inline";
}

if (solarPanelsUnlocked === true) {
    document.getElementById("unlockSolarPanels").style.display = "none";
}

if (spaceportBuilt === true) {
    document.getElementById("buildSpaceportButton").style.display = "none";
}

if (spaceportUnlocked === true) {
    document.getElementById("unlockSpacePort").style.display = "none";
}

if (planetsColonized[0] === true) {
    document.getElementById("colonizePlanet1Button").style.display = "none";
}

if (planetsColonized[1] === true) {
    document.getElementById("colonizePlanet2Button").style.display = "none";
}

if (planetsColonized[2] === true) {
    document.getElementById("colonizePlanet3Button").style.display = "none";
}

if (planetsColonized[3] === true) {
    document.getElementById("colonizePlanet4Button").style.display = "none";
}

if (planetsColonized[4] === true) {
    document.getElementById("colonizePlanet5Button").style.display = "none";
}

if (resourceSellUpgrades[0] === true) {
    document.getElementById("raiseResourcePrices1Button").style.display = "none";
}

if (resourceSellUpgrades[0] === false || resourceSellUpgrades[1] === true) {
    document.getElementById("raiseResourcePrices2Button").style.display = "none";
}

if (resourceSellUpgrades[1] === false || resourceSellUpgrades[2] === true) {
    document.getElementById("raiseResourcePrices3Button").style.display = "none";
}

if (resourceSellUpgrades[2] === false || resourceSellUpgrades[3] === true) {
    document.getElementById("raiseResourcePrices4Button").style.display = "none";
}

if (telescopeBuilt === false) {
    document.getElementById("upgradeTelescopeButton").style.display = "none";
}

if (fuelRefineryBuilt === false) {
    document.getElementById("toggleRefineryButton").style.display = "none";
    document.getElementById("upgradeRefineryButton").style.display = "none";
    document.getElementById("rocketFuelCount").style.display = "none";
}


function upgradeWorkers() {

    //upgrades workers
    if (money >= workerEfficiencyCosts[workerLevel + 1]) {

        money -= workerEfficiencyCosts[workerLevel + 1];
        workerLevel++;
        document.getElementById("upgradeWorkerButton").innerHTML = "Your workers are level " + (workerLevel + 1) + " and each worker produces " + workerEfficiency[workerLevel] + " resources per second.<br>Next upgrade will make workers produce " + workerEfficiency[workerLevel + 1] + " resources per second.<br>Upgrade worker cost " + workerEfficiencyCosts[workerLevel + 1] + " money.";

    } else {
        notEnoughMoney();
    }

    //hides button once workers are at maximum level
    if (workerLevel === 7) {

        document.getElementById("upgradeWorkerButton").style.display = "none";

    }


}

if (workerLevel === 7) {

    document.getElementById("upgradeWorkerButton").style.display = "none";

}

function upgradeWorkerHousing() {

    if (money < workerHousingMoneyCosts[workerHousingLevel + 1]) {
        notEnoughMoney();
    } if (resources < workerHousingResourceCosts[workerHousingLevel + 1]) {
        notEnoughResources();
    } else {

        money -= workerHousingMoneyCosts[workerHousingLevel + 1];
        resources -= workerHousingResourceCosts[workerHousingLevel + 1];
        workerHousingLevel++;

        document.getElementById("upgradeWorkerHousingButton").innerHTML = "Your worker housing level is " + (workerHousingLevel + 1) + ".<br>Next upgrade will make worker housing house " + workerHousingSpace[workerHousingLevel + 1] + " workers.<br>Upgrade worker housing cost " + workerHousingMoneyCosts[workerHousingLevel + 1] + " money and " + workerHousingResourceCosts[workerHousingLevel + 1] + " resources.";

    }
    //upgrades worker housing
    if (workerHousingLevel === 8) {

        document.getElementById("upgradeWorkerHousingButton").style.display = "none";

    }

}

if (workerHousingLevel === 8) {

    document.getElementById("upgradeWorkerHousingButton").style.display = "none";

}

function buildResearchCenter() {

    //builds research center
    if (money < 100) {
        notEnoughMoney();
    } if (resources < 500) {
        notEnoughResources();
    } if (money >= 100 && resources >= 500) {

        researchCenterLevel++;
        money -= 100;
        resources -= 500;
        researchCenterUnlocked = true;

        document.getElementById("researchPointCount").style.display = "inline";
        document.getElementById("unlockFactory").style.display = "inline";
        document.getElementById("buildResearchCenterButton").style.display = "none";
        document.getElementById("upgradeResearchCenterButton").style.display = "inline";
        document.getElementById("upgradeResearchCenterButton").innerHTML = "Your research center is level " + researchCenterLevel + " and you get " + researchCenterEfficiency[researchCenterLevel] + " research points every second.<br>Next upgrade will make the research center produce " + researchCenterEfficiency[researchCenterLevel + 1] + " research points per second.<br>Upgrade research center " + researchCenterEfficiencyCosts[researchCenterLevel + 1] + " money.";

        document.getElementById("raiseResourcePrices1Button").style.display = "inline";

        tick1();

    }

}

function upgradeResearchCenter() {

    //upgrades research center
    if (money < researchCenterEfficiencyCosts[researchCenterLevel + 1]) {
        notEnoughMoney();
    } else {

        money -= researchCenterEfficiencyCosts[researchCenterLevel + 1];
        researchCenterLevel++;
        document.getElementById("upgradeResearchCenterButton").innerHTML = "Your research center is level " + researchCenterLevel + " and you get " + researchCenterEfficiency[researchCenterLevel] + " research points every second.<br>Next upgrade will make the research center produce " + researchCenterEfficiency[researchCenterLevel + 1] + " research points per second.<br>Upgrade research center " + researchCenterEfficiencyCosts[researchCenterLevel + 1] + " money.";

    }

    //hides button once research center is maxxed
    if (researchCenterLevel === 4) {

        document.getElementById("upgradeResearchCenterButton").style.display = "none";

    }


}

if (researchCenterLevel === 4) {

    document.getElementById("upgradeResearchCenterButton").style.display = "none";

}

function researchFactory() {
    if (researchPoints < 100) {
        notEnoughResearch();
    } else {

        researchPoints -= 100;
        tick1();

        document.getElementById("buildFactoryButton").style.display = "inline";
        document.getElementById("unlockFactory").style.display = "none";

        factoryUnlocked = true;

    }
}

function buildFactory() {

    //builds factory
    if (money < 5000) {
        notEnoughMoney();
    } if (resources < 20000) {
        notEnoughResources();
    } if (money >= 5000 && resources >= 20000) {
        factoryLevel++;
        money -= 5000;
        resources -= 20000;

        document.getElementById("refinedResourceCount").style.display = "inline";
        document.getElementById("unlockSolarPanels").style.display = "inline";
        document.getElementById("buildFactoryButton").style.display = "none";
        document.getElementById("upgradeFactoryButton").style.display = "inline";
        document.getElementById("upgradeFactoryButton").innerHTML = "Your factory level is " + factoryLevel + ".<br>Next upgrade will make factory produce " + factoryEfficiency[factoryLevel] + " refined resources per second.<br>Upgrade factory cost " + factoryEfficiencyMoneyCosts[factoryLevel + 1] + " money and " + factoryEfficiencyResourceCosts[factoryLevel + 1] + " resources.";

        document.getElementById("FactoryTab").style.display = "inline";

        tick1();

    }

}

function upgradeFactory() {

    //upgrades solar panels
    if (money < factoryEfficiencyMoneyCosts[factoryLevel + 1]) {
        notEnoughMoney();
    } if (resources < factoryEfficiencyResourceCosts[factoryLevel + 1]) {
        notEnoughResources();
    } if (money >= factoryEfficiencyMoneyCosts[factoryLevel + 1] && resources >= factoryEfficiencyResourceCosts[factoryLevel + 1]) {

        money -= factoryEfficiencyMoneyCosts[factoryLevel + 1];
        resources -= factoryEfficiencyResourceCosts[factoryLevel + 1];

        factoryLevel++;
        document.getElementById("upgradeFactoryButton").innerHTML = "Your factory level is " + factoryLevel + ".<br>Upgrade factory cost " + factoryEfficiencyMoneyCosts[factoryLevel + 1] + " money and " + factoryEfficiencyResourceCosts[factoryLevel + 1] + " resources.";

        tick1();
    }

    if (factoryLevel === 5) {
        document.getElementById("upgradeFactoryButton").style.display = "none";
    }

}

if (factoryLevel === 5) {
    document.getElementById("upgradeFactoryButton").style.display = "none";
}

function researchSolarPanels() {
    if (researchPoints < 500) {
        notEnoughResearch();
    } else {

        researchPoints -= 500;
        tick1();

        solarPanelsUnlocked = true;
        solarPanelLevel++;

        document.getElementById("energyCount").style.display = "inline";
        document.getElementById("buildSolarPanelButton").style.display = "inline";
        document.getElementById("unlockSolarPanels").style.display = "none";

    }
}

function buildFirstSolarPanel() {

    //builds solar panels
    if (money < 20000) {
        notEnoughMoney();
    } if (refinedResources < 100) {
        notEnoughRefinedResources();
    } else {

        solarPanels++;
        money -= 20000;
        refinedResources -= 100;
        solarPanelsUnlocked = true;

        document.getElementById("upgradeSolarPanelButton").style.display = "inline";
        document.getElementById("upgradeSolarPanelSpaceButton").style.display = "inline";
        document.getElementById("buildSolarPanelButton").style.display = "none";
        document.getElementById("buildMoreSolarPanels").style.display = "inline";
        document.getElementById("solarPanelCount").style.display = "inline";

        document.getElementById("unlockTelescope").style.display = "inline";

        document.getElementById("upgradeSolarPanelButton").innerHTML = "Your solar panel level is " + solarPanelLevel + ".<br>Next upgrade will make solar panels produce " + solarPanelEfficiency[solarPanelLevel + 1] + " energy per second.<br>Upgrade solar panels cost " + solarPanelEfficiencyMoneyCosts[solarPanelLevel + 1] + " money and " + solarPanelEfficiencyRefinedResourceCosts[solarPanelLevel + 1] + " refined resources.";

        for (let i = 0; i < collection.length; i++) {
            collection[i].style.display = "inline";
        }

        tick1();

    }
}

function buildSolarPanel() {
    if (money < 20000) {
        notEnoughMoney();
    } else if (refinedResources < 100) {
        notEnoughRefinedResources();
    } else if (solarPanels === solarPanelSpace[solarPanelSpaceLevel] * planetsControlled) {
        alert("You don't have enough space!");
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
        notEnoughMoney();
    } if (refinedResources < solarPanelEfficiencyRefinedResourceCosts[solarPanelLevel + 1]) {
        notEnoughRefinedResources();
    } else {

        money -= solarPanelEfficiencyMoneyCosts[solarPanelLevel + 1];
        refinedResources -= solarPanelEfficiencyRefinedResourceCosts[solarPanelLevel + 1];
        solarPanelLevel++;

        document.getElementById("upgradeSolarPanelButton").innerHTML = "Your solar panel level is " + solarPanelLevel + ".<br>Next upgrade will make solar panels produce " + solarPanelEfficiency[solarPanelLevel + 1] + " energy per second.<br>Upgrade solar panels cost " + solarPanelEfficiencyMoneyCosts[solarPanelLevel + 1] + " money and " + solarPanelEfficiencyRefinedResourceCosts[solarPanelLevel + 1] + " refined resources.";

        tick1();

    }

    if (solarPanelLevel === 5) {
        document.getElementById("upgradeSolarPanelButton").style.display = "none";
    }
}

if (solarPanelLevel === 5) {
    document.getElementById("upgradeSolarPanelButton").style.display = "none";
}

function upgradeSolarPanelSpace() {

    //upgrades solar panel space
    if (resources < solarPanelSpaceCosts[solarPanelSpaceLevel]) {
        notEnoughResources();
    } else {
        resources -= solarPanelSpaceCosts[solarPanelSpaceLevel];
        solarPanelSpaceLevel++;
        document.getElementById("upgradeSolarPanelSpaceButton").innerHTML = "Your solar panel space level is " + solarPanelSpaceLevel + ".<br>Next upgrade will make you have " + solarPanelSpace[solarPanelSpaceLevel + 1] + " solar panel space.<br>Upgrade solar panels space costs " + solarPanelSpaceCosts[solarPanelLevel + 1] + " resources.";
        tick1();
    }

    if (solarPanelSpaceLevel === 6) {
        document.getElementById("upgradeSolarPanelSpaceButton").style.display = "none";
    }
}

if (solarPanelSpaceLevel === 6) {
    document.getElementById("upgradeSolarPanelSpaceButton").style.display = "none";
}

function researchTelescope() {
    if (researchPoints < 1500) {
        notEnoughResearch();
    } else {
        researchPoints -= 1500;
        telescopeUnlocked = true;
        document.getElementById("unlockTelescope").style.display = "none";
        document.getElementById("buildTelescope").style.display = "inline";
    }
}

function buildTelescope() {
    if (money < 80000) {
        notEnoughMoney();
    } if (refinedResources < 400) {
        notEnoughRefinedResources();
    } else {
        money -= 80000;
        refinedResources -= 400;
        telescopeBuilt = true;
        telescopeLevel++;
        document.getElementById("buildTelescope").style.display = "none";
        document.getElementById("upgradeTelescopeButton").style.display = "inline";
        document.getElementById("unlockFuelRefinery").style.display = "inline";
        document.getElementById("upgradeTelescopeButton").innerHTML = "Your telescope level is " + telescopeLevel + ".<br>Next upgrade will make stelescope produce " + telescopeEfficiency[telescopeLevel + 1] + " research points per second.<br>Upgrade telescope cost " + telescopeEfficiencyRefinedResoucresCost[telescopeLevel + 1] + " money and " + telescopeEfficiencyRefinedResoucresCost[telescopeLevel + 1] + " refined resources.";
        tick1();
    }
}

function upgradeTelescope() {
    //upgrades telescope
    if (money < telescopeEfficiencyMoneyCosts[telescopeLevel + 1]) {
        notEnoughMoney();
    } if (refinedResources < telescopeEfficiencyRefinedResoucresCost[telescopeLevel + 1]) {
        notEnoughRefinedResources();
    } else {

        money -= telescopeEfficiencyMoneyCosts[telescopeLevel + 1];
        refinedResources -= telescopeEfficiencyRefinedResoucresCost[telescopeLevel + 1];
        telescopeLevel++;

        document.getElementById("upgradeTelescopeButton").innerHTML = "Your telescope level is " + telescopeLevel + ".<br>Next upgrade will make stelescope produce " + telescopeEfficiency[telescopeLevel + 1] + " research points per second.<br>Upgrade telescope cost " + telescopeEfficiencyMoneyCosts[telescopeLevel + 1] + " money and " + telescopeEfficiencyRefinedResoucresCost[telescopeLevel + 1] + " refined resources.";
        tick1();

    }

    if (telescopeLevel === 4) {
        document.getElementById("upgradeTelescopeButton").style.display = "none";
    }
}

if (telescopeLevel === 4) {
    document.getElementById("upgradeTelescopeButton").style.display = "none";
}

function researchFuelRefinery() {
    if (researchPoints < 2500) {
        notEnoughResearch();
    } else {
        researchPoints -= 2500;
        fuelRefineryUnlocked = true;
        document.getElementById("unlockFuelRefinery").style.display = "none";
        document.getElementById("buildFuelRefinery").style.display = "inline";
        tick1();
    }
}

function buildFuelRefinery() {
    if (money < 150000) {
        notEnoughMoney();
    } if (refinedResources < 1000) {
        notEnoughRefinedResources();
    } else {
        money -= 15000;
        refinedResources -= 1000;
        fuelRefineryBuilt = true;
        fuelRefineryLevel++;
        document.getElementById("buildFuelRefinery").style.display = "none";
        document.getElementById("unlockSpacePort").style.display = "inline";
        document.getElementById("toggleRefineryButton").style.display = "inline";
        document.getElementById("upgradeRefineryButton").style.display = "inline";
        document.getElementById("rocketFuelCount").style.display = "inline";
        document.getElementById("upgradeRefineryButton").innerHTML = "Your refinery level is " + fuelRefineryLevel + ".<br>Next upgrade will make refinery produce " + fuelRefineryEfficiency[fuelRefineryLevel + 1] + " rocket fuel per second.<br>Upgrade refinery cost " + fuelRefineryEfficiencyMoneyCosts[fuelRefineryLevel + 1] + " money and " + fuelRefineryEfficiencyRefinedResourcesCost[fuelRefineryLevel + 1] + " refined resources.";

        tick1();
    }
}

function upgradeFuelRefinery() {
    //upgrades refinery
    if (money < fuelRefineryEfficiencyMoneyCosts[fuelRefineryLevel + 1]) {
        notEnoughMoney();
    } if (refinedResources < fuelRefineryEfficiencyRefinedResourcesCost[fuelRefineryLevel + 1]) {
        notEnoughRefinedResources();
    } else {

        money -= fuelRefineryEfficiencyMoneyCosts[fuelRefineryLevel + 1];
        refinedResources -= fuelRefineryEfficiencyRefinedResourcesCost[fuelRefineryLevel + 1];
        fuelRefineryLevel++;

        document.getElementById("upgradeRefineryButton").innerHTML = "Your refinery level is " + fuelRefineryLevel + ".<br>Next upgrade will make refinery produce " + fuelRefineryEfficiency[fuelRefineryLevel + 1] + " rocket fuel per second.<br>Upgrade refinery cost " + fuelRefineryEfficiencyMoneyCosts[fuelRefineryLevel + 1] + " money and " + fuelRefineryEfficiencyRefinedResourcesCost[fuelRefineryLevel + 1] + " refined resources.";
        tick1();

    }

    if (fuelRefineryLevel === 4) {
        document.getElementById("upgradeRefineryButton").style.display = "none";
    }
}

if (fuelRefineryLevel === 4) {
    document.getElementById("upgradeRefineryButton").style.display = "none";
}

function researchSpaceport() {
    if (researchPoints < 10000) {
        notEnoughResearch();
    } else {

        researchPoints -= 10000;
        tick1();

        document.getElementById("buildSpaceportButton").style.display = "inline";
        document.getElementById("unlockSpacePort").style.display = "none";

        spaceportUnlocked = true;

    }
}

function buildSpaceport() {

    //builds spaceport
    if (money < 400000) {
        notEnoughMoney();
    } if (resources < 1200000) {
        notEnoughResources();
    } else {

        money -= 400000;
        resources -= 1200000;
        spaceportBuilt = true;

        document.getElementById("buildSpaceportButton").style.display = "none";

        document.getElementById("constructSpaceshipButton").style.display = "inline";

        document.getElementById("SpaceportTab").style.display = "inline";

        tick1();

    }

}

function toggleFactory() {

    if (factoryToggle === false) {
        factoryToggle = true;
        document.getElementById("toggleFactoryButton").innerHTML = "Factory power: On";
    } else {
        factoryToggle = false;
        document.getElementById("toggleFactoryButton").innerHTML = "Factory power: Off";
    }

}
document.getElementById("toggleFactoryButton").innerHTML = "Factory power: Off";
function toggleRefinery() {

    if (refineryToggle === false) {
        refineryToggle = true;
        document.getElementById("toggleRefineryButton").innerHTML = "Refinery power: On";
    } else {
        refineryToggle = false;
        document.getElementById("toggleRefineryButton").innerHTML = "Refinery power: Off";
    }

}
document.getElementById("toggleRefineryButton").innerHTML = "Refinery power: Off";

function constructSpaceship() {

    if (money < 10000000) {
        notEnoughMoney();
    } if (refinedResources < 20000) {
        notEnoughRefinedResources();
    } if (money >= 10000000 && refinedResources >= 20000) {
        spaceshipBuilt = true;
        money -= 10000000;
        refinedResources -= 20000;
        document.getElementById("constructSpaceshipButton").style.display = "none";
    }

}

function launchSpaceship() {
    if (rocketFuel < 500) {
        notEnoughFuel();
    } else {
        rocketFuel -= 500;
        spaceshipLaunched = true;

        alert("Congrats! You beat the beginning. there's still stuff lol but be wary of nonfunctional elements and bugs beyond this point - jerry the inflatable elephant");

        document.getElementById("systemOverviewTab").style.display = "inline";
        document.getElementById("launchSpaceshipButton").style.display = "none";
    }
}

function colonizePlanet(cost, buttonID, planetNumber) {

    if (rocketFuel < cost) {
        notEnoughFuel();
    } else {
        rocketFuel -= cost;
        document.getElementById(buttonID).style.display = "none";
        planetsControlled++;
        planetsColonized[planetNumber] = true;

        tick1();
    }

}

function raiseResourcePrices(cost, raiseAmount, buttonID, nextButtonID, upgradeNumber) {
    if (researchPoints < cost) {
        notEnoughResearch();
    } else {
        researchPoints -= cost;
        resourceSellRate += raiseAmount;
        document.getElementById(buttonID).style.display = "none";

        if (nextButtonID != 'raiseResourcePrices5Button') {
            document.getElementById(nextButtonID).style.display = "inline";
        }


        resourceSellUpgrades[upgradeNumber] = true;
        tick1;
    }
}
