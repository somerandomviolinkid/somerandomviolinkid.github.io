let resourceAmounts = [money = 0, resources = 0, refinedResources = 0, workers = 0, energy = 0, researchPoints = 0];

function tick() {

    //updates numbers on page
    document.getElementById("moneyCount").innerHTML = "Money: " + resourceAmounts[money];
    document.getElementById("workerCount").innerHTML = "Workers: " + resourceAmounts[workers];  
    document.getElementById("resourceCount").innerHTML = "Resources: " + resourceAmounts[resources];
    document.getElementById("refinedResourceCount").innerHTML = "Refined resources: " + resourceAmounts[refinedResources];          
    document.getElementById("energyCount").innerHTML = "Energy: " + resourceAmounts[energy];
    document.getElementById("researchPointCount").innerHTML = "Research points: " + resourceAmounts[researchPoints];

}

tick();