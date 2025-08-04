var num1=5;
var num2=7;
var sum= num1+ num2;
document.write("sum of " + num1 +"  and "+ num2 +" is " + sum + "<br>");
 //question 2
var a = 10;
var b = 2;
document.write("Subtraction: " + (a - b) + "<br>");
document.write("Multiplication: " + (a * b) + "<br>");
document.write("Division: " + (a / b) + "<br>");
document.write("Modulus: " + (a % b));
// question 3
var value;
document.write("Value after declaration is: " + value + "<br>");

value = 5;
document.write("Initial value: " + value + "<br>");

value++;
document.write("After increment: " + value + "<br>");

value += 7;
document.write("After addition: " + value + "<br>");

value--;
document.write("After decrement: " + value + "<br>");

document.write("Remainder after division by 3: " + (value % 3));
// question 4
var ticketPrice = 600;
var totalCost = ticketPrice * 5;
document.write("Total cost to buy 5 tickets is " + totalCost + " PKR");
// question 5
var num = 4;
for (var i = 1; i <= 10; i++) {
  document.write(num + " x " + i + " = " + (num * i) + "<br>");
}
// question6
var celsius = 25;
var fahrenheit = (celsius * 9 / 5) + 32;
document.write(celsius + "°C is " + fahrenheit + "°F<br>");

fahrenheit = 70;
celsius = (fahrenheit - 32) * 5 / 9;
document.write(fahrenheit + "°F is " + celsius + "°C");
//  question 7
var item1 = 650, qty1 = 3;
var item2 = 100, qty2 = 7;
var shipping = 100;
var total = (item1 * qty1) + (item2 * qty2) + shipping;
document.write("Total cost: " + total + " PKR");
// question 8
var totalMarks = 500;
var marksObtained = 420;
var percentage = (marksObtained / totalMarks) * 100;
document.write("Percentage: " + percentage + "%");
// question 9
var usd = 10;
var riyal = 25;
var pkr = (usd * 104.80) + (riyal * 28);
document.write("Total in PKR: " + pkr);
// question 10
var num = ((5 + 5) * 10) / 2;
document.write("Result: " + num);
// question 11
var currentYear = 2025;
var birthYear = 2003;
var age1 = currentYear - birthYear;
document.write("They are  "  + age1 + " years old");

// question 12
var radius = 20;
var pi = 3.142;
var circumference = 2 * pi * radius;
var area = pi * radius * radius;
document.write("Circumference: " + circumference + "<br>");
document.write("Area: " + area);


// question 13
var snack = "Chips";
var currentAge = 20;
var maxAge = 80;
var perDay = 2;
var totalNeeded = (maxAge - currentAge) * 365 * perDay;
document.write("You will need " + totalNeeded + " " + snack + " to last until the age of " + maxAge);
