const people = ['Tanya', 'Diana', 'Anesu', 'Tawanda', 'Precel', 'Tadiwanashe']
const ages = [21, 22, 23, 24, 25, 26]

const uncommonPeople = () => {
    return people
}

const uncommonAges = () => {
    return ages
}

// There are different ways of exporting our modules.
// module.exports = people

// module.exports = {
//     people: people,
//     ages: ages
// }; 

// it the key and value have the same name, we don't need to put both
// module.exports = {
//     people, ages
// }; 

module.exports = {
    uncommonPeople,
    uncommonAges,
}