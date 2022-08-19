function saveData() {
  //saves stuff to local storage
  window.localStorage.setItem(
    "saveKey",
    JSON.stringify({
      money,
      resources,
      refinedResources,
      oil,
      gasoline,
      workers,
      energy,
      researchPoints,
      planetsControlled,
      solarPanels,
      upgradeLevelsIndex,
      spaceshipBuilt,
      rocketFuel,
      resourceSellRate,
      resourceSellUpgrades,
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

  document.getElementById("warning").style.visibility = "visible";
  document.getElementById("warning").innerHTML = "Game saved.";

  setTimeout(clearWarning, 2000);
}

function loadData() {
  //loads stuff from local storage
  const saveString = localStorage.getItem("saveKey");
  if (!saveString) return;
  const save = JSON.parse(saveString);

  money = save.money;
  resources = save.resources;
  refinedResources = save.refinedResources;
  oil = save.oil;
  gasoline = save.gasoline;
  workers = save.workers;
  energy = save.energy;
  researchPoints = save.researchPoints;
  planetsControlled = save.planetsControlled;
  solarPanels = save.solarPanels;
  upgradeLevelsIndex = save.upgradeLevelsIndex;
  spaceshipBuilt = save.spaceshipBuilt;
  rocketFuel = save.rocketFuel;
  resourceSellRate = save.resourceSellRate;
  resourceSellUpgrades = save.resourceSellUpgrades;
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
  //exports data as json file i think
  saveData();
  const json = localStorage.getItem("saveKey");
  const fileName = "save.json";
  const a = document.createElement("a");
  const type = fileName.split(".").pop();
  a.href = URL.createObjectURL(
    new Blob([json], { type: `text/${type === "txt" ? "plain" : type}` })
  );
  a.download = fileName;
  a.click();
}

async function uploadData() {
  //imports data from json file
  try {
    const [fileHandle] = await window.showOpenFilePicker();
    const file = await fileHandle.getFile();
    const contents = await file.text();
    localStorage.setItem("saveKey", contents);
    loadData();
  } catch (err) {}
}

loadData();
setInterval(saveData, 15000);
