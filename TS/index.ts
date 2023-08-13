/*
    ARRAY 
*/
let names : string[] = ['Josh', 'Cledia', 'Theo', 'Diana']
let age : number[] = [14, 23, 18, 19]
let isProgrammer : boolean[] = [true, false, true, false]
let programmer : [string, number, boolean] = ['Junior', 24, true]

// names.push(10) // Throw an error
// age.push('20') // Throw an error
// age.push('yes') // Throw an error

names.push('Victoire') // append 'Victoire' at the end of names
age.push(20)
isProgrammer.push(true)

// programmer.push(names) //Throw an error
// programmer[0] = 12 //Throw an error
// programmer[1] = 'John' //Throw an error

/*
    Object
*/

interface Progammer {
    name: string;
    age: number;
    isProgrammer: boolean
}

let person1 : Progammer = {
    name: names[0],
    age: age[0],
    isProgrammer: isProgrammer[0]
}

// ERROR property 'isProgrammer' is missing
// let person2 : Progammer = {
//     name: names[0],
//     age: age[0],
// }

console.log(person1)