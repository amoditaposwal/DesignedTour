let ShowPrice = {
  setCountry: function(countryName) {
    this.resetCountry(countryName);
    this.showCountryInfo();
  },

  resetCountry: function(countryName) {
    switch (countryName) {
      case "india":
        country = new Country(countryName, 25000, "short para here", "here goes some links");
        break;
      case "egypt":
        country = new Country(countryName, 70000, "short para here", "here goes some links");
        break;
      case "france":
        country = new Country(countryName, 60000, "short para here", "here goes some links");
        break;
      case "usa":
        country = new Country(countryName, 150000, "short para here", "here goes some links");
        break;
      case "england":
        country = new Country(countryName, 90000, "short para here", "here goes some links");
        break;
      case "japan":
        country = new Country(countryName, 65000, "short para here", "here goes some links");
        break;
      case "russia":
        country = new Country(countryName, 70000, "short para here", "here goes some links");
        break;
      case "italy":
        country = new Country(countryName, 120000, "short para here", "here goes some links");
        break;
    } //end switch
  }, //end resetCountry method

  showCountryInfo: function() {
    let getDisplayBox = document.querySelector(".budgetInfo p");
    let getContinueBtn = document.querySelector(".btnNext");
    let getDisplayCost = document.querySelector(".budgetInfo p span");
    getDisplayBox.style.opacity = "0.89";
    getContinueBtn.style.opacity = "0.95";
    getDisplayCost.innerHTML = country.countryName + " will be "+ currencySymbol + (country.budget * curncMultiplier);
    window.min_cost = country.budget*curncMultiplier;
    window.cS = currencySymbol;
  }//end showCountryInfo
} //end ShowPrice
let chi = false;
let changeInterface = function() {
  let getSection2 = document.querySelector(".sec2");
  let getSection1 = document.querySelector(".sec1");
  if(chi == false){
    getSection1.style.display = "none";
    getSection2.style.display = "block";
    chi = true;
  }
  else if(chi == true){
    getSection2.style.display = "none";
    getSection1.style.display = "block";
    chi = false;
  }
}
