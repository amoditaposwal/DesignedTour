let country;
let curncMultiplier = 1;
let  currencySymbol = "₹";

let changeCurrency = function() {
  let selectedValue = document.querySelector("#selectBox").value;
  if(selectedValue == "1"){
    curncMultiplier = 1;
    currencySymbol = "₹";
  }
  else if (selectedValue == "2") {
    curncMultiplier = 0.013;
    currencySymbol = "$";
  }
  else if (selectedValue == "3") {
    curncMultiplier = 0.011;
    currencySymbol = "€";
  }
  else if (selectedValue == "5") {
    curncMultiplier = 0.010;
    currencySymbol = "£";
  }
  else if (selectedValue == "6") {
    curncMultiplier = 1.42;
    currencySymbol = "¥";
  }//end elseif
  alert("Please select your country again to see the change");
}//end changeCurrency f

function Country(countryName, budget, shortPara, addLinks) {
  this.countryName = countryName;
  this.budget = budget;
  this.shortPara = shortPara;
  this.addLinks = addLinks;
}//end country f
