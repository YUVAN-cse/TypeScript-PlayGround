let tax: number = 10;
tax = 100;

let userName : string = 'Max';
userName = 'Maximilian';


let isAmount: boolean = tax > 50;

let age: number | null | string = 50;
age = null;
age = "yuvan"


enum Color {
    Red = 1,
    Green = 2,
    Blue = 3
}

let myColor: Color = Color.Green;



function calculateTax(income: number, taxYear: number = 2022): number {
    if (taxYear < 2022) {
        return income * 1.2;
    }
    return income * 1.3;
}

let arr : number[] = [1,2,3,4,5,6,7,8,9,10];
let arr2 : (number | string)[] = [1,2,3,4,5,6,7,8,9,10, 'yuvan'];

let tuple : [number, string, boolean] = [1, "yuvan", true];


const logPerson = (person: {name: string, age: number}) : void => {
    console.log(`${person.name} is ${person.age} years old`);
}


let person : {name: string, age: number} = {
    name: "yuvan",
    age: 22
}

logPerson(person);

//type alias

type Id = number | string;
type Person = {
    name: string,
    age: number
}
let yuvan : Person = {
    name: "yuvan",
    age: 22
}   


const logPerson2 = (person: Person) : void => {
    console.log(`${person.name} is ${person.age} years old`);
}

logPerson2(yuvan);


//optional fields

type Person2 = {
    name: string,
    age?: number
}

const logPerson3 = (person: Person2) : void => {
    console.log(`${person.name} is ${person.age} years old`);
}

const yuvan2 : Person2 = {
    name: "yuvan"
}

logPerson3(yuvan2);


//readonly fields

type Person3 = {
    readonly name: string,
    readonly age?: number
}

const yuvan3 : Person3 = {
    name: "yuvan"
}  

// yuvan3.name = "yuvan2";

type A = {a : number};
type B = {b : number};
type AB = A & B;

const ab : AB = {
    a: 1,
    b: 2
}

interface Person4 {
    name: string,
    age: number
}

interface person4 extends Person4 {
    Fname: string
}


let yuvan4 : person4 = {
    name: "yuvan",
    age: 22,
    Fname: "yuvan"
}


let examlple : Yuvan = {
    name: "yuvan",
    age: 22
}

 