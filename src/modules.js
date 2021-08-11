// We can use our own modules
const people = require('../src/people.js'); 
// const { people } = require('./people')

// console.log(people)
// console.log(people.ages)

const uncommonPeople = () => {
    return people.uncommonPeople()
}

const uncommonAges = () => {
    return people.uncommonAges()
}

module.exports = {
    uncommonPeople,
    uncommonAges,
}

// Node comes with a lot of cool things!
// const os = require('os')
// console.log(os)
// console.log(os.platform()) // finds us the platform we are running on
// console.log(os.homedir()) // finds us the home directory 


// const logDirectoryName = () => {
//     return __dirname
// }

// module.exports = {
//     logDirectoryName
// }