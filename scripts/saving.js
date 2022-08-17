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
        asteroidMinerSpaceLevel

    }))

    document.getElementById("warning").style.visibility = "visible";
    document.getElementById("warning").innerHTML = "Game saved.";

    setTimeout(clearWarning, 2000);


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
    const a = document.createElement('a');
    const type = fileName.split(".").pop();
    a.href = URL.createObjectURL(new Blob([json], { type: `text/${type === "txt" ? "plain" : type}` }));
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
    } catch (err) { }
}

loadData();
setInterval(saveData, 5000);