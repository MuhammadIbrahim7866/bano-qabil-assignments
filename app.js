// <!-- 1:
// Ans:
// alert("Welcome to Our Website");

// 2:
// Ans:
// alert("Error! Please Enter a valid password");

// 3:
// Ans:
// console.log("Hint: Use line break\nThis is the second line");

// 4:
// Ans:
// alert("First message");
// alert("Second message");
// alert("Third message");

// 5:
// Ans:
//  alert("This is an alert inside a project"); 

// 6:
// Ans:

// a. Head:
//  alert("This is an alert in the head section"); 

// b. Body (before page's HTML):
//  alert("This is an alert before page content"); 

// c. Body (inside page’s HTML):
// <h1>Welcome to My Page</h1>

// d. Body (after page’s HTML):
//  alert("This is an alert after page content"); 

// 7:
// Ans:
// var username;

// 8:
// Ans:
// var myName = "John Doe"; 

// 9:
// Ans:
// var message;
// message = "Hello World";
// alert(message);

// 10:
// Ans:
// var studentName = "John Doe";
// var studentAge = 20;
// var studentCourse = "Web Development";
// alert("Student Bio Data:\nName: " + studentName + "\nAge: " + studentAge + "\nCourse: " + studentCourse);

// 11:
// Ans:
// var email = "example@example.com";
// alert("My email address is " + email);
//  -->
//  <!-- 12:
//  Ans:
//  document.write("This message is displayed in the browser through JS.");
 
//  13:
//  Ans:
//  var specialString = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
//  alert(specialString);
//  document.write(specialString);
 
//  14:
//  Ans:
//  var age = 25;
//  alert("I am " + age + " years old.");
 
//  15:
//  Ans:
//  var visitCount = 5;
//  document.write("You have visited this site " + visitCount + " times.");
 
//  16:
//  Ans:
//  var birthYear = 1998;
//  document.write("My birth year is " + birthYear + ".");
 
//  17:
//  Ans:
//  var visitorName = "John Doe";
//  var productTitle = "T-shirt";
//  var quantity = 5;
//  document.write(visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing store.");
 
//  18:
//  Ans:
//  var a, b, c;
 
//  19:
//  Ans:
 
//  5 Legal Variable Names:
//  var myVariable;
//  var _myVariable;
//  var $myVariable;
//  var myVariable1;
//  var camelCaseVariable;
 
//  5 Illegal Variable Names:
//  var 1variable;
//  var my-variable;
//  var var;
//  var alert;
//  var my variable;
 
//  21:
//  Ans:
//  var num1 = 5;
//  var num2 = 10;
//  var sum = num1 + num2;
//  document.write("Sum of " + num1 + " and " + num2 + " is " + sum + ".");
 
//  22:
//  Ans:
//  var subtraction = num1 - num2;
//  document.write("Subtraction of " + num1 + " and " + num2 + " is " + subtraction + ".");
 
//  var multiplication = num1 * num2;
//  document.write("Multiplication of " + num1 + " and " + num2 + " is " + multiplication + ".");
 
//  var division = num1 / num2;
//  document.write("Division of " + num1 + " and " + num2 + " is " + division + ".");
 
//  var modulus = num1 % num2;
//  document.write("Modulus of " + num1 + " and " + num2 + " is " + modulus + "."); -->
//  <!-- 23:
// 

// a. Declare a variable.
// var num;

// b. Show the value of the variable in your browser like:
// document.write("Value after variable declaration is: " + num + "<br>");

// c. Initialize the variable with some number.
// num = 5;

// d. Show the value of the variable in your browser like:
// document.write("Initial value: " + num + "<br>");

// e. Increment the variable.
// num++;

// f. Show the value of the variable in your browser like:
// document.write("Value after increment is: " + num + "<br>");

// g. Add 7 to the variable.
// num += 7;

// h. Show the value of the variable in your browser like:
// document.write("Value after addition is: " + num + "<br>");

// i. Decrement the variable.
// num--;

// j. Show the value of the variable in your browser like:
// document.write("Value after decrement is: " + num + "<br>");

// k. Show the remainder after dividing the variable’s value by 3.
// var remainder = num % 3;

// l. Output the remainder:
// document.write("The remainder is: " + remainder + "<br>");

// 24:
// Cost of one movie ticket is 600 PKR. 

// var ticketPrice = 600;
// var totalCost = ticketPrice * 5;
// document.write("Total cost to buy 5 tickets to a movie is " + totalCost + " PKR.<br>");

// 25:
// var tableNum = 5;
// document.write("Multiplication Table of " + tableNum + "<br>");
// for(var i = 1; i <= 10; i++) {
// document.write(tableNum + " x " + i + " = " + (tableNum * i) + "<br>");
// } -->






// <!-- ans1:
// var a = 10;

// document.write("Result:<br>");
// document.write("The value of a is: " + a + "<br>");
// document.write("------------------------------<br><br>");

// document.write("The value of ++a is: " + (++a) + "<br>");
// document.write("Now the value of a is: " + a + "<br><br>");

// document.write("The value of a++ is: " + (a++) + "<br>");
// document.write("Now the value of a is: " + a + "<br><br>");

// document.write("The value of --a is: " + (--a) + "<br>");
// document.write("Now the value of a is: " + a + "<br><br>");

// document.write("The value of a-- is: " + (a--) + "<br>");
// document.write("Now the value of a is: " + a + "<br>");


// ans 3:
// var userName = prompt("Enter your name:");
// alert("Hello, " + userName + "! Welcome!");

// ans 4:
// var number = prompt("Enter a number for multiplication table:", 5);
// number = number ? parseInt(number) : 5;

// document.write("<h3>Multiplication Table of " + number + "</h3>");
// for (var i = 1; i <= 10; i++) {
//     document.write(number + " x " + i + " = " + (number * i) + "<br>");
// }

// ans 5:

// var subject1 = prompt("Enter first subject:");
// var subject2 = prompt("Enter second subject:");
// var subject3 = prompt("Enter third subject:");

// var totalMarks = 100;

// var obtained1 = +prompt("Enter marks for " + subject1 + ":");
// var obtained2 = +prompt("Enter marks for " + subject2 + ":");
// var obtained3 = +prompt("Enter marks for " + subject3 + ":");

// var totalObtained = obtained1 + obtained2 + obtained3;
// var percentage = (totalObtained / 300) * 100;

// document.write("Total Marks: 300<br>");
// document.write("Obtained Marks: " + totalObtained + "<br>");
// document.write("Percentage: " + percentage.toFixed(2) + "%"); 
