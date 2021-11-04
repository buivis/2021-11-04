/*atvaizduoti index.
const names = ['Jonas', 'Tomas', 'Ona', 'Petras'];
names.forEach((name, index) => console.log(`${index} - ${name}`));
*/

// Filter Trys === patikrina ir tipa ir value. Du == patikrina value.
/*
const person = [
    {
        id: 1,
        name: 'Jonas'
    },
    {
        id: 2,
        name: 'Petras'
    },
    {
        id: 3,
        name: 'Paulius'
    }
]
const filteredPersons = person.filter(person => person.id === 3 || person.id === 2)
console.log(filteredPersons)

const names = ['Jonas', 'Tomas', 'Ona', 'Petras'];
const filteredNames = names.filter(function(name){
    
    return name === 'Petras'
})
console.log(filteredNames)

const numbers = [1, 2, 3, 4, 5];
//ECMA 6
const filteredNumbers = numbers.filter((number) => number >= 3);

console.log(filteredNumbers)
*/
//Isfiltruoti tik 55 ir Jonas.
/*
const names = ['Jonas', 'Petras', 'Paulius', { id: 3, name: 'Jonas'}, 55];

const filteredNames =  names.filter(number => number === 55 || number ==='Jonas')
console.log(filteredNames)

*/
/*
//MAP
const persons = [
    {
        id: 1,
        name: 'Jonas'
    },
    {
        id: 2,
        name: 'Petras'
    },
    {
        id: 3,
        name: 'Paulius'
    }
]

//Paprastas
//const mappedPersons = persons.map(function(person) {
 //   return person.name;
//})

//Tik id.
const mappedPersons = persons.map(persons => persons.id)
console.log(mappedPersons)
*/
/*
const persons = [
    {
        id: 1,
        name: 'Jonas'
    },
    {
        id: 2,
        name: 'Petras'
    },
    {
        id: 3,
        name: 'Paulius'
    }
]
const modified = persons.map(person => ({combo: `${person.id} - ${person.name}`}));
console.log(modified)
*/
const numbers = [1, 2, 3, 4, 5]
const modified = numbers.map(number => ({id: number}));
console.log(modified)