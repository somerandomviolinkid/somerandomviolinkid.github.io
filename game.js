let money = 0;
let resources = 0;
let refinedResources = 0;
let workers = 0;
let energy = 0;
let researchPoints = 0;

let workerLevel = 0;
let workerEfficiency = [1, 2, 4, 10, 25, 75, 200, 500, 1000]
let workerEfficiencyCosts = [0, 100, 500, 2500, 10000, 50000, 200000, 1000000, 5000000]

let workerHousingLevel = 0;
let workerHousingSpace = [10, 12, 15, 20, 27, 36, 50, 75, 125, 200]
let workerHousingMoneyCosts = [0, 20, 50, 125, 500, 2000, 10000, 40000, 100000, 250000]
let workerHousingResourceCosts = [0, 50, 120, 250, 600, 2500, 15000, 100000, 300000, 1000000]

let researchCenterUnlocked = false;
let researchCenterLevel = 0;
let researchCenterEfficiency = [0, 1, 2, 5, 10]
let researchCenterEfficiencyCosts = [0, 0, 10000, 50000, 200000]

let resourceSellRate = 0.1;

function notEnoughMoney() {

    //get more money dipshit
    alert("You don't have enough money!");

}


function tick1() {

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
    resources++;
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

function purchaseWorkers() {

    //buys workers
    if (money >= 10 && workers < workerSpace) {

        money -= 10;
        workers++;
        tick1();

    } else {
        notEnoughMoney();
    }
    if (workers + 1 >= workerHousingSpace) {
        alert("You need to buy more housing for your workers.");
    }

}

function purchaseWorkers10() {

    //buys workers
    if (money >= 100 && workers < workerSpace) {

        money -= 100;
        workers += 10;
        tick1();

    } else {
        notEnoughMoney();
    }
    if (workers + 10 >= workerHousingSpace) {
        alert("You need to buy more housing for your workers.");
    }

}

function purchaseWorkers100() {

    //buys workers
    if (money >= 1000 && workers < workerSpace) {

        money -= 1000;
        workers += 100;
        tick1();

    } else {
        notEnoughMoney();
    }
    if (workers + 100 >= workerHousingSpace) {
        alert("You need to buy more housing for your workers.");
    }

}

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

        document.getElementById("upgradeWorkerButton").style.visibility = "hidden";

    }


}

function upgradeWorkerHousing() {

    if (money >= workerHousingMoneyCosts[workerHousingLevel + 1] && resources >= workerHousingResourceCosts[workerHousingLevel +1 ]) {

        money -= workerHousingMoneyCosts[workerHousingLevel + 1];
        resources -= workerHousingResourceCosts[workerHousingLevel +1 ];
        workerHousingLevel++;
        document.getElementById("upgradeWorkerHousingButton").innerHTML = "Your worker housing level is " + workerHousingLevel + ". Upgrade worker housing cost " + workerHousingMoneyCosts[workerHousingLevel + 1] + " money and " + workerHousingResourceCosts[workerHousingLevel + 1] + " resources.";

    } else {
        notEnoughMoney();
    }
    //upgrades worker housing
    if (workerHousingLevel == 9) {

        document.getElementById("upgradeWorkerHousingButton").style.visibility = "hidden";

    }

}

function buildResearchCenter() {

    //builds research center
    if (money >= 100) {

        researchCenterLevel++;
        money -= 100;
        researchCenterUnlocked = true;

        document.getElementById("upgradeResearchCenterButton").style.visibility = "visible";

        tick1();

    } else {
        notEnoughMoney();
    }

}

function upgradeResearchCenter() {

    //upgrades workers
    if (money >= researchCenterEfficiencyCosts[researchCenterLevel + 1] && researchCenterUnlocked == true) {

        money -= researchCenterEfficiencyCosts[researchCenterLevel + 1];
        researchCenterLevel++;
        document.getElementById("upgradeResearchCenterButton").innerHTML = "Your research center is level " + researchCenterLevel + ". Upgrade research center " + researchCenterEfficiencyCosts[researchCenterLevel + 1] + " money.";

    } else {
        notEnoughMoney();
    }

    //hides button once workers are at maximum level
    if (researchCenterLevel == 4) {

        document.getElementById("upgradeResearchCenterButton").style.visibility = "hidden";

    }


}

function buildFactory() {


}

