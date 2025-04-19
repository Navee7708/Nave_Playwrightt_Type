// typescript basics one 

console.log("hello world")

var userAge = 30;
var userName: string = "John Doe";
var isUserStudent: boolean = true;
// Removed duplicate declaration of 'hobbies' to avoid redeclaration error
var hobbies: string[];
hobbies = ["reading", "gaming", "coding"];

console.log(userAge);
console.log(userName);
console.log(isUserStudent);
console.log(hobbies); // Ensure 'hobbies' is declared elsewhere or remove this line if unnecessary

