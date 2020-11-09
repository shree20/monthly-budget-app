//object destructuring

// const person = {
//     name: 'A',
//     age: '30',
//     location: {
//         city: 'Boston',
//         temp: 100
//     }
// }

// const  {name, age} = person
 
// console.log(`${name} is ${age}`)

// const book = {
//     title: 'All os well',
//     author: 'Ryan',
//     publisher: {
//         name: 'Nutan'
//     }
// }

// const {name:publishername = 'Self-published' } = book.publisher

// console.log(publishername)


//Array destructuring

const item = ['Coffee (hot)', '$2.00', '$2.50' , '$2.75']

const [name ,, cost ] = item

console.log(`${name} costs ${cost}`)

