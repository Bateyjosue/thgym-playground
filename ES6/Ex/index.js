
const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

const person = {
  name: "Costas",
  address: {
    street: "Lalaland 12"
  }
};

// Exersise 1
console.log('=======Exercise 1========')

companies.forEach((el) => {
    console.log(el.name)
})

// Exercise 2
console.log('\n=======Exercise 2========')

companies.filter(el => el.start >= 1986).forEach(el => console.log(el.name))

// Exercise 3
console.log('\n=======Exercise 3========')

// Exercise 4
console.log('\n=======Exercise 4========')

let sortedEnd = companies.toSorted((a, b) => a.end - b.end)
sortedEnd.forEach(el => console.log(el))

// Exercise 5
console.log('\n=======Exercise 5========')

let sortedAge = ages.toSorted((a, b) => b - a)
sortedAge.forEach(el => console.log(el))

console.log(typeof sortedAge)

// Exercise 6
console.log('\n=======Exercise 6========')

let sumOfAges = ages.reduce((acc, cur) => acc + cur)

console.log(sumOfAges)

// Exercise 7
console.log('\n=======Exercise 7========')

const [a , ...otherCampanies] = companies
function printName(){
    return this.name
}
let company = {...a, printName}
console.log(company)
console.log(company.printName())