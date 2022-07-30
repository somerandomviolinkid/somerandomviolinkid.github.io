let money = 0;
let resources = 0;
let refinedResources = 0;
let workers = 0;
let energy = 0;
let researchPoints = 0;

let planetsControlled = 1;

let workerLevel = 0;
const workerEfficiency = [1, 2, 4, 10, 25, 75, 200, 500, 1000]
const workerEfficiencyCosts = [0, 100, 500, 2500, 10000, 50000, 200000, 1000000, 5000000]

let workerHousingLevel = 0;
const workerHousingSpace = [10, 12, 15, 20, 27, 36, 50, 75, 125, 200]
const workerHousingMoneyCosts = [0, 20, 50, 125, 500, 2000, 10000, 40000, 100000, 250000]
const workerHousingResourceCosts = [0, 50, 120, 250, 600, 2500, 15000, 100000, 300000, 1000000]

let researchCenterUnlocked = false;
let researchCenterLevel = 0;
const researchCenterEfficiency = [0, 1, 2, 5, 10]
const researchCenterEfficiencyCosts = [0, 0, 10000, 50000, 200000]

let manualResourceLevel = 0;
const manualResourceEfficiency = [1, 2, 4, 10, 18, 30, 50, 100]
const manualResourceEfficiencyCosts = [0, 5, 100, 800, 10000, 200000, 3000000, 100000000]

let factoryUnlocked = false;
let factoryLevel = 0;

let spaceportUnlocked = false
let spaceportLevel = 0;

let solarPanelsUnlocked = false;
let solarPanelLevel = 0;

let resourceSellRate = 0.1;

function notEnoughMoney() {

    //get more money dipshit
    alert("You don't have enough money!");

}

function notEnoughResources() {

        //get more resources dipshit
        alert("You don't have enough resources!");

}

function notEnoughRefinedResources() {

    //get more refined resources dipshit
    alert("You don't have enough refined resources!");

}

function notEnoughResearch() {

    //get more research dipshit
    alert("You don't have enough research points!");

}


function tick1() {

    let roundedMoney = money.toFixed(1);
    money = Number(roundedMoney);

    //updates numbers on page
    document.getElementById("moneyCount").innerHTML = "Money: " + money;
    document.getElementById("workerCount").innerHTML = "Workers: " + workers + " / " + workerHousingSpace[workerHousingLevel];
    document.getElementById("resourceCount").innerHTML = "Resources: " + resources;
    document.getElementById("refinedResourceCount").innerHTML = "Refined resources: " + refinedResources;
    document.getElementById("energyCount").innerHTML = "Energy: " + energy;
    document.getElementById("researchPointCount").innerHTML = "Research points: " + researchPoints;

}

tick1();

function tick2() {

    //updates resource amounts
    resources += workers * (workerEfficiency[workerLevel]);

    researchPoints += researchCenterEfficiency[researchCenterLevel];
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
        document.getElementById("upgradeResourceClickButton").innerHTML = "Your resource click level is " + manualResourceLevel + ". Upgrade resource click cost " + manualResourceEfficiencyCosts[manualResourceLevel + 1] + " money.";

        tick1();

    } else {
        notEnoughMoney();
    }

    if (manualResourceLevel == 7) {

        document.getElementById("upgradeResourceClickButton").style.display = "none";

    }

    tick1();

}

function sellResources() {

    //sells resources
    money += resources * resourceSellRate;
    let roundedMoney = money.toFixed(1);
    money = Number(roundedMoney);

    resources = 0;
    tick1();

}

function purchaseWorkers(amount) {

    if (money < (10 * amount)) {
        notEnoughMoney();
    }

    if (workers + amount > workerHousingSpace[workerHousingLevel]) {
        alert("You need to buy more housing for your workers.");
    }

    if (money >= 10 * amount && workers + amount < workerHousingSpace[workerHousingLevel]) {

        money -= amount * 10;
        let roundedMoney = money.toFixed(1);
        money = Number(roundedMoney);

        workers += amount;
        tick1();

    }

}

function purchaseMaxWorkers() {

    if (money < 10) {
        notEnoughMoney();
    }

    if (workers == workerHousingSpace[workerHousingLevel]) {
        alert("You need to buy more housing for your workers.");
    }

    //buys max workers
    while (money >= 10 && workers < workerHousingSpace[workerHousingLevel]) {

        money -= 10;
        let roundedMoney = money.toFixed(1);
        money = Number(roundedMoney);
        
        workers++;

    }

    tick1();

}

document.getElementById("upgradeResourceClickButton").innerHTML = "Your resource click level is " + manualResourceLevel + ". Upgrade resource click cost " + manualResourceEfficiencyCosts[manualResourceLevel + 1] + " money.";
document.getElementById("upgradeWorkerButton").innerHTML = "Your workers are level " + workerLevel + ". Upgrade worker cost " + workerEfficiencyCosts[workerLevel + 1] + " money.";
document.getElementById("upgradeResearchCenterButton").innerHTML = "Your research center is level " + researchCenterLevel + ". Upgrade research center " + researchCenterEfficiencyCosts[researchCenterLevel + 1] + " money.";
document.getElementById("upgradeWorkerHousingButton").innerHTML = "Your worker housing level is " + workerHousingLevel + ". Upgrade worker housing cost " + workerHousingMoneyCosts[workerHousingLevel + 1] + " money and " + workerHousingResourceCosts[workerHousingLevel + 1] + " resources.";

function upgradeWorkers() {

    //upgrades workers
    if (money >= workerEfficiencyCosts[workerLevel + 1]) {

        money -= workerEfficiencyCosts[workerLevel + 1];
        workerLevel++;
        document.getElementById("upgradeWorkerButton").innerHTML = "Your workers are level " + workerLevel + ". Upgrade worker cost " + workerEfficiencyCosts[workerLevel + 1] + " money.";

    } else {
        notEnoughMoney();
    }

    //hides button once workers are at maximum level
    if (workerLevel == 8) {

        document.getElementById("upgradeWorkerButton").style.display = "none";

    }


}

function upgradeWorkerHousing() {

    if (money >= workerHousingMoneyCosts[workerHousingLevel + 1] && resources >= workerHousingResourceCosts[workerHousingLevel +1 ]) {

        money -= workerHousingMoneyCosts[workerHousingLevel + 1];
        resources -= workerHousingResourceCosts[workerHousingLevel +1 ];
        workerHousingLevel++;
        document.getElementById("upgradeWorkerHousingButton").innerHTML = "Your worker housing level is " + workerHousingLevel + ". Upgrade worker housing cost " + workerHousingMoneyCosts[workerHousingLevel + 1] + " money and " + workerHousingResourceCosts[workerHousingLevel + 1] + " resources.";

    } if (money < workerHousingMoneyCosts[workerHousingLevel + 1]) {
        notEnoughMoney();
    } else {
        notEnoughResources(); 
    }
    //upgrades worker housing
    if (workerHousingLevel == 9) {

        document.getElementById("upgradeWorkerHousingButton").style.display = "none";

    }

}

function buildResearchCenter() {

    //builds research center
    if (money >= 100 && resources >= 500) {

        researchCenterLevel++;
        money -= 100;
        resources -= 500;
        researchCenterUnlocked = true;

        document.getElementById("buildResearchCenterButton").style.display = "none";
        document.getElementById("upgradeResearchCenterButton").style.display = "visible";

        tick1();

    } if (money < 100) {
        notEnoughMoney();
    } else {
        notEnoughResources();
    }

}

function upgradeResearchCenter() {

    //upgrades research center
    if (money >= researchCenterEfficiencyCosts[researchCenterLevel + 1] && researchCenterUnlocked == true) {

        money -= researchCenterEfficiencyCosts[researchCenterLevel + 1];
        researchCenterLevel++;
        document.getElementById("upgradeResearchCenterButton").innerHTML = "Your research center is level " + researchCenterLevel + ". Upgrade research center " + researchCenterEfficiencyCosts[researchCenterLevel + 1] + " money.";

    } else {
        notEnoughMoney();
    }

    //hides button once research center is maxxed
    if (researchCenterLevel == 4) {

        document.getElementById("upgradeResearchCenterButton").style.display = "none";

    }


}

function researchFactory() {
    if (researchPoints >= 100) {

        researchPoints -= 100;
        tick1();

        document.getElementById("buildFactoryButton").style.display = "inline";
        document.getElementById("unlockFactory").style.display = "none";

        solarPanelLevel = true;

    } else {
        notEnoughResearch();
    }
}

function buildFactory() {

    //builds factory
    if (money >= 5000 && resources >= 20000 && factoryUnlocked == true) {

        factoryLevel++;
        money -= 5000;
        resources -= 20000;

        document.getElementById("buildFactoryButton").style.display = "none";
        document.getElementById("upgradeFactoryButton").style.display = "inline";

        document.getElementById("FactoryTab").style.display = "inline";

        tick1();

    } if (money < 5000) {
        notEnoughMoney();
    } else {
        notEnoughResources();
    }

}

function researchSolarPanels() {
    if (researchPoints >= 500) {

        researchPoints -= 500;
        tick1();

        document.getElementById("buildSolarPanelButton").style.display = "inline";
        document.getElementById("unlockSolarPanels").style.display = "none";

        solarPanelLevel = true;

    } else {
        notEnoughResearch();
    }
}

function buildSolarPanel() {

    //builds solar panels
    if (money >= 20000 && refinedResources >= 100) {

        solarPanelLevel++;
        money -= 20000;
        refinedResources -= 100;
        solarPanelsUnlocked = true;

        document.getElementById("buildSolarPanelButton").style.display = "none";
        document.getElementById("upgradeSolarPanelButton").style.display = "inline";

        tick1();

    } if (money < 100) {
        notEnoughMoney();
    } else {
        notEnoughRefinedResources();
    }
}

function researchSpaceport() {
    if (researchPoints >= 10000) {

        researchPoints -= 10000;
        tick1();

        document.getElementById("buildSpaceportButton").style.display = "inline";
        document.getElementById("unlockSpacePort").style.display = "none";

        spaceportUnlocked = true;

    } else {
        notEnoughResearch();
    }
}

function buildSpaceport() {

    //builds spaceport
    if (money >= 400000 && resources >= 1200000) {

        spaceportLevel++;
        money -= 400000;
        resources -= 1200000;
        spaceportUnlocked = true;

        document.getElementById("buildSpaceportButton").style.display = "none";
        document.getElementById("upgradeSpaceportButton").style.display = "inline";

        document.getElementById("SpaceportTab").style.display = "inline";

        tick1();

    } if (money < 400000) {
        notEnoughMoney();
    } else {
        notEnoughResources();
    }

}

document.getElementById("buildResearchCenterButton").style.display = "inline";
document.getElementById("upgradeResearchCenterButton").style.display = "none";

document.getElementById("buildFactoryButton").style.display = "none";
document.getElementById("upgradeFactoryButton").style.display = "none";

document.getElementById("buildSolarPanelButton").style.display = "none";
document.getElementById("upgradeSolarPanelButton").style.display = "none";

document.getElementById("buildSpaceportButton").style.display = "none";
document.getElementById("upgradeSpaceportButton").style.display = "none";

document.getElementById("FactoryTab").style.display = "none";
document.getElementById("SpaceportTab").style.display = "none";
