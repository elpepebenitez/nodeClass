const modules = require('../src/modules.js')

const people = ['Tanya', 'Diana', 'Anesu', 'Tawanda', 'Precel', 'Tadiwanashe']
const ages = [21, 22, 23, 24, 25, 26]

test('uncommonPeople', () => {
    // expect(index.sum(1, 2)).toBe(3);
    expect(modules.uncommonPeople()).toEqual(people);
});

test('uncommonAges', () => {
    // expect(index.sum(1, 2)).toBe(3);
    expect(modules.uncommonAges()).toEqual(ages);
});