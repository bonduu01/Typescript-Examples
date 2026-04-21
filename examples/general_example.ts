 function greet(name: string): string {
    return `Hello, ${name}!`;
}
console.log(greet("Peter"));

let fname: string = "Azuka"
let lname: string = "Molokwu"
let age: number = 16
let isStudent: boolean = false

let message: string = "Hello World";


// Arrays and Array<>
let number: number[] = [1,2,3,4]
let string: string[] = ["2pac", "Diddy"]
let names: Array<string> = ["Phillip", "Don Jazzy", "Ejime"]

/** interface example **/
interface Person {
    name: string;
    age: number;
    isStudent: boolean
}
let person : Person = { name: "Sowore", age : 69, isStudent: true}
console.log(person.age)

// function example
function add(a: number, b: number): number {
    return a + b;
}

function multiple(a: number, b: number): number {
    return (a * b)
}

function divide(a: number, b: number): number {
    return a / b;
}

console.log(divide(5, 3))

enum Colors {"Red", "Green", "Purple"}
let color: Colors = Colors.Purple

let id: number | string = 43;
id = "ABC"

const myBirthday: string = '17/04/1984'

console.log(fname)
console.log(lname)
console.log(age)
console.log(isStudent)
console.log(number)
console.log(names)
console.log(string)
console.log(person)
console.log(add(5, 9))
console.log(multiple(5, 9))
console.log(color)
console.log(id)
console.log(myBirthday)
