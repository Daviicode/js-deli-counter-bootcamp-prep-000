var takeANumber = function(katzDeliLine, newCustomer) {
     if (katzDeliLine.length > 0);
      katzDeliLine.push(newCustomer);
      return ('Welcome, ' + newCustomer + '. You are number ' + katzDeliLine.length + ' in line.')
   }
   
function nowServing (katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return ("There is nobody waiting to be served!")
  }
   else {
     var customer = katzDeliLine.shift();
  return "Currently serving " + customer + ".";
  }
}

function currentLine (katzDeliLine) {
  if (katzDeliLine === 0) {
    return ("The line is currently empty.");
  }
  else {
    var currentline = [];
    for (var i = 0; katzDeliLine.length > i; i++) {
      currentline.push()
    }
    return "The line is currently: " + ${currentline[i]};
  }
}