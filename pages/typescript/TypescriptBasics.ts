// TypescriptBasics.ts

// A simple example demonstrating basic TypeScript features

// Define an interface
interface Person {
    name: string;
    age: number;
    greet(): string;
}

// Create a class implementing the interface
class Student implements Person {
    constructor(public name: string, public age: number, public grade: string) {}

    greet(): string {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }

    getGrade(): string {
        return `I am in grade ${this.grade}.`;
    }
}

// Create an instance of the class
const student = new Student("Alice", 20, "Sophomore");

// Log the outputs
console.log(student.greet());
console.log(student.getGrade());