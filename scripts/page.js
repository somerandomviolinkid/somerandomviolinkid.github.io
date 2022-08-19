function openTab(evt, tabName) {
  // Get all elements with class="tabcontent" and hide them
  const tabcontent = document.getElementsByClassName("tabcontent");
  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  const tablinks = document.getElementsByClassName("tablinks");
  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.classList.add("active");
}

//updates upgrade buttons on page
function updateButtons() {
  document.getElementById("upgradeResourceClickButton").innerHTML =
    "Your resource click level is " +
    formatNumber(upgradeLevelsIndex.manualResourceLevel) +
    " and you get " +
    formatNumber(manualResourceEfficiency[upgradeLevelsIndex.manualResourceLevel]) +
    " minerals per click.<br>Next level will give " +
    formatNumber(manualResourceEfficiency[upgradeLevelsIndex.manualResourceLevel + 1]) +
    " minerals per click.<br>Upgrading resource click cost " +
    formatNumber(manualResourceEfficiencyCosts[upgradeLevelsIndex.manualResourceLevel + 1]) +
    " money.";
  document.getElementById("upgradeWorkerButton").innerHTML =
    "Your workers are level " +
    formatNumber(upgradeLevelsIndex.workerLevel) +
    " and each worker produces " +
    formatNumber(workerEfficiency[upgradeLevelsIndex.workerLevel]) +
    " minerals per second.<br>Next level will make workers produce " +
    formatNumber(workerEfficiency[upgradeLevelsIndex.workerLevel + 1]) +
    " minerals per second.<br>Upgrading worker cost " +
    formatNumber(workerEfficiencyCosts[upgradeLevelsIndex.workerLevel + 1]) +
    " money.";
  document.getElementById("upgradeWorkerHousingButton").innerHTML =
    "Your worker housing level is " +
    formatNumber(upgradeLevelsIndex.workerHousingLevel) +
    ".<br>Next level will make worker housing house " +
    formatNumber(workerHousingSpace[upgradeLevelsIndex.workerHousingLevel + 1]) +
    " workers.<br>Upgrading worker housing cost " +
    formatNumber(workerHousingMoneyCosts[upgradeLevelsIndex.workerHousingLevel + 1]) +
    " money and " +
    formatNumber(workerHousingResourceCosts[upgradeLevelsIndex.workerHousingLevel + 1]) +
    " minerals.";
  document.getElementById("upgradeResearchCenterButton").innerHTML =
    "Your research center is level " +
    formatNumber(upgradeLevelsIndex.researchCenterLevel) +
    " and you get " +
    formatNumber(researchCenterEfficiency[upgradeLevelsIndex.researchCenterLevel]) +
    " research points every second.<br>Next level will make the research center produce " +
    formatNumber(researchCenterEfficiency[upgradeLevelsIndex.researchCenterLevel + 1]) +
    " research points per second.<br>Upgrading research center " +
    formatNumber(researchCenterEfficiencyCosts[upgradeLevelsIndex.researchCenterLevel + 1]) +
    " money.";
  document.getElementById("upgradeFactoryButton").innerHTML =
    "Your factory level is " +
    formatNumber(upgradeLevelsIndex.factoryLevel) +
    " and it produces " +
    formatNumber(factoryEfficiency[upgradeLevelsIndex.factoryLevel]) +
    " metal per second.<br>Next level will make factory produce " +
    formatNumber(factoryEfficiency[upgradeLevelsIndex.factoryLevel + 1]) +
    " metal per second.<br>Upgrading factory cost " +
    formatNumber(factoryEfficiencyMoneyCosts[upgradeLevelsIndex.factoryLevel + 1]) +
    " money and " +
    formatNumber(factoryEfficiencyResourceCosts[upgradeLevelsIndex.factoryLevel + 1]) +
    " minerals.";
  document.getElementById("upgradeSolarPanelButton").innerHTML =
    "Your solar panel level is " +
    formatNumber(upgradeLevelsIndex.solarPanelLevel) +
    " and each solar panel produces " +
    formatNumber(solarPanelEfficiency[upgradeLevelsIndex.solarPanelLevel]) +
    " energy per second.<br>Next level will make solar panels produce " +
    formatNumber(solarPanelEfficiency[upgradeLevelsIndex.solarPanelLevel + 1]) +
    " energy per second.<br>Upgrading solar panels cost " +
    formatNumber(solarPanelEfficiencyMoneyCosts[upgradeLevelsIndex.solarPanelLevel + 1]) +
    " money and " +
    formatNumber(solarPanelEfficiencyRefinedResourceCosts[upgradeLevelsIndex.solarPanelLevel + 1]) +
    " metal.";
  document.getElementById("upgradeSolarPanelSpaceButton").innerHTML =
    "Your solar panel space level is " +
    formatNumber(upgradeLevelsIndex.solarPanelSpaceLevel) +
    ".<br>Next level will make you have " +
    formatNumber(solarPanelSpace[upgradeLevelsIndex.solarPanelSpaceLevel + 1]) +
    " solar panel space.<br>Upgrading solar panels space costs " +
    formatNumber(solarPanelSpaceCosts[upgradeLevelsIndex.solarPanelSpaceLevel + 1]) +
    " minerals.";
  document.getElementById("upgradeTelescopeButton").innerHTML =
    "Your telescope level is " +
    formatNumber(upgradeLevelsIndex.telescopeLevel) +
    " and it produces " +
    formatNumber(telescopeEfficiency[upgradeLevelsIndex.telescopeLevel]) +
    " research points per second.<br>Next level will make stelescope produce " +
    formatNumber(telescopeEfficiency[upgradeLevelsIndex.telescopeLevel + 1]) +
    " research points per second.<br>Upgrading telescope cost " +
    formatNumber(telescopeEfficiencyMoneyCosts[upgradeLevelsIndex.telescopeLevel + 1]) +
    " money and " +
    formatNumber(telescopeEfficiencyRefinedResoucresCost[upgradeLevelsIndex.telescopeLevel + 1]) +
    " metal.";
  document.getElementById("upgradeRefineryButton").innerHTML =
    "Your refinery level is " +
    formatNumber(upgradeLevelsIndex.fuelRefineryLevel) +
    " and it produces " +
    formatNumber(fuelRefineryEfficiency[upgradeLevelsIndex.fuelRefineryLevel]) +
    " fuel per second.<br>Next level will make refinery produce " +
    formatNumber(fuelRefineryEfficiency[upgradeLevelsIndex.fuelRefineryLevel + 1]) +
    " rocket fuel per second.<br>Upgrading refinery cost " +
    formatNumber(fuelRefineryEfficiencyMoneyCosts[upgradeLevelsIndex.fuelRefineryLevel + 1]) +
    " money and " +
    formatNumber(fuelRefineryEfficiencyRefinedResourcesCost[upgradeLevelsIndex.fuelRefineryLevel + 1]) +
    " metal.";
}

function tick1() {
  money = roundNumber(money, 2);

  //updates numbers on page
  document.getElementById("moneyCount").innerHTML = "Money: " + formatNumber(money);
  document.getElementById("workerCount").innerHTML = "Workers: " + formatNumber(workers) + " / " + formatNumber(planetsControlled * workerHousingSpace[upgradeLevelsIndex.workerHousingLevel]);
  document.getElementById("resourceCount").innerHTML = "Minerals: " + formatNumber(resources);
  document.getElementById("refinedResourceCount").innerHTML = "Metal: " + formatNumber(refinedResources);
  document.getElementById("oilCount").innerHTML = "Oil: " + formatNumber(oil);
  document.getElementById("gasolineCount").innerHTML = "Gasoline: " + formatNumber(gasoline);
  document.getElementById("energyCount").innerHTML = "Energy: " + formatNumber(energy);
  document.getElementById("researchPointCount").innerHTML = "Research points: " + formatNumber(researchPoints);
  document.getElementById("solarPanelCount").innerHTML =
    "Solar panels: " + formatNumber(solarPanels) + " / " + formatNumber(planetsControlled * solarPanelSpace[upgradeLevelsIndex.solarPanelSpaceLevel]);
  document.getElementById("rocketFuelCount").innerHTML = "Rocket fuel: " + formatNumber(rocketFuel);
  document.getElementById("planetsControlledCount").innerHTML = "Planets controlled: " + formatNumber(planetsControlled);
}

function updateShipyardNumbers() {
  //updates buttons and numbers on shipyard tab
  document.getElementById("asteroidMinerCount").innerHTML = "Asteroid miners: " + ships[0] + " / " + asteroidMinerSpace[asteroidMinerSpaceLevel];
  document.getElementById("fighterCount").innerHTML = "Fighters: " + ships[1];
  document.getElementById("battleshipCount").innerHTML = "Battleships: " + ships[2];
}

//audio
let soundtrack = document.getElementById("audioThing");
function playAudio() {
  soundtrack.play();
}

function pauseAudio() {
  soundtrack.pause();
}
