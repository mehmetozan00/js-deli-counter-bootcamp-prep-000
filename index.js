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
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }
  else {
    for (var i = 0; i < katzDeliLine.length; i++) {
      var line = [];
      line += "The line is currently: " +(i+1)+ ". " +katzDeliLine[i]+ ",";
    }
    return line;
  }
}
