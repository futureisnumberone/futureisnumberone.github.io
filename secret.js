function secret() {
  var p = "charlie";
  var i = prompt("Enter the Password:");
  
  if(i == p) {
    window.open('secret.html')
  }
}
