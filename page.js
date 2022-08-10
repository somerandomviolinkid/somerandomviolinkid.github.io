function openTab(evt, tabName) {
  // Declare all variables
  let i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.classList.add("active");
}

document.getElementById("defaultOpen").click();

document.getElementById("unlockSpaceships").style.display = "none";
document.getElementById("unlockAsteroidMiningComplex").style.display = "none";
document.getElementById("unlockDysonSphere").style.display = "none";
document.getElementById("unlockShipYard").style.display = "none";
document.getElementById("unlockFTLDrive").style.display = "none";
document.getElementById("unlockUnmannedSpacecraft").style.display = "none";
document.getElementById("galaxyOverviewTab").style.display = "none";
