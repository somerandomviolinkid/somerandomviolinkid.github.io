document.getElementById("warning").style.visibility = "hidden";

function clearWarning() {
  document.getElementById("warning").style.visibility = "hidden";
}

function notEnoughStuff(resource) {
  //get more money dipshit
  document.getElementById("warning").style.visibility = "visible";
  document.getElementById("warning").innerHTML = "Not enough " + resource + "!";
  setTimeout(clearWarning, 2000);
}

function tick2() {
  //updates resource amounts every second
  resources += workers * workerEfficiency[upgradeLevelsIndex.workerLevel];
  resources += ships[0] * asteroidMinerEfficiency[asteroidMinerLevel];

  if (buildingsBuilt.researchCenterBuilt === true) {
    researchPoints +=
      researchCenterEfficiency[upgradeLevelsIndex.researchCenterLevel];
  }

  if (buildingsBuilt.solarPanelBuilt === true) {
    energy +=
      solarPanels * solarPanelEfficiency[upgradeLevelsIndex.solarPanelLevel];
  }

  if (buildingsBuilt.telescopeBuilt === true) {
    researchPoints += telescopeEfficiency[upgradeLevelsIndex.telescopeLevel];
  }

  if (buildingsBuilt.orbitalTelescopeBuilt === true) {
    researchPoints += 15000;
  }

  if (
    factoryToggle &&
    resources >=
      2 *
        earthIndustryMulitplier *
        factoryEfficiency[upgradeLevelsIndex.factoryLevel] &&
    energy >=
      5 *
        earthIndustryMulitplier *
        factoryEfficiency[upgradeLevelsIndex.factoryLevel]
  ) {
    //metal toggle
    resources -=
      2 *
      earthIndustryMulitplier *
      factoryEfficiency[upgradeLevelsIndex.factoryLevel];
    energy -=
      5 *
      earthIndustryMulitplier *
      factoryEfficiency[upgradeLevelsIndex.factoryLevel];
    refinedResources +=
      earthIndustryMulitplier *
      factoryEfficiency[upgradeLevelsIndex.factoryLevel];
  }

  if (
    refineryToggle &&
    energy >=
      10 *
        earthIndustryMulitplier *
        fuelRefineryEfficiency[upgradeLevelsIndex.fuelRefineryLevel] &&
    gasoline >=
      3 *
        earthIndustryMulitplier *
        fuelRefineryEfficiency[upgradeLevelsIndex.fuelRefineryLevel]
  ) {
    //rocket fuel toggle
    energy -=
      10 *
      earthIndustryMulitplier *
      fuelRefineryEfficiency[upgradeLevelsIndex.fuelRefineryLevel];
    gasoline -=
      5 *
      earthIndustryMulitplier *
      fuelRefineryEfficiency[upgradeLevelsIndex.fuelRefineryLevel];
    rocketFuel +=
      earthIndustryMulitplier *
      fuelRefineryEfficiency[upgradeLevelsIndex.fuelRefineryLevel];
  }
  tick1();
}

setInterval(tick2, 1000);

function manualResources() {
  resources += manualResourceEfficiency[upgradeLevelsIndex.manualResourceLevel];
  tick1();
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

function manualOil() {
  oil++;
  tick1();
}

function convertOilToEnergy(percent) {
  //sells part of oil
  energy += oil * (percent / 100) * oilToEnergyRate;
  let roundedEnergy = energy.toFixed(2);
  energy = Number(roundedEnergy);

  oil -= oil * (percent / 100);
  let roundedOil = oil.toFixed(1);
  oil = Number(roundedOil);
  tick1();
}

function purchaseWorkers(amount) {
  //puchases workers from buttons
  if (money < 10 * amount) {
    notEnoughStuff("money");
  }

  if (
    workers + amount >
    planetsControlled *
      workerHousingSpace[upgradeLevelsIndex.workerHousingLevel]
  ) {
    notEnoughStuff("space");
  }

  if (
    money >= 10 * amount &&
    workers + amount <=
      planetsControlled *
        workerHousingSpace[upgradeLevelsIndex.workerHousingLevel]
  ) {
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

  if (
    workers ===
    planetsControlled *
      workerHousingSpace[upgradeLevelsIndex.workerHousingLevel]
  ) {
    notEnoughStuff("space");
  }

  //buys max workers
  while (
    money >= 10 &&
    workers <
      planetsControlled *
        workerHousingSpace[upgradeLevelsIndex.workerHousingLevel]
  ) {
    money -= 10;
    let roundedMoney = money.toFixed(2);
    money = Number(roundedMoney);

    workers++;
  }

  tick1();
}

function buildSolarPanel() {
  if (money < 20000) {
    notEnoughStuff("money");
  } else if (refinedResources < 100) {
    notEnoughStuff("metal");
  } else if (
    solarPanels ===
    solarPanelSpace[upgradeLevelsIndex.solarPanelSpaceLevel] * planetsControlled
  ) {
    notEnoughStuff("space");
  } else {
    money -= 20000;
    refinedResources -= 100;
    solarPanels++;

    tick1();
  }
}

function toggleFactory() {
  if (factoryToggle === false) {
    factoryToggle = true;
    document.getElementById("toggleFactoryButton").innerHTML =
      "Factory power: On<br>Uses 2 minerals and 5 energy to make 1 metal.";
  } else {
    factoryToggle = false;
    document.getElementById("toggleFactoryButton").innerHTML =
      "Factory power: Off<br>Uses 2 minerals and 5 energy to make 1 metal.";
  }
}

document.getElementById("toggleFactoryButton").innerHTML =
  "Factory power: Off<br>Uses 2 minerals and 5 energy to make 1 metal.";

function toggleRefinery() {
  //toggles refinery

  if (refineryToggle === false) {
    refineryToggle = true;
    document.getElementById("toggleRefineryButton").innerHTML =
      "Refinery power: On<br>Uses 5 gasoline and 10 energy to make 2 rocket fuel.";
  } else {
    refineryToggle = false;
    document.getElementById("toggleRefineryButton").innerHTML =
      "Refinery power: Off<br>Uses 5 gasoline and 10 energy to make 2 rocket fuel.";
  }
}

document.getElementById("toggleRefineryButton").innerHTML =
  "Refinery power: Off<br>Uses 5 gasoline and 10 energy to make 2 rocket fuel.";

function constructSpaceship() {
  //construct spaceship
  if (money < 10000000) {
    notEnoughStuff("money");
  }
  if (refinedResources < 20000) {
    notEnoughStuff("metal");
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

    //launches spaceship that wins the beginning
    alert(
      "Congrats! You beat the beginning. there's still stuff lol but be wary of nonfunctional elements and bugs beyond this point - jerry the inflatable elephant"
    );

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

function raiseResourcePrices(
  cost,
  raiseAmount,
  buttonID,
  nextButtonID,
  upgradeNumber
) {
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

function unlockBuilding(cost, buildingID, buttonID, unlock) {
  //unlocks buildings
  if (researchPoints < cost) {
    notEnoughStuff("research");
  } else {
    researchPoints -= cost;
    buildingsUnlocked[buildingID] = true;

    document.getElementById(unlock).style.display = "inline";

    document.getElementById(buttonID).style.display = "none";

    tick1();
  }
}

function buildBuilding(
  cost1,
  cost2,
  cost3,
  cost4,
  buildingID,
  buttonID,
  unlock1,
  unlock2,
  unlock3,
  unlock4,
  unlock5,
  unlock6
) {
  //builds buildings
  if (money < cost1) {
    notEnoughStuff("money");
  }
  if (resources < cost2) {
    notEnoughStuff("minerals");
  }
  if (refinedResources < cost3) {
    notEnoughStuff("metal");
  }
  if (rocketFuel < cost4) {
    notEnoughStuff("fuel");
  }
  if (
    money >= cost1 &&
    resources >= cost2 &&
    refinedResources >= cost3 &&
    rocketFuel >= cost4
  ) {
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

    buildingsBuilt[buildingID] = true;
  }
}

function upgradeBuilding(cost1, cost2, cost3, buildingID, buttonID, maxLevel) {
  //upgrades buildings (the holy trinity)
  if (money < cost1) {
    notEnoughStuff("money");
  } else if (resources < cost2) {
    notEnoughStuff("minerals");
  } else if (refinedResources < cost3) {
    notEnoughStuff("metal");
  } else {
    money -= cost1;
    resources -= cost2;
    refinedResources -= cost3;
    upgradeLevelsIndex[buildingID]++;
    updateButtons();
    tick1();
    if (upgradeLevelsIndex[buildingID] === maxLevel) {
      document.getElementById(buttonID).style.display = "none";
    }
  }
}

function upgradeEarthIndustry(
  buttonID,
  cost1,
  cost2,
  multiplier,
  upgradeNumber,
  unlock
) {
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
  //need less resources to make metal
}

function researchChemicalRefinement() {
  //need less resources to make fuel
}

function buildShip(cost1, cost2, cost3, shipNumber) {
  //builds spaceships
  if (money < cost1) {
    notEnoughStuff("money");
  } else if (refinedResources < cost2) {
    notEnoughStuff("metal");
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
