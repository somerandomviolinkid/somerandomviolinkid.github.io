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
      solarPanelLevel,
      factoryLevel,
      solarPanelSpaceLevel,
      spaceshipBuilt,
      rocketFuel,
      resourceSellRate,
      resourceSellUpgrades,
      fuelRefineryLevel,
      telescopeLevel,
      planetsColonized,
      spaceshipLaunched,
      buildingsBuilt,
      buildingsUnlocked,
      industryUpgradesBought,
      ships,
      asteroidMinerLevel,
      asteroidMinerSpaceLevel,
    })
  );

  showWarning("Game saved.");
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
  solarPanelLevel = save.solarPanelLevel;
  factoryLevel = save.factoryLevel;
  solarPanelSpaceLevel = save.solarPanelSpaceLevel;
  spaceshipBuilt = save.spaceshipBuilt;
  rocketFuel = save.rocketFuel;
  resourceSellRate = save.resourceSellRate;
  resourceSellUpgrades = save.resourceSellUpgrades;
  fuelRefineryLevel = save.fuelRefineryLevel;
  telescopeLevel = save.telescopeLevel;
  planetsColonized = save.planetsColonized;
  spaceshipLaunched = save.spaceshipLaunched;
  buildingsBuilt = save.buildingsBuilt;
  buildingsUnlocked = save.buildingsUnlocked;
  industryUpgradesBought = save.industryUpgradesBought;
  ships = save.ships;
  asteroidMinerLevel = save.asteroidMinerLevel;
  asteroidMinerSpaceLevel = save.asteroidMinerSpaceLevel;

  tick1();
  updateShipyardNumbers();

  showWarning("Data successfully loaded!");
}

function resetData() {
  //do this if your workers go on strike
  localStorage.clear();
  location.reload();
}

function downloadData() {
  saveData();
  const json = localStorage.getItem("saveKey");
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([json], { type: "application/json" }));
  a.download = "save.json";
  a.click();
}

async function uploadData() {
  try {
    /** @type {HTMLInputElement} */
    const importInput = document.getElementById("importDataFiles");
    if (!importInput || !importInput.files || !importInput.files[0]) return console.info("Aborted import");
    const contents = await importInput.files[0].text();
    // Clear input value so you can import the same file twice in a row
    importInput.value = "";
    localStorage.setItem("saveKey", contents);
    initialize();
  } catch (err) {
    console.error(err);
  }
}
