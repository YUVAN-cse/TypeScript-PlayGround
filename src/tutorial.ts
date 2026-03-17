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


