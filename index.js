var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.";
}

function nowServing(array) {
  if (array.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else {
    var name = array[0];
    array.slice(0,1);
    return "Currently serving " + name + ".";
  }
}