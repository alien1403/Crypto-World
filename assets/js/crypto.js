var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var doge = document.getElementById("dogecoin");

var setting = {
    "async": true,
    "scrossDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%20ethereum%20dogecoin&vs_currencies=usd://api.coingecko.com/api/v3//price?ids=bitcoin%20ethereum%20dogecoin&vs_currencies=usd",
    "method": "GET",
    "headers": {}
  }

  $.ajax(setting).done(function (response){
    console.log(response)
  });