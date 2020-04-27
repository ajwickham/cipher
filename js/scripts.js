$(document).ready(function() {
  var add = function(number1, number2) {
    return number1 + number2;
  }
  var number1 = prompt("What is your first number?")
  var number2 = prompt("What is your second number?")
  
  alert(add(parseInt(number1), parseInt(number2)))
  
  var subtract = function(number1, number2) {
    return number1 - number2;
  }
  var number1 = prompt("What is your first number?")
  var number2 = prompt("What is the number you are subtracting?")
  
  alert(subtract(parseInt(number1), parseInt(number2)))
  
  var divide = function(number1, number2) {
    return number1 / number2;
  }
  var number1 = prompt("What is your numerator?")
  var number2 = prompt("What is the number you are dividing by (denominator)?")
  
  alert(divide(parseInt(number1), parseInt(number2)))
  
  var multiply = function(number1, number2) {
    return number1*number2;
  }
  var number1 = prompt("What is your first number?")
  var number2 = prompt("What is your second number?")
  
  alert(multiply(parseInt(number1), parseInt(number2)))