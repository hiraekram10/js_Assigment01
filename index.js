//Question:1
// Accepting two numbers from the user
var numberOne = prompt("Enter the first number:");
var numberTwo = prompt("Enter the second number:");

// Convert the input from string to number
numberOne = parseInt(numberOne);
numberTwo = parseInt(numberTwo);

// Check if the input is valid numbers
if (isNaN(numberOne) || isNaN(numberTwo)) {
  document.write("Invalid input: Please enter numbers not alphabate.");
} else {
  // Compare the two numbers and display the larger one in the console
  if (numberOne > numberTwo) {
    console.log("The larger number is: " + numberOne);
  } else if (numberOne < numberTwo) {
    console.log("The larger number is: " + numberTwo);
  } else {
    console.log("Both numbers are equal.");
  }
}

//Quesion: 2

// Accept a number from the user
var number =parseInt(prompt("Enter a number"));

// Check if the input is valid number
if (isNaN(number)) {
  alert("Invalid input. Please enter a valid number.");
} else {
  // Check the sign of the number and display an alert box with the specified sign
  if (number > 0) {
    alert("The number is positive.");
  } else if (number < 0) {
    alert("The number is negative.");
  } else {
    alert("The number is zero.");
  }
}
//Question 3
//Accept five numbers from the user
var number1 = parseInt(prompt("Enter the first number"));
var number2 = parseInt(prompt("Enter the second number"));
var number3 = parseInt(prompt("Enter the third number"));
var number4 = parseInt(prompt("Enter the fourth number"));
var number5 =parseInt( prompt("Enter the fifth number"));



// Check if the input is valid numbers
if (isNaN(number1) || isNaN(number2) || isNaN(number3) || isNaN(number4) || isNaN(number5)) {
  console.log("Invalid input. Please enter valid numbers.");
} else {
 
  var maxNumber = Math.max(number1, number2, number3, number4, number5);

  // Display the larger number in the console
  console.log("The larger number is: " + maxNumber);
}


//Question 4
// Loop from 0 to 15
for (var i = 0; i <= 15; i++) {
    // Check if the current number is odd or even
    if (i % 2 === 0) {
      console.log(i + " is even.");
    } else {
      console.log(i + " is odd.");
    }
  }


//Question 5
// Array to store student marks
var marks = [85, 90, 78, 92, 88];

// Function to compute average
function calculateAverage(marks) {
  var sum = 0;
  for (var i = 0; i < marks.length; i++) {
    sum += marks[i];
  }
  return sum / marks.length;
}

// Calculate average marks
var average = calculateAverage(marks);

// Determine grade based on average
var grade;
if (average >= 100) {
  grade = "A";
} else if (average >= 90) {
  grade = "B";
} else if (average >= 80) {
  grade = "c";
} else if (average >= 70) {
  grade = "D";
} else if (average >= 60) {
  grade = "F";
} else {
  grade = "G";
}

// Display average and corresponding grade
console.log("Average marks: " + average.toFixed(2));
console.log("Grade: " + grade);

//Qusetion : 6
// Iterate through integers from 1 to 100
for (var i = 1; i <= 100; i++) {
    // Check for multiples of both 3 and 5
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    }
    // Check for multiples of 3
    else if (i % 3 === 0) {
      console.log("Fizz");
    }
    // Check for multiples of 5
    else if (i % 5 === 0) {
      console.log("Buzz");
    }
    // Print the number if not a multiple of 3 or 5
    else {
      console.log(i);
    }
  }
  

  //Question 7
  var numRows = 5;

// Outer loop for rows
for (var i = 1; i <= numRows; i++) {
  var pattern = "";
  
  // Inner loop for printing asterisks
  for (var j = 1; j <= i; j++) {
    pattern += "*";
  }
  console.log(pattern);
}
  
  
  
  
  







