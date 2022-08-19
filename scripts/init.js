function initialize(reinit = false) {
  loadData();

  if (buildingsBuilt.researchCenterBuilt) {
    document.getElementById("buildResearchCenterButton").style.display = "none";
    document.getElementById("researchPointCount").style.display = "block";
    document.getElementById("researchTitle").style.display = "inline";
    document.getElementById("researchTitleBreak").style.display = "inline";
    document.getElementById("unlockDrillingCenter").style.display = "inline";
  } else {
    document.getElementById("buildResearchCenterButton").style.display = "inline";
    document.getElementById("upgradeResearchCenterButton").style.display = "none";
    document.getElementById("researchPointCount").style.display = "none";
    document.getElementById("researchTitle").style.display = "none";
    document.getElementById("researchTitleBreak").style.display = "none";
    document.getElementById("unlockDrillingCenter").style.display = "none";
    document.getElementById("raiseResourcePrices1Button").style.display = "none";
  }

  if (buildingsUnlocked.drillingCenterUnlocked) {
    document.getElementById("unlockDrillingCenter").style.display = "none";
  } else {
    document.getElementById("buildDrillingCenterButton").style.display = "none";
  }

  if (buildingsBuilt.drillingCenterBuilt) {
    document.getElementById("buildDrillingCenterButton").style.display = "none";
    document.getElementById("WorkerTab").style.display = "inline";
    document.getElementById("workerCount").style.display = "block";
  } else {
    document.getElementById("WorkerTab").style.display = "none";
    document.getElementById("workerCount").style.display = "none";
    document.getElementById("unlockPumpjack").style.display = "none";
  }

  if (buildingsUnlocked.pumpjackUnlocked) {
    document.getElementById("unlockPumpjack").style.display = "none";
  } else {
    document.getElementById("buildPumpjackButton").style.display = "none";
  }

  if (buildingsBuilt.pumpjackBuilt) {
    document.getElementById("oilCount").style.display = "block";
    document.getElementById("buildPumpjackButton").style.display = "none";
  } else {
    document.getElementById("manualOilButtons").style.display = "none";
    document.getElementById("unlockFactory").style.display = "none";
  }

  if (buildingsUnlocked.factoryUnlocked) {
    document.getElementById("unlockFactory").style.display = "none";
  } else {
    document.getElementById("buildFactoryButton").style.display = "none";
    document.getElementById("upgradeFactoryButton").style.display = "none";
  }

  if (buildingsBuilt.factoryBuilt) {
    document.getElementById("buildFactoryButton").style.display = "none";
  } else {
    document.getElementById("unlockSolarPanels").style.display = "none";
    document.getElementById("refinedResourceCount").style.display = "none";
    document.getElementById("FactoryTab").style.display = "none";
  }

  if (buildingsUnlocked.solarPanelUnlocked) {
    document.getElementById("unlockSolarPanels").style.display = "none";
  } else {
    document.getElementById("buildSolarPanelButton").style.display = "none";
    document.getElementById("solarPanelCount").style.display = "none";
  }

  if (buildingsBuilt.solarPanelBuilt) {
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

  if (buildingsUnlocked.spacePortUnlocked) {
    document.getElementById("unlockSpacePort").style.display = "none";
  } else {
    document.getElementById("unlockSpacePort").style.display = "none";
    document.getElementById("buildSpaceportButton").style.display = "none";
    document.getElementById("SpaceportTab").style.display = "none";
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

  if (buildingsUnlocked.telescopeUnlocked) {
    document.getElementById("unlockTelescope").style.display = "none";
  } else {
    document.getElementById("buildTelescopeButton").style.display = "none";
    document.getElementById("unlockFuelRefinery").style.display = "none";
  }

  if (buildingsBuilt.telescopeBuilt) {
    document.getElementById("buildTelescopeButton").style.display = "none";
  } else {
    document.getElementById("unlockFuelRefinery").style.display = "none";
    document.getElementById("upgradeTelescopeButton").style.display = "none";
  }

  if (buildingsUnlocked.fuelRefineryUnlocked) {
    document.getElementById("unlockFuelRefinery").style.display = "none";
  } else {
    document.getElementById("buildFuelRefineryButton").style.display = "none";
    document.getElementById("unlockSpacePort").style.display = "none";
  }

  if (buildingsBuilt.fuelRefineryBuilt) {
    document.getElementById("buildFuelRefineryButton").style.display = "none";
    document.getElementById("unlockSpacePort").style.display = "inline";
  } else {
    document.getElementById("fuelRefineryDiv").style.display = "none";
    document.getElementById("toggleRefineryButton").style.display = "none";
    document.getElementById("upgradeRefineryButton").style.display = "none";
    document.getElementById("rocketFuelCount").style.display = "none";
  }

  if (buildingsBuilt.spacePortBuilt) {
    document.getElementById("buildSpaceportButton").style.display = "none";
  } else {
    document.getElementById("SpaceportTab").style.display = "none";
  }

  //industry upgrades

  if (industryUpgradesBought[0]) {
    document.getElementById("industryUpgrade1Button").style.display = "none";
  }

  if (industryUpgradesBought[1] || !industryUpgradesBought[0]) {
    document.getElementById("industryUpgrade2Button").style.display = "none";
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

  //upgrade buttons (hides buttons at max level)

  if (upgradeLevelsIndex.manualResourceLevel >= 7) {
    document.getElementById("upgradeResourceClickButton").style.display = "none";
  }

  if (upgradeLevelsIndex.workerLevel >= 9) {
    document.getElementById("upgradeWorkerButton").style.display = "none";
  }

  if (upgradeLevelsIndex.workerHousingLevel >= 12) {
    document.getElementById("upgradeWorkerHousingButton").style.display = "none";
  }

  if (upgradeLevelsIndex.researchCenterLevel >= 4) {
    document.getElementById("upgradeResearchCenterButton").style.display = "none";
  }

  if (upgradeLevelsIndex.factoryLevel >= 5) {
    document.getElementById("upgradeFactoryButton").style.display = "none";
  }

  if (upgradeLevelsIndex.solarPanelLevel >= 5) {
    document.getElementById("upgradeSolarPanelButton").style.display = "none";
  }

  if (upgradeLevelsIndex.solarPanelSpaceLevel >= 8) {
    document.getElementById("upgradeSolarPanelSpaceButton").style.display = "none";
  }

  if (upgradeLevelsIndex.telescopeLevel >= 4) {
    document.getElementById("upgradeTelescopeButton").style.display = "none";
  }

  if (upgradeLevelsIndex.fuelRefineryLevel >= 4) {
    document.getElementById("upgradeRefineryButton").style.display = "none";
  }

  //hides galaxy tab
  document.getElementById("galaxyOverviewTab").style.display = "none";

  updateButtons();
  tick1();
  updateShipyardNumbers();
  if (!reinit) {
    setInterval(tick2, 1000);
    setInterval(saveData, 15000);
    document.getElementById("defaultOpen").click();
  }
}
