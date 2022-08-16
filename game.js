let money = 0;
let resources = 0;
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

let factoryUnlocked = false;
let factoryLevel = 1;
const factoryEfficiency = [0, 1, 5, 15, 40, 100];
const factoryEfficiencyMoneyCosts = [0, 0, 40000, 75000, 500000, 2500000];
const factoryEfficiencyResourceCosts = [0, 0, 100000, 400000, 2500000, 12000000];
let factoryToggle = false;

let spaceportUnlocked = false;

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

let fuelRefineryUnlocked = false;

let fuelRefineryLevel = 1;
const fuelRefineryEfficiency = [0, 2, 5, 12, 25];
const fuelRefineryEfficiencyMoneyCosts = [0, 0, 500000, 1800000, 5000000];
const fuelRefineryEfficiencyRefinedResourcesCost = [0, 0, 1000, 7500, 25000, 100000];
let refineryToggle = false;

let telescopeUnlocked = false;

let telescopeLevel = 1;
const telescopeEfficiency = [0, 100, 250, 750, 2000];
const telescopeEfficiencyMoneyCosts = [0, 0, 300000, 1200000, 5000000];
const telescopeEfficiencyRefinedResoucresCost = [0, 0, 1200, 5000, 25000];

let planetsColonized = [false, false, false, false, false];

let industryUpgradesBought = [false, false];

//research center, factory, solarpanel, telescope, refinery, spaceport, orbital telescope, space station, shipyard, asteroid mining complex, dyson sphere
let buildingsBuilt = [false, false, false, false, false, false, false, false, false, false, false];

document.getElementById("warning").style.visibility = "hidden";

function clearWarning() {
    document.getElementById("warning").style.visibility = "hidden";
}

function saveData() {
    //saves stuff
    window.localStorage.setItem(
        "saveKey",
        JSON.stringify({
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
            researchCenterLevel,
            manualResourceLevel,
            factoryUnlocked,
            factoryLevel,
            spaceportUnlocked,
            solarPanelsUnlocked,
            solarPanelLevel,
            solarPanelSpaceLevel,
            spaceshipBuilt,
            rocketFuel,
            resourceSellRate,
            resourceSellUpgrades,
            fuelRefineryUnlocked,
            fuelRefineryLevel,
            telescopeUnlocked,
            telescopeLevel,
            planetsColonized,
            spaceshipLaunched,
            buildingsBuilt,
            industryUpgradesBought,
            ships,
            asteroidMinerLevel,
            asteroidMinerSpaceLevel,
        })
    );
}

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
    researchCenterLevel = save.researchCenterLevel;
    manualResourceLevel = save.manualResourceLevel;
    factoryUnlocked = save.factoryUnlocked;
    factoryLevel = save.factoryLevel;
    spaceportUnlocked = save.spaceportUnlocked;
    solarPanelsUnlocked = save.solarPanelsUnlocked;
    solarPanelLevel = save.solarPanelLevel;
    solarPanelSpaceLevel = save.solarPanelSpaceLevel;
    spaceshipBuilt = save.spaceshipBuilt;
    rocketFuel = save.rocketFuel;
    resourceSellRate = save.resourceSellRate;
    resourceSellUpgrades = save.resourceSellUpgrades;
    fuelRefineryUnlocked = save.fuelRefineryUnlocked;
    fuelRefineryLevel = save.fuelRefineryLevel;
    telescopeUnlocked = save.telescopeUnlocked;
    telescopeLevel = save.telescopeLevel;
    planetsColonized = save.planetsColonized;
    spaceshipLaunched = save.spaceshipLaunched;
    buildingsBuilt = save.buildingsBuilt;
    industryUpgradesBought = save.industryUpgradesBought;
    ships = save.ships;
    asteroidMinerLevel = save.asteroidMinerLevel;
    asteroidMinerSpaceLevel = save.asteroidMinerSpaceLevel;

    tick1();
    updateShipyardNumbers();

    document.getElementById("warning").style.visibility = "visible";
    document.getElementById("warning").innerHTML = "Data successfully loaded!";
    setTimeout(clearWarning, 2000);
}

function resetData() {
    //do this if your workers go on strike
    localStorage.clear();
    location.reload();
}

function downloadData() {
    saveData();
    const json = localStorage.getItem("saveKey");
    const fileName = "save.json";
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([json], { type: "application/json" }));
    a.download = fileName;
    a.click();
}

async function uploadData() {
    try {
        const [fileHandle] = await window.showOpenFilePicker();
        const file = await fileHandle.getFile();
        const contents = await file.text();
        localStorage.setItem("saveKey", contents);
        loadData();
    } catch (err) {
        console.errror(err);
    }
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

loadData();
setInterval(saveData, 5000);

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

function updateButtons() {
    document.getElementById("upgradeResourceClickButton").innerHTML =
        "Your resource click level is " +
        formatNumber(manualResourceLevel) +
        " and you get " +
        formatNumber(manualResourceEfficiency[manualResourceLevel]) +
        " resources per click.<br>Next level will give " +
        formatNumber(manualResourceEfficiency[manualResourceLevel + 1]) +
        " resources per click.<br>Upgrading resource click cost " +
        formatNumber(manualResourceEfficiencyCosts[manualResourceLevel + 1]) +
        " money.";
    document.getElementById("upgradeWorkerButton").innerHTML =
        "Your workers are level " +
        formatNumber(workerLevel) +
        " and each worker produces " +
        formatNumber(workerEfficiency[workerLevel]) +
        " resources per second.<br>Next level will make workers produce " +
        formatNumber(workerEfficiency[workerLevel + 1]) +
        " resources per second.<br>Upgrading worker cost " +
        formatNumber(workerEfficiencyCosts[workerLevel + 1]) +
        " money.";
    document.getElementById("upgradeResearchCenterButton").innerHTML =
        "Your research center is level " +
        formatNumber(researchCenterLevel) +
        " and you get " +
        formatNumber(researchCenterEfficiency[researchCenterLevel]) +
        " research points every second.<br>Next level will make the research center produce " +
        formatNumber(researchCenterEfficiency[researchCenterLevel + 1]) +
        " research points per second.<br>Upgrading research center " +
        formatNumber(researchCenterEfficiencyCosts[researchCenterLevel + 1]) +
        " money.";
    document.getElementById("upgradeWorkerHousingButton").innerHTML =
        "Your worker housing level is " +
        formatNumber(workerHousingLevel) +
        ".<br>Next level will make worker housing house " +
        formatNumber(workerHousingSpace[workerHousingLevel + 1]) +
        " workers.<br>Upgrading worker housing cost " +
        formatNumber(workerHousingMoneyCosts[workerHousingLevel + 1]) +
        " money and " +
        formatNumber(workerHousingResourceCosts[workerHousingLevel + 1]) +
        " resources.";
    document.getElementById("upgradeSolarPanelButton").innerHTML =
        "Your solar panel level is " +
        formatNumber(solarPanelLevel) +
        " and each solar panel produces " +
        formatNumber(solarPanelEfficiency[solarPanelLevel]) +
        " energy per second.<br>Next level will make solar panels produce " +
        formatNumber(solarPanelEfficiency[solarPanelLevel + 1]) +
        " energy per second.<br>Upgrading solar panels cost " +
        formatNumber(solarPanelEfficiencyMoneyCosts[solarPanelLevel + 1]) +
        " money and " +
        formatNumber(solarPanelEfficiencyRefinedResourceCosts[solarPanelLevel + 1]) +
        " refined resources.";
    document.getElementById("upgradeSolarPanelSpaceButton").innerHTML =
        "Your solar panel space level is " +
        formatNumber(solarPanelSpaceLevel) +
        ".<br>Next level will make you have " +
        formatNumber(solarPanelSpace[solarPanelSpaceLevel + 1]) +
        " solar panel space.<br>Upgrading solar panels space costs " +
        formatNumber(solarPanelSpaceCosts[solarPanelSpaceLevel + 1]) +
        " resources.";
    document.getElementById("upgradeFactoryButton").innerHTML =
        "Your factory level is " +
        formatNumber(factoryLevel) +
        " and it produces " +
        formatNumber(factoryEfficiency[factoryLevel]) +
        " refined resources per second.<br>Next level will make factory produce " +
        formatNumber(factoryEfficiency[factoryLevel + 1]) +
        " refined resources per second.<br>Upgrading factory cost " +
        formatNumber(factoryEfficiencyMoneyCosts[factoryLevel + 1]) +
        " money and " +
        formatNumber(factoryEfficiencyResourceCosts[factoryLevel + 1]) +
        " resources.";
    document.getElementById("upgradeRefineryButton").innerHTML =
        "Your refinery level is " +
        formatNumber(fuelRefineryLevel) +
        " and it produces " +
        formatNumber(fuelRefineryEfficiency[fuelRefineryLevel]) +
        " fuel per second.<br>Next level will make refinery produce " +
        formatNumber(fuelRefineryEfficiency[fuelRefineryLevel + 1]) +
        " rocket fuel per second.<br>Upgrading refinery cost " +
        formatNumber(fuelRefineryEfficiencyMoneyCosts[fuelRefineryLevel + 1]) +
        " money and " +
        formatNumber(fuelRefineryEfficiencyRefinedResourcesCost[fuelRefineryLevel + 1]) +
        " refined resources.";
    document.getElementById("upgradeTelescopeButton").innerHTML =
        "Your telescope level is " +
        formatNumber(telescopeLevel) +
        " and it produces " +
        formatNumber(telescopeEfficiency[telescopeLevel]) +
        " research points per second.<br>Next level will make stelescope produce " +
        formatNumber(telescopeEfficiency[telescopeLevel + 1]) +
        " research points per second.<br>Upgrading telescope cost " +
        formatNumber(telescopeEfficiencyMoneyCosts[telescopeLevel + 1]) +
        " money and " +
        formatNumber(telescopeEfficiencyRefinedResoucresCost[telescopeLevel + 1]) +
        " refined resources.";
}

updateButtons();

if (buildingsBuilt[0] === false) {
    document.getElementById("buildResearchCenterButton").style.display = "inline";
    document.getElementById("upgradeResearchCenterButton").style.display = "none";
    document.getElementById("researchPointCount").style.display = "none";
    document.getElementById("researchTitle").style.display = "none";
    document.getElementById("researchTitleBreak").style.display = "none";
    document.getElementById("unlockFactory").style.display = "none";
    document.getElementById("raiseResourcePrices1Button").style.display = "none";
}

if (buildingsBuilt[0] === true) {
    document.getElementById("buildResearchCenterButton").style.display = "none";
    document.getElementById("researchPointCount").style.display = "block";
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

if (buildingsBuilt[1] === true) {
    document.getElementById("unlockFactory").style.display = "none";
    document.getElementById("buildFactoryButton").style.display = "none";
}

if (buildingsBuilt[1] === false) {
    document.getElementById("unlockSolarPanels").style.display = "none";
    document.getElementById("refinedResourceCount").style.display = "none";
    document.getElementById("FactoryTab").style.display = "none";
}

if (solarPanelsUnlocked === false) {
    document.getElementById("buildSolarPanelButton").style.display = "none";
    document.getElementById("solarPanelCount").style.display = "none";
}

if (buildingsBuilt[2] === false) {
    document.getElementById("buildMoreSolarPanels").style.display = "none";
    document.getElementById("upgradeSolarPanelButton").style.display = "none";
    document.getElementById("upgradeSolarPanelSpaceButton").style.display = "none";
    document.getElementById("energyCount").style.display = "none";
    document.getElementById("unlockTelescope").style.display = "none";
}

if (buildingsBuilt[2] === true) {
    document.getElementById("unlockSolarPanels").style.display = "none";
    document.getElementById("buildSolarPanelButton").style.display = "none";
    document.getElementById("unlockTelescope").style.display = "inline";
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
    document.getElementById("industryUpgrade1Button").style.display = "none";
}

if (industryUpgradesBought[0] === true) {
    document.getElementById("industryUpgrade1Button").style.display = "none";
}

if (industryUpgradesBought[1] === true || industryUpgradesBought[0] === false) {
    document.getElementById("industryUpgrade2Button").style.display = "none";
}

if (spaceshipBuilt === true) {
    document.getElementById("constructSpaceshipButton").style.display = "none";
}

if (spaceshipBuilt === false) {
    document.getElementById("launchSpaceshipButton").style.display = "none";
}

if (telescopeUnlocked === false) {
    document.getElementById("buildTelescope").style.display = "none";
    document.getElementById("unlockFuelRefinery").style.display = "none";
}

if (telescopeUnlocked === true) {
    document.getElementById("unlockTelescope").style.display = "none";
}

if (buildingsBuilt[3] === true) {
    document.getElementById("buildTelescope").style.display = "none";
}

if (buildingsBuilt[3] === false) {
    document.getElementById("unlockFuelRefinery").style.display = "none";
}

if (fuelRefineryUnlocked === false) {
    document.getElementById("buildFuelRefinery").style.display = "none";
    document.getElementById("unlockSpacePort").style.display = "none";
}

if (fuelRefineryUnlocked === true) {
    document.getElementById("unlockFuelRefinery").style.display = "none";
}

if (buildingsBuilt[4] === true) {
    document.getElementById("buildFuelRefinery").style.display = "none";
    document.getElementById("unlockSpacePort").style.display = "inline";
}

if (buildingsBuilt[4] === false) {
    document.getElementById("refineryDiv").style.display = "none";
}

if (solarPanelsUnlocked === true) {
    document.getElementById("unlockSolarPanels").style.display = "none";
}

if (buildingsBuilt[5] === true) {
    document.getElementById("buildSpaceportButton").style.display = "none";
}

if (buildingsBuilt[5] === false) {
    document.getElementById("SpaceportTab").style.display = "none";
}

if (spaceportUnlocked === true) {
    document.getElementById("unlockSpacePort").style.display = "none";
}

if (planetsColonized[0] === true) {
    document.getElementById("colonizePlanet1Button").style.display = "none";
}

if (planetsColonized[0] === false || planetsColonized[1] === true) {
    document.getElementById("colonizePlanet2Button").style.display = "none";
}

if (planetsColonized[1] === false || planetsColonized[2] === true) {
    document.getElementById("colonizePlanet3Button").style.display = "none";
}

if (planetsColonized[2] === false || planetsColonized[3] === true) {
    document.getElementById("colonizePlanet4Button").style.display = "none";
}

if (planetsColonized[3] === false || planetsColonized[4] === true) {
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

if (buildingsBuilt[3] === false) {
    document.getElementById("upgradeTelescopeButton").style.display = "none";
}

if (buildingsBuilt[4] === false) {
    document.getElementById("toggleRefineryButton").style.display = "none";
    document.getElementById("upgradeRefineryButton").style.display = "none";
    document.getElementById("rocketFuelCount").style.display = "none";
}

if (buildingsBuilt[6] === true) {
    document.getElementById("buildOrbitalTelescope").style.display = "none";
}

if (buildingsBuilt[6] === false || buildingsBuilt[7] === true) {
    document.getElementById("buildSpaceStation").style.display = "none";
}

if (buildingsBuilt[7] === false || buildingsBuilt[8] === true) {
    document.getElementById("buildShipyard").style.display = "none";
}

if (buildingsBuilt[8] === false || buildingsBuilt[7] === true) {
    document.getElementById("buildAsteroidMiningComplex").style.display = "none";
}

if (buildingsBuilt[9] === false || buildingsBuilt[10] === true) {
    document.getElementById("buildDysonSphere").style.display = "none";
}

if (buildingsBuilt[9] === false) {
    document.getElementById("buildAsteroidMinerButton").style.display = "none";
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

if (workerLevel === 7) {
    document.getElementById("upgradeWorkerButton").style.display = "none";
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

if (workerHousingLevel === 8) {
    document.getElementById("upgradeWorkerHousingButton").style.display = "none";
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

if (researchCenterLevel === 4) {
    document.getElementById("upgradeResearchCenterButton").style.display = "none";
}

function researchFactory() {
    if (researchPoints < 100) {
        notEnoughStuff("research");
    } else {
        researchPoints -= 100;
        tick1();

        document.getElementById("buildFactoryButton").style.display = "inline";
        document.getElementById("unlockFactory").style.display = "none";

        factoryUnlocked = true;
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

if (factoryLevel === 5) {
    document.getElementById("upgradeFactoryButton").style.display = "none";
}

function researchSolarPanels() {
    if (researchPoints < 500) {
        notEnoughStuff("research");
    } else {
        researchPoints -= 500;
        tick1();

        solarPanelsUnlocked = true;

        document.getElementById("buildSolarPanelButton").style.display = "inline";
        document.getElementById("unlockSolarPanels").style.display = "none";
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

if (solarPanelLevel === 5) {
    document.getElementById("upgradeSolarPanelButton").style.display = "none";
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

if (solarPanelSpaceLevel === 8) {
    document.getElementById("upgradeSolarPanelSpaceButton").style.display = "none";
}

function researchTelescope() {
    if (researchPoints < 1500) {
        notEnoughStuff("research");
    } else {
        researchPoints -= 1500;
        telescopeUnlocked = true;
        document.getElementById("unlockTelescope").style.display = "none";
        document.getElementById("buildTelescope").style.display = "inline";
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

if (telescopeLevel === 4) {
    document.getElementById("upgradeTelescopeButton").style.display = "none";
}

function researchFuelRefinery() {
    if (researchPoints < 2500) {
        notEnoughStuff("research");
    } else {
        researchPoints -= 2500;
        fuelRefineryUnlocked = true;
        document.getElementById("unlockFuelRefinery").style.display = "none";
        document.getElementById("buildFuelRefinery").style.display = "inline";
        tick1();
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

if (fuelRefineryLevel === 4) {
    document.getElementById("upgradeRefineryButton").style.display = "none";
}

function researchSpaceport() {
    if (researchPoints < 10000) {
        notEnoughStuff("research");
    } else {
        researchPoints -= 10000;
        tick1();

        document.getElementById("buildSpaceportButton").style.display = "inline";
        document.getElementById("unlockSpacePort").style.display = "none";

        spaceportUnlocked = true;
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
