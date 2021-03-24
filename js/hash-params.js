$(document).ready(function {
  var hashParams = window.location.hash.substr(1).split('&'); // substr(1) to remove the `#`

  if (hashParams != "") {
    for(var i = 0; i < hashParams.length; i++){
      var p = hashParams[i].split('=');
      document.getElementById(p[0]).value = decodeURIComponent(p[1]);;
    }
  }  
})
