//resources
let money = 100000000000;
let totalMoney = 0;
let resources = 1000000000000;
let totalResources = 0;
let refinedResources = 10000000000000;
let workers = 0;
let oil = 0;
let gasoline = 0;
let energy = 0;
let researchPoints = 0;
let planetsControlled = 1;
let solarPanels = 1;
let rocketFuel = 0;

//asteroid miners, fighters, battleships
let ships = [0, 0, 0]
let fleetPower = ships[1] + (ships[2] * 120);

//buildings built index
let buildingsBuilt = {
    researchCenterBuilt: false,
    drillingCenterBuilt: false,
    pumpjackBuilt: false,
    factoryBuilt: false,
    powerPlantBuilt: false,
    solarPanelBuilt: false,
    telescopeBuilt: false,
    oilRefineryUnlocked: false,
    fuelRefineryBuilt: false,
    spacePortBuilt: false,
    orbitalTelescopeBuilt: false,
    spaceStationBuilt: false,
    shipyardBuilt: false,
    steroidMiningComplexBuilt: false,
    dysonSphereBuilt: false
};

//buildings unlocked index
let buildingsUnlocked = {
    researchCenterUnlocked: true,
    drillingCenterUnlocked: false,
    pumpjackUnlocked: false,
    factoryUnlocked: false,
    powerPlantUnlocked: false,
    solarPanelUnlocked: false,
    telescopeUnlocked: false,
    oilRefineryUnlocked: false,
    fuelRefineryUnlocked: false,
    spacePortUnlocked: false,
    orbitalTelescopeUnlocked: false,
    spaceStationUnlocked: false,
    shipyardUnlocked: false,
    asteroidMiningComplexUnlocked: false,
    dysonSphereUnlocked: false
};

//upgrade levels index (contains upgrade level of everything and anything that can be upgraded)
let upgradeLevelsIndex = {
    manualResourceLevel: 1,
    workerLevel: 1,
    workerHousingLevel: 1,
    researchCenterLevel: 1,
    factoryLevel: 1,
    solarPanelLevel: 1,
    solarPanelSpaceLevel: 1,
    telescopeLevel: 1,
    fuelRefineryLevel: 1
}

//manual resource click efficiency and costs
const manualResourceEfficiency = [0, 1, 5, 20, 75, 200, 500, 2500, 10000];
const manualResourceEfficiencyCosts = [0, 0, 5, 100, 800, 5000, 25000, 200000, 1000000];

//worker upgrade efficiency and money costs
const workerEfficiency = [0, 1, 2, 4, 10, 25, 75, 200, 500, 1000];
const workerEfficiencyCosts = [0, 0, 100, 500, 2500, 10000, 50000, 200000, 1000000, 5000000];

//worker housing upgrade efficiency and costs
const workerHousingSpace = [0, 10, 15, 24, 36, 50, 75, 110, 150, 200, 360, 600, 1000];
const workerHousingMoneyCosts = [0, 0, 20, 50, 125, 500, 2000, 10000, 40000, 100000, 250000, 800000, 3000000];
const workerHousingResourceCosts = [0, 0, 50, 120, 250, 600, 2500, 15000, 100000, 300000, 1000000, 4000000, 12500000];

//research center costs and upgrade efficiency
const researchCenterEfficiency = [0, 1, 5, 20, 75];
const researchCenterEfficiencyCosts = [0, 0, 10000, 50000, 200000];

//factory upgrade efficiency and costs and toggle
const factoryEfficiency = [0, 1, 5, 15, 40, 100];
const factoryEfficiencyMoneyCosts = [0, 0, 40000, 75000, 500000, 2500000];
const factoryEfficiencyResourceCosts = [0, 0, 100000, 400000, 2500000, 12000000];
let factoryToggle = false;

//solar panel upgrades + costs
const solarPanelEfficiency = [0, 5, 12, 25, 75, 200, 500];
const solarPanelEfficiencyMoneyCosts = [0, 0, 75000, 180000, 800000, 2000000, 10000000];
const solarPanelEfficiencyRefinedResourceCosts = [0, 0, 500, 1200, 5000, 20000, 75000];

//solar panel space costs
const solarPanelSpace = [0, 1, 2, 3, 5, 8, 12, 18, 25];
const solarPanelSpaceCosts = [0, 0, 12000, 40000, 150000, 800000, 2500000, 12000000, 50000000];

//telescope upgrades costs
const telescopeEfficiency = [0, 100, 250, 750, 2000];
const telescopeEfficiencyMoneyCosts = [0, 0, 300000, 1200000, 5000000];
const telescopeEfficiencyRefinedResoucresCost = [0, 0, 1200, 5000, 25000];

//refinery upgrades costs
const fuelRefineryEfficiency = [0, 2, 5, 12, 25];
const fuelRefineryEfficiencyMoneyCosts = [0, 0, 500000, 1800000, 5000000];
const fuelRefineryEfficiencyRefinedResourcesCost = [0, 0, 1000, 7500, 25000, 100000];
let refineryToggle = false;

let asteroidMinerLevel = 0;
let asteroidMinerEfficiency = [10000, 25000, 75000, 200000];
let asteroidMinerEfficiencyMoneyCosts = [0, 15000000, 100000000, 400000000];
let asteroidMinerEfficiencyRefinedResourceCosts = [0, 250000, 1000000, 5000000];

let asteroidMinerSpaceLevel = 0;
let asteroidMinerSpace = [25, 50, 100, 250, 1000];
let asteroidMinerSpaceMoneyCosts = [0];
let asteroidMinerSpaceResourceCosts = [0];

let earthIndustryMulitplier = 1;

let spaceshipBuilt = false;
let spaceshipLaunched = false;

//resource and oil sell/conversion rates
let resourceSellRate = 0.1;
let resourceSellUpgrades = [false, false, false, false];

let oilToEnergyRate = 2;

//planets colonized
let planetsColonized = [false, false, false, false, false];

let industryUpgradesBought = [false, false];