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

if (buildingsUnlocked[1] === false) {
  document.getElementById("buildFactoryButton").style.display = "none";
  document.getElementById("upgradeFactoryButton").style.display = "none";
}

if (buildingsUnlocked[1] === true) {
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

if (buildingsUnlocked[2] === false) {
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

if (buildingsUnlocked[5] === false) {
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

if (buildingsUnlocked[3] === false) {
  document.getElementById("buildTelescopeButton").style.display = "none";
  document.getElementById("unlockFuelRefinery").style.display = "none";
}

if (buildingsUnlocked[3] === true) {
  document.getElementById("unlockTelescope").style.display = "none";
}

if (buildingsBuilt[3] === true) {
  document.getElementById("buildTelescopeButton").style.display = "none";
}

if (buildingsBuilt[3] === false) {
  document.getElementById("unlockFuelRefinery").style.display = "none";
}

if (buildingsUnlocked[4] === false) {
  document.getElementById("buildFuelRefineryButton").style.display = "none";
  document.getElementById("unlockSpacePort").style.display = "none";
}

if (buildingsUnlocked[4] === true) {
  document.getElementById("unlockFuelRefinery").style.display = "none";
}

if (buildingsBuilt[4] === true) {
  document.getElementById("buildFuelRefineryButton").style.display = "none";
  document.getElementById("unlockSpacePort").style.display = "inline";
}

if (buildingsBuilt[4] === false) {
  document.getElementById("refineryDiv").style.display = "none";
}

if (buildingsUnlocked[2] === true) {
  document.getElementById("unlockSolarPanels").style.display = "none";
}

if (buildingsBuilt[5] === true) {
  document.getElementById("buildSpaceportButton").style.display = "none";
}

if (buildingsBuilt[5] === false) {
  document.getElementById("SpaceportTab").style.display = "none";
}

if (buildingsUnlocked[5] === true) {
  document.getElementById("unlockSpacePort").style.display = "none";
}

//colonized planets

if (planetsColonized[0] === true) {
  document.getElementById("colonizePlanet1Button").style.display = "none";
}

if (planetsColonized[1] === true || planetsColonized[0] === false) {
  document.getElementById("colonizePlanet2Button").style.display = "none";
}

if (planetsColonized[2] === true || planetsColonized[1] === false) {
  document.getElementById("colonizePlanet3Button").style.display = "none";
}

if (planetsColonized[3] === true || planetsColonized[2] === false) {
  document.getElementById("colonizePlanet4Button").style.display = "none";
}

if (planetsColonized[4] === true || planetsColonized[3] === false) {
  document.getElementById("colonizePlanet5Button").style.display = "none";
}

//resource selling buttons

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

//space buttons

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

//upgrade buttons

if (workerLevel === 7) {
  document.getElementById("upgradeWorkerButton").style.display = "none";
}

if (workerHousingLevel === 8) {
  document.getElementById("upgradeWorkerHousingButton").style.display = "none";
}

if (researchCenterLevel === 4) {
  document.getElementById("upgradeResearchCenterButton").style.display = "none";
}

if (factoryLevel === 5) {
  document.getElementById("upgradeFactoryButton").style.display = "none";
}

if (solarPanelLevel === 5) {
  document.getElementById("upgradeSolarPanelButton").style.display = "none";
}

if (solarPanelSpaceLevel === 8) {
  document.getElementById("upgradeSolarPanelSpaceButton").style.display = "none";
}

if (telescopeLevel === 4) {
  document.getElementById("upgradeTelescopeButton").style.display = "none";
}

if (fuelRefineryLevel === 4) {
  document.getElementById("upgradeRefineryButton").style.display = "none";
}

document.getElementById("galaxyOverviewTab").style.display = "none";

updateButtons();
