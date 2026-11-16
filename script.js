console.log("PART A - CONDITIONS");
let num = 10;

if (num % 2 === 0) {
    console.log("Even Number");
} else {
    console.log("Odd Number");
}

let a = 20;
let b = 45;
let c = 30;

if (a >= b && a >= c) {
    console.log("Largest: " + a);
} else if (b >= a && b >= c) {
    console.log("Largest: " + b);
} else {
    console.log("Largest: " + c);
}

let marks = 85;

if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 75) {
    console.log("Grade B");
} else if (marks >= 60) {
    console.log("Grade C");
} else if (marks >= 40) {
    console.log("Grade D");
} else {
    console.log("Fail");
}

let year = 2024;

if ((year % 4 === 0 && year % 100 !== 0) ||
    year % 400 === 0) {
    console.log("Leap Year");
} else {
    console.log("Not a Leap Year");
}

console.log("PART B - LOOPS");

let number = 5;

for (let i = 1; i <= 10; i++) {
    console.log(number + " x " + i + " = " + (number * i));
}

let value = 1234;
let sum = 0;

while (value > 0) {
    sum = sum + (value % 10);
    value = Math.floor(value / 10);
}

console.log("Sum of Digits: " + sum);

for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

let str = "madam";
let reversed = "";

for (let i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i];
}

console.log("Reversed: " + reversed);

if (str === reversed) {
    console.log("Palindrome");
} else {
    console.log("Not Palindrome");
}


for (let i = 1; i <= 5; i++) {
    let pattern = "";

    for (let j = 1; j <= i; j++) {
        pattern = pattern + "* ";
    }

    console.log(pattern);
}

console.log("PART C - FUNCTIONS AND ARRAYS");

function findMaxMin(arr) {
    let maximum = Math.max(...arr);
    let minimum = Math.min(...arr);

    console.log("Maximum: " + maximum);
    console.log("Minimum: " + minimum);
}

let numbers = [10, 5, 25, 3, 40];
findMaxMin(numbers);


function countVowels(str) {
    let count = 0;

    for (let char of str.toLowerCase()) {
        if ("aeiou".includes(char)) {
            count++;
        }
    }

    return count;
}

console.log("Vowels: " + countVowels("JavaScript"));

let arr = [1, 2, 2, 3, 4, 4, 5];

let uniqueArray = [...new Set(arr)];

console.log("Unique Array: " + uniqueArray);


let nums = [1,2,3,4,5,6,7,8,9,10];

let squares = nums.map(n => n * n);
console.log("Squares: " + squares);

let evenNumbers = nums.filter(n => n % 2 === 0);
console.log("Even Numbers: " + evenNumbers);

let total = nums.reduce((sum, n) => sum + n, 0);
console.log("Total Sum: " + total);

console.log("PART D - STUDENT OBJECTS");

let students = [
    { name: "Arun", marks: 75 },
    { name: "Priya", marks: 90 },
    { name: "Kumar", marks: 55 },
    { name: "Divya", marks: 85 },
    { name: "Ravi", marks: 65 }
];


let passedStudents = students.filter(student => student.marks > 60);

console.log("Students above 60:");

passedStudents.forEach(student => {
    console.log(student.name + " - " + student.marks);
});


let totalMarks = students.reduce((sum, student) => {
    return sum + student.marks;
}, 0);

let average = totalMarks / students.length;

console.log("Class Average: " + average);

let topper = students.reduce((top, student) => {
    return student.marks > top.marks ? student : top;
});

console.log("Topper: " + topper.name);
console.log("Topper Marks: " + topper.marks);

console.log("PART E - SHOPPING BILL");

let items = [
    { name: "Shirt", price: 500, quantity: 2 },
    { name: "Shoes", price: 800, quantity: 1 },
    { name: "Watch", price: 400, quantity: 1 }
];

let grandTotal = 0;

console.log("========== SHOPPING BILL ==========");

items.forEach(item => {
    let itemTotal = item.price * item.quantity;

    grandTotal = grandTotal + itemTotal;

    console.log(`${item.name}: Rs.${itemTotal}`);
});


let discount = 0;

if (grandTotal > 1000) {
    discount = grandTotal * 0.10;
}

let discountedAmount = grandTotal - discount;


let gst = discountedAmount * 0.18;

let finalAmount = discountedAmount + gst;

console.log("-----------------------------------");
console.log(`Grand Total: Rs.${grandTotal}`);
console.log(`Discount: Rs.${discount}`);
console.log(`After Discount: Rs.${discountedAmount}`);
console.log(`GST (18%): Rs.${gst}`);
console.log("-----------------------------------");
console.log(`Final Amount: Rs.${finalAmount}`);
console.log("========== THANK YOU ==========");

