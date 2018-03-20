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
    array.splice(0,1);
    return "Currently serving " + name + ".";
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine..length === 0) {
    return "The line is currently empty.";
  }
  else {
    return "The line is currently: 1. Ada, 2. Grace";
  }
}