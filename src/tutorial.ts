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


