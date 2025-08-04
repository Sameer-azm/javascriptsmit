var num = 10;
document.write("Result:<br>");
document.write("The value of num is: " + num + "<br><br>");

document.write("The value of ++num is: " + (++num) + "<br>");
document.write("Now the value of num is: " + num + "<br><br>");

document.write("The value of num++ is: " + (num++) + "<br>");
document.write("Now the value of num is: " + num + "<br><br>");

document.write("The value of --num is: " + (--num) + "<br>");
document.write("Now the value of num is: " + num + "<br><br>");

document.write("The value of num-- is: " + (num--) + "<br>");
document.write("Now the value of num is: " + num + "<br><br>");
// question 2
var a = 2, b = 1;
 var result = --a - --b + ++b + b--;

// Step by step:
// --a = 1
// --b = 0
// ++b = 1
// b-- = 1 (then b becomes 0)
// Final result: 1 - 0 + 1 + 1 = 3

document.write("a is " + a + "<br>");
document.write("b is " + b + "<br>");
document.write("result is " + result + "<br>");
//  question 3
var name = prompt("Enter your name:");
alert("Hello, " + name + "!");

// question 5
var tableNum = +prompt("Enter a number for multiplication table", 5);

for (var i = 1; i <= 10; i++) {
  document.write(tableNum + " x " + i + " = " + (tableNum * i) + "<br>");
}

// question 6
var subject1 = prompt("Enter name of subject 1:");
var subject2 = prompt("Enter name of subject 2:");
var subject3 = prompt("Enter name of subject 3:");

var totalMarks = 100;

var obtained1 = +prompt("Enter marks for " + subject1);
var obtained2 = +prompt("Enter marks for " + subject2);
var obtained3 = +prompt("Enter marks for " + subject3);

var totalObtained = obtained1 + obtained2 + obtained3;
var totalPossible = totalMarks * 3;
var percentage = (totalObtained / totalPossible) * 100;

document.write("<table border='1'>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtained1 + "</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtained2 + "</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtained3 + "</td></tr>");
document.write("</table><br>");
document.write("Total Marks: " + totalPossible + "<br>");
document.write("Marks Obtained: " + totalObtained + "<br>");
document.write("Percentage: " + percentage + "%");
