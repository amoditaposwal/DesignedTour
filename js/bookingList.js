let showFaclt = {
  setPackage: function(packageName) {
    this.resetPackage(packageName);
  },//method ends
  setPackage:function(packageName) {
    switch (packageName) {
      case "basic":
        package = new PackageDtls(packageName, min_cost, 3, 2000, "Economy", 3000, (min_cost/2));
        break;
      case "regular":
        package = new PackageDtls(packageName, (min_cost*2), 5, 10000, "Business", (min_cost/2), (min_cost));
        break;
      case "deluxe":
        package = new PackageDtls(packageName, (min_cost*4), 7, 20000, "Business Ex.", (min_cost), (min_cost*2));
        break;
    }//end switch
    let costBox = document.querySelector(".grndBox span");
    let sideBox = document.querySelector("#fcltBox");
    sideBox.setAttribute("style","box-shadow: 9px 2px 25px rgba(0,0,0,0.4);");
    costBox.innerHTML =cS+ " " +(package.pkgCost + package.hotelRate + package.flightRate);
    sideBox.innerHTML = ' <ul> <li> '+ package.pkgName + '</li> <li> Package Cost '+ cS + package.pkgCost + '</li> <li>'+ package.hotelStars + ' Star Hotel</li> <li>Hotel Price '+ cS+ package.hotelRate + '</li><li>Flight '+package.flightClass+'</li><li>Flight Cost '+ cS+ package.flightRate+'</li><li>Other Expenses(inc.gst) '+ cS+package.otherExpenses+'</li></ul> ';
  },//end setPackage
}//end showFaclt f
let checkOut = function() {
  let getHiddenClass = document.querySelector(".hidden");
  getHiddenClass.style.display = "block";
}
