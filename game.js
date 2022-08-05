let money = 0;
let resources = 0;
let refinedResources = 0;
let workers = 0;
let energy = 0;
let researchPoints = 0;
let planetsControlled = 1;
let solarPanels = 0;

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
const factoryEfficiency = [0, 1, 3, 8, 15];
const factoryEfficiencyMoneyCosts = [0, 20000, 75000, 500000, 2500000]
const factoryEfficiencyResourceCosts = [0, 100000, 400000, 2500000, 12000000]
let factoryToggle = false;

let spaceportUnlocked = false;
let spaceportBuilt = false;

let solarPanelsUnlocked = false;
let solarPanelLevel = 0;
const solarPanelEfficiency = [0, 5, 12, 25, 75, 200]
const solarPanelEfficiencyMoneyCosts = [0, 75000, 180000, 800000, 2000000, 10000000]
const solarPanelEfficiencyRefinedResourceCosts = [0, 500, 1200, 5000, 20000, 75000]
let solarPanelSpaceLevel = 0;
const solarPanelSpace = [1, 2, 3, 5, 8, 12, 18, 25]
const solarPanelSpaceCosts = [0, 12000, 40000, 150000, 800000, 2500000, 12000000, 50000000]

let spaceshipBuilt = false;

let resourceSellRate = 0.1;

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
        planetsColonized
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
    planetsColonized = save.planetsColonized;

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

    let roundedMoney = money.toFixed(1);
    money = Number(roundedMoney);

    //updates numbers on page
    document.getElementById("moneyCount").innerHTML = "Money: " + money;
    document.getElementById("workerCount").innerHTML = "Workers: " + workers + " / " + (planetsControlled * workerHousingSpace[workerHousingLevel]);
    document.getElementById("resourceCount").innerHTML = "Resources: " + resources;
    document.getElementById("refinedResourceCount").innerHTML = "Refined resources: " + refinedResources;
    document.getElementById("energyCount").innerHTML = "Energy: " + energy;
    document.getElementById("researchPointCount").innerHTML = "Research points: " + researchPoints;
    document.getElementById("planetsControlledCount").innerHTML = "Planets controlled: " + planetsControlled;
    document.getElementById("solarPanelCount").innerHTML = "Solar panels: " + solarPanels + " / " + (planetsControlled * solarPanelSpace[solarPanelSpaceLevel]);

}

tick1();

function tick2() {

    //updates resource amounts
    resources += (workers * (workerEfficiency[workerLevel]));

    researchPoints += (researchCenterEfficiency[researchCenterLevel]);

    energy += (solarPanels * solarPanelEfficiency[solarPanelLevel]);

    if (factoryToggle && resources >= 2 * (factoryEfficiency[factoryLevel])) {
        //refined resource toggle
        resources -= 2 * (factoryEfficiency[factoryLevel]);
        refinedResources += factoryEfficiency[factoryLevel];

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
        document.getElementById("upgradeResourceClickButton").innerHTML = "Your resource click level is " + manualResourceLevel + " and you get " + manualResourceEfficiency[manualResourceLevel] + " resources per click. Upgrade resource click cost " + manualResourceEfficiencyCosts[manualResourceLevel + 1] + " money.";

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

function sellResources() {

    //sells resources
    money += resources * resourceSellRate;
    let roundedMoney = money.toFixed(1);
    money = Number(roundedMoney);

    resources = 0;
    tick1();

}

function sellPartialResources(percent) {

    //sells part of resources
    money += resources * (percent / 100) * resourceSellRate;
    let roundedMoney = money.toFixed(1);
    money = Number(roundedMoney);

    resources -= resources * (percent / 100);
    let roundedResources = resources.toFixed(0);
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
        let roundedMoney = money.toFixed(1);
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
        let roundedMoney = money.toFixed(1);
        money = Number(roundedMoney);

        workers++;

    }

    tick1();

}

document.getElementById("upgradeResourceClickButton").innerHTML = "Your resource click level is " + manualResourceLevel + " and you get " + manualResourceEfficiency[manualResourceLevel] + " resources per click. Upgrade resource click cost " + manualResourceEfficiencyCosts[manualResourceLevel + 1] + " money.";
document.getElementById("upgradeWorkerButton").innerHTML = "Your workers are level " + workerLevel + " and each worker produces " + workerEfficiency[workerLevel] + " resources per second. Upgrade worker cost " + workerEfficiencyCosts[workerLevel + 1] + " money.";
document.getElementById("upgradeResearchCenterButton").innerHTML = "Your research center is level " + researchCenterLevel + " and you get " + researchCenterEfficiency[researchCenterLevel] + " research points every second. Upgrade research center " + researchCenterEfficiencyCosts[researchCenterLevel + 1] + " money.";
document.getElementById("upgradeWorkerHousingButton").innerHTML = "Your worker housing level is " + workerHousingLevel + ". Upgrade worker housing cost " + workerHousingMoneyCosts[workerHousingLevel + 1] + " money and " + workerHousingResourceCosts[workerHousingLevel + 1] + " resources.";

document.getElementById("upgradeSolarPanelButton").innerHTML = "Your solar panel level is " + solarPanelLevel + ". Upgrade solar panels cost " + solarPanelEfficiencyMoneyCosts[solarPanelLevel + 1] + " money and " + solarPanelEfficiencyRefinedResourceCosts[solarPanelLevel + 1] + " refined resources.";
document.getElementById("upgradeSolarPanelSpaceButton").innerHTML = "Your solar panel space level is " + solarPanelSpaceLevel + ". Upgrade solar panels space costs " + solarPanelSpaceCosts[solarPanelLevel + 1] + " resources.";

document.getElementById("upgradeFactoryButton").innerHTML = "Your factory level is " + factoryLevel + ". Upgrade factory cost " + factoryEfficiencyMoneyCosts[factoryLevel + 1] + " money and " + factoryEfficiencyResourceCosts[factoryLevel + 1] + " resources.";

document.getElementById("toggleFactoryButton").innerHTML = "Factory power: Off";

if (researchCenterUnlocked === false) {
    document.getElementById("buildResearchCenterButton").style.display = "inline";
    document.getElementById("upgradeResearchCenterButton").style.display = "none";
    document.getElementById("researchPointCount").style.display = "none";
    document.getElementById("researchTitle").style.display = "none";
    document.getElementById("researchTitleBreak").style.display = "none";
    document.getElementById("unlockFactory").style.display = "none";
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
}

if (solarPanels > 0) {
    document.getElementById("unlockSolarPanels").style.display = "none";
    document.getElementById("buildSolarPanelButton").style.display = "none";
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

if (spaceshipBuilt === true) {
    document.getElementById("constructSpaceshipButton").style.display = "none";
}

if (spaceshipBuilt === false) {
    document.getElementById("colonizePlanet1Button").style.display = "none";
    document.getElementById("colonizePlanet2Button").style.display = "none";
    document.getElementById("colonizePlanet3Button").style.display = "none";
    document.getElementById("colonizePlanet4Button").style.display = "none";
    document.getElementById("colonizePlanet5Button").style.display = "none";
    document.getElementById("systemOverviewTab").style.display = "none";
}

if (solarPanelsUnlocked === true) {

    document.getElementById("unlockSpacePort").style.display = "inline";
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

if (planetsColonized[5] === true) {
    document.getElementById("colonizePlanet5Button").style.display = "none";
}

function upgradeWorkers() {

    //upgrades workers
    if (money >= workerEfficiencyCosts[workerLevel + 1]) {

        money -= workerEfficiencyCosts[workerLevel + 1];
        workerLevel++;
        document.getElementById("upgradeWorkerButton").innerHTML = "Your workers are level " + workerLevel + " and each worker produces " + workerEfficiency[workerLevel] + " resources per second. Upgrade worker cost " + workerEfficiencyCosts[workerLevel + 1] + " money.";

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

        document.getElementById("upgradeWorkerHousingButton").innerHTML = "Your worker housing level is " + workerHousingLevel + ". Upgrade worker housing cost " + workerHousingMoneyCosts[workerHousingLevel + 1] + " money and " + workerHousingResourceCosts[workerHousingLevel + 1] + " resources.";

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
    } else {

        researchCenterLevel++;
        money -= 100;
        resources -= 500;
        researchCenterUnlocked = true;

        document.getElementById("researchPointCount").style.display = "inline";
        document.getElementById("unlockFactory").style.display = "inline";
        document.getElementById("buildResearchCenterButton").style.display = "none";
        document.getElementById("upgradeResearchCenterButton").style.display = "inline";
        document.getElementById("upgradeResearchCenterButton").innerHTML = "Your research center is level " + researchCenterLevel + " and you get " + researchCenterEfficiency[researchCenterLevel] + " research points every second. Upgrade research center " + researchCenterEfficiencyCosts[researchCenterLevel + 1] + " money.";

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
        document.getElementById("upgradeResearchCenterButton").innerHTML = "Your research center is level " + researchCenterLevel + " and you get " + researchCenterEfficiency[researchCenterLevel] + " research points every second. Upgrade research center " + researchCenterEfficiencyCosts[researchCenterLevel + 1] + " money.";

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
    } else {
        factoryLevel++;
        money -= 5000;
        resources -= 20000;

        document.getElementById("refinedResourceCount").style.display = "inline";
        document.getElementById("unlockSolarPanels").style.display = "inline";
        document.getElementById("buildFactoryButton").style.display = "none";
        document.getElementById("upgradeFactoryButton").style.display = "inline";
        document.getElementById("upgradeFactoryButton").innerHTML = "Your factory level is " + factoryLevel + ". Upgrade factory cost " + factoryEfficiencyMoneyCosts[factoryLevel + 1] + " money and " + factoryEfficiencyResourceCosts[factoryLevel + 1] + " resources.";

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
    } else {

        money -= factoryEfficiencyMoneyCosts[factoryLevel + 1];
        resources -= factoryEfficiencyResourceCosts[factoryLevel + 1];
        factoryLevel++;
        document.getElementById("upgradeFactoryButton").innerHTML = "Your factory level is " + factoryLevel + ". Upgrade factory cost " + factoryEfficiencyMoneyCosts[factoryLevel + 1] + " money and " + factoryEfficiencyResourceCosts[factoryLevel + 1] + " resources.";

        tick1();

    }

    if (factoryLevel === 4) {
        document.getElementById("upgradeFactoryButton").style.display = "none";
    }

}

if (factoryLevel === 4) {
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
        document.getElementById("unlockSpacePort").style.display = "inline";
        document.getElementById("upgradeSolarPanelButton").style.display = "inline";
        document.getElementById("upgradeSolarPanelSpaceButton").style.display = "inline";
        document.getElementById("buildSolarPanelButton").style.display = "none";
        document.getElementById("buildMoreSolarPanels").style.display = "inline";
        document.getElementById("solarPanelCount").style.display = "inline";

        document.getElementById("upgradeSolarPanelButton").innerHTML = "Your solar panel level is " + solarPanelLevel + ". Upgrade solar panels cost " + solarPanelEfficiencyMoneyCosts[solarPanelLevel + 1] + " money and " + solarPanelEfficiencyRefinedResourceCosts[solarPanelLevel + 1] + " refined resources.";

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

        document.getElementById("upgradeSolarPanelButton").innerHTML = "Your solar panel level is " + solarPanelLevel + ". Upgrade solar panels cost " + solarPanelEfficiencyMoneyCosts[solarPanelLevel + 1] + " money and " + solarPanelEfficiencyRefinedResourceCosts[solarPanelLevel + 1] + " refined resources.";

        tick1();

    }

    if (solarPanelLevel === 4) {
        document.getElementById("upgradeSolarPanelButton").style.display = "none";
    }
}

if (solarPanelLevel === 4) {
    document.getElementById("upgradeSolarPanelButton").style.display = "none";
}

function upgradeSolarPanelSpace() {

    //upgrades solar panel space
    if (resources < solarPanelSpaceCosts[solarPanelSpaceLevel]) {
        notEnoughResources();
    } else {
        resources -= solarPanelSpaceCosts[solarPanelSpaceLevel];
        solarPanelSpaceLevel++;
        document.getElementById("upgradeSolarPanelSpaceButton").innerHTML = "Your solar panel space level is " + solarPanelSpaceLevel + ". Upgrade solar panels space costs " + solarPanelSpaceCosts[solarPanelSpaceLevel + 1] + " resources.";
        tick1();
    }

    if (solarPanelSpaceLevel === 6) {
        document.getElementById("upgradeSolarPanelSpaceButton").style.display = "none";
    }
}

if (solarPanelSpaceLevel === 6) {
    document.getElementById("upgradeSolarPanelSpaceButton").style.display = "none";
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

function constructSpaceship() {

    if (money < 10000000) {
        notEnoughMoney();
    } if (refinedResources < 20000) {
        notEnoughRefinedResources();
    } else {
        spaceshipBuilt = true;
        alert("Congrats! You beat the beginning. there's still stuff lol but be wary of nonfunctional elements and bugs beyond this point - jerry the inflatable elephant");
        document.getElementById("constructSpaceshipButton").style.display = "none";

        document.getElementById("colonizePlanet1Button").style.display = "inline";
        document.getElementById("colonizePlanet2Button").style.display = "inline";
        document.getElementById("colonizePlanet3Button").style.display = "inline";
        document.getElementById("colonizePlanet4Button").style.display = "inline";
        document.getElementById("colonizePlanet5Button").style.display = "inline";
        document.getElementById("systemOverviewTab").style.display = "inline";
    }

}

function colonizePlanet(cost, buttonID, planetNumber) {

    if (energy < cost) {
        notEnoughEnergy();
    } else {
        energy -= cost;
        document.getElementById(buttonID).style.display = "none";
        planetsControlled++;
        planetsColonized[planetNumber] = true;

        tick1();
    }

}
