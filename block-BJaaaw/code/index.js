// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/

let number = prompt(`Enter the number : `);
if( number%2 == 0){
  alert("This number is an even number");
} else {
  alert("This number is an odd number");
}


// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.
 
let numOne = prompt("Enter the value of number one : ");
let numTwo = prompt("Enter the value of number two : ");
if(numOne >> numTwo){
  alert("The number one is greater.")
} else if(numTwo >> numOne) {
  alert("Number two is greater.");
} else if(numOne == numTwo){
  alert("Both number are equal");
} else{
  alert("It is over");
}

// 3. Convert the above code using`?` terniary operator


let numOne = prompt("Enter the value of number one : ");
let numTwo = prompt("Enter the value of number two : ");
numOne >> numTwo ? 
  alert("Number one is greater")
  :
  numOne == numTwo ?
  alert("Both numbers are equal.")
  :  
  alert("Number two is greater")


/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/


let houseName = prompt("Enter your House Name : ");
if(houseName == "stark"){
  alert("Winter is coming.");
} else if(houseName == "lannister"){
  alert("A lannister always pays his debt.");
} else {
  alert("All men must die.");
}


// 5. Convert the above code using`?` terniary operator

let houseName = prompt("Enter your House Name : ");
houseName == "stark" ?
  alert("Winter is coming.")
  :
  houseName == "lanniester" ?
  
  alert("A lanniester always pays jis debt.")
  :
  alert("All men must die.")


// Switch

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.

let month = prompt("Enter the number of the month: ");
switch(true){
  case month == 1:
    alert("This month is January and it has 31 days");
    break;
  case month == 2:
    alert("This month is February and it has 28 days");
    break;
  case month == 3:
    alert("This month is March and it has 31 days");
    break;
  case month == 4:
    alert("This month is April and it has 30 days");
    break;
  case month == 5:
    alert("This month is May and it has 31 days");
    break;
  case month == 6:
    alert("This month is June and it has 30 days");
    break;
  case month == 7:
    alert("This month is July and it has 31 days");
    break;
  case month == 8:
    alert("This month is August and it has 31 days");
    break;
  case month == 9:
    alert("This month is September and it has 30 days");
    break;
  case month == 10:
    alert("This month is October and it has 31 days");
    break;
  case month == 11:
    alert("This month is November and it has 30 days");
    break;
  case month == 12:
    alert("This month is December and it has 31 days");
    break;

}

/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/

let salary = prompt("Enter your salary : ");
switch(true){
  case salary <= 20000 :
    alert("Tax is 10%");
    break;
  case salary <= 40000 :
    alert("Tax is 20%");
    break;
  case salary > 50000 :
    alert("Tax is 30%");
    break;
  
}

//  if..else vs switch

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/

let marks = prompt("Enter your marks : ");
if(marks > 100){
  alert("Marks can't be greater then 100.");
} else if(marks > 80 && marks < 100){
  alert("You have got a Grade A.");
} else if(marks > 50 && marks < 80){
  alert("You have got a Grade B.");
} else if(marks > 30 && marks < 50){
  alert("You have got a Grade C.")
} else if( marks > 0){
  alert("You have got Grade D.");
} else{
  alert("Please enter a valid input.");
}



let marks = prompt("Enter your marks : ");
switch(true){
  case marks > 100:
    alert("Marks can't be greater then 100");
    break;
  case marks > 80 && marks < 100:
    alert("You have got a Grade A.");
    break;
  case marks > 50 && marks < 80:
    alert("You have got a Grade B.");
    break;
  case marks > 30 && marks < 50:
    alert("You have got a Grade C.");
    break;
  case marks > 0:
    alert("You have got Grade D.");
    break;
}



/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/

let weather = prompt("What is weather like outside");

if(weather == "sunny"){
  alert("Wear a T-shirt");
} else if(weather == "rainy"){
  alert("Don't forget to take your raincoat");
} else if(weather == "hot"){
  alert("Get a hanky");
} else if(weather == "freezing"){
  alert("Get your sweeter on");
} else{
  alert("Enter a valid input");
}