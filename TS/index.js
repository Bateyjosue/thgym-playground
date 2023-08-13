/*
    ARRAY
*/
var names = ['Josh', 'Cledia', 'Theo', 'Diana'];
var age = [14, 23, 18, 19];
var isProgrammer = [true, false, true, false];
var programmer = ['Junior', 24, true];
// names.push(10) // Throw an error
// age.push('20') // Throw an error
// age.push('yes') // Throw an error
names.push('Victoire'); // append 'Victoire' at the end of names
age.push(20);
isProgrammer.push(true);
var person1 = {
    name: names[0],
    age: age[0],
    isProgrammer: isProgrammer[0]
};
// ERROR property 'isProgrammer' is missing
// let person2 : Progammer = {
//     name: names[0],
//     age: age[0],
// }
/*
    Function
*/
//Regular function
function sum(a, b) {
    return a + b;
}
//Throw an error because the returned value must be a number
// function sum(a: number, b: number): number {
//     return (a + b).toString();
// }
// console.log(sum(1, '2')) // Thow an error
// console.log(sum(1, 2))
// Arrow Functions
var product = function (a, b) { return a * b; };
// console.log(product(1, '2')) // Thow an error
// console.log(product(1, 2))
// Function with optional parameters
var sumOptional = function (a, b, c) {
    console.log(typeof c);
    if (typeof c === 'string' || typeof c == undefined) {
        return "Here C is optional so the sum is ".concat(a + b);
    }
    else {
        return a + b + c;
    }
};
console.log(sumOptional(1, 2, 3));
console.log(sumOptional(1, 2, ''));
