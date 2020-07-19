fs = require('fs')

const objJSON = fs.readFileSync('1-json.json').toString()
const obj = JSON.parse(objJSON)
obj['name'] = 'Ashu'
obj['age'] = '29+'

fs.writeFileSync('1-json.json', JSON.stringify(obj))

// const book = {
//     title: 'Sherlock Holmes',
//     author: 'Sir Author Danny Boyle',
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// const bookJSON = dataBuffer.toString()
// const data = JSON.parse(bookJSON)
// console.log(data)
// console.log(bookJSON)

// const bookObject = JSON.parse(bookJSON)
// console.log(bookObject)