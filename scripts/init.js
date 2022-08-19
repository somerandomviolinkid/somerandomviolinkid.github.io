function initialize() {
  loadData();
  setInterval(saveData, 5000);

  tick1();
  updateShipyardNumbers();

  setInterval(tick2, 1000);
  if (buildingsBuilt[0]) {
    document.getElementById("buildResearchCenterButton").style.display = "none";
    document.getElementById("researchPointCount").style.display = "block";
    document.getElementById("researchTitle").style.display = "inline";
    document.getElementById("researchTitleBreak").style.display = "inline";
  } else {
    document.getElementById("buildResearchCenterButton").style.display = "inline";
    document.getElementById("upgradeResearchCenterButton").style.display = "none";
    document.getElementById("researchPointCount").style.display = "none";
    document.getElementById("researchTitle").style.display = "none";
    document.getElementById("researchTitleBreak").style.display = "none";
    document.getElementById("unlockFactory").style.display = "none";
    document.getElementById("raiseResourcePrices1Button").style.display = "none";
  }

  if (buildingsUnlocked[1]) {
    document.getElementById("unlockFactory").style.display = "none";
  } else {
    document.getElementById("buildFactoryButton").style.display = "none";
    document.getElementById("upgradeFactoryButton").style.display = "none";
  }

  if (buildingsBuilt[1]) {
    document.getElementById("unlockFactory").style.display = "none";
    document.getElementById("buildFactoryButton").style.display = "none";
  } else {
    document.getElementById("unlockSolarPanels").style.display = "none";
    document.getElementById("refinedResourceCount").style.display = "none";
    document.getElementById("FactoryTab").style.display = "none";
  }

  if (buildingsUnlocked[2]) {
    document.getElementById("unlockSolarPanels").style.display = "none";
  } else {
    document.getElementById("buildSolarPanelButton").style.display = "none";
    document.getElementById("solarPanelCount").style.display = "none";
  }

  if (buildingsBuilt[2]) {
    document.getElementById("unlockSolarPanels").style.display = "none";
    document.getElementById("buildSolarPanelButton").style.display = "none";
    document.getElementById("unlockTelescope").style.display = "inline";
  } else {
    document.getElementById("buildMoreSolarPanels").style.display = "none";
    document.getElementById("upgradeSolarPanelButton").style.display = "none";
    document.getElementById("upgradeSolarPanelSpaceButton").style.display = "none";
    document.getElementById("energyCount").style.display = "none";
    document.getElementById("unlockTelescope").style.display = "none";
  }

  if (buildingsUnlocked[3]) {
    document.getElementById("unlockTelescope").style.display = "none";
  } else {
    document.getElementById("buildTelescopeButton").style.display = "none";
    document.getElementById("unlockFuelRefinery").style.display = "none";
  }

  if (buildingsBuilt[3]) {
    document.getElementById("buildTelescopeButton").style.display = "none";
  } else {
    document.getElementById("unlockFuelRefinery").style.display = "none";
  }

  if (buildingsUnlocked[4]) {
    document.getElementById("unlockFuelRefinery").style.display = "none";
  } else {
    document.getElementById("buildFuelRefineryButton").style.display = "none";
    document.getElementById("unlockSpacePort").style.display = "none";
  }

  if (buildingsBuilt[4]) {
    document.getElementById("buildFuelRefineryButton").style.display = "none";
    document.getElementById("unlockSpacePort").style.display = "inline";
  } else {
    document.getElementById("refineryDiv").style.display = "none";
  }

  if (buildingsUnlocked[5]) {
    document.getElementById("unlockSpacePort").style.display = "none";
  } else {
    document.getElementById("unlockSpacePort").style.display = "none";
    document.getElementById("buildSpaceportButton").style.display = "none";
    document.getElementById("SpaceportTab").style.display = "none";
  }

  if (buildingsBuilt[5]) {
    document.getElementById("buildSpaceportButton").style.display = "none";
  } else {
    document.getElementById("SpaceportTab").style.display = "none";
  }

  if (industryUpgradesBought[0]) {
    document.getElementById("industryUpgrade1Button").style.display = "none";
  }

  if (industryUpgradesBought[1] || !industryUpgradesBought[0]) {
    document.getElementById("industryUpgrade2Button").style.display = "none";
  }

  if (spaceshipLaunched) {
    document.getElementById("launchSpaceshipButton").style.display = "none";
    document.getElementById("constructSpaceshipButton").style.display = "none";
  } else {
    document.getElementById("systemOverviewTab").style.display = "none";
    document.getElementById("industryUpgrade1Button").style.display = "none";
  }

  if (spaceshipBuilt) {
    document.getElementById("constructSpaceshipButton").style.display = "none";
  } else {
    document.getElementById("launchSpaceshipButton").style.display = "none";
  }

  //colonized planets

  if (planetsColonized[0]) {
    document.getElementById("colonizePlanet1Button").style.display = "none";
  }

  if (planetsColonized[1] || !planetsColonized[0]) {
    document.getElementById("colonizePlanet2Button").style.display = "none";
  }

  if (planetsColonized[2] || !planetsColonized[1]) {
    document.getElementById("colonizePlanet3Button").style.display = "none";
  }

  if (planetsColonized[3] || !planetsColonized[2]) {
    document.getElementById("colonizePlanet4Button").style.display = "none";
  }

  if (planetsColonized[4] || !planetsColonized[3]) {
    document.getElementById("colonizePlanet5Button").style.display = "none";
  }

  //resource selling buttons

  if (resourceSellUpgrades[0]) {
    document.getElementById("raiseResourcePrices1Button").style.display = "none";
  }

  if (!resourceSellUpgrades[0] || resourceSellUpgrades[1]) {
    document.getElementById("raiseResourcePrices2Button").style.display = "none";
  }

  if (!resourceSellUpgrades[1] || resourceSellUpgrades[2]) {
    document.getElementById("raiseResourcePrices3Button").style.display = "none";
  }

  if (!resourceSellUpgrades[2] || resourceSellUpgrades[3]) {
    document.getElementById("raiseResourcePrices4Button").style.display = "none";
  }

  if (!buildingsBuilt[3]) {
    document.getElementById("upgradeTelescopeButton").style.display = "none";
  }

  if (!buildingsBuilt[4]) {
    document.getElementById("toggleRefineryButton").style.display = "none";
    document.getElementById("upgradeRefineryButton").style.display = "none";
    document.getElementById("rocketFuelCount").style.display = "none";
  }

  //space buttons

  if (buildingsBuilt[6]) {
    document.getElementById("buildOrbitalTelescope").style.display = "none";
  }

  if (!buildingsBuilt[6] || buildingsBuilt[7]) {
    document.getElementById("buildSpaceStation").style.display = "none";
  }

  if (!buildingsBuilt[7] || buildingsBuilt[8]) {
    document.getElementById("buildShipyard").style.display = "none";
  }

  if (!buildingsBuilt[8] || buildingsBuilt[7]) {
    document.getElementById("buildAsteroidMiningComplex").style.display = "none";
  }

  if (!buildingsBuilt[9] || buildingsBuilt[10]) {
    document.getElementById("buildDysonSphere").style.display = "none";
  }

  if (!buildingsBuilt[9]) {
    document.getElementById("buildAsteroidMinerButton").style.display = "none";
  }

  //upgrade buttons

  if (workerLevel >= 7) {
    document.getElementById("upgradeWorkerButton").style.display = "none";
  }

  if (workerHousingLevel >= 8) {
    document.getElementById("upgradeWorkerHousingButton").style.display = "none";
  }

  if (researchCenterLevel >= 4) {
    document.getElementById("upgradeResearchCenterButton").style.display = "none";
  }

  if (factoryLevel >= 5) {
    document.getElementById("upgradeFactoryButton").style.display = "none";
  }

  if (solarPanelLevel >= 5) {
    document.getElementById("upgradeSolarPanelButton").style.display = "none";
  }

  if (solarPanelSpaceLevel >= 8) {
    document.getElementById("upgradeSolarPanelSpaceButton").style.display = "none";
  }

  if (telescopeLevel >= 4) {
    document.getElementById("upgradeTelescopeButton").style.display = "none";
  }

  if (fuelRefineryLevel >= 4) {
    document.getElementById("upgradeRefineryButton").style.display = "none";
  }

  document.getElementById("galaxyOverviewTab").style.display = "none";

  updateButtons();
}
