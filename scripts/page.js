function openTab(evt, tabName) {
  // Get all elements with class="tabcontent" and hide them
  const tabcontent = document.getElementsByClassName("tabcontent");
  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  const tablinks = document.getElementsByClassName("tablinks");
  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.classList.add("active");
}
document.getElementById("defaultOpen").click();

//updates upgrade buttons on page
function updateButtons() {
  document.getElementById("upgradeResourceClickButton").innerHTML =
    "Your resource click level is " +
    formatNumber(manualResourceLevel) +
    " and you get " +
    formatNumber(manualResourceEfficiency[manualResourceLevel]) +
    " resources per click.<br>Next level will give " +
    formatNumber(manualResourceEfficiency[manualResourceLevel + 1]) +
    " resources per click.<br>Upgrading resource click cost " +
    formatNumber(manualResourceEfficiencyCosts[manualResourceLevel + 1]) +
    " money.";
  document.getElementById("upgradeWorkerButton").innerHTML =
    "Your workers are level " +
    formatNumber(workerLevel) +
    " and each worker produces " +
    formatNumber(workerEfficiency[workerLevel]) +
    " resources per second.<br>Next level will make workers produce " +
    formatNumber(workerEfficiency[workerLevel + 1]) +
    " resources per second.<br>Upgrading worker cost " +
    formatNumber(workerEfficiencyCosts[workerLevel + 1]) +
    " money.";
  document.getElementById("upgradeResearchCenterButton").innerHTML =
    "Your research center is level " +
    formatNumber(researchCenterLevel) +
    " and you get " +
    formatNumber(researchCenterEfficiency[researchCenterLevel]) +
    " research points every second.<br>Next level will make the research center produce " +
    formatNumber(researchCenterEfficiency[researchCenterLevel + 1]) +
    " research points per second.<br>Upgrading research center " +
    formatNumber(researchCenterEfficiencyCosts[researchCenterLevel + 1]) +
    " money.";
  document.getElementById("upgradeWorkerHousingButton").innerHTML =
    "Your worker housing level is " +
    formatNumber(workerHousingLevel) +
    ".<br>Next level will make worker housing house " +
    formatNumber(workerHousingSpace[workerHousingLevel + 1]) +
    " workers.<br>Upgrading worker housing cost " +
    formatNumber(workerHousingMoneyCosts[workerHousingLevel + 1]) +
    " money and " +
    formatNumber(workerHousingResourceCosts[workerHousingLevel + 1]) +
    " resources.";
  document.getElementById("upgradeSolarPanelButton").innerHTML =
    "Your solar panel level is " +
    formatNumber(solarPanelLevel) +
    " and each solar panel produces " +
    formatNumber(solarPanelEfficiency[solarPanelLevel]) +
    " energy per second.<br>Next level will make solar panels produce " +
    formatNumber(solarPanelEfficiency[solarPanelLevel + 1]) +
    " energy per second.<br>Upgrading solar panels cost " +
    formatNumber(solarPanelEfficiencyMoneyCosts[solarPanelLevel + 1]) +
    " money and " +
    formatNumber(solarPanelEfficiencyRefinedResourceCosts[solarPanelLevel + 1]) +
    " refined resources.";
  document.getElementById("upgradeSolarPanelSpaceButton").innerHTML =
    "Your solar panel space level is " +
    formatNumber(solarPanelSpaceLevel) +
    ".<br>Next level will make you have " +
    formatNumber(solarPanelSpace[solarPanelSpaceLevel + 1]) +
    " solar panel space.<br>Upgrading solar panels space costs " +
    formatNumber(solarPanelSpaceCosts[solarPanelSpaceLevel + 1]) +
    " resources.";
  document.getElementById("upgradeFactoryButton").innerHTML =
    "Your factory level is " +
    formatNumber(factoryLevel) +
    " and it produces " +
    formatNumber(factoryEfficiency[factoryLevel]) +
    " refined resources per second.<br>Next level will make factory produce " +
    formatNumber(factoryEfficiency[factoryLevel + 1]) +
    " refined resources per second.<br>Upgrading factory cost " +
    formatNumber(factoryEfficiencyMoneyCosts[factoryLevel + 1]) +
    " money and " +
    formatNumber(factoryEfficiencyResourceCosts[factoryLevel + 1]) +
    " resources.";
  document.getElementById("upgradeRefineryButton").innerHTML =
    "Your refinery level is " +
    formatNumber(fuelRefineryLevel) +
    " and it produces " +
    formatNumber(fuelRefineryEfficiency[fuelRefineryLevel]) +
    " fuel per second.<br>Next level will make refinery produce " +
    formatNumber(fuelRefineryEfficiency[fuelRefineryLevel + 1]) +
    " rocket fuel per second.<br>Upgrading refinery cost " +
    formatNumber(fuelRefineryEfficiencyMoneyCosts[fuelRefineryLevel + 1]) +
    " money and " +
    formatNumber(fuelRefineryEfficiencyRefinedResourcesCost[fuelRefineryLevel + 1]) +
    " refined resources.";
  document.getElementById("upgradeTelescopeButton").innerHTML =
    "Your telescope level is " +
    formatNumber(telescopeLevel) +
    " and it produces " +
    formatNumber(telescopeEfficiency[telescopeLevel]) +
    " research points per second.<br>Next level will make stelescope produce " +
    formatNumber(telescopeEfficiency[telescopeLevel + 1]) +
    " research points per second.<br>Upgrading telescope cost " +
    formatNumber(telescopeEfficiencyMoneyCosts[telescopeLevel + 1]) +
    " money and " +
    formatNumber(telescopeEfficiencyRefinedResoucresCost[telescopeLevel + 1]) +
    " refined resources.";
}
