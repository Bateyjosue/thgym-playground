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
console.log(person1);
